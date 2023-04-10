<template>
	<div>
		<BuyCard />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import BuyCard from "../components/BuyCard.vue"

export default defineComponent({
	name: "buyCard",
	setup() {
		return {}
	},
	components: {
		BuyCard
	}
})
</script>

<style lang="css" scoped></style>