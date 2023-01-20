<template lang="pug">
	div.c-newsPageContents
		c-globalHeader01(current = "news")
		c-pageTitleSet01(jp = '新着情報', en = 'NEWS')
		
		c-newsSet01(:lists = 'items')

		//- p {{ items[0].title }}
		
		c-contactSet01
		c-globalFooter01

</template>

<script>
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import axios from 'axios'
import Vue from 'vue'

export default Vue.extend({
	name: 'NewsPage',
	data() {
		return {
			items: []
		};
	},
	layout: "l-mainWrapper01",
	// async asyncData({ $config, $microcms }) {
	// 	const data = await $microcms.get({
	// 		serviceDomain: $config.serviceId,
	// 		endpoint: 'news/',
	// 		apiKey: $config.apiKey,
	// 		// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
	// 	});
	// 	return data;
	// },
	// async asyncData({ $config }) {
	// 	const { data } = await axios
	// 	.get(
	// 		`https://tanigaki.microcms.io/api/v1/news/`,
	// 		{
	// 			headers: { 'X-MICROCMS-API-KEY': '5nX8ZObizV24K0HAHgLgP0b7e9wecpT90yk9' }
	// 		}
	// 	)
	// 	return {
	// 		items: data.contents
	// 	};
	// },
	
	async asyncData({ $microcms }) {
		try {
			const data = await $microcms.get({
				endpoint: 'news',
				// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
			});
			return {
				items: data.contents
			}
		} catch (err) {
		}
	},
	beforeMount() {
		dayjs.extend(utc);
		dayjs.extend(timezone);

		var publishedAtJp = {
			'publishedAtJp': ''
		};

		this.items.forEach(function(element, index){
			publishedAtJp['publishedAtJp'] = dayjs.utc(element['publishedAt']).tz('Asia/Tokyo').format('YYYY-MM-DD');
			publishedAtJp['publishedAtJp'] = publishedAtJp['publishedAtJp'].replace(/-/g, '.');
			Object.assign(element, publishedAtJp);
		})
	},
	mounted() {
	}
})
</script>

<style lang="stylus">
	
</style>



