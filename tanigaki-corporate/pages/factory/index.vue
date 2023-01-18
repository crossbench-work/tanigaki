<template lang="pug">
	div.c-factoryPageContents
		c-globalHeader01(current = "factory")
		c-pageTitleSet01(jp = '工場紹介', en = 'FACTORY')
		
		c-factoryBlockSet01
		
		c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'FactoryPage',
	layout: "l-mainWrapper01",
	mounted() {
	}
})
</script>

<style lang="stylus">
	

</style>


