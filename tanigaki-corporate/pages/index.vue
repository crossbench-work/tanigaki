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
		console.log(this.achievements);
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



