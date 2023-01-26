<template lang="pug">
	div.c-achievementsPageContents
		c-globalHeader01(current = "achievements")
		main.l-mainWrapper
			c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
			c-achievementsBlockSet01(:achievements = 'achievements')
			c-contactSet01
		c-globalFooter01

</template>

<script>

import axios from 'axios'
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

export default Vue.extend({
	name: 'AchievementsPage',
	data() {
		return {
			achievements: []
		};
	},
	layout: "l-mainWrapper01",
	async asyncData({ $microcms, params }) {
		try {
			const data = await $microcms.get({
				endpoint: `achievements`,
				// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
			});
			return {
				achievements: data.contents
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



