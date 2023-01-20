<template lang="pug">
	div.c-achievementsDetailPageContents
		c-globalHeader01(current = "achievements")
		main.l-mainWrapper
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

<script>
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
	async asyncData({ $microcms, params }) {
		try {
			const data = await $microcms.get({
				endpoint: `news/${params.slug}`,
				// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
			});
			return {
				list: data
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



