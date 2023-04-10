<template>
	<div class="main">
		<div class="container">
			<Header activePage="Home" />
			<div class="main-subheader">
				<div class="container">
					<div class="main-subheader__title">Professional platform for volume analysis</div>
					<div class="main-subheader-content">
						<div class="main-subheader-content__left">
							<div class="main-subheader-content__text">
								SBProX is a professional analytical platform designed for volume and cluster
								analysis of CME, EUREX, ICE futures, NYSE and NASDAQ stocks, cryptocurrencies from
								the BINANCE exchange.
							</div>
							<div class="main-subheader-content__btn main-subheader-content__hover">
								<button @click="router.push('/download')">Download for free</button>
							</div>
						</div>
						<div class="main-subheader-content__right">
							<div class="main-subheader-content__right__img">
								<img src="../assets/Home/platform-photo.webp" alt="platform-photo" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main-subheader-img">
				<div class="container">
					<div class="main-subheader-img__img">
						<img src="../assets/Home/under-subheader-img.webp" alt="under-subheader-img" />
					</div>
					<div class="main-subheader-img__soc">
						<div class="main-subheader-img__tel">
							<svg data-bbox="0 0 106.974 32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109 32" height="32"
								width="109" data-type="ugc">
								<g>
									<path fill="#ffffff" d="M26 6v20H6V6h20z"></path>
									<path fill="url(#36cf654c-6a93-4666-9749-f1ed17f7f55a)"
										d="M32 16c0 8.836-7.164 16-16 16S0 24.836 0 16 7.164 0 16 0s16 7.164 16 16zm-15.427-4.188c-1.556.647-4.666 1.987-9.33 4.019-.758.301-1.155.596-1.191.884-.061.488.55.68 1.379.94.113.036.23.072.35.112.818.265 1.916.576 2.487.588.519.01 1.097-.203 1.736-.64 4.357-2.943 6.607-4.43 6.748-4.462.1-.022.239-.052.332.032.093.083.084.24.075.283-.062.257-2.454 2.483-3.694 3.635-.386.358-.66.613-.716.672-.125.129-.253.253-.376.372-.76.73-1.328 1.28.032 2.176.654.43 1.176.786 1.698 1.141.569.388 1.137.775 1.873 1.257.187.123.365.25.54.374.663.473 1.259.897 1.995.83.426-.04.869-.441 1.093-1.64.53-2.834 1.572-8.973 1.813-11.504a2.82 2.82 0 0 0-.026-.629.675.675 0 0 0-.23-.433c-.19-.156-.486-.19-.62-.187-.601.01-1.524.332-5.968 2.18z"
										clip-rule="evenodd" fill-rule="evenodd"></path>
									<path fill="#ffffff"
										d="M45.472 11.96V23h-1.6V11.96h1.6zm3.52 0v1.376h-8.624V11.96h8.624zM52.09 15c1.205 0 2.074.219 2.608.656.544.427.816 1.061.816 1.904.01.704-.144 1.248-.464 1.632-.31.384-.816.576-1.52.576h-4.512v-1.104h4.112c.352 0 .581-.112.688-.336.106-.224.16-.48.16-.768-.01-.48-.155-.821-.432-1.024-.267-.203-.73-.304-1.392-.304-.544 0-.97.08-1.28.24-.31.16-.528.437-.656.832-.118.395-.176.95-.176 1.664 0 .8.074 1.413.224 1.84.16.416.41.704.752.864.352.16.816.24 1.392.24.405 0 .858-.016 1.36-.048.512-.043.976-.09 1.392-.144l.16 1.008a5.12 5.12 0 0 1-.928.272c-.363.064-.736.112-1.12.144-.384.032-.736.048-1.056.048-.918 0-1.654-.139-2.208-.416-.555-.277-.96-.715-1.216-1.312-.256-.608-.384-1.403-.384-2.384 0-1.024.128-1.835.384-2.432s.656-1.019 1.2-1.264c.544-.256 1.242-.384 2.096-.384zm6.928-3.2-.016 8.976c0 .33.09.581.272.752.192.17.453.256.784.256h.736l.176 1.136a1.63 1.63 0 0 1-.448.128 4.759 4.759 0 0 1-.576.064 4.592 4.592 0 0 1-.496.032c-.598 0-1.078-.17-1.44-.512-.352-.341-.528-.837-.528-1.488V11.8h1.536zm6.587 3.2c1.206 0 2.075.219 2.608.656.544.427.816 1.061.816 1.904.011.704-.144 1.248-.464 1.632-.309.384-.816.576-1.52.576h-4.512v-1.104h4.112c.352 0 .582-.112.688-.336.107-.224.16-.48.16-.768-.01-.48-.154-.821-.432-1.024-.266-.203-.73-.304-1.392-.304-.544 0-.97.08-1.28.24-.309.16-.528.437-.656.832-.117.395-.176.95-.176 1.664 0 .8.075 1.413.224 1.84.16.416.411.704.752.864.352.16.816.24 1.392.24.406 0 .859-.016 1.36-.048.512-.043.976-.09 1.392-.144l.16 1.008a5.12 5.12 0 0 1-.928.272 12.31 12.31 0 0 1-1.12.144c-.384.032-.736.048-1.056.048-.917 0-1.653-.139-2.208-.416-.554-.277-.96-.715-1.216-1.312-.256-.608-.384-1.403-.384-2.384 0-1.024.128-1.835.384-2.432s.656-1.019 1.2-1.264c.544-.256 1.243-.384 2.096-.384zm8.544 0c.843 0 1.51.085 2 .256.502.16.859.427 1.072.8.214.363.32.837.32 1.424 0 .565-.106 1.035-.32 1.408-.213.363-.57.635-1.072.816-.501.17-1.173.256-2.016.256-.853 0-1.53-.085-2.032-.256-.49-.181-.842-.453-1.056-.816-.213-.363-.32-.827-.32-1.392 0-.597.107-1.077.32-1.44.214-.373.57-.64 1.072-.8.502-.17 1.179-.256 2.032-.256zm-.016 1.104c-.746 0-1.264.107-1.552.32-.288.203-.432.555-.432 1.056 0 .49.144.843.432 1.056.288.213.806.32 1.552.32.747 0 1.259-.107 1.536-.32.288-.213.432-.565.432-1.056 0-.501-.144-.853-.432-1.056-.277-.213-.79-.32-1.536-.32zm4.32-.912-.08.8-2.016.176-.56-.976h2.656zm-6.544 4.272.848.112c-.17.15-.288.336-.352.56a.79.79 0 0 0 .048.608c.096.181.31.299.64.352l2.912.448c.747.096 1.27.325 1.568.688.299.352.448.859.448 1.52 0 .63-.122 1.12-.368 1.472-.234.352-.63.603-1.184.752-.554.15-1.301.224-2.24.224-.736 0-1.35-.043-1.84-.128-.49-.075-.885-.208-1.184-.4a1.567 1.567 0 0 1-.624-.72c-.128-.299-.192-.667-.192-1.104 0-.341.048-.63.144-.864.107-.235.278-.443.512-.624.235-.181.539-.357.912-.528l1.008-.496.672.24-.768.56c-.224.16-.41.32-.56.48-.138.15-.245.304-.32.464-.074.17-.112.373-.112.608 0 .341.064.603.192.784.139.181.379.304.72.368.342.064.816.096 1.424.096s1.078-.037 1.408-.112c.33-.064.56-.187.688-.368.139-.17.208-.421.208-.752 0-.256-.037-.453-.112-.592-.064-.128-.192-.224-.384-.288-.192-.075-.47-.139-.832-.192l-2.736-.352c-.352-.043-.63-.15-.832-.32a1.536 1.536 0 0 1-.432-.624 1.672 1.672 0 0 1-.064-.72c.043-.245.128-.475.256-.688a1.23 1.23 0 0 1 .528-.464zm9.257-4.272.192 1.504.144.224V23h-1.536v-7.808h1.2zM84.99 15l-.16 1.44h-.496a3.84 3.84 0 0 0-1.344.256c-.448.17-.998.416-1.648.736l-.112-.944a7.41 7.41 0 0 1 1.712-1.088c.586-.267 1.152-.4 1.696-.4h.352zm5.22 0c.597 0 1.099.08 1.504.24.416.15.725.41.928.784.213.373.32.885.32 1.536V23h-1.216l-.24-1.696-.096-.192V17.56c0-.459-.107-.79-.32-.992-.213-.203-.619-.304-1.216-.304-.405 0-.917.021-1.536.064l-1.808.128-.144-1.104c.363-.064.763-.123 1.2-.176a28.01 28.01 0 0 1 1.36-.128c.459-.032.88-.048 1.264-.048zm2.048 3.184-.016 1.088-3.68.016c-.363.01-.619.107-.768.288-.139.17-.208.41-.208.72v.48c0 .384.09.667.272.848.192.17.49.256.896.256.299 0 .63-.053.992-.16a5.224 5.224 0 0 0 1.12-.512c.373-.235.71-.528 1.008-.88v1.008a4.66 4.66 0 0 1-.48.544c-.213.203-.475.4-.784.592a4.637 4.637 0 0 1-1.008.48 3.585 3.585 0 0 1-1.2.192c-.47 0-.885-.08-1.248-.24a1.991 1.991 0 0 1-.832-.736c-.203-.33-.304-.73-.304-1.2v-.848c0-.608.192-1.083.576-1.424.395-.341.939-.512 1.632-.512h4.032zM104.878 15c.682 0 1.2.181 1.552.544.362.363.544.896.544 1.6V23h-1.536v-5.408c0-.448-.091-.773-.272-.976-.171-.213-.464-.32-.88-.32-.256 0-.502.043-.736.128a4.19 4.19 0 0 0-.784.4c-.288.17-.635.405-1.04.704l-.08-1.04c.554-.501 1.093-.875 1.616-1.12a3.76 3.76 0 0 1 1.616-.368zm-8.32.192.112 1.504.16.224V23h-1.536v-7.808h1.264zM99.806 15c.672 0 1.184.181 1.536.544.352.352.533.885.544 1.6V23h-1.488v-5.408c0-.47-.096-.8-.288-.992-.192-.203-.48-.304-.864-.304-.256 0-.502.043-.736.128a3.818 3.818 0 0 0-.8.384c-.288.17-.64.41-1.056.72l-.096-1.04c.554-.501 1.093-.875 1.616-1.12A3.798 3.798 0 0 1 99.806 15z">
									</path>
									<defs fill="none">
										<linearGradient gradientUnits="userSpaceOnUse" y2="32" x2="0" y1="0" x1="32"
											id="36cf654c-6a93-4666-9749-f1ed17f7f55a">
											<stop stop-color="#2CA4E0"></stop>
											<stop stop-color="#0C82BD" offset="1"></stop>
										</linearGradient>
									</defs>
								</g>
							</svg>
						</div>
						<div class="main-subheader-img__inst">
							<svg data-bbox="0 0 114.036 32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 32" height="32"
								width="116" data-type="ugc">
								<g>
									<path fill="url(#2a8a73f5-92be-448b-a68d-f18ed553c055)"
										d="M9.404.096C11.11.017 11.654 0 16 0s4.89.019 6.595.096 2.868.35 3.887.743a7.872 7.872 0 0 1 2.833 1.848 7.815 7.815 0 0 1 1.844 2.832c.396 1.018.667 2.181.745 3.883.079 1.71.096 2.253.096 6.598 0 4.346-.019 4.89-.096 6.596-.077 1.702-.35 2.866-.745 3.884a7.849 7.849 0 0 1-1.844 2.835 7.846 7.846 0 0 1-2.834 1.844c-1.018.396-2.181.667-3.883.745C20.89 31.983 20.346 32 16 32s-4.89-.019-6.596-.096c-1.702-.077-2.866-.35-3.884-.745a7.85 7.85 0 0 1-2.835-1.844A7.843 7.843 0 0 1 .84 26.48C.445 25.463.175 24.3.096 22.599.017 20.888 0 20.345 0 16c0-4.346.019-4.89.096-6.595s.35-2.868.743-3.886a7.849 7.849 0 0 1 1.848-2.834A7.843 7.843 0 0 1 5.519.84C6.537.445 7.7.175 9.402.096h.002zm13.061 2.88c-1.687-.077-2.193-.093-6.465-.093s-4.778.016-6.465.093c-1.561.071-2.408.332-2.972.551a4.972 4.972 0 0 0-1.84 1.196 4.963 4.963 0 0 0-1.196 1.84c-.22.564-.48 1.41-.551 2.972-.077 1.687-.093 2.193-.093 6.465s.016 4.778.093 6.465c.071 1.561.332 2.408.551 2.972a4.967 4.967 0 0 0 1.196 1.84c.516.531 1.146.94 1.84 1.196.564.22 1.41.48 2.972.551 1.687.077 2.191.093 6.465.093 4.273 0 4.778-.016 6.465-.093 1.561-.071 2.408-.332 2.972-.551a4.968 4.968 0 0 0 1.84-1.196 4.962 4.962 0 0 0 1.196-1.84c.22-.564.48-1.41.551-2.972.077-1.687.093-2.193.093-6.465s-.016-4.778-.093-6.465c-.071-1.561-.332-2.408-.551-2.972a4.968 4.968 0 0 0-1.196-1.84 4.965 4.965 0 0 0-1.84-1.196c-.564-.22-1.41-.48-2.972-.551zm-8.509 17.956a5.337 5.337 0 0 0 5.819-8.706 5.337 5.337 0 1 0-5.819 8.706zm-3.771-10.747a8.225 8.225 0 1 1 11.63 11.631 8.225 8.225 0 0 1-11.63-11.631zM26.048 9a1.945 1.945 0 1 0-2.67-2.83A1.945 1.945 0 0 0 26.048 9z"
										clip-rule="evenodd" fill-rule="evenodd"></path>
									<path fill="#ffffff"
										d="M42.944 11.96V23h-1.6V11.96h1.6zM50.361 15c1.419 0 2.128.715 2.128 2.144V23h-1.552v-5.408c0-.49-.08-.827-.24-1.008-.16-.192-.432-.288-.816-.288-.458 0-.917.112-1.376.336a18.37 18.37 0 0 0-1.648.896l-.064-1.04a7.763 7.763 0 0 1 1.792-1.104A4.481 4.481 0 0 1 50.361 15zm-3.6.192.144 1.504.112.224V23h-1.536v-7.808h1.28zM57.513 15c.341 0 .709.01 1.104.032.394.021.784.048 1.168.08.394.032.752.075 1.072.128l-.112 1.088a71.222 71.222 0 0 0-1.504-.048 34.457 34.457 0 0 0-1.472-.032c-.47-.01-.838 0-1.104.032-.267.032-.459.112-.576.24-.118.128-.176.347-.176.656 0 .373.09.619.272.736.192.117.474.219.848.304l2.224.512c.629.16 1.093.395 1.392.704.298.31.448.8.448 1.472 0 .64-.123 1.125-.368 1.456-.235.32-.603.533-1.104.64-.502.117-1.136.176-1.904.176-.288 0-.72-.01-1.296-.032-.566-.021-1.19-.09-1.872-.208l.112-1.072.8.032c.288.01.592.016.912.016h.992c.576 0 1.024-.021 1.344-.064.33-.053.56-.15.688-.288.138-.15.208-.368.208-.656 0-.352-.112-.587-.336-.704-.214-.128-.507-.235-.88-.32l-2.192-.512c-.448-.107-.806-.25-1.072-.432a1.7 1.7 0 0 1-.56-.704c-.107-.288-.16-.645-.16-1.072 0-.597.106-1.05.32-1.36.213-.32.544-.533.992-.64.458-.117 1.056-.17 1.792-.16zm7.675-2.096v7.872c0 .363.075.624.224.784.16.15.427.224.8.224h1.152l.176 1.136c-.181.053-.39.096-.624.128a7.172 7.172 0 0 1-.688.064 6.007 6.007 0 0 1-.544.032c-.661 0-1.168-.181-1.52-.544-.352-.363-.528-.885-.528-1.568v-8.128h1.552zm2.432 2.288v1.152h-5.392v-1.072l1.536-.08h3.856zM72.96 15c.597 0 1.099.08 1.504.24.416.15.725.41.928.784.213.373.32.885.32 1.536V23h-1.216l-.24-1.696-.096-.192V17.56c0-.459-.107-.79-.32-.992-.213-.203-.619-.304-1.216-.304-.405 0-.917.021-1.536.064l-1.808.128-.144-1.104c.363-.064.763-.123 1.2-.176a28.01 28.01 0 0 1 1.36-.128c.459-.032.88-.048 1.264-.048zm2.048 3.184-.016 1.088-3.68.016c-.363.01-.619.107-.768.288-.139.17-.208.41-.208.72v.48c0 .384.09.667.272.848.192.17.49.256.896.256.299 0 .63-.053.992-.16a5.224 5.224 0 0 0 1.12-.512c.373-.235.71-.528 1.008-.88v1.008a4.66 4.66 0 0 1-.48.544c-.213.203-.475.4-.784.592a4.637 4.637 0 0 1-1.008.48 3.585 3.585 0 0 1-1.2.192c-.47 0-.885-.08-1.248-.24a1.991 1.991 0 0 1-.832-.736c-.203-.33-.304-.73-.304-1.2v-.848c0-.608.192-1.083.576-1.424.395-.341.939-.512 1.632-.512h4.032zM81.212 15c.842 0 1.51.085 2 .256.501.16.858.427 1.072.8.213.363.32.837.32 1.424 0 .565-.107 1.035-.32 1.408-.214.363-.57.635-1.072.816-.502.17-1.174.256-2.016.256-.854 0-1.53-.085-2.032-.256-.49-.181-.843-.453-1.056-.816-.214-.363-.32-.827-.32-1.392 0-.597.106-1.077.32-1.44.213-.373.57-.64 1.072-.8.501-.17 1.178-.256 2.032-.256zm-.016 1.104c-.747 0-1.264.107-1.552.32-.288.203-.432.555-.432 1.056 0 .49.144.843.432 1.056.288.213.805.32 1.552.32.746 0 1.258-.107 1.536-.32.288-.213.432-.565.432-1.056 0-.501-.144-.853-.432-1.056-.278-.213-.79-.32-1.536-.32zm4.32-.912-.08.8-2.016.176-.56-.976h2.656zm-6.544 4.272.848.112c-.17.15-.288.336-.352.56a.79.79 0 0 0 .048.608c.096.181.31.299.64.352l2.912.448c.746.096 1.27.325 1.568.688.298.352.448.859.448 1.52 0 .63-.123 1.12-.368 1.472-.235.352-.63.603-1.184.752-.555.15-1.302.224-2.24.224-.736 0-1.35-.043-1.84-.128-.49-.075-.886-.208-1.184-.4a1.567 1.567 0 0 1-.624-.72c-.128-.299-.192-.667-.192-1.104 0-.341.048-.63.144-.864.106-.235.277-.443.512-.624a4.68 4.68 0 0 1 .912-.528l1.008-.496.672.24-.768.56c-.224.16-.41.32-.56.48-.139.15-.246.304-.32.464a1.5 1.5 0 0 0-.112.608c0 .341.064.603.192.784.138.181.378.304.72.368.341.064.816.096 1.424.096s1.077-.037 1.408-.112c.33-.064.56-.187.688-.368.138-.17.208-.421.208-.752 0-.256-.038-.453-.112-.592-.064-.128-.192-.224-.384-.288-.192-.075-.47-.139-.832-.192l-2.736-.352c-.352-.043-.63-.15-.832-.32a1.536 1.536 0 0 1-.432-.624 1.672 1.672 0 0 1-.064-.72c.042-.245.128-.475.256-.688.138-.213.314-.368.528-.464zm9.256-4.272.192 1.504.144.224V23h-1.536v-7.808h1.2zM92.052 15l-.16 1.44h-.496a3.84 3.84 0 0 0-1.344.256c-.448.17-.997.416-1.648.736l-.112-.944a7.41 7.41 0 0 1 1.712-1.088c.587-.267 1.152-.4 1.696-.4h.352zm5.22 0c.598 0 1.1.08 1.504.24.416.15.726.41.928.784.214.373.321.885.321 1.536V23h-1.217l-.24-1.696-.096-.192V17.56c0-.459-.106-.79-.32-.992-.213-.203-.618-.304-1.216-.304-.405 0-.917.021-1.536.064l-1.808.128-.144-1.104c.363-.064.763-.123 1.2-.176a28.01 28.01 0 0 1 1.36-.128A18.3 18.3 0 0 1 97.272 15zm2.048 3.184-.015 1.088-3.68.016c-.363.01-.62.107-.769.288-.138.17-.207.41-.207.72v.48c0 .384.09.667.272.848.191.17.49.256.895.256.3 0 .63-.053.992-.16a5.224 5.224 0 0 0 1.12-.512c.374-.235.71-.528 1.008-.88v1.008c-.106.15-.266.33-.48.544-.213.203-.474.4-.784.592a4.637 4.637 0 0 1-1.007.48 3.585 3.585 0 0 1-1.2.192c-.47 0-.886-.08-1.249-.24a1.991 1.991 0 0 1-.831-.736c-.203-.33-.305-.73-.305-1.2v-.848c0-.608.192-1.083.576-1.424.395-.341.94-.512 1.632-.512h4.032zM111.94 15c.683 0 1.2.181 1.552.544.363.363.544.896.544 1.6V23H112.5v-5.408c0-.448-.09-.773-.272-.976-.17-.213-.464-.32-.88-.32a2.14 2.14 0 0 0-.736.128 4.22 4.22 0 0 0-.784.4c-.288.17-.634.405-1.04.704l-.08-1.04c.555-.501 1.094-.875 1.616-1.12A3.767 3.767 0 0 1 111.94 15zm-8.32.192.112 1.504.16.224V23h-1.536v-7.808h1.264zm3.248-.192c.672 0 1.184.181 1.536.544.352.352.534.885.544 1.6V23h-1.488v-5.408c0-.47-.096-.8-.288-.992-.192-.203-.48-.304-.864-.304a2.14 2.14 0 0 0-.736.128 3.844 3.844 0 0 0-.8.384c-.288.17-.64.41-1.056.72l-.096-1.04c.555-.501 1.094-.875 1.616-1.12a3.8 3.8 0 0 1 1.632-.368z">
									</path>
									<defs fill="none">
										<linearGradient gradientUnits="userSpaceOnUse" y2="30.791" x2="2.419" y1="1.116" x1="29.767"
											id="2a8a73f5-92be-448b-a68d-f18ed553c055">
											<stop stop-color="#9506E3"></stop>
											<stop stop-color="#FDB505" offset="1"></stop>
										</linearGradient>
									</defs>
								</g>
							</svg>
						</div>
						<div class="main-subheader-img__yotb">
							<svg data-bbox="-0.001 0 99.39 21.348" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 22"
								height="22" width="101" data-type="color">
								<g>
									<path fill="#ffffff" d="M22 4v13H10V4h12z" data-color="1"></path>
									<path fill="#D32322"
										d="M31.334 3.35a3.715 3.715 0 0 0-1.021-1.694 4.066 4.066 0 0 0-1.784-.99c-2.504-.66-12.536-.66-12.536-.66C11.81-.04 7.629.169 3.473.634a4.213 4.213 0 0 0-1.784 1.014 3.862 3.862 0 0 0-1.039 1.7A38.787 38.787 0 0 0 0 10.673 38.717 38.717 0 0 0 .65 18a3.77 3.77 0 0 0 1.034 1.692c.494.47 1.11.81 1.788.99 2.537.659 12.52.659 12.52.659 4.187.048 8.374-.162 12.536-.627a4.067 4.067 0 0 0 1.784-.99 3.706 3.706 0 0 0 1.02-1.692c.46-2.415.684-4.869.668-7.327a35.441 35.441 0 0 0-.667-7.356v.001zm-18.53 11.889v-9.13l8.346 4.566-8.346 4.564z"
										data-color="2"></path>
									<path fill="#ffffff"
										d="m49.072 4.96-3.728 7.344h-1.456L40.144 4.96h1.696l2.24 4.544c.096.203.181.416.256.64l.224.64h.112l.224-.64c.085-.224.17-.432.256-.624l2.24-4.56h1.68zm-3.664 6.256V16h-1.6v-4.784h1.6zM52.717 8c.917 0 1.648.133 2.192.4.554.267.949.704 1.184 1.312.245.597.368 1.392.368 2.384 0 1.003-.123 1.808-.368 2.416-.235.597-.63 1.03-1.184 1.296-.544.267-1.275.4-2.192.4-.907 0-1.638-.133-2.192-.4-.544-.267-.939-.699-1.184-1.296-.246-.608-.368-1.413-.368-2.416 0-.992.122-1.787.368-2.384.245-.608.64-1.045 1.184-1.312.554-.267 1.285-.4 2.192-.4zm0 1.248c-.534 0-.955.085-1.264.256-.31.17-.528.464-.656.88-.128.405-.192.976-.192 1.712s.064 1.312.192 1.728c.128.416.346.71.656.88.309.16.73.24 1.264.24.533 0 .954-.08 1.264-.24.32-.17.544-.464.672-.88s.192-.992.192-1.728-.064-1.307-.192-1.712c-.128-.416-.352-.71-.672-.88-.31-.17-.731-.256-1.264-.256zm7.268-1.056V13.6c0 .47.09.8.272.992.181.192.485.288.912.288a2.85 2.85 0 0 0 1.232-.288c.416-.192.917-.475 1.504-.848l.176 1.008c-.598.48-1.184.843-1.76 1.088a4.303 4.303 0 0 1-1.728.368c-1.43 0-2.144-.715-2.144-2.144V8.192h1.536zm5.312 0V16h-1.248l-.144-1.488-.16-.24v-6.08h1.552zM70.58 4.96V16h-1.6V4.96h1.6zm3.52 0v1.376h-8.624V4.96H74.1zm1.665 3.232V13.6c0 .47.09.8.272.992.181.192.486.288.912.288a2.85 2.85 0 0 0 1.232-.288 13.27 13.27 0 0 0 1.504-.848l.176 1.008c-.597.48-1.184.843-1.76 1.088a4.303 4.303 0 0 1-1.728.368c-1.43 0-2.144-.715-2.144-2.144V8.192h1.536zm5.312 0V16H79.83l-.144-1.488-.16-.24v-6.08h1.552zM87.802 8c.97 0 1.685.315 2.144.944.458.619.688 1.659.688 3.12 0 .661-.059 1.248-.176 1.76-.107.512-.294.944-.56 1.296-.267.352-.63.619-1.088.8-.448.181-1.019.272-1.712.272-.267 0-.56-.01-.88-.032a10.5 10.5 0 0 1-.976-.112 12.979 12.979 0 0 1-.96-.16 5.657 5.657 0 0 1-.848-.272l1.232-1.008a7.484 7.484 0 0 0 1.632.32c.277.01.533.016.768.016.48-.021.858-.117 1.136-.288.288-.17.496-.464.624-.88.138-.427.208-.997.208-1.712 0-.693-.054-1.237-.16-1.632-.096-.405-.278-.693-.544-.864-.256-.181-.624-.272-1.104-.272-.406 0-.795.112-1.168.336-.363.213-.779.501-1.248.864l-.112-.96c.309-.33.629-.608.96-.832a3.83 3.83 0 0 1 1.04-.528A3.57 3.57 0 0 1 87.802 8zm-2.816-3.2v2.848c0 .33-.011.645-.032.944-.022.288-.07.576-.144.864l.16.224.016 6.016-1.552-.08V4.8h1.552zM95.965 8c1.205 0 2.074.219 2.608.656.544.427.816 1.061.816 1.904.01.704-.144 1.248-.464 1.632-.31.384-.816.576-1.52.576h-4.512v-1.104h4.112c.352 0 .581-.112.688-.336.106-.224.16-.48.16-.768-.01-.48-.155-.821-.432-1.024-.267-.203-.73-.304-1.392-.304-.544 0-.97.08-1.28.24-.31.16-.528.437-.656.832-.118.395-.176.95-.176 1.664 0 .8.074 1.413.224 1.84.16.416.41.704.752.864.352.16.816.24 1.392.24.405 0 .858-.016 1.36-.048.512-.043.976-.09 1.392-.144l.16 1.008a5.12 5.12 0 0 1-.928.272c-.363.064-.736.112-1.12.144-.384.032-.736.048-1.056.048-.918 0-1.654-.139-2.208-.416-.555-.277-.96-.715-1.216-1.312-.256-.608-.384-1.403-.384-2.384 0-1.024.128-1.835.384-2.432s.656-1.019 1.2-1.264C94.413 8.128 95.11 8 95.965 8z"
										data-color="1"></path>
								</g>
							</svg>
						</div>
						<div class="main-subheader-img__facb">
							<svg data-bbox="0 0 109.157 32.002" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 32"
								height="32" width="110" data-type="color">
								<g>
									<path fill="#ffffff"
										d="M43.488 11.944c.523 0 1.05.005 1.584.016.533 0 1.061.005 1.584.016.523.01 1.019.037 1.488.08l-.08 1.216h-4.112c-.363 0-.63.08-.8.24-.16.16-.24.416-.24.768V23h-1.6v-9.024c0-.64.197-1.136.592-1.488.395-.363.923-.544 1.584-.544zm-1.904 4.784h5.872v1.248h-5.872v-1.248zM53.257 15c.597 0 1.099.08 1.504.24.416.15.725.41.928.784.213.373.32.885.32 1.536V23h-1.216l-.24-1.696-.096-.192V17.56c0-.459-.107-.79-.32-.992-.214-.203-.619-.304-1.216-.304-.405 0-.917.021-1.536.064l-1.808.128-.144-1.104c.362-.064.763-.123 1.2-.176a28.01 28.01 0 0 1 1.36-.128c.459-.032.88-.048 1.264-.048zm2.048 3.184-.016 1.088-3.68.016c-.363.01-.619.107-.768.288-.139.17-.208.41-.208.72v.48c0 .384.09.667.272.848.192.17.49.256.896.256.298 0 .63-.053.992-.16a5.226 5.226 0 0 0 1.12-.512c.373-.235.71-.528 1.008-.88v1.008a4.66 4.66 0 0 1-.48.544c-.214.203-.475.4-.784.592a4.637 4.637 0 0 1-1.008.48 3.585 3.585 0 0 1-1.2.192c-.47 0-.886-.08-1.248-.24a1.99 1.99 0 0 1-.832-.736c-.203-.33-.304-.73-.304-1.2v-.848c0-.608.192-1.083.576-1.424.395-.341.939-.512 1.632-.512h4.032zM61.733 15a10.53 10.53 0 0 1 1.712.144c.32.053.613.133.88.24l-.192.992a19.762 19.762 0 0 0-1.152-.064 18.276 18.276 0 0 0-.992-.032c-.598 0-1.072.085-1.424.256-.342.16-.587.443-.736.848-.15.405-.224.97-.224 1.696 0 .725.074 1.296.224 1.712.149.416.394.704.736.864.352.16.826.24 1.424.24.16 0 .368-.005.624-.016.256-.01.533-.027.832-.048.298-.021.586-.053.864-.096l.144 1.024c-.395.15-.832.256-1.312.32-.48.075-.955.112-1.424.112-.918 0-1.654-.133-2.208-.4-.544-.267-.939-.699-1.184-1.296-.246-.597-.368-1.403-.368-2.416 0-1.003.122-1.803.368-2.4.256-.597.656-1.024 1.2-1.28.554-.267 1.29-.4 2.208-.4zm7.67 0c1.205 0 2.074.219 2.607.656.544.427.816 1.061.816 1.904.01.704-.144 1.248-.464 1.632-.31.384-.816.576-1.52.576H66.33v-1.104h4.112c.352 0 .582-.112.688-.336.107-.224.16-.48.16-.768-.01-.48-.154-.821-.432-1.024-.266-.203-.73-.304-1.392-.304-.544 0-.97.08-1.28.24-.31.16-.528.437-.656.832-.117.395-.176.95-.176 1.664 0 .8.075 1.413.224 1.84.16.416.41.704.752.864.352.16.816.24 1.392.24.406 0 .859-.016 1.36-.048.512-.043.976-.09 1.392-.144l.16 1.008a5.12 5.12 0 0 1-.928.272 12.31 12.31 0 0 1-1.12.144c-.384.032-.736.048-1.056.048-.917 0-1.653-.139-2.208-.416-.554-.277-.96-.715-1.216-1.312-.256-.608-.384-1.403-.384-2.384 0-1.024.128-1.835.384-2.432s.656-1.019 1.2-1.264c.544-.256 1.243-.384 2.096-.384zm9.711 0c.97 0 1.685.315 2.144.944.459.619.688 1.659.688 3.12 0 .661-.058 1.248-.176 1.76-.106.512-.293.944-.56 1.296-.266.352-.63.619-1.088.8-.448.181-1.019.272-1.712.272-.266 0-.56-.01-.88-.032a10.54 10.54 0 0 1-.976-.112c-.33-.043-.65-.096-.96-.16a5.657 5.657 0 0 1-.848-.272l1.232-1.008a7.484 7.484 0 0 0 1.632.32c.278.01.534.016.768.016.48-.021.859-.117 1.136-.288.288-.17.496-.464.624-.88.139-.427.208-.997.208-1.712 0-.693-.053-1.237-.16-1.632-.096-.405-.277-.693-.544-.864-.256-.181-.624-.272-1.104-.272a2.24 2.24 0 0 0-1.168.336 12.3 12.3 0 0 0-1.248.864l-.112-.96c.31-.33.63-.608.96-.832.33-.235.677-.41 1.04-.528.363-.117.73-.176 1.104-.176zm-2.816-3.2v2.848c0 .33-.01.645-.032.944-.021.288-.07.576-.144.864l.16.224.016 6.016-1.552-.08V11.8h1.552zm11.06 3.2c.917 0 1.647.133 2.191.4.555.267.95.704 1.184 1.312.246.597.368 1.392.368 2.384 0 1.003-.122 1.808-.368 2.416-.234.597-.63 1.03-1.184 1.296-.544.267-1.274.4-2.192.4-.906 0-1.637-.133-2.192-.4-.544-.267-.938-.699-1.184-1.296-.245-.608-.368-1.413-.368-2.416 0-.992.123-1.787.368-2.384.246-.608.64-1.045 1.184-1.312.555-.267 1.286-.4 2.192-.4zm0 1.248c-.534 0-.955.085-1.265.256-.31.17-.528.464-.656.88-.128.405-.192.976-.192 1.712s.064 1.312.192 1.728c.128.416.347.71.656.88.31.16.73.24 1.264.24s.955-.08 1.264-.24c.32-.17.544-.464.672-.88s.192-.992.192-1.728-.064-1.307-.192-1.712c-.128-.416-.352-.71-.672-.88-.31-.17-.73-.256-1.264-.256zM96.512 15c.918 0 1.648.133 2.192.4.555.267.95.704 1.184 1.312.246.597.369 1.392.369 2.384 0 1.003-.123 1.808-.368 2.416-.235.597-.63 1.03-1.184 1.296-.544.267-1.275.4-2.193.4-.906 0-1.637-.133-2.192-.4-.543-.267-.938-.699-1.183-1.296-.246-.608-.369-1.413-.369-2.416 0-.992.123-1.787.368-2.384.246-.608.64-1.045 1.184-1.312.555-.267 1.286-.4 2.192-.4zm0 1.248c-.533 0-.954.085-1.264.256-.309.17-.527.464-.655.88-.128.405-.192.976-.192 1.712s.064 1.312.192 1.728c.128.416.346.71.656.88.309.16.73.24 1.263.24.534 0 .955-.08 1.264-.24.32-.17.544-.464.672-.88.129-.416.192-.992.192-1.728s-.064-1.307-.192-1.712c-.127-.416-.352-.71-.671-.88-.31-.17-.731-.256-1.265-.256zm12.389-1.056-2.384 2.832a2.608 2.608 0 0 1-.288.336 3.58 3.58 0 0 1-.288.24v.032c.074.053.17.15.288.288.117.128.213.256.288.384l2.64 3.696h-1.792l-3.008-4.464 2.752-3.344h1.792zM103.83 11.8l.016 4.912c0 .341-.016.661-.048.96a7.61 7.61 0 0 1-.128.912c.064.299.106.603.128.912.021.31.032.603.032.88V23h-1.536V11.8h1.536zm1.296 6.256v1.088h-1.824v-1.088h1.824z"
										data-color="1"></path>
									<path fill="#1878F3"
										d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" data-color="2">
									</path>
									<path fill="#ffffff"
										d="M12.5 31.694V20.546H8.454v-4.59H12.5V12l.045-.5.09-.682.137-.546.137-.454.227-.546.227-.409.318-.454.273-.364.41-.409.408-.318.5-.318.5-.228.728-.272.727-.137.909-.09h1.227l.818.09.591.046.682.09.591.092v3.954h-2.227l-.364.046-.409.09-.318.137-.273.182-.318.227-.273.318-.136.273-.137.363-.09.41v3.318l4.409.045-.728 4.591h-3.727V31.9a16.193 16.193 0 0 1-4.954-.205z"
										clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div class="main-possibilities">
				<div class="main-posibilities-info">
					<div class="main-posibilities-info__title">Features</div>
					<div class="main-posibilities-info__link">
						<router-link to="/about">Overview of all functions</router-link>
					</div>
				</div>
				<div class="main-posibilities-content">
					<div class="main-posibilities-content-block">
						<div class="main-posibilities-content__block__left">
							<div class="main-posibilities-content__block__left_title">Performance</div>
							<div class="main-posibilities-content__block__left_info">
								<ul class="main-posibilities-content__block__left_info_li">
									<li>Fast drawing of charts when zooming and moving.</li>
									<li>High speed loading of workspaces (workspaces).</li>
									<li>Modern beautiful and clear interface.</li>
								</ul>
							</div>
						</div>
						<div class="main-posibilities-content__block__right">
							<img class="main-posibilities-content__block__right_img" src="../assets/Home/posibilies-img-one.webp"
								alt="posibilies-img-one" />
						</div>
					</div>
					<div class="main-posibilities-content-block">
						<div class="main-posibilities-content__block__left">
							<div class="main-posibilities-content__block__left_title">Simulator</div>
							<div class="main-posibilities-content__block__left_info">
								<ul class="main-posibilities-content__block__left_info_li">
									<li>Manual testing of trading strategies before entering the real market.</li>
									<li>Change the chart drawing speed. Bar-by-bar analysis of historical data.</li>
									<li>
										Convenient results statistics, the ability to combine statistics for different
										days.
									</li>
								</ul>
							</div>
						</div>
						<div class="main-posibilities-content__block__right">
							<img class="main-posibilities-content__block__right_img" src="../assets/Home/posibilies-img-two.webp"
								alt="posibilies-img-two" />
						</div>
					</div>
					<div class="main-posibilities-content-block">
						<div class="main-posibilities-content__block__left">
							<div class="main-posibilities-content__block__left_title">Cloud algorithm</div>
							<div class="main-posibilities-content__block__left_info">
								<ul class="main-posibilities-content__block__left_info_li">
									<li>
										A unique algorithm for displaying the tape of deals directly on the chart!
									</li>
									<li>
										Flexible accumulation of prints. Many algorithms for filtering the feed of
										transactions.
									</li>
									<li>
										Display of large single trades and large accumulated volume (various
										algorithms).
									</li>
								</ul>
							</div>
						</div>
						<div class="main-posibilities-content__block__right">
							<img class="main-posibilities-content__block__right_img"
								src="../assets/Home/posibilies-img-three.webp" alt="posibilies-img-three" />
						</div>
					</div>
					<div class="main-posibilities-content-block">
						<div class="main-posibilities-content__block__left">
							<div class="main-posibilities-content__block__left_title">Price Rating</div>
							<div class="main-posibilities-content__block__left_info">
								<ul class="main-posibilities-content__block__left_info_li">
									<li>
										An advanced tool for automatic search for large volumes, delta, bid-ask for
										setting up cluster charts and volume indicators.
									</li>
									<li>A unique feature that saves a lot of time.</li>
									<li>The ability to track the dynamics of the formation of large clusters.</li>
								</ul>
							</div>
						</div>
						<div class="main-posibilities-content__block__right">
							<img class="main-posibilities-content__block__right_img" src="../assets/Home/posibilies-img-four.webp"
								alt="posibilies-img-four" />
						</div>
					</div>
				</div>
			</div>
			<div class="main-subpossibilities-img">
				<div class="container">
					<div class="main-subpossibilities-img__img">
						<img src="../assets/Home/under-posibilies-img.webp" alt="under-posibilies-img" />
					</div>
				</div>
			</div>
			<div class="main-whychoose">
				<div class="main-whychoose__title">Why traders choose us?</div>
				<div class="main-whychoose-content">
					<div class="main-whychoose-content__block">
						<div class="main-whychoose-content__block_text">
							A fair price for great functionality of the platform
						</div>
					</div>
					<div class="main-whychoose-content__block">
						<div class="main-whychoose-content__block_text">
							We take into account the opinion of our customers, we add the necessary
							functionality.
						</div>
					</div>
					<div class="main-whychoose-content__block">
						<div class="main-whychoose-content__block_text">
							Fast and quality technical support.
						</div>
					</div>
					<div class="main-whychoose-content__block">
						<div class="main-whychoose-content__block_text">
							Rich functionality of the platform for volumetric market analysis
						</div>
					</div>
					<div class="main-whychoose-content__block">
						<div class="main-whychoose-content__block_text">
							Fast drawing of charts. Beautiful and clear interface.
						</div>
					</div>
				</div>
			</div>
			<div class="main-subwhychoose-img">
				<div class="container">
					<div class="main-subwhychoose-img__img">
						<img src="../assets/Home/under-whychoose-img.webp" alt="under-whychoose-img" />
					</div>
				</div>
			</div>
			<div class="main-getplatform-free">
				<div class="main-getplatform-free__title">Get the platform for free for 10 days</div>
				<div class="main-getplatform-free__btn main-getplatform-free__hover">
					<button @click="router.push('/download')">Download for free</button>
				</div>
			</div>
			<div class="main-subgetplatform-free">
				<div class="container">
					<div class="main-subgetplatform-free__img">
						<img src="../assets/Home/subgetplatform-free-img.webp" alt="subgetplatform-free-img" />
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
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 40px;
}

.main-subheader__title {
	max-width: 800px;
	font-size: 54px;
	color: #fff;
}

.main-subheader-content {
	display: flex;
	justify-content: center;
	align-items: center;
}

.main-subheader-content__text {
	max-width: 482px;
	font-size: 18px;
	color: #fff;
}

.main-subheader-content__btn {
	padding-top: 50px;
}

.main-subheader-content__btn>button {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	max-width: 270px;
	height: 64px;
	background-color: #17ad2d;
	color: #fff;
	padding: 35px 51px;
	font-size: 14px;
	border-radius: 8px;
	border: none;
	text-transform: uppercase;
}

.main-subheader-content__hover>button:hover {
	background-color: #17be30;
}

.main-subheader-content__right__img {
	background-image: url("../assets/Home/subheader-background.webp");
}

.main-subheader-img {
	margin-top: 10px;
}

.main-subheader-img__img {
	display: flex;
	justify-content: center;
}

.main-subheader-img__img>img {
	max-width: 1200px;
}

.main-subheader-img__soc {
	display: flex;
	align-items: center;
	justify-content: center;
}

.main-subheader-img__tel {
	width: 109px;
	height: 32px;
}

.main-subheader-img__tel>svg {
	cursor: pointer;
}

.main-subheader-img__tel>svg:hover {
	width: 106px;
	height: 30px;
}

.main-subheader-img__inst {
	margin-left: 120px;
	width: 116px;
	height: 32px;
}

.main-subheader-img__inst>svg {
	cursor: pointer;
}

.main-subheader-img__inst>svg:hover {
	width: 114px;
	height: 30px;
}

.main-subheader-img__yotb {
	margin-left: 120px;
	width: 101px;
	height: 22px;
}

.main-subheader-img__yotb>svg {
	cursor: pointer;
}

.main-subheader-img__yotb>svg:hover {
	width: 99px;
	height: 20px;
}

.main-subheader-img__facb {
	margin-left: 120px;
	width: 110px;
	height: 32px;
}

.main-subheader-img__facb>svg {
	cursor: pointer;
}

.main-subheader-img__facb>svg:hover {
	width: 108px;
	height: 30px;
}

.main-possibilities {
	margin-top: 50px;
}

.main-posibilities-info {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.main-posibilities-info__title {
	font-size: 42px;
	color: #fff;
}

.main-posibilities-info__link>a {
	font-size: 20px;
	color: #fff;
	text-decoration: none;
}

.main-posibilities-info__link>a:hover {
	text-decoration: underline;
}

.main-posibilities-content-block {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 50px;
}

.main-posibilities-content-block:not(:first-child) {
	margin-top: 40px;
}

.main-posibilities-content__block__left {
	margin-right: 40px;
}

.main-posibilities-content__block__left_title {
	font-size: 40px;
	color: #fff;
}

.main-posibilities-content__block__left_info {
	padding-top: 20px;
}

.main-posibilities-content__block__left_info_li>li {
	max-width: 452px;
	font-size: 18px;
	color: #fff;
	list-style-type: circle;
}

.main-subpossibilities-img {
	margin-top: 30px;
}

.main-subpossibilities-img__img {
	display: flex;
	justify-content: center;
}

.main-whychoose {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;
}

.main-whychoose__title {
	font-size: 42px;
	color: #fff;
}

.main-whychoose-content__block {
	margin-top: 20px;
}

.main-whychoose-content__block:not(:first-child) {
	padding-top: 20px;
}

.main-whychoose-content__block_text {
	padding: 17px 30px;
	color: #fff;
	font-size: 15px;
	background-color: rgb(35 37 38);
	border-radius: 5px;
	text-align: center;
}

.main-whychoose-content__block_text:hover {
	background-color: rgb(39 43 44);
}

.main-subwhychoose-img {
	margin-top: 100px;
}

.main-subwhychoose-img__img {
	display: flex;
	justify-content: center;
}

.main-getplatform-free {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
}

.main-getplatform-free__title {
	font-size: 42px;
	color: #fff;
}

.main-getplatform-free__btn {
	padding-top: 40px;
}

.main-getplatform-free__btn>button {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	max-width: 270px;
	height: 64px;
	background-color: #17ad2d;
	color: #fff;
	padding: 35px 51px;
	font-size: 13px;
	border-radius: 8px;
	border: none;
	text-transform: uppercase;
}

.main-getplatform-free__hover>button:hover {
	background-color: #17be30;
}

.main-subgetplatform-free__img {
	display: flex;
	justify-content: center;
	margin-top: 100px;
}

@media (max-width: 1366px) {
	.container {
		max-width: 1300px;
	}

	.main-subheader__title {
		font-size: 44px;
	}

	.main-subheader-content__text {
		font-size: 14px;
	}

	.main-subheader-content__btn>button {
		max-width: 250px;
		padding: 30px 37px;
		font-size: 12px;
	}

	.main-subheader-content__right__img>img {
		max-width: 500px;
	}

	.main-subheader-img__img>img {
		max-width: 800px;
	}

	.main-subheader-img__inst {
		margin-left: 80px;
	}

	.main-subheader-img__yotb {
		margin-left: 80px;
	}

	.main-subheader-img__facb {
		margin-left: 80px;
	}

	.main-posibilities-info__title {
		font-size: 32px;
	}

	.main-posibilities-info__link>a {
		font-size: 16px;
	}

	.main-posibilities-content__block__left_title {
		font-size: 34px;
	}

	.main-posibilities-content__block__left_info_li>li {
		max-width: 312px;
		font-size: 14px;
	}

	.main-posibilities-content__block__right_img {
		max-width: 340px;
	}

	.main-posibilities-content__block__left_title {
		font-size: 34px;
	}

	.main-subpossibilities-img__img>img {
		max-width: 800px;
	}

	.main-whychoose__title {
		font-size: 32px;
	}

	.main-whychoose-content__block_text {
		font-size: 11px;
	}

	.main-subwhychoose-img__img>img {
		max-width: 800px;
	}

	.main-getplatform-free__title {
		font-size: 32px;
	}

	.main-getplatform-free__btn>button {
		max-width: 250px;
		padding: 30px 37px;
		font-size: 12px;
	}

	.main-subgetplatform-free__img>img {
		max-width: 800px;
	}
}

@media (max-width: 1024px) {
	.container {
		max-width: 900px;
	}
}

@media (max-width: 834px) {
	.container {
		max-width: 750px;
	}

	.main-subheader__title {
		font-size: 30px;
		text-align: center;
	}

	.main-subheader-content {
		margin-top: 30px;
		flex-wrap: wrap-reverse;
	}

	.main-subheader-content__left {
		margin-top: 20px;
	}

	.main-subheader-content__btn {
		padding-top: 20px;
	}

	.main-subheader-img__img {
		margin-top: 30px;
	}

	.main-subheader-img__img>img {
		max-width: 700px;
	}

	.main-subheader-img__soc {
		margin-top: 20px;
	}

	.main-subheader-img__tel {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__tel>svg {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__tel>svg:hover {
		max-width: 98px;
		height: 23px;
	}

	.main-subheader-img__inst {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__inst>svg {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__inst>svg:hover {
		max-width: 98px;
		height: 23px;
	}

	.main-subheader-img__yotb {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__yotb>svg {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__yotb>svg:hover {
		max-width: 98px;
		height: 23px;
	}

	.main-subheader-img__facb {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__facb>svg {
		max-width: 100px;
		height: 25px;
	}

	.main-subheader-img__facb>svg:hover {
		max-width: 98px;
		height: 23px;
	}

	.main-posibilities-info__title {
		font-size: 28px;
	}

	.main-posibilities-info__link>a {
		font-size: 14px;
	}

	.main-posibilities-content__block__left_title {
		font-size: 30px;
	}

	.main-posibilities-content__block__right_img {
		max-width: 300px;
	}

	.main-posibilities-content__block__left {
		margin-right: 10px;
	}

	.main-subpossibilities-img__img>img {
		max-width: 700px;
	}

	.main-whychoose__title {
		font-size: 28px;
	}

	.main-whychoose-content__block_text {
		padding: 14px 20px;
		font-size: 11px;
	}

	.main-subwhychoose-img__img>img {
		max-width: 700px;
	}

	.main-getplatform-free__title {
		font-size: 28px;
	}

	.main-subgetplatform-free__img>img {
		max-width: 700px;
	}
}

@media (max-width: 926px) {
	.container {
		max-width: 800px;
	}
}

@media (max-width: 780px) {
	.container {
		max-width: 700px;
	}
}

@media (max-width: 768px) {
	.main-posibilities-content-block {
		flex-wrap: wrap-reverse;
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
		text-align: center;
	}

	.main-subheader-content__right__img>img {
		max-width: 300px;
	}

	.main-subheader-content__text {
		font-size: 10px;
	}

	.main-subheader-content__btn>button {
		max-width: 150px;
		height: 24px;
		padding: 25px 14px;
		font-size: 10px;
	}

	.main-subheader-img__img>img {
		max-width: 400px;
	}

	.main-subheader-img__soc {
		flex-wrap: wrap;
		flex-direction: column;
	}

	.main-subheader-img__inst {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-subheader-img__yotb {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-subheader-img__facb {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-posibilities-info__title {
		font-size: 20px;
	}

	.main-posibilities-info__link>a {
		font-size: 11px;
	}

	.main-posibilities-content__block__left_title {
		font-size: 20px;
	}

	.main-posibilities-content__block__left {
		margin-top: 20px;
		margin-right: 0;
	}

	.main-subpossibilities-img__img>img {
		max-width: 400px;
	}

	.main-whychoose__title {
		font-size: 18px;
	}

	.main-subwhychoose-img__img>img {
		max-width: 400px;
	}

	.main-getplatform-free__title {
		font-size: 18px;
	}

	.main-getplatform-free__btn>button {
		max-width: 150px;
		height: 24px;
		padding: 25px 14px;
		font-size: 10px;
	}

	.main-subgetplatform-free__img>img {
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
		text-align: center;
	}

	.main-subheader-content__right__img>img {
		max-width: 300px;
	}

	.main-subheader-content__text {
		font-size: 10px;
	}

	.main-subheader-content__btn>button {
		max-width: 150px;
		height: 24px;
		padding: 25px 14px;
		font-size: 10px;
	}

	.main-subheader-img__img>img {
		max-width: 400px;
	}

	.main-subheader-img__soc {
		flex-wrap: wrap;
		flex-direction: column;
	}

	.main-subheader-img__inst {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-subheader-img__yotb {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-subheader-img__facb {
		margin-top: 30px;
		margin-left: 0;
	}

	.main-posibilities-info__title {
		font-size: 20px;
	}

	.main-posibilities-info__link>a {
		font-size: 11px;
	}

	.main-posibilities-content__block__left_title {
		font-size: 20px;
	}

	.main-posibilities-content__block__left {
		margin-top: 20px;
		margin-right: 0;
	}

	.main-subpossibilities-img__img>img {
		max-width: 400px;
	}

	.main-whychoose__title {
		font-size: 18px;
	}

	.main-subwhychoose-img__img>img {
		max-width: 400px;
	}

	.main-getplatform-free__title {
		font-size: 18px;
	}

	.main-getplatform-free__btn>button {
		max-width: 150px;
		height: 24px;
		padding: 25px 14px;
		font-size: 10px;
	}

	.main-subgetplatform-free__img>img {
		max-width: 400px;
	}
}

@media (max-width: 390px) {
	.container {
		max-width: 350px;
	}

	.main-subheader-img__img>img {
		max-width: 300px;
	}

	.main-subpossibilities-img__img>img {
		max-width: 300px;
	}

	.main-subwhychoose-img__img>img {
		max-width: 300px;
	}

	.main-subgetplatform-free__img>img {
		max-width: 300px;
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
		text-align: center;
	}

	.main-subheader-content__right__img>img {
		max-width: 280px;
	}

	.main-subheader-content__text {
		font-size: 9px;
	}
}
</style>