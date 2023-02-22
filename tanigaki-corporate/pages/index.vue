<template lang="pug">
	div.c-topPageContents
		c-globalHeader01(current = "home")
		main.l-mainContainer
			.js-headerTypeSet
				c-topMainvisualSet01(:news = 'news')
			.js-headerTypeSet.is-white
				c-topIndustrySet01
			.js-headerTypeSet
				c-topFactorySet01
			.js-headerTypeSet.is-blue
				c-topAchievementSet01(:achievements = 'achievements')
			.js-headerTypeSet
				c-contactSet01
		c-globalFooter01

</template>

<script>
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

let slideInTextAnimation;

export default Vue.extend({
	name: 'IndexPage',
	layout: "l-mainWrapper01",
	head: {
		title: '谷垣工業株式会社',
		meta: [
			{ hid: 'description', name: 'description', content: '谷垣工業では、建築内装及び造作家具において自社で設計・デザイン・施工を行うことにより、 斬新で機能的な空間デザインを提案させていただいております。また、船舶内装という特殊な艤 装工事でも、その技術力を生かし高く評価されております。今後も固定観念にとらわれる事なく 、お客様に満足していただけますよう努力してまいります。' }
		]
	},
	data() {
		return {
			achievements: [],
			news: []
		};
	},
	async asyncData({ $microcms, params }) {
		try {
			const data01 = await $microcms.get({
				endpoint: `achievements`,
				// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
				queries: { limit: 10},

			});
			const data02 = await $microcms.get({
				endpoint: `news`,
				// queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
				queries: { limit: 5},

			});
			return {
				achievements: data01.contents,
				news: data02.contents
			}
		}
		catch (err) {
		}
	},
	created() {
		
	},
	mounted() {
		slideInTextAnimation = document.querySelectorAll('.js-slideInTextAnimation');
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
	}
})
</script>

<style lang="stylus">
</style>



