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
							a(href="")
								span.is-en HOME
								span.is-jp ホーム
						li(v-bind:class="[current == 'company' ? 'is-current' : '']")
							a(href="")
								span.is-en COMPANY
								span.is-jp 会社案内
						li(v-bind:class="[current == 'industry' ? 'is-current' : '']")
							a(href="")
								span.is-en INDUSTRY
								span.is-jp 事業内容
						li(v-bind:class="[current == 'achievements' ? 'is-current' : '']")
							a(href="")
								span.is-en ACHIEVEMENTS
								span.is-jp 施工実績
						li(v-bind:class="[current == 'factory' ? 'is-current' : '']")
							a(href="")
								span.is-en FACTORY
								span.is-jp 工場紹介
						li(v-bind:class="[current == 'news' ? 'is-current' : '']")
							a(href="")
								span.is-en NEWS
								span.is-jp 新着情報
						li.is-contact(v-bind:class="[current == 'contact' ? 'is-current' : '']")
							a(href="")
								span.is-en CONTACT
								span.is-jp お問合せ
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
	@import "~/assets/stylus/_s_mixin"

	.c-globalHeader01
		position fixed
		top 0
		left 0
		z-index 5000

		width 100%

		.componentWrapper
			display flex
			justify-content space-between
			align-items center
			flex-wrap wrap
			padding-left 50px
			
			.block.is-logo
				width 22%
				height 100%

				box-sizing border-box
				p.logo
					max-width 295px
					width 100%
					img
						width 100%
						height auto

						&.is-white
							filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(137deg) brightness(103%) contrast(101%);
			
			.block.is-nav
				width 75%

				@media (max-width: 850px) {
					display none
				}

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
	
	
</style>