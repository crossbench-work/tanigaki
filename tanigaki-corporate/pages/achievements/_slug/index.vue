<template lang="pug">
	div.c-achievementsDetailPageContents
		c-globalHeader01(current = "achievements")
		main.l-mainContainer
			.js-headerTypeSet
				c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
			.js-headerTypeSet.is-white
				c-achievementsDetailSet01(:achievement = 'achievement')
			.js-headerTypeSet
				c-contactSet01
		c-globalFooter01

</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

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
		inView({
			className: '.js-headerTypeSet',
			reverse: true,
			ajust: 0.001,
			afterChange: function(el){
				if(el.tg.classList.contains('is-inview')) {
					if(el.tg.classList.contains('is-blue')) {
						document.querySelector('.c-globalHeader01').classList.add('is-blue');
					} else {
						document.querySelector('.c-globalHeader01').classList.remove('is-blue');
					}

					if(el.tg.classList.contains('is-white')) {
						document.querySelector('.c-globalHeader01').classList.add('is-white');
					} else {
						document.querySelector('.c-globalHeader01').classList.remove('is-white');
					}
				}
			},
		});
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



