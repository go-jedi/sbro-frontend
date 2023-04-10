<template>
	<div>
		<Agreement />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import Agreement from "../components/Agreement.vue"

export default defineComponent({
	name: "agreement",
	setup() {
		return {}
	},
	components: {
		Agreement
	}
})
</script>

<style lang="css" scoped></style>