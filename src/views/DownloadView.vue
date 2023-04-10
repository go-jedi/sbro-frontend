<template>
	<div>
		<Download />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import Download from "../components/Download.vue"

export default defineComponent({
	name: "download",
	setup() {
		return {}
	},
	components: {
		Download
	}
})
</script>

<style lang="css" scoped></style>