<template lang="pug">
	div.c-achievementsDetailPageContents
		c-globalHeader01(current = "achievements")
		main.l-mainWrapper
			c-pageTitleSet01(jp = '新着情報', en = 'NEWS')
			c-newsDetailSet01(:list = 'list')

		c-globalFooter01

</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

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
			});
			return {
				list: data
			}
		} catch (err) {
		}
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



