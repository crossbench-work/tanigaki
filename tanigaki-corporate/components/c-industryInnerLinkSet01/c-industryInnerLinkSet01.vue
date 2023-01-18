<template lang="pug">
	aside.c-industryInnerLinkSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-list
						.l-contentsWrapper.is-small
							ul
								li
									a(href="") 
										p.image
											img(src="https://placehold.jp/310x180.png", alt="")
										p.text
											span.is-num 01
											span.is-text 建築内装
								li
									a(href="")
										p.image
											img(src="https://placehold.jp/310x180.png", alt="")
										p.text
											span.is-num 02
											span.is-text 船舶内装
								li
									a(href="")
										p.image
											img(src="https://placehold.jp/310x180.png", alt="")
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

			.l-contentsWrapper
				padding 2% 0
				background-color #F2F2F2
				border-radius 30px

			.block.is-list
				ul
					display flex
					flex-wrap wrap
					justify-content space-between

					li
						width calc(33.3% - 20px)

						a
							overflow hidden
							display block

							position relative
							color inherit
							border-radius 20px
							text-decoration none

							.image
								width 100%

								img
									width 100%
									height auto

							.text
								position absolute
								top 50%
								left 50%
								transform translate3d(-50%, -50%, 0)
</style>