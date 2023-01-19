<template lang="pug">
	div.c-achievementsPageContents
		c-globalHeader01(current = "achievements")
		c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
		c-achievementsBlockSet01(:achievements = 'achievements')
		c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">

import axios from 'axios'
import Vue from 'vue'

export default Vue.extend({
	name: 'AchievementsPage',
	data() {
		return {
			achievements: []
		};
	},
	layout: "l-mainWrapper01",
	async asyncData({ params }) {
		const { data } = await axios
		.get(
			`https://tanigaki.microcms.io/api/v1/achievements/`,
			{
				headers: { 'X-MICROCMS-API-KEY': '5nX8ZObizV24K0HAHgLgP0b7e9wecpT90yk9' }
			}
		)
		return {
			achievements: data.contents
		};
	},

	// async asyncData({ $config, params }) {
	// 	try {
	// 		const { data } = await axios
	// 		.get(
	// 			$config.serviceId + 'achievements/',
	// 			{
	// 				headers: { 'X-MICROCMS-API-KEY':  $config.apiKey }
	// 			}
	// 		)
	// 		return {
	// 			achievements: data.contents
	// 		};
	// 	} catch (err) {
	// 	}
	// },
	mounted() {
	}
})
</script>

<style lang="stylus">
	
</style>



