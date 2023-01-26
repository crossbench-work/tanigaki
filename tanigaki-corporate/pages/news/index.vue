<template lang="pug">
	div.c-newsPageContents
		c-globalHeader01(current = "news")
		main.l-mainWrapper
			c-pageTitleSet01(jp = '新着情報', en = 'NEWS')
			c-newsSet01(:lists = 'items')
			c-contactSet01
		c-globalFooter01

</template>

<script>
import inView from '~/assets/javascript/_j_inView/_j_inView.js'
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



