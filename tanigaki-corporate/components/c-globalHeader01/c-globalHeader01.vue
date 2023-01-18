<template lang="pug">
	header.c-globalHeader01
		.componentWrapper
			.block.is-logo
				p.logo
					img(src="~/assets/images/common/common_logo01.svg" alt="谷垣工業株式会社").is-white
			.block.is-nav
				nav.is-global
					ul
						li(v-bind:class="[current == 'home' ? 'is-current' : '']")
							nuxt-link(to="/")
								span.is-en HOME
								span.is-jp ホーム
							//- a(href="/") 
								
						li(v-bind:class="[current == 'company' ? 'is-current' : '']")
							nuxt-link(to="/company/")
								span.is-en COMPANY
								span.is-jp 会社案内
						li(v-bind:class="[current == 'industry' ? 'is-current' : '']")
							nuxt-link(to="/industry/")
								span.is-en INDUSTRY
								span.is-jp 事業内容
						li(v-bind:class="[current == 'achievements' ? 'is-current' : '']")
							nuxt-link(to="/achievements/")
								span.is-en ACHIEVEMENTS
								span.is-jp 施工実績
						li(v-bind:class="[current == 'factory' ? 'is-current' : '']")
							nuxt-link(to="/factory/")
								span.is-en FACTORY
								span.is-jp 工場紹介
						li(v-bind:class="[current == 'news' ? 'is-current' : '']")
							nuxt-link(to="/news/")
								span.is-en NEWS
								span.is-jp 新着情報
						li.is-contact(v-bind:class="[current == 'contact' ? 'is-current' : '']")
							nuxt-link(to="/contact/")
								span.is-en CONTACT
								span.is-jp お問合せ
			.block.is-btn
				.btn
					span
					span
					span
</template>

<script>
	export default {
		name: 'c-globalHeader01',
		props: {
			current: {
				type: String,
				default: 'home'
			},
		},
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-globalHeader01
		position fixed
		top 0
		left 0
		z-index 5000

		width 100%

		+MQ_MAX(SP_RES_WID01)
			padding-top 3%

		.componentWrapper
			display flex
			justify-content space-between
			align-items center
			flex-wrap wrap
			padding-left 50px

			+MQ_MAX(SP_RES_WID01)
				padding-left 3%
			
			.block.is-logo
				width 22%
				height 100%

				box-sizing border-box

				+MQ_MAX(SP_RES_WID01)
					width 40%

				p.logo
					max-width 295px
					width 100%
					min-width 180px
					img
						width 100%
						height auto

						&.is-white
							filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(137deg) brightness(103%) contrast(101%);
			
			.block.is-nav
				width 75%
				+MQ_MAX(SP_RES_WID01)
					display none

				nav
					ul
						display flex
						justify-content flex-end

					li
						position relative
						width 20%
						max-width 148px
						padding-top 12.9%
						color #FFFFFF

						

						&.is-contact
							a
								background-color #000000
								border none

								&:hover
									background-color #e02400
						
						&.is-current
							a
								background-color rgba(#000, 0.1)


						a
							container-type inline-size

							display flex
							flex-direction column
							justify-content center
							align-items center

							position absolute
							top 0
							left 0
							width 100%
							height 100%
							color inherit
							background-color rgba(#000, 0)
							border-bottom 1px solid rgba(#FFFFFF, 0.2)
							border-left 1px solid rgba(#FFFFFF, 0.2)
							text-decoration none

							transition all 0.3s ease

							&:hover
								background-color rgba(#000, 0.6)


						span
							display block
							line-height 1.0
							font-weight bold

							&.is-en
								font-family 'Oswald', sans-serif
								font-size clamp(1.0rem, 16cqw, 1.8rem)
							&.is-jp
								margin-top 10%
								font-size clamp(1.0rem, 11cqw, 1.3rem)
			
			.block.is-btn
				display none
				cursor pointer
				position absolute
				top 0
				right 0
				width 14svw
				min-width 60px
				height 14svw
				min-height 60px
				background-color #000

				+MQ_MAX(SP_RES_WID01)
					display block

				.btn
					position absolute
					top 50%
					left 50%
					width 30%
					padding-top 24%
					transform translate3d(-50%, -50%, 0)

					span
						display block
						position absolute
						left 0
						width 100%
						height 2px
						background-color #FFF
						border-radius 100px

						&:nth-of-type(1)
							top 0

						&:nth-of-type(2)
							top 50%
							transform translate3d(0, -50%, 0)

						&:nth-of-type(3)
							bottom 0

	
</style>