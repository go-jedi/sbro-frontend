<template>
	<div class="main">
		<div class="container">
			<Header activePage="Buy" />
			<div class="main-subheader">
				<div class="main-subheader__title">Select a Payment Method</div>
				<div class="main-subheader__content">
					<div class="main-subheader__content_btnvm">
						<button @click="router.push('/buyCard')">Visa/Mastercard</button>
					</div>
					<div class="main-subheader__content_btnbp">
						<button @click="router.push('/buyCrypto')">BTC/USDT</button>
					</div>
				</div>
			</div>
			<div class="main-readinfo">
				<div class="main-readinfo__title">Read account purchase information</div>
				<div class="main-readinfo__arrow">
					<svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160"
						xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true">
						<g>
							<path style="fill: #17ad2d"
								d="M100 20c-44.184 0-80 35.817-80 80.001C20 144.183 55.817 180 100 180s80-35.817 80-79.999S144.183 20 100 20zm30.819 87.148l-31.791 31.79a10.075 10.075 0 0 1-7.148 2.961c-2.587 0-5.174-.987-7.148-2.961-3.948-3.948-3.948-10.348 0-14.296L109.373 100 84.732 75.359c-3.948-3.948-3.948-10.348 0-14.297 3.948-3.948 10.348-3.948 14.296 0l31.791 31.79c3.948 3.948 3.948 10.348 0 14.296z">
							</path>
						</g>
					</svg>
				</div>
			</div>
			<div class="main-subreadinfo-img">
				<div class="main-subreadinfo-img__img">
					<img src="../assets/Buy/subread-info-img.webp" alt="subread-info-img" />
				</div>
			</div>
			<div class="main-buyaccount">
				<div class="main-buyaccount__title">Buying an account</div>
				<div class="main-buyaccount__content">
					<div class="main-buyaccount__content_block" v-for="point in points" :key="point.id">
						<button class="main-buyaccount__content_btn" @click="point.showQuestion = !point.showQuestion">
							<div class="main-buyaccount__content_btn_text">{{ point.question }}</div>
							<div class="main-buyaccount__content_btn_icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									:style="{ 'transform': point.showQuestion === true ? 'rotate(180deg)' : 'none' }">
									<path style="fill: #fff"
										d="M8.14644661,14.858836 C7.95118446,14.6635739 7.95118446,14.3469914 8.14644661,14.1517292 L12.4989857,9.79289322 L16.8573469,14.1517292 C17.052609,14.3469914 17.052609,14.6635739 16.8573469,14.858836 C16.6620847,15.0540981 16.3455022,15.0540981 16.1502401,14.858836 L12.4989857,11.2071068 L8.85355339,14.858836 C8.65829124,15.0540981 8.34170876,15.0540981 8.14644661,14.858836 Z">
									</path>
								</svg>
							</div>
						</button>
						<div v-if="point.showQuestion" class="main-buyaccount__content_info">
							{{ point.text }}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import { useRouter } from "vue-router"

import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
	setup() {
		const router = useRouter()
		const points = ref([
			{
				id: 1,
				question: "Is there a free trial period?",
				text: `Yes, you can register a 10 day SBProX demo account directly from the platform.
							Download the platform, run SBProX, click the "Demo access" button, enter your email
							and click "Register". After some time, a letter with access data from a 10-day demo
							account will be sent to the specified email. Demo registration is possible only
							once. It is not possible to re-register a demo.`,
				showQuestion: false,
			},
			{
				id: 2,
				question: "How to pay for an SBProX account?",
				text: `Choose the appropriate tariff on the "Tariffs" page, click "Buy", in the payment
							form, be sure to indicate the email address to which the SBProX account will be
							registered. Immediately after successful payment, an email with a login and
							password, as well as links to instructions for connecting and setting up the
							platform, will automatically be sent to the specified email.`,
				showQuestion: false,
			},
			{
				id: 3,
				question: "I paid for the account, the letter did not come, what should I do?",
				text: `First check the Spam folder in your mailbox, sometimes emails end up there for some
							reason. If you have paid for the platform license and have not received an email
							with access data, please contact us in any of the ways. Do not forget to indicate
							the time of payment, the email specified during the purchase, and the details from
							which the payment was made (card number and bank statement on a successful
							transaction).`,
				showQuestion: false,
			},
			{
				id: 4,
				question: "I didn't like the platform, can I get my money back?",
				text: `Unfortunately, according to paragraph 1 of the "User Agreement", the money for
							paying for the account is not returned. You can register a 10 day demo account and
							test the platform beforehand. Also, it is necessary that your computer meets the
							"System Requirements" for the correct operation of the platform.`,
				showQuestion: false,
			},
			{
				id: 5,
				question: "Can I change my email after buying an account?",
				text: `No, you cannot change your email. We do not change email after buying an account.
							The email account is invariably linked to your SBPro account. If you do not agree to
							these terms, do not purchase the platform.`,
				showQuestion: false,
			},
			{
				id: 6,
				question: "When paying with Google Pay or Apple Pay, where does the account data go?",
				text: `If you pay using Google Pay or Apple Pay, account information will be sent to the
							email that is linked to your Google Pay or Apple Pay account.`,
				showQuestion: false,
			},
			{
				id: 7,
				question: "Can I transfer my account to another person?",
				text: `You cannot transfer an account to another user.`,
				showQuestion: false,
			},
			{
				id: 8,
				question: "I have MAC OS, can I use SBProX?",
				text: `Yes, you can use the platform on mac os through virtual machines with os windows
							installed on them (starting from windows 10). For more information, please visit the
							"System Requirements" page.`,
				showQuestion: false,
			},
			{
				id: 9,
				question: "Are there any discounts for buying an SBProX account?",
				text: `Information about emerging discounts for purchasing a license of the SBProX platform
							can be found on our official website.`,
				showQuestion: false,
			}
		])
		return {
			router,
			points
		}
	},
	components: {
		Header,
		Footer,
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

.main-subheader__content {
	display: flex;
	flex-wrap: wrap;
	margin-top: 50px;
}

.main-subheader__content_btnvm>button {
	cursor: pointer;
	padding: 10px 51px;
	max-width: 310px;
	height: 54px;
	font-size: 20px;
	color: #fff;
	background-color: rgba(28, 28, 28, 0);
	border: 2px solid #8fcf1c;
	border-radius: 10px;
}

.main-subheader__content_btnvm>button:hover {
	background-color: #8fcf1c;
	border: 2px solid #8fcf1c;
}

.main-subheader__content_btnbp {
	margin-left: 20px;
}

.main-subheader__content_btnbp>button {
	cursor: pointer;
	padding: 10px 51px;
	max-width: 310px;
	height: 54px;
	font-size: 20px;
	color: #fff;
	background-color: rgba(28, 28, 28, 0);
	border: 2px solid #fbd418;
	border-radius: 10px;
}

.main-subheader__content_btnbp>button:hover {
	background-color: #fbd418;
	border: 2px solid #fbd418;
}

.main-readinfo {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 180px;
}

.main-readinfo__title {
	font-size: 38px;
	color: #fff;
}

.main-readinfo__arrow {
	padding-top: 50px;
}

.main-readinfo__arrow>svg {
	max-width: 120px;
	height: 120px;
	transform: rotate(90deg);
}

.main-subreadinfo-img {
	margin-top: 50px;
}

.main-subreadinfo-img__img {
	display: flex;
	justify-content: center;
}

.main-buyaccount {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
}

.main-buyaccount__title {
	font-size: 42px;
	color: #fff;
}

.main-buyaccount__content {
	margin-top: 20px;
}

.main-buyaccount__content_block:not(:first-child) {
	margin-top: 10px;
}

.main-buyaccount__content_btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 900px;
	padding: 20px 10px;
	cursor: pointer;
	background-color: rgba(28, 28, 28, 0);
	border: none;
}

.main-buyaccount__content_btn_text {
	font-size: 18px;
	color: #fff;
}

.main-buyaccount__content_info {
	padding: 0 10px;
	max-width: 900px;
	font-size: 15px;
	color: #c7c7c7;
}

@media (max-width: 1366px) {
	.container {
		max-width: 1300px;
	}

	.main-subheader__title {
		font-size: 44px;
	}

	.main-subreadinfo-img__img>img {
		max-width: 800px;
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

	.main-buyaccount__content_btn {
		width: 100%;
	}

	.main-buyaccount__content_info {
		max-width: 100%;
	}

	.main-readinfo {
		margin-top: 150px;
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

	.main-subheader__content_btnvm>button {
		font-size: 17px;
	}

	.main-subheader__content_btnbp>button {
		font-size: 17px;
	}

	.main-readinfo {
		margin-top: 130px;
	}

	.main-readinfo__title {
		font-size: 28px;
	}

	.main-readinfo__arrow>svg {
		max-width: 100px;
		height: 100px;
	}

	.main-subreadinfo-img__img>img {
		max-width: 700px;
	}

	.main-buyaccount__title {
		font-size: 32px;
	}

	.main-buyaccount__content_btn_text {
		font-size: 15px;
	}

	.main-buyaccount__content_info {
		font-size: 13px;
	}
}

@media (max-width: 810px) {
	.container {
		max-width: 770px;
	}

	.main-readinfo {
		margin-top: 100px;
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

	.main-subreadinfo-img__img>img {
		max-width: 100%;
	}

	.main-buyaccount__content_btn {
		text-align: left;
	}
}

@media (max-width: 568px) {
	.container {
		max-width: 520px;
	}
}

@media (max-width: 480px) {
	.container {
		max-width: 440px;
	}

	.main-subheader-content__block__text {
		margin-top: 20px;
	}

	.main-subheader-content__block {
		height: 170px;
	}

	.main-subheader__content {
		justify-content: center;
	}

	.main-subheader__content_btnbp {
		margin: 30px 0 0 0;
	}

	.main-readinfo__title {
		font-size: 18px;
	}

	.main-readinfo__arrow>svg {
		max-width: 80px;
		height: 80px;
	}

	.main-subreadinfo-img__img>img {
		max-width: 300px;
	}

	.main-buyaccount__title {
		font-size: 22px;
	}

	.main-buyaccount__content_btn {
		width: 100%;
		padding: 20px 0;
		text-align: left;
	}

	.main-buyaccount__content_btn_text {
		font-size: 12px;
	}

	.main-buyaccount__content_info {
		padding: 0;
		font-size: 11px;
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

	.main-subheader__content {
		justify-content: center;
	}

	.main-subheader__content_btnbp {
		margin: 30px 0 0 0;
	}

	.main-readinfo__title {
		font-size: 18px;
	}

	.main-readinfo__arrow>svg {
		max-width: 80px;
		height: 80px;
	}

	.main-subreadinfo-img__img>img {
		max-width: 300px;
	}

	.main-buyaccount__title {
		font-size: 22px;
	}

	.main-buyaccount__content_btn {
		width: 100%;
		padding: 20px 0;
		text-align: left;
	}

	.main-buyaccount__content_btn_text {
		font-size: 12px;
	}

	.main-buyaccount__content_info {
		padding: 0;
		font-size: 11px;
	}
}

@media (max-width: 390px) {
	.container {
		max-width: 350px;
	}

	.main-subheader__content_btnvm>button {
		font-size: 15px;
	}

	.main-subheader__content_btnbp>button {
		font-size: 15px;
	}

	.main-buyaccount__content_btn {
		width: 100%;
	}

	.main-buyaccount__content_info {
		max-width: 100%;
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

	.main-subheader__title {
		font-size: 17px;
	}

	.main-subheader__content_btnvm>button {
		padding: 10px 31px;
		font-size: 14px;
	}

	.main-subheader__content_btnbp>button {
		font-size: 14px;
	}

	.main-readinfo__title {
		font-size: 15px;
	}

	.main-readinfo__arrow>svg {
		max-width: 70px;
		height: 70px;
	}

	.main-buyaccount__title {
		font-size: 15px;
	}

	.main-buyaccount__content_btn_text {
		font-size: 11px;
	}

	.main-buyaccount__content_info {
		font-size: 10px;
	}
}
</style>