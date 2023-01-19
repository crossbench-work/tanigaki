<template lang="pug">
	div.c-achievementsDetailPageContents
		c-globalHeader01(current = "achievements")
		c-pageTitleSet01(jp = '新着情報', en = 'NEWS')
		section.c-newsDetailSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.l-contentsWrapper.is-middle
							.block.is-title(v-html="list.title")
							.block.is-contents(v-html="list.content")
		c-globalFooter01

</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'

export default Vue.extend({
	name: 'NewsDetailPage',
	data() {
		return {
			list: {}
		};
	},
	layout: "l-mainWrapper01",
	async asyncData({ params }) {
		const { data } = await axios
		.get(
			`https://tanigaki.microcms.io/api/v1/news/${params.slug}`,
			{
				headers: { 'X-MICROCMS-API-KEY': '5nX8ZObizV24K0HAHgLgP0b7e9wecpT90yk9' }
			}
		)
		return {
			list: data
		};
	},
	// async asyncData({ $config, params }) {
	// 	try {
	// 		const { data } = await axios
	// 		.get(
	// 			$config.serviceId + `news/${params.slug}`,
	// 			{
	// 				headers: { 'X-MICROCMS-API-KEY': $config.apiKey }
	// 			}
	// 		)
	// 		return {
	// 			list: data
	// 		};
	// 	} catch (err) {
	// 	}
	// },
	mounted() {
		// console.log(this.achievement);
	}
})
</script>

<style lang="stylus">
	
</style>



