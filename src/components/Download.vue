<template>
	<div class="main">
		<div class="container">
			<Header activePage="Download" />
			<div class="main-subheader">
				<div class="main-subheader__title">Download SBProX platform</div>
			</div>
			<div class="main-information">
				<div class="main-information-block">
					<div class="main-information-block__img">
						<img src="../assets/Download/sub-header-warning.webp" alt="sub-header-warning" />
					</div>
					<div class="main-information-block__text">
						You can register a demo account for 10 days from the platform after its installation. To do this, in the
						Login window, you must click the "Register demo" button and enter your E-mail in the window that appears.
					</div>
				</div>
				<div class="main-information-block">
					<div class="main-information-block__img">
						<img src="../assets/Download/sub-header-warning.webp" alt="sub-header-warning" />
					</div>
					<div class="main-information-block__text">
						The platform has Beta status and is currently undergoing testing and bug fixes.
					</div>
				</div>
			</div>
			<div class="main-download">
				<div class="main-download__btn">
					<button>Download SBProX</button>
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

.main-header {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px 0;
}

.main-header__logo>img {
	width: 216px;
	height: 46px;
}

.main-header__navbar {
	display: flex;
	align-items: center;
}

.main-header__navbar_link {
	padding: 0 17px;
}

.main-header__navbar_link>a {
	font-size: 17px;
	color: #c7c7c7;
	text-decoration: none;
}

.main-header__navbar_link>a:hover {
	color: #fff;
}

.main-header__navbar_link_active>a {
	color: #17ad2d;
}

.main-header__navbar_link_active>a:hover {
	color: #c7c7c7;
}

.main-header__navbar-mob {
	display: none;
}

#menuToggle {
	display: block;
	position: relative;
	z-index: 1;
	-webkit-user-select: none;
	user-select: none;
	display: block;
	z-index: 1;
}

#menuToggle a {
	text-decoration: none;
	color: #232323;

	transition: color 0.3s ease;
}

#menuToggle a:hover {
	color: #17ad2d;
}

#menuToggle input {
	display: block;
	width: 40px;
	height: 32px;
	position: absolute;
	top: -7px;
	left: -5px;

	cursor: pointer;

	opacity: 0;
	z-index: 2;

	-webkit-touch-callout: none;
}

#menuToggle span {
	display: block;
	width: 33px;
	height: 4px;
	margin-bottom: 5px;
	position: relative;

	background: #fff;
	border-radius: 3px;

	z-index: 1;

	transform-origin: 4px 0px;

	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
		background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
	transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
	transform-origin: 0% 100%;
}

#menuToggle input:checked~span {
	opacity: 1;
	transform: rotate(45deg) translate(-2px, -1px);
	background: #fff;
}

#menuToggle input:checked~span:nth-last-child(3) {
	opacity: 0;
	transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked~span:nth-last-child(2) {
	transform: rotate(-45deg) translate(0, -1px);
}

#menu {
	display: none;
	position: absolute;
	width: 300px;
	padding: 10px 50px;
	padding-top: 10px;
	background: #000;
	list-style-type: none;
	-webkit-font-smoothing: antialiased;
	transform-origin: 0% 0%;
	transform: translate(100%, 0);
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	border: 1px solid #2c2a2a;
	border-radius: 10px;
}

.main-header__navbar-mob__link {
	padding: 10px 0;
	font-size: 15px;
	color: #fff;
}

.main-header__navbar-mob__active {
	color: #17ad2d;
}

.main-header__navbar-mob__active:hover {
	color: #fff;
}

#menu>a:hover {
	text-decoration: underline;
}

#menuToggle input:checked~ul {
	transform: translate(-100%, 0);
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

.main-information-block {
	margin-top: 60px;
	background-color: #121617;
}

.main-information {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.main-information-block {
	display: flex;
	align-items: center;
	padding: 20px 30px;
	border-radius: 10px;
}

.main-information-block:not(:first-child) {
	margin-top: 35px;
}

.main-information-block__text {
	margin-left: 35px;
	max-width: 535px;
	font-size: 16px;
	color: #fff;
}

.main-download {
	display: flex;
	justify-content: center;
	margin: 100px 0;
}

.main-download__btn>button {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	max-width: 374px;
	height: 54px;
	background-color: #17ad2d;
	color: #fff;
	padding: 35px 115px;
	font-size: 14px;
	border-radius: 8px;
	border: none;
	text-transform: uppercase;
}

.main-footer-top {
	display: flex;
	justify-content: center;
	margin-top: 50px;
}

.main-footer-top__bone {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.main-footer-top__bone__imgtwo {
	margin-top: 10px;
}

.main-footer-top__btwo {
	margin-left: 80px;
}

.main-footer-top__btwo__title {
	color: #fff;
}

.main-footer-top__btwo__title {
	font-size: 18px;
	color: #fff;
}

.main-footer-top__btwo__link {
	margin-top: 10px;
}

.main-footer-top__btwo__link>a {
	font-size: 14px;
	color: #fff;
	text-decoration: none;
}

.main-footer-top__btwo__link>a:hover {
	text-decoration: underline;
}

.main-footer-top__bthree {
	margin-left: 80px;
}

.main-footer-top__bthree__title {
	color: #fff;
}

.main-footer-top__bthree__block {
	display: flex;
	align-items: center;
}

.main-footer-top__bthree__block:not(:first-child) {
	margin-top: 10px;
}

.main-footer-top__bthree__block_left {
	width: 32px;
	height: 32px;
}

.main-footer-top__bthree__block_left>svg:hover {
	width: 30px;
	height: 30px;
}

.main-footer-top__bthree__block_right_link {
	margin-left: 5px;
}

.main-footer-top__bthree__block_right_link>a {
	font-size: 14px;
	color: #fff;
	text-decoration: none;
}

.main-footer-top__bthree__block_right_link>a:hover {
	text-decoration: underline;
}

.main-footer-top__bfour__title {
	font-size: 18px;
	color: #fff;
}

.main-footer-top__bfour__block__socnet {
	display: flex;
	align-items: center;
}

.main-footer-bottom {
	display: flex;
	justify-content: center;
	padding: 80px 0 80px 0;
}

.main-footer-bottom__text {
	max-width: 950px;
	font-size: 14px;
	color: #595959;
}

@media (max-width: 1366px) {
	.container {
		max-width: 1300px;
	}

	.main-header__logo>img {
		width: 200px;
		height: 39px;
	}

	.main-header__navbar_link>a {
		font-size: 14px;
	}

	.main-subheader__title {
		font-size: 44px;
	}

	.main-information-block__text {
		font-size: 14px;
	}

	.main-download__btn>button {
		max-width: 317px;
		padding: 35px 95px;
	}

	/*  */

	.main-footer-top__bone__imgone>img {
		max-width: 160px;
		height: 25px;
	}

	.main-footer-top__btwo__title {
		font-size: 14px;
	}

	.main-footer-top__btwo__link>a {
		font-size: 10px;
	}

	.main-footer-top__bthree__title {
		font-size: 14px;
	}

	.main-footer-top__bthree__block_left>svg {
		max-width: 26px;
	}

	.main-footer-top__bthree__block_left>svg {
		max-width: 26px;
	}

	.main-footer-top__bthree__block_right_link>a {
		font-size: 10px;
	}

	.main-footer-bottom__text {
		font-size: 10px;
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

	.main-header__navbar {
		display: none;
	}

	.main-header {
		justify-content: space-between;
	}

	.main-header__navbar-mob {
		display: block;
	}
}

@media (max-width: 834px) {
	.container {
		max-width: 750px;
	}

	.main-header__logo>img {
		width: 160px;
		height: 30px;
	}

	.main-header__navbar_link {
		padding: 0 12px;
	}

	.main-header__navbar_link>a {
		font-size: 12px;
	}

	.main-subheader__title {
		font-size: 34px;
	}

	.main-footer-bottom__text {
		max-width: 650px;
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

	.main-footer-top {
		flex-wrap: wrap;
		flex-direction: column;
		align-items: baseline;
	}

	.main-footer-top__btwo {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-footer-top__bthree {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-footer-bottom__text {
		max-width: 400px;
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

	.main-download {
		margin: 70px 0;
	}

	.main-information-block {
		margin-top: 50px;
	}

	.main-information-block__img>img {
		max-width: 28px;
		height: 28px;
	}

	.main-footer-top {
		flex-wrap: wrap;
		flex-direction: column;
		align-items: baseline;
	}

	.main-footer-top__btwo {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-footer-top__bthree {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-footer-bottom__text {
		max-width: 400px;
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

	.main-header__logo>img {
		width: 140px;
		height: 25px;
	}

	.main-information-block__text {
		font-size: 12px;
	}

	.main-download__btn>button {
		padding: 35px 65px;
	}
}
</style>