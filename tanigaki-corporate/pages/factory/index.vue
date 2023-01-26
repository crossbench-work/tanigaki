<template lang="pug">
	div.c-factoryPageContents
		c-globalHeader01(current = "factory")
		main.l-mainWrapper
			c-pageTitleSet01(jp = '工場紹介', en = 'FACTORY')
			c-factoryBlockSet01
			c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

export default Vue.extend({
	name: 'FactoryPage',
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


