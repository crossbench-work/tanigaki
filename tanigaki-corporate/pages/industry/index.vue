<template lang="pug">
	div.c-industryPageContents
		c-globalHeader01(current = "industry")
		main.l-mainWrapper
			c-pageTitleSet01(jp = '事業内容', en = 'INDUSTRY')
			c-industryInnerLinkSet01
			c-industryBlockSet01
			c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
	import Vue from 'vue'
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'

	export default Vue.extend({
		name: 'IndustryPage',
		layout: "l-mainWrapper01",
		mounted() {
			this.$nextTick(() => {
				let _t= this;
				_t.$nuxt.$loading.start()
				setTimeout(function(){
					_t.$nuxt.$loading.finish()
					inView({
						className: '.js-inviewPoint',
						reverse: false
					});
				}, 1000)
			})
		}
	})
</script>

<style lang="stylus">
	

	

</style>



