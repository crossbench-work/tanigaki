<template lang="pug">
	footer.c-globalFooter01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-logo
						.l-contentsWrapper.is-middle
							.area.is-logo
								p.logo
									img(src="~/assets/images/common/common_logo01.svg" alt="谷垣工業株式会社").is-white
							.area.is-text
								p.address 〒655-0003 兵庫県神戸市垂水区小束山本町1丁目5番1号
								ul.tel
									li FAX:078-782-6270
									li TEL:078-784-0111 
					.block.is-map
						.map
							iframe(src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13126.738626034177!2d135.056876!3d34.662666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8cf67612ccf19cde!2z6LC35Z6j5bel5qWt77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1673837777759!5m2!1sja!2sjp")
					.block.is-nav
						nav.is-global
							.l-contentsWrapper.is-middle
								ul
									li
										a(href="/")
											span.is-jp ホーム
									li
										nuxt-link(to="/company/")
											span.is-jp 会社案内
									li
										nuxt-link(to="/industry/")
											span.is-jp 事業内容
									li
										nuxt-link(to="/achievements/")
											span.is-jp 施工実績
									li
										nuxt-link(to="/factory/")
											span.is-jp 工場紹介
									li
										nuxt-link(to="/news/")
											span.is-jp 新着情報
									li
										nuxt-link(to="/contact/")
											span.is-jp お問合せ
					.block.is-copyright
						.l-contentsWrapper.is-middle
							p.copyright 〒655-0003 ©Copyright 2023 Tanigaki Kogyo. All Rights Reserved
</template>

<script>
	export default {
		name: 'c-globalFooter01',
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.page-enter
	.page-leave-active
		.c-globalFooter01
			.componentWrapper
				background-color transparent

				.block.is-map
					opacity 0
	
	.c-globalFooter01
		
		.componentWrapper
			display block
			padding clamp(40px, 6cqw, 100px) 0
			background-color #000000
			background-image url('~/assets/images/common/common_footer_texture01.png')

			transition all 0.5s 0.2s ease-in-out
			will-change color

			.block.is-logo
				box-sizing border-box

				.l-contentsWrapper
					container-type inline-size
					display flex
					justify-content space-between

					+MQ_MAX(SP_RES_WID01)
						flex-direction column
						gap 3svw

					.area.is-logo
						p.logo
							width 100%
							max-width 295px
							height 100%

							+MQ_MAX(SP_RES_WID01)
								max-width 200px
							img
								width 100%
								height auto

								&.is-white
									filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(137deg) brightness(103%) contrast(101%);
					
					.area.is-text
						color #FFF
						font-size clamp(1.0rem, 6cqw, 1.4rem)

						+MQ_MAX(SP_RES_WID01)
							font-size clamp(1.0rem, 2.5cqw, 1.4rem)
						.tel
							display flex
							flex-wrap wrap
							gap 20px
							margin-top 2%

							+MQ_MAX(SP_RES_WID01)
								margin-top 1%
			.block.is-map
				margin-top 3%

				transition all 0.5s ease-in-out
				will-change opacity 

				.map
					overflow hidden
					position relative
					width 100%
					height 460px
					background-color #DFDFDF
					border-radius 20px

					iframe
						position absolute
						top 0
						left 0
						width 100%
						height 100%

					+MQ_MAX(SP_RES_WID01)
						height 300px
			
			.block.is-nav
				margin-top 3%
				nav.is-global
					container-type inline-size
					ul
						display flex
						column-gap 6%
						flex-wrap wrap

						+MQ_MAX(SP_RES_WID01)
							column-gap 0
							row-gap 2svw
					li
						+MQ_MAX(SP_RES_WID01)
							width 50%
						a
							color #FFF
							text-decoration none

							span
								font-size clamp(1.2rem, 1.5cqw, 1.6rem)
			
			.block.is-copyright
				container-type inline-size
				margin-top 3%
				.copyright
					padding-top 3%
					color #FFF
					border-top 1px solid rgba(#D9D9D9, 0.2)
					font-size clamp(1.0rem, 1.1cqw, 1.2rem)
</style>