<template lang="pug">
	div.c-industryPageContents
		c-globalHeader01(current = "industry")
		c-pageTitleSet01(jp = '事業内容', en = 'INDUSTRY')
		c-industryInnerLinkSet01
		c-industryBlockSet01
		c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: 'IndustryPage',
		layout: "l-mainWrapper01",
		mounted() {
		}
	})
</script>

<style lang="stylus">
	

	

</style>



