<template>
	<div class="main">
		<div class="container">
			<Header activePage="Contact" />
			<div class="main-subheader">
				<div class="main-subheader__content">
					<div class="main-subheader__content_title">Contact us</div>
					<form @submit.prevent="submitForm" class="main-subheader__content_form">
						<div class="main-subheader__content_form_input">
							<input type="text" placeholder="E-mail" v-model="email" @blur="handleBlur('email')"
								:style="{ 'border': isError.email === true ? '1px solid red' : '' }" />
						</div>
						<div class="main-subheader__content_form_textarea">
							<textarea placeholder="Add a message..." v-model="message" @blur="handleBlur('message')"
								:style="{ 'border': isError.message === true ? '1px solid red' : '' }"></textarea>
						</div>
						<div class="main-subheader__content_form_btn">
							<button type="submit" :disabled="isButtonDisabled" @click.prevent="submitForm">Send</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	</div>
</template>

<script lang="js">
import { ref, reactive, defineComponent, toRefs } from 'vue'
import { ElNotification } from 'element-plus'

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
	setup() {
		const isButtonDisabled = ref(false)
		const state = reactive({
			email: "",
			message: ""
		})

		const isError = reactive({
			email: false,
			message: false
		})

		const rules = {
			email: {
				required,
				email
			},
			message: {
				required
			}
		}

		const v$ = useVuelidate(rules, state)

		const handleBlur = (key) => {
			v$.value[key].$dirty = true;
			if (state.email.toString().length >= 5) {
				if (state.email.includes("@")) {
					isError.email = false
				} else {
					isError.email = true
				}
			}
			if (state.message.toString().length > 0) {
				isError.message = false
			} else {
				isError.message = true
			}
		}

		const submitForm = () => {
			isButtonDisabled.value = true
			if (v$.value.$invalid) {
				if (state.email.toString().length < 5) {
					isError.email = true
				}
				if (state.message.toString().length < 1) {
					isError.message = true
				}
				isButtonDisabled.value = false
			} else {
				const formData = {
					email: state.email.toString(),
					message: state.message.toString()
				}
				fetch("http://localhost:8080/api-v1/user/sendMessage", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData)
				})
					.then(res => res.json())
					.then((data) => {
						if (data.status === 200) {
							ElNotification({
								title: 'Success',
								message: 'Successful message sending',
								type: 'success',
							})
							state.email = ""
							state.message = ""
							isButtonDisabled.value = false
						}
					})
			}
		}
		return {
			handleBlur,
			submitForm,
			isError,
			...toRefs(state),
			isButtonDisabled
		}
	},
	components: {
		Header,
		Footer
	}
})
</script>

<style lang="css" scoped>
.main {
	width: 100%;
	height: 100vh;
}

.container {
	max-width: 1903px;
	margin: 0 auto;
}

.main-subheader {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 40px 0;
}

.main-subheader__content {
	padding: 20px 55px;
	width: 665px;
}

.main-subheader__content_title {
	font-size: 30px;
	color: #fff;
	text-align: left;
}

.main-subheader__content_form {
	margin-top: 50px;
}

.main-subheader__content_form_input>input {
	outline: none;
	padding: 3px 3px 3px 24px;
	width: 100%;
	height: 66px;
	background-color: #000;
	border: none;
	font-size: 15px;
	border: 2px solid #585858;
	color: #585858;
	font-weight: 600;
	border-radius: 5px;
}

.main-subheader__content_form_input>input:hover {
	background-color: #fff;
}

.main-subheader__content_form_textarea {
	margin-top: 30px;
}

.main-subheader__content_form_textarea>textarea {
	outline: none;
	resize: none;
	padding: 12px 10px 3px 24px;
	width: 100%;
	height: 201px;
	background-color: #000;
	border: none;
	font-size: 15px;
	border: 2px solid #585858;
	font-weight: 600;
	color: #585858;
	border-radius: 5px;
}

.main-subheader__content_form_textarea>textarea:hover {
	background-color: #fff;
}

.main-subheader__content_form_btn {
	display: flex;
	justify-content: end;
	margin-top: 10px;
}

.main-subheader__content_form_btn>button {
	cursor: pointer;
	padding: 5px 52px;
	max-width: 186px;
	height: 52px;
	color: #fff;
	background-color: #595959;
	border: none;
	border-radius: 5px;
}

.main-subheader__content_form_btn>button:hover {
	background-color: #17ad2d;
}

@media (max-width: 1366px) {
	.container {
		max-width: 1300px;
	}

	.main-subheader__title {
		font-size: 44px;
	}
}

@media (max-width: 1080px) {
	.container {
		max-width: 1000px;
	}
}

@media (max-width: 1024px) {
	.container {
		max-width: 900px;
	}

	.main-subheader__content {
		padding: 20px 35px;
		width: 565px;
	}

	.main-subheader__content_form_input>input {
		font-size: 14px;
	}

	.main-subheader__content_form_textarea>textarea {
		font-size: 14px;
	}
}

@media (max-width: 926px) {
	.container {
		max-width: 800px;
	}
}

@media (max-width: 834px) {
	.container {
		max-width: 750px;
	}

	.main-subheader__title {
		font-size: 34px;
	}

	.main-subheader-content {
		flex-wrap: wrap;
		justify-content: center;
	}

	.main-subheader-content__block:not(:first-child) {
		margin-left: 0;
	}

	.main-subheader__content_title {
		font-size: 26px;
	}
}

@media (max-width: 810px) {
	.container {
		max-width: 770px;
	}
}

@media (max-width: 780px) {
	.container {
		max-width: 700px;
	}
}

@media (max-width: 667px) {
	.container {
		max-width: 600px;
	}
}

@media (max-width: 568px) {
	.container {
		max-width: 520px;
	}

	.main-subheader__title {
		font-size: 20px;
	}

	.main-subheader-content__block__text {
		margin-top: 20px;
	}

	.main-subheader-content__block {
		height: 170px;
	}

	.main-subheader__content_title {
		font-size: 18px;
	}

	.main-subheader__content {
		padding: 20px 35px;
		width: 100%;
	}

	.main-subheader__content_form {
		margin-top: 30px;
	}

	.main-subheader__content_form_input>input {
		width: 100%;
		height: 50px;
		font-size: 13px;
	}

	.main-subheader__content_form_textarea>textarea {
		width: 100%;
		height: 160px;
		font-size: 13px;
	}

	.main-subheader__content_form_btn>button {
		font-size: 14px;
	}
}

@media (max-width: 480px) {
	.container {
		max-width: 440px;
	}
}

@media (max-width: 428px) {
	.container {
		max-width: 400px;
	}

	.main-subheader__title {
		font-size: 20px;
	}

	.main-subheader-content__block__text {
		margin-top: 20px;
	}

	.main-subheader-content__block {
		height: 170px;
	}

	.main-subheader__content_title {
		font-size: 18px;
	}

	.main-subheader__content {
		padding: 20px 35px;
		width: 100%;
	}

	.main-subheader__content_form {
		margin-top: 30px;
	}

	.main-subheader__content_form_input>input {
		width: 100%;
		height: 50px;
		font-size: 13px;
	}

	.main-subheader__content_form_textarea>textarea {
		width: 100%;
		height: 160px;
		font-size: 13px;
	}

	.main-subheader__content_form_btn>button {
		font-size: 14px;
	}
}

@media (max-width: 390px) {
	.container {
		max-width: 350px;
	}
}

@media (max-width: 360px) {
	.container {
		max-width: 340px;
	}
}

@media (max-width: 320px) {
	.container {
		max-width: 300px;
	}

	.main-subheader {
		margin: 20px 0;
	}

	.main-subheader__content_form_input>input {
		height: 45px;
		font-size: 12px;
		border: 1px solid #585858;
	}

	.main-subheader__content_form_textarea>textarea {
		height: 130px;
		font-size: 12px;
		border: 1px solid #585858;
	}
}
</style>