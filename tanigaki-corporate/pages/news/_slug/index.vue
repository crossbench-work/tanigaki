<template lang="pug">
	div.c-achievementsDetailPageContents
		c-globalHeader01(current = "news")
		main.l-mainContainer
			.js-headerTypeSet
				c-pageTitleSet01(jp = '新着情報', en = 'NEWS')
			.js-headerTypeSet.is-blue
				c-newsDetailSet01(:list = 'list')
			.js-headerTypeSet
				c-contactSet01

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



