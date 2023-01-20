<template lang="pug">
	div.c-contactPageContents
		c-globalHeader01(current = "contact")
		main.l-mainWrapper
			c-pageTitleSet01(jp = 'お問合せ', en = 'CONTACT')
			c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'ContactPage',
	layout: "l-mainWrapper01",
	mounted() {
	}
})
</script>

<style lang="stylus">
	

</style>



