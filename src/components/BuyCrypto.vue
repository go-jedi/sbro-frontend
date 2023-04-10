<template>
	<div class="main">
		<div class="container">
			<Header activePage="" />
			<div class="main-subheader">
				<div class="main-subheader__title">Выберите свой тариф</div>
				<div class="main-subheader-content">
					<div class="main-subheader-content__block">
						<div class="main-subheaer-content__block_top">
							<div class="main-subheader-content__block_title">10 days</div>
							<div class="main-subheader-content__block_priceone">For free</div>
							<div class="main-subheader-content__block_functional">Full functionality</div>
						</div>
						<div class="main-subheaer-content__block_bottom">
							<div class="main-subheader-content_block_btnone">
								<button @click="router.push('/download')">Download</button>
							</div>
						</div>
					</div>
					<div class="main-subheader-content__block">
						<div class="main-subheaer-content__block_top">
							<div class="main-subheader-content__block_title">1 year</div>
							<div class="main-subheader-content__block_pricetwo">$100</div>
							<div class="main-subheader-content__block_functional">Full functionality</div>
						</div>
						<div class="main-subheaer-content__block_bottom">
							<div class="main-subheader-content_block_btntwo">
								<button @click="chooseTariffHandler(1)">Download</button>
							</div>
						</div>
					</div>
					<div class="main-subheader-content__block">
						<div class="main-subheaer-content__block_top">
							<div class="main-subheader-content__block_title">2 years</div>
							<div class="main-subheader-content__block_pricethree">$180</div>
							<div class="main-subheader-content__block_functional">Full functionality</div>
						</div>
						<div class="main-subheaer-content__block_bottom">
							<div class="main-subheader-content_block_btnthree">
								<button @click="chooseTariffHandler(2)">Download</button>
							</div>
						</div>
					</div>
					<div class="main-subheader-content__block">
						<div class="main-subheaer-content__block_top">
							<div class="main-subheader-content__block_title">3 years</div>
							<div class="main-subheader-content__block_pricefour">$240</div>
							<div class="main-subheader-content__block_functional">Full functionality</div>
						</div>
						<div class="main-subheaer-content__block_bottom">
							<div class="main-subheader-content_block_btnfour">
								<button @click="chooseTariffHandler(3)">Download</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main-choose-payment" :style="{ 'opacity': isChooseTariff === true ? 1 : 0 }">
				<div class="main-choose-block">
					<div class="main-choose-block__title">
						<div class="main-choose-block__title_tit">Product selected:</div>
						<div class="main-choose-block__title_text">SBL:SBPROX-{{ tariffYear }}-OFFICIAL ${{ tariffPrice }}</div>
					</div>
					<div class="main-choose-block__text">
						The login and password from the platform will be sent to the email you specified after payment
						(automatically).
					</div>
					<div class="main-choose-block__textwarning">Specify your email without errors!</div>
					<div class="main-choose-block__form">
						<div class="main-choose-block__form_email">
							<input type="text" placeholder="Email" v-model="emailAddress" />
						</div>
						<div class="main-choose-block__form_select">
							<div class="main-choose-block__form_select_title">
								Select a cryptocurrency from the list as payment:
							</div>
							<select v-model="selectCrypto">
								<option value="BTC" selected>BTC</option>
								<option value="USDT">USDT</option>
							</select>
						</div>
						<div class="main-choose-block__form_address" v-if="isShowAddress">
							<div class="main-choose-block__form_address_title">Adress {{ selectedCryptoTitle }}:</div>
							<div class="main-choose-block__form_address_text">{{ selectedCryptoAddress }}</div>
						</div>
						<div class="main-choose-block__form_btn">
							<button @click="showPaylmentAddress">Get a payment address</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</div>
</template>

<script lang="js">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from "vue-router"

import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
	setup() {
		const router = useRouter()

		const isChooseTariff = ref(false)
		const isShowAddress = ref(false)
		const tariffYear = ref("")
		const tariffPrice = ref(0)

		const emailAddress = ref("")
		const selectCrypto = ref("BTC")

		const selectedCryptoTitle = ref("")
		const selectedCryptoAddress = ref("")

		const paymentAdress = reactive({
			BTC: "1111111111111111111111111111",
			USDT: "2222222222222222222222222222"
		})

		const chooseTariffHandler = (needTariff) => {
			if (needTariff === 1) {
				tariffYear.value = "1YR"
				tariffPrice.value = 100
			}
			if (needTariff === 2) {
				tariffYear.value = "2YR"
				tariffPrice.value = 180
			}
			if (needTariff === 3) {
				tariffYear.value = "3YR"
				tariffPrice.value = 240
			}
			isChooseTariff.value = true
		}

		const showPaylmentAddress = () => {
			if (emailAddress.value.toString().length > 0) {
				if (emailAddress.value.toString().includes("@")) {
					console.log("selectCrypto.value -->", selectCrypto.value)
					selectedCryptoTitle.value = selectCrypto.value === "BTC" ? "BTC" : "USDT"
					selectedCryptoAddress.value = paymentAdress[selectCrypto.value]
					isShowAddress.value = true
				}
			}
		}
		return {
			router,

			isChooseTariff,
			isShowAddress,
			tariffYear,
			tariffPrice,
			emailAddress,
			selectCrypto,
			selectedCryptoTitle,
			selectedCryptoAddress,

			chooseTariffHandler,
			showPaylmentAddress
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
	margin-top: 40px;
}

.main-subheader__title {
	font-size: 42px;
	color: #fff;
}

.main-subheader-content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 982px;
	margin-top: 50px;
}

.main-subheaer-content__block_top {
	padding: 15px 0;
	width: 234px;
	height: 342px;
	background-image: url("../assets/BuyCrypto/background-card-img.webp");
}

.main-subheader-content__block_title {
	font-size: 42px;
	color: #fff;
	text-align: center;
}

.main-subheader-content__block_priceone {
	display: flex;
	align-items: center;
	margin-top: 15px;
	padding-left: 10px;
	width: 180px;
	height: 80px;
	font-size: 28px;
	font-weight: 500;
	color: #000;
	background-image: url("../assets/BuyCrypto/background-price-imgone.webp");
}

.main-subheader-content__block_pricetwo {
	display: flex;
	align-items: center;
	margin-top: 15px;
	padding-left: 10px;
	width: 180px;
	height: 80px;
	font-size: 38px;
	font-weight: 500;
	color: #000;
	background-image: url("../assets/BuyCrypto/background-price-imgtwo.webp");
}

.main-subheader-content__block_pricethree {
	display: flex;
	align-items: center;
	margin-top: 15px;
	padding-left: 10px;
	width: 180px;
	height: 80px;
	font-size: 38px;
	font-weight: 500;
	color: #000;
	background-image: url("../assets/BuyCrypto/background-price-imgthree.webp");
}

.main-subheader-content__block_pricefour {
	display: flex;
	align-items: center;
	margin-top: 15px;
	padding-left: 10px;
	width: 180px;
	height: 80px;
	font-size: 38px;
	font-weight: 500;
	color: #000;
	background-image: url("../assets/BuyCrypto/background-price-imgfour.webp");
}

.main-subheader-content__block_functional {
	margin-top: 50px;
	font-weight: 600;
	text-align: center;
	font-size: 14px;
	color: #fff;
}

.main-subheader-content_block_btnone {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}

.main-subheader-content_block_btnone>button {
	cursor: pointer;
	/* max-width: 183px; */
	outline: none;
	padding: 10px 51px;
	border-radius: 8px;
	font-size: 20px;
	color: #fff;
	background-color: rgba(28, 28, 28, 0);
	border: 3px solid #13b9b2;
}

.main-subheader-content_block_btnone>button:hover {
	background-color: #13b9b2;
}

.main-subheader-content_block_btntwo {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}

.main-subheader-content_block_btntwo>button {
	cursor: pointer;
	/* max-width: 183px; */
	outline: none;
	padding: 10px 51px;
	border-radius: 8px;
	font-size: 20px;
	color: #fff;
	background-color: rgba(28, 28, 28, 0);
	border: 3px solid #81b913;
}

.main-subheader-content_block_btntwo>button:hover {
	background-color: #81b913;
}

.main-subheader-content_block_btnthree {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}

.main-subheader-content_block_btnthree>button {
	cursor: pointer;
	/* max-width: 183px; */
	outline: none;
	padding: 10px 51px;
	border-radius: 8px;
	font-size: 20px;
	color: #fff;
	background-color: rgba(28, 28, 28, 0);
	border: 3px solid #269113;
}

.main-subheader-content_block_btnthree>button:hover {
	background-color: #269113;
}

.main-subheader-content_block_btnfour {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}

.main-subheader-content_block_btnfour>button {
	cursor: pointer;
	/* max-width: 183px; */
	outline: none;
	padding: 10px 51px;
	border-radius: 8px;
	font-size: 20px;
	color: #fff;
	background-color: rgba(28, 28, 28, 0);
	border: 3px solid #6e24d1;
}

.main-subheader-content_block_btnfour>button:hover {
	background-color: #6e24d1;
}

.main-choose-payment {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
}

.main-choose-block {
	padding: 15px 65px;
	width: 568px;
	height: 532px;
	background-color: #121617;
	border-radius: 5px;
}

.main-choose-block__title {
	display: flex;
	align-items: center;
	font-size: 14px;
}

.main-choose-block__text {
	margin-top: 45px;
	font-size: 14px;
	color: #fff;
}

.main-choose-block__form {
	margin-top: 10px;
}

.main-choose-block__form_email>input {
	outline: none;
	padding: 12px 10px;
	width: 100%;
	border: 1px solid #6c6c6c;
	color: #fff;
	font-size: 15px;
	border-radius: 5px;
	background-color: #121617;
}

.main-choose-block__form_email>input:focus {
	border: 1px solid #fff;
}

.main-choose-block__textwarning {
	font-size: 14px;
	color: #fbd418;
}

.main-choose-block__title_tit {
	font-size: 14px;
	font-weight: 600;
	color: #fff;
}

.main-choose-block__title_text {
	margin-left: 10px;
	font-size: 14px;
	color: #fff;
}

.main-choose-block__form_select {
	margin-top: 15px;
}

.main-choose-block__form_select_title {
	font-size: 14px;
	color: #fff;
}

.main-choose-block__form_select>select {
	margin-top: 5px;
	cursor: pointer;
	outline: none;
	width: 100%;
	padding: 12px 10px;
	background-color: #121617;
	color: #7a7979;
	border-radius: 5px;
	border: 1px solid #6c6c6c;
}

.main-choose-block__form_select>select:focus {
	color: #ffcb05;
	border: 1px solid #ffcb05;
}

.main-choose-block__form_btn {
	margin-top: 30px;
}

.main-choose-block__form_address {
	display: flex;
	align-items: center;
	margin-top: 30px;
}

.main-choose-block__form_address_title {
	font-size: 15px;
	/* font-weight: 600; */
	color: #fff;
}

.main-choose-block__form_address_text {
	margin-left: 5px;
	color: #fff;
	font-weight: 600;
}

.main-choose-block__form_btn>button {
	cursor: pointer;
	outline: none;
	width: 100%;
	padding: 14px 0;
	font-size: 18px;
	border: 2px solid #269113;
	color: #fff;
	border-radius: 5px;
	background-color: rgba(28, 28, 28, 0);
}

.main-choose-block__form_btn>button:hover {
	background-color: #289b14;
}

@media (max-width: 1366px) {
	.container {
		max-width: 1300px;
	}

	.main-subheader__title {
		font-size: 44px;
	}

	.main-subheader-content {
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
		grid-gap: 30px;
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

	.main-subheader-content__block_title {
		font-size: 32px;
	}

	.main-subheader-content__block_pricetwo {
		font-size: 32px;
	}

	.main-subheader-content__block_pricethree {
		font-size: 32px;
	}

	.main-subheader-content__block_pricefour {
		font-size: 32px;
	}
}

@media (max-width: 810px) {
	.container {
		max-width: 770px;
	}

	.main-subheader-content__block_title {
		font-size: 30px;
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

	.main-choose-block {
		width: 100%;
	}
}

@media (max-width: 480px) {
	.container {
		max-width: 440px;
	}

	.main-choose-block {
		padding: 15px 25px;
		width: 100%;
		height: 450px;
		background-color: #121617;
		border-radius: 5px;
	}

	.main-choose-block__title_tit {
		font-size: 12px;
	}

	.main-choose-block__title_text {
		font-size: 12px;
	}

	.main-choose-block__text {
		margin-top: 35px;
		font-size: 12px;
	}

	.main-choose-block__textwarning {
		font-size: 12px;
	}

	.main-choose-block__form_email>input {
		font-size: 13px;
	}

	.main-choose-block__form_select_title {
		font-size: 12px;
	}

	.main-choose-block__form_select>select {
		font-size: 13px;
	}

	.main-choose-block__form_btn>button {
		padding: 12px 0;
		font-size: 16px;
	}
}

@media (max-width: 428px) {
	.container {
		max-width: 400px;
	}

	.main-subheader__title {
		font-size: 20px;
	}
}

@media (max-width: 390px) {
	.container {
		max-width: 350px;
	}

	.main-subheader-content__block_title {
		font-size: 28px;
	}

	.main-choose-block__title {
		flex-wrap: wrap;
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
}
</style>