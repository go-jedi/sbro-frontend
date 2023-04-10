<template>
	<div>
		<Policy />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import Policy from "../components/Policy.vue"

export default defineComponent({
	name: "policy",
	setup() {
		return {}
	},
	components: {
		Policy
	}
})
</script>

<style lang="css" scoped></style>