<template>
	<div>
		<BuyCrypto />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import BuyCrypto from "../components/BuyCrypto.vue"

export default defineComponent({
	name: "buyCrypto",
	setup() {
		return {}
	},
	components: {
		BuyCrypto
	}
})
</script>

<style lang="css" scoped></style>