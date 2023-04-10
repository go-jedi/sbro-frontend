<template>
	<div>
		<WayForPay />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import WayForPay from "../components/WayForPay.vue"

export default defineComponent({
	name: "wayForPay",
	setup() {
		return {}
	},
	components: {
		WayForPay
	}
})
</script>

<style lang="css" scoped></style>