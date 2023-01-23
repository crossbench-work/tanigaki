<template lang="pug">
	div.c-topPageContents
		c-globalHeader01(current = "home")
		main.l-mainWrapper
			c-topMainvisualSet01
			c-topIndustrySet01
			c-topFactorySet01
			c-topAchievementSet01(:achievements = 'achievements')
			c-contactSet01
		c-globalFooter01

</template>

<script>
import Vue from 'vue'

let slideInTextAnimation;

export default Vue.extend({
	name: 'IndexPage',
	layout: "l-mainWrapper01",
	async asyncData({ $microcms, params }) {
		try {
			const data = await $microcms.get({
				endpoint: `achievements`,
				// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
				queries: { limit: 10},

			});
			return {
				achievements: data.contents
			}
		} catch (err) {
		}
	},
	mounted() {
		slideInTextAnimation = document.querySelectorAll('.js-slideInTextAnimation');
	}
})
</script>

<style lang="stylus">
</style>



