<template>
	<div>
		<WayForPayWarning />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import WayForPayWarning from "../components/WayForPayWarning.vue"

export default defineComponent({
	name: "wayForPayWarning",
	setup() {
		return {}
	},
	components: {
		WayForPayWarning
	}
})
</script>

<style lang="css" scoped></style>