<template lang="pug">
	div.c-achievementsPageContents
		c-globalHeader01(current = "achievements")
		main.l-mainContainer
			.js-headerTypeSet
				c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
			.js-headerTypeSet.is-blue
				c-achievementsBlockSet01(:achievements = 'achievements')
				c-pagerSet01(:totalCount = 'totalCount', :page = 'page', url = 'achievements')
			.js-headerTypeSet
				c-contactSet01
		c-globalFooter01

</template>

<script>

import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

export default Vue.extend({
	name: 'AchievementsPage',
	data() {
		return {
			achievements: [],
			totalCount: 0,
			limit: 0,
			page: 0,
		};
	},
	layout: "l-mainWrapper01",
	head: {
		title: '施工実績 | 谷垣工業株式会社',
		meta: [
			{ hid: 'description', name: 'description', content: '谷垣工業では、建築内装及び造作家具において自社で設計・デザイン・施工を行うことにより、 斬新で機能的な空間デザインを提案させていただいております。また、船舶内装という特殊な艤 装工事でも、その技術力を生かし高く評価されております。今後も固定観念にとらわれる事なく 、お客様に満足していただけますよう努力してまいります。' }
		]
	},
	async asyncData({ $microcms, params }) {
		try {
			const page = params.p || '1';
    		const limit = 6;
			const data = await $microcms.get({
				endpoint: `achievements`,
				queries: { limit: limit, offset: (page - 1) * limit},
			});
			return {
				achievements: data.contents,
				totalCount: data.totalCount,
				limit: limit,
				page: page,
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



