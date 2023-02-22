<template lang="pug">
	.js-inviewPoint
		aside.c-industryInnerLinkSet01
			.componentWrapper
				.l-contentsWrapper
					.block.is-list
						.l-contentsWrapper.is-small.is-fadeInAnimation
							ul
								li
									a(href="#section01") 
										p.image
											m-basePicture(src="industry_link_bg01.png")
											//- img(src="~/assets/images/contents/industry_link_bg01.png", alt="建築内装")
										p.text
											span.is-num 01
											span.is-text 建築内装
								li
									a(href="#section02")
										p.image
											m-basePicture(src="industry_link_bg02.png")
											//- img(src="~/assets/images/contents/industry_link_bg02.png", alt="船舶内装")
										p.text
											span.is-num 02
											span.is-text 船舶内装
								li
									a(href="#section03")
										p.image
											m-basePicture(src="industry_link_bg03.png")
											//- img(src="~/assets/images/contents/industry_link_bg03.png", alt="造作家具")
										p.text
											span.is-num 03
											span.is-text 造作家具


</template>

<script>

	export default {
		name: 'c-industryInnerLinkSet01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-industryInnerLinkSet01
		&>.componentWrapper
			padding-top clamp(40px, 8cqw, 120px)

			// .l-contentsWrapper

			.block.is-list
				padding 2%
				background-color #F2F2F2
				border-radius 30px

				+MQ_MAX(1340px)
					border-radius 0

				ul
					display flex
					flex-wrap wrap
					justify-content space-between

					li
						container-type inline-size
						width 32%

						// +MQ_MAX(SP_RES_WID01)
						// 	width 100%

						a
							overflow hidden
							display block

							position relative
							color inherit
							border-radius 20px
							text-decoration none

							+MQ_MAX(SP_RES_WID01)
								border-radius 10px

							&::after
								content ""
								display block
								position absolute
								top 0
								left 0
								z-index 100
								width 100%
								height 100%
								background-image url('~/assets/images/contents/industry_link_texture01.png')
								background-size 4px
								opacity 0.8
								mix-blend-mode multiply

								+MQ_MAX(SP_RES_WID01)
									background-size 2px

							.image
								width 100%

								img
									width 100%
									height auto

							.text
								position absolute
								top 50%
								left 0
								z-index 200
								width 95%
								text-align center

								transform translate3d(0, -50%, 0)

								span
									display inline-block
									font-weight bold
									
									&.is-num
										padding-right 0.2em
										color rgba(#E8E8E8, 0.8)
										font-family 'Oswald', sans-serif
										font-size clamp(1.2rem, 7cqw, 2.0rem)
										vertical-align super
										transform translate3d(0, -15%, 0)
									
									&.is-text
										color #FFF
										font-size clamp(1.8rem, 8cqw, 2.4rem)
</style>