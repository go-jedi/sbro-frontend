<template>
	<div>
		<About />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import About from "../components/About.vue"

export default defineComponent({
	name: "about",
	setup() {
		return {}
	},
	components: {
		About
	}
})
</script>

<style lang="css" scoped></style>