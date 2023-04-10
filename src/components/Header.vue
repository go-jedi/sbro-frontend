<template>
	<header>
		<div class="main-header">
			<div class="main-header__logo">
				<router-link to="/">
					<img class="main-header__logo_img" src="../assets/Home/sbpro-img.webp" alt="sbpro-img" />
				</router-link>
			</div>
			<div class="main-header__navbar">
				<div class="main-header__navbar_link" :class="{ 'main-header__navbar_link_active': activePage === 'Home' }">
					<router-link to="/">Home</router-link>
				</div>
				<div class="main-header__navbar_link" :class="{ 'main-header__navbar_link_active': activePage === 'About' }">
					<router-link to="/about">About the platform</router-link>
				</div>
				<div class="main-header__navbar_link" :class="{ 'main-header__navbar_link_active': activePage === 'Buy' }">
					<router-link to="/buy">Buy</router-link>
				</div>
				<div class="main-header__navbar_link"
					:class="{ 'main-header__navbar_link_active': activePage === 'Download' }">
					<router-link to="/download">Download</router-link>
				</div>
				<div class="main-header__navbar_link" :class="{ 'main-header__navbar_link_active': activePage === 'Contact' }">
					<router-link to="/contact">Contacts</router-link>
				</div>
			</div>
			<div class="main-header__navbar-mob">
				<div id="menuToggle">
					<input type="checkbox" @click="burgerMenuHandler" />
					<span></span>
					<span></span>
					<span></span>
					<ul id="menu" :style="{ 'display': modileMenuStry }">
						<router-link to="/">
							<li class="main-header__navbar-mob__link"
								:class="{ 'main-header__navbar-mob__active': activePage === 'Home' }">
								Home
							</li>
						</router-link>
						<router-link to="/about">
							<li class="main-header__navbar-mob__link"
								:class="{ 'main-header__navbar-mob__active': activePage === 'About' }">About the platform</li>
						</router-link>
						<router-link to="/buy">
							<li class="main-header__navbar-mob__link"
								:class="{ 'main-header__navbar-mob__active': activePage === 'Buy' }">Buy</li>
						</router-link>
						<router-link to="/download">
							<li class="main-header__navbar-mob__link"
								:class="{ 'main-header__navbar-mob__active': activePage === 'Download' }">Download</li>
						</router-link>
						<router-link to="/contact">
							<li class="main-header__navbar-mob__link"
								:class="{ 'main-header__navbar-mob__active': activePage === 'Contact' }">Contacts</li>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
	props: {
		activePage: {
			type: String,
			required: true
		},
	},
	setup() {
		const burgerMenu = ref(false)
		const modileMenuStry = ref("none")

		const burgerMenuHandler = () => {
			if (burgerMenu.value === true) {
				burgerMenu.value = false
				modileMenuStry.value = "none"
			} else {
				burgerMenu.value = true
				modileMenuStry.value = "block"
			}
		}

		return {
			burgerMenu,
			modileMenuStry,
			burgerMenuHandler
		}
	}
})
</script>

<style lang="css" scoped>
.main-header {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px 0;
}

.main-header__logo>img {
	cursor: pointer;
	width: 216px;
	height: 46px;
}

.main-header__logo_img {
	cursor: pointer;
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
	/* transform: translate(100%, 0); */
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

@media (max-width: 1366px) {
	.main-header__logo>img {
		width: 200px;
		height: 39px;
	}

	.main-header__logo_img {
		width: 200px;
		height: 39px;
	}

	.main-header__navbar_link>a {
		font-size: 14px;
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

	.main-header__logo_img {
		width: 160px;
		height: 30px;
	}

	.main-header__navbar_link {
		padding: 0 12px;
	}

	.main-header__navbar_link>a {
		font-size: 12px;
	}
}

@media (max-width: 926px) {
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

@media (max-width: 428px) {
	#menu {
		width: 250px;
	}
}

@media (max-width: 320px) {
	.main-header__logo>img {
		width: 140px;
		height: 25px;
	}

	.main-header__logo_img {
		width: 140px;
		height: 25px;
	}
}
</style>