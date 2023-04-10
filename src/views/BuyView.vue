<template>
	<div>
		<Buy />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import Buy from "../components/Buy.vue"

export default defineComponent({
	name: "buy",
	setup() {
		return {}
	},
	components: {
		Buy
	}
})
</script>

<style lang="css" scoped></style>