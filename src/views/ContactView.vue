<template>
	<div>
		<Contact />
	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

import Contact from "../components/Contact.vue"

export default defineComponent({
	name: "contact",
	setup() {
		return {}
	},
	components: {
		Contact
	}
})
</script>

<style lang="css" scoped></style>