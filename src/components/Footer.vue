<template>
	<div class="main-footer">
		<footer>
			<div class="main-footer-top">
				<div class="main-footer-top__bone">
					<div class="main-footer-top__bone__imgone">
						<img src="../assets/Home/sbro-img-footer.webp" alt="sbro-img-footer" />
					</div>
					<div class="main-footer-top__bone__imgtwo">
						<img src="../assets/Home/footer-payments-img.webp" alt="footer-payments-img" />
					</div>
				</div>
				<div class="main-footer-top__btwo">
					<div class="main-footer-top__btwo__title">Useful links:</div>
					<div class="main-footer-top__btwo__link">
						<router-link to="/agreement">Terms of use</router-link>
					</div>
					<div class="main-footer-top__btwo__link">
						<router-link to="/policy">User support policy</router-link>
					</div>
				</div>
				<div class="main-footer-top__bthree">
					<div class="main-footer-top__bthree__title">Contacts</div>
					<div class="main-footer-top__bthree__block">
						<div class="main-footer-top__bthree__block_left">
							<svg data-bbox="2 6 28 20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32"
								width="32" data-type="color">
								<g>
									<path fill="#ffffff"
										d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78 6.2 8h19.6zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24H4z"
										data-color="1"></path>
								</g>
							</svg>
						</div>
						<div class="main-footer-top__bthree__block_right">
							<div class="main-footer-top__bthree__block_right_link">
								<a href="#">Support: support@sb-professional.com</a>
							</div>
							<div class="main-footer-top__bthree__block_right_link">
								<a href="#">Sales department: sales@sb-professional.com</a>
							</div>
						</div>
					</div>
					<div class="main-footer-top__bthree__block">
						<div class="main-footer-top__bthree__block_left">
							<svg data-bbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32"
								width="32" data-type="color">
								<g>
									<path fill="#ffffff"
										d="M32 16c0 8.836-7.164 16-16 16S0 24.836 0 16 7.164 0 16 0s16 7.164 16 16zm-15.427-4.188c-1.556.647-4.666 1.987-9.33 4.019-.758.301-1.155.596-1.191.884-.061.488.55.68 1.379.94.113.036.23.072.35.112.818.265 1.916.576 2.487.588.519.01 1.097-.203 1.736-.64 4.357-2.943 6.607-4.43 6.748-4.462.1-.022.239-.052.332.032.093.083.084.24.075.283-.062.257-2.454 2.483-3.694 3.635-.386.358-.66.613-.716.672-.125.129-.253.253-.376.372-.76.73-1.328 1.28.032 2.176.654.43 1.176.786 1.698 1.141.569.388 1.137.775 1.873 1.257.187.123.365.25.54.374.663.473 1.259.897 1.995.83.426-.04.869-.441 1.093-1.64.53-2.834 1.572-8.973 1.813-11.504a2.82 2.82 0 0 0-.026-.629.675.675 0 0 0-.23-.433c-.19-.156-.486-.19-.62-.187-.601.01-1.524.332-5.968 2.18z"
										clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
								</g>
							</svg>
						</div>
						<div class="main-footer-top__bthree__block_right">
							<div class="main-footer-top__bthree__block_right_link">
								<a href="#">Support telegram: t.me/sbprosupport</a>
							</div>
							<div class="main-footer-top__bthree__block_right_link">
								<a href="#">Group telegram: t.me/sbprochat</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main-footer-bottom">
				<div class="main-footer-bottom__text">
					Risk Warning: Trading in financial markets comes with a high level of risk. The
					platform developers are not responsible for the User's losses incurred due to making
					wrong decisions when trading on the exchange. Analytical platform SBProX - software
					that allows you to get additional data for market analysis. The platform developers
					are not responsible for losses incurred by the User as a result of errors in the
					platform operation.
				</div>
			</div>
		</footer>
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {}
	}
})
</script>

<style lang="css" scoped>
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

@media (max-width: 834px) {
	.main-footer-bottom__text {
		max-width: 650px;
	}
}

@media (max-width: 568px) {
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

@media (max-width: 428px) {
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
</style>