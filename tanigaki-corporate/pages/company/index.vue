<template lang="pug">
	div.c-companyPageContents
		c-globalHeader01(current = "company")
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

export default Vue.extend({
	name: 'CompanyPage',
	layout: "l-mainWrapper01",
	mounted() {
	}
})
</script>

<style lang="stylus">
	
	
	

	
			
	
				


</style>



