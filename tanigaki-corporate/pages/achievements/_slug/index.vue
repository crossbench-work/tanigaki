<template lang="pug">
	div.c-achievementsDetailPageContents
		c-globalHeader01(current = "achievements")
		c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
		
		c-achievementsDetailSet01(:achievement = 'achievement')
		
		c-globalFooter01

</template>

<script lang="ts">
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
	async asyncData({ params }) {
		const { data } = await axios
		.get(
			`https://tanigaki.microcms.io/api/v1/achievements/${params.slug}`,
			{
				headers: { 'X-MICROCMS-API-KEY': '5nX8ZObizV24K0HAHgLgP0b7e9wecpT90yk9' }
			}
		)
		return {
			achievement: data
		};
	},
	mounted() {
		// console.log(this.achievement);
	}
})
</script>

<style lang="stylus">
	
</style>



