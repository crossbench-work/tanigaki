<template lang="pug">
	.js-inviewPoint
		section.c-newsSet01.is-fadeInAnimation
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.l-contentsWrapper.is-middle
							.block.is-news
								dl
									.area.is-news(v-for="(list, index) of lists")
										nuxt-link(:to="'/news/detail/' + list.id")
											dt.date {{list.publishedAtJp}}
											dd.text {{list.title}}
										
								

</template>

<script>

	export default {
		name: 'c-newsSet01',
		props: {
			lists: {
				type: Array,
				required: true,
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

	

	.c-newsSet01
		&>.componentWrapper
			padding clamp(30px, 4cqw, 60px) 0
			// background-image url('~/assets/images/contents/top_industry_texture01.png')

			dl
				.area.is-news
					border-bottom 1px solid rgba(#D9D9D9, 0.5)

					&:last-child
						border-bottom none

				a
					display block
					position relative
					padding clamp(20px, 4cqw, 40px) 2%
					color inherit
					text-decoration none

					&:hover
						&::before
							opacity 1.0
						
						.date
						.text
							color #FFF

					&::before
						opacity 0
						content ""
						display block
						position absolute
						z-index 0
						top 5%
						left 0
						width 100%
						height 90%
						background-color #E02400
						border-radius 20px
						transition all 0.3s ease

						+MQ_MAX(SP_RES_WID01)
							border-radius 10px


				.date
					position relative
					z-index 100
					color #E02400
					font-size clamp(1.0rem, 2.2cqw, 1.4rem)
					font-weight bold
					transition all 0.3s ease

				.text
					position relative
					z-index 100
					margin-top 1%
					font-size clamp(1.0rem, 2.6cqw, 1.6rem)
					transition all 0.3s ease
</style>