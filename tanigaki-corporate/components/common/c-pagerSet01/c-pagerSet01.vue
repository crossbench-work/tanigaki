<template lang="pug">
	.c-pagerSet01
		.compponentWrapper
			.block.is-pager
				.page.is-prev
					nuxt-link(v-if = "page != 1" :to="`/${url}/${page - 1}`").wrapper
						span
					.wrapper(v-if = "page == 1")
						span

				.page(v-for="n of Math.ceil(totalCount / limit)" :key="n")

					.dot(v-if = "page < Math.ceil(totalCount / limit) - 2 && n == Math.ceil(totalCount / limit) && Math.ceil(totalCount / limit) > 3")
						span ...
					
					nuxt-link(v-if = "(n < Number(page) + view && n >= Number(page) &&  n != Number(page)) || ((n == 1) && page != 1) || (n == Math.ceil(totalCount / limit) && page != Math.ceil(totalCount / limit) || (Math.ceil(totalCount / limit) - page < 3 && n > Math.ceil(totalCount / limit) - 3 && n != page) )  " :to="`/${url}/${n}`").wrapper
						span {{ n }}
					.wrapper(v-if = "n == Number(page)")
						span {{ n }}
					
					.dot(v-if = "page > 2 && n == 1 && Math.ceil(totalCount / limit) > 3")
						span ...

				.page.is-next
					nuxt-link(v-if = "Number(page) < Math.ceil(totalCount / limit) " :to="`/${url}/${Number(page) + 1}`").wrapper
						span
					.wrapper(v-if = "Number(page) >= Math.ceil(totalCount / limit)")
						span
					
</template>

<script>
	export default {
		name: 'c-pagerSet01',
		data() {
			return {
				limit: 6,
				view: 6
			};
		},
		props: {
			totalCount: 0,
			page: 0,
			url: {
				type: String,
				default: 'achievements'
			},
		},
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"
				
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