<template lang="pug">
	div.c-companyPageContents
		c-globalHeader01(current = "company")
		main.l-mainWrapper
			c-pageTitleSet01(jp = '会社案内', en = 'COMPANY')
			c-companyAbout01
			c-companyMessageSet01
			c-companyOutlineSet01
			c-companyHistorySet01
			c-contactSet01
		c-globalFooter01


</template>

<script lang="ts">
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

export default Vue.extend({
	name: 'CompanyPage',
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



