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
								<button @click="router.push('/download')">
									Download
								</button>
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
								<button @click="router.push('/wayForPay?tariffName=SBPROX-1YR-OFFICIAL&tariffPrice=100')">
									Download
								</button>
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
								<button @click="router.push('/wayForPay?tariffName=SBPROX-2YR-OFFICIAL&tariffPrice=180')">
									Download
								</button>
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
								<button @click="router.push('/wayForPay?tariffName=SBPROX-3YR-OFFICIAL&tariffPrice=240')">
									Download
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main-subheader-img">
				<div class="container">
					<div class="main-subheader-img__img">
						<img src="../assets/BuyCard/subheader-img.webp" alt="subheader-img" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</div>
</template>
 
<script lang="js">
import { defineComponent } from 'vue'
import { useRouter } from "vue-router"

import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
	setup() {
		const router = useRouter()
		return {
			router
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
	background-image: url("../assets/BuyCard/background-card-img.webp");
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
	background-image: url("../assets/BuyCard/background-price-imgone.webp");
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
	background-image: url("../assets/BuyCard/background-price-imgtwo.webp");
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
	background-image: url("../assets/BuyCard/background-price-imgthree.webp");
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
	background-image: url("../assets/BuyCard/background-price-imgfour.webp");
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

.main-subheader-img {
	margin-top: 70px;
}

.main-subheader-img__img {
	display: flex;
	justify-content: center;
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

	.main-subheader-img__img>img {
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

	.main-subheader-img__img>img {
		max-width: 750px;
	}
}

@media (max-width: 810px) {
	.container {
		max-width: 770px;
	}

	.main-subheader-content__block_title {
		font-size: 30px;
	}

	.main-subheader-img__img>img {
		max-width: 100%;
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
}

@media (max-width: 390px) {
	.container {
		max-width: 350px;
	}

	.main-subheader-content__block_title {
		font-size: 28px;
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