<template lang="pug">
	div.c-topPageContents
		c-globalHeader01(current = "home")
		c-topMainvisualSet01
		c-topNewsSet01
		c-topIndustrySet01
		c-topFactorySet01
		c-topAchievementSet01
		c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
import Vue from 'vue'

let slideInTextAnimation;

export default Vue.extend({
	name: 'IndexPage',
	layout: "l-mainWrapper01",
	mounted() {
		slideInTextAnimation = document.querySelectorAll('.js-slideInTextAnimation');
	}
})
</script>

<style lang="stylus">
	

</style>



