<template lang="pug">
	div.c-achievementsPageContents
		c-globalHeader01(current = "achievements")
		main.l-mainContainer
			.js-headerTypeSet
				c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
			.js-headerTypeSet.is-blue
				c-achievementsBlockSet01(:achievements = 'achievements')
				.c-pagerSet01
					.compponentWrapper
						.block.is-pager
							.page.is-prev
								nuxt-link(v-if = "page != 1" :to="`/achievements/${page - 1}`").wrapper
									span
								.wrapper(v-if = "page == 1")
									span

							.page(v-for="n of Math.ceil(totalCount / limit)" :key="n")

								.dot(v-if = "page < Math.ceil(totalCount / limit) - 2 && n == Math.ceil(totalCount / limit) && Math.ceil(totalCount / limit) > 3")
									span ...
								
								nuxt-link(v-if = "(n < Number(page) + view && n >= Number(page) &&  n != Number(page)) || ((n == 1) && page != 1) || (n == Math.ceil(totalCount / limit) && page != Math.ceil(totalCount / limit) || (Math.ceil(totalCount / limit) - page < 3 && n > Math.ceil(totalCount / limit) - 3 && n != page) )  " :to="`/achievements/${n}`").wrapper
									span {{ n }}
								.wrapper(v-if = "n == Number(page)")
									span {{ n }}
								
								.dot(v-if = "page > 2 && n == 1 && Math.ceil(totalCount / limit) > 3")
									span ...

							.page.is-next
								nuxt-link(v-if = "Number(page) < Math.ceil(totalCount / limit) " :to="`/achievements/${Number(page) + 1}`").wrapper
									span
								.wrapper(v-if = "Number(page) >= Math.ceil(totalCount / limit)")
									span
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
			view: 2
		};
	},
	layout: "l-mainWrapper01",
	async asyncData({ $microcms, params }) {
		try {
			const page = params.p || '1';
    		const limit = 2;
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
		console.log(this.totalCount);
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
	.c-pagerSet01
		.compponentWrapper
			.block.is-pager
				display flex
				flex-wrap wrap
				justify-content flex-end
				.page
					display flex
					flex-wrap wrap
					.wrapper
						container-type inline-size
						display flex
						justify-content center
						align-items center
						width 14svw
						max-width 160px
						height 14svw
						max-height 160px
						color #FFF
						background-color #E2E2E2
						border-left 1px solid #FFF

						font-family 'Oswald', sans-serif
						font-size clamp(1.4rem, 3cqw, 3.6rem)
						font-weight bold
						text-decoration none
						transition all 0.3s ease
						&:hover
							background-color #E2E2E2
					a.wrapper
						background-color #040278
					
					.dot
						display flex
						justify-content center
						align-items center
						width 4svw
						color #B1AAAA
						font-size clamp(1.4rem, 2cqw, 3.6rem)
						font-weight bold

					&.is-prev, &.is-next
						span
							display block
							width 18%
							padding-top 26%
							background-size contain
							background-repeat no-repeat
					
					&.is-prev
						span
							background-image url('~/assets/images/contents/pager_left_arrow.png')
					&.is-next
						span
							background-image url('~/assets/images/contents/pager_right_arrow.png')

					&.is-current
						background-color #E2E2E2
					
						

</style>



