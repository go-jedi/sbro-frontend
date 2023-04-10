<template>
	<div class="main">
		<div class="container">
			<div class="main-header">
				<div class="main-header__img">
					<img src="../assets/WayForPayWarning/logo-img.png" alt="logo-img" />
				</div>
			</div>
			<div class="main-warning">
				<div class="main-warning__img">
					<img src="../assets/WayForPayWarning/status-declined.png" alt="status-declined" />
				</div>
				<div class="main-warning__text">Transaction error. Please, try later</div>
			</div>
			<div class="main-line"></div>
			<div class="main-information">
				<div class="main-information-block">
					<div class="main-information-block__title">Site:</div>
					<div class="main-information-block__text">www.sb-professional.com/</div>
				</div>
				<div class="main-information-block">
					<div class="main-information-block__title">Description:</div>
					<div class="main-information-block__text">SBL: SBPROX-1YR-OFFICIAL</div>
				</div>
				<div class="main-information-block">
					<div class="main-information-block__title">Total:</div>
					<div class="main-information-block__price">100 USD</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {}
	}
}
</script>

<style lang="css" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
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

.main-warning {
	display: flex;
	align-items: center;
	justify-content: center;
}

.main-warning__img>img {
	width: 36px;
	height: 36px;
}

.main-warning__text {
	margin-left: 10px;
	color: #b84a4a;
	font-size: 19px;
	font-weight: 600;
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
	margin-top: 10px;
	border: none;
	border: 1px dashed #c4c4c463;
}

@media (max-width: 1024px) {
	.main-warning__text {
		font-size: 17px;
	}
}

@media (max-width: 480px) {
	.container {
		max-width: 400px;
	}

	.main-warning__text {
		font-size: 15px;
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
}

@media (max-width: 320px) {
	.container {
		max-width: 300px;
	}

	.main-warning__text {
		font-size: 13px;
	}

	.main-information-block__text {
		font-size: 12px;
	}

	.main-information-block__price {
		font-size: 18px;
	}
}
</style>