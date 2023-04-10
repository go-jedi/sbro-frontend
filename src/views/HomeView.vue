<template>
	<div>
		<Home />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import Home from "../components/Home.vue"

export default defineComponent({
	name: "home",
	setup() {
		return {}
	},
	components: {
		Home
	}
})
</script>

<style lang="css" scoped></style>