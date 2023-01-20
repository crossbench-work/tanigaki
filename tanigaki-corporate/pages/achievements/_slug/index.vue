<template lang="pug">
	div.c-achievementsDetailPageContents
		c-globalHeader01(current = "achievements")
		main.l-mainWrapper
			c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
			c-achievementsDetailSet01(:achievement = 'achievement')
		c-globalFooter01

</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default Vue.extend({
	name: 'AchievementsDetailPage',
	data() {
		return {
			achievement: {}
		};
	},
	layout: "l-mainWrapper01",
	async asyncData({ $microcms, params }) {
		try {
			const data = await $microcms.get({
				endpoint: `achievements/${params.slug}`,
				// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
			});
			return {
				achievement: data
			}
		} catch (err) {
		}
	},
	mounted() {
		// console.log(this.achievement);
	}
})
</script>

<style lang="stylus">
	
</style>



