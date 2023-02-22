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
							//- nuxt-link(to="/")
							//- 	span.is-en HOME
							//- 	span.is-jp ホーム
							a(href="/") 
								span.is-en HOME
								span.is-jp ホーム
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
			.block.is-spNav(v-bind:class="spMenuBtnSet")
				nav.is-global
					ul
						li(v-bind:class="[current == 'home' ? 'is-current' : '']")
							nuxt-link(to="/")
								span.is-en
									span HOME
								span.is-jp
									span ホーム
							//- a(href="/") 
								
						li(v-bind:class="[current == 'company' ? 'is-current' : '']")
							nuxt-link(to="/company/")
								span.is-en
									span COMPANY
								span.is-jp
									span 会社案内
						li(v-bind:class="[current == 'industry' ? 'is-current' : '']")
							nuxt-link(to="/industry/")
								span.is-en
									span INDUSTRY
								span.is-jp
									span 事業内容
						li(v-bind:class="[current == 'achievements' ? 'is-current' : '']")
							nuxt-link(to="/achievements/")
								span.is-en
									span ACHIEVEMENTS
								span.is-jp
									span 施工実績
						li(v-bind:class="[current == 'factory' ? 'is-current' : '']")
							nuxt-link(to="/factory/")
								span.is-en
									span FACTORY
								span.is-jp
									span 工場紹介
						li(v-bind:class="[current == 'news' ? 'is-current' : '']")
							nuxt-link(to="/news/")
								span.is-en
									span NEWS
								span.is-jp
									span 新着情報
						li.is-contact(v-bind:class="[current == 'contact' ? 'is-current' : '']")
							nuxt-link(to="/contact/")
								span.is-en
									span CONTACT
								span.is-jp
									span お問合せ
			
			.block.is-btn(v-bind:class="spMenuBtnSet" @click="spBtn = !spBtn")
				.btn
					span
					span
					span
			
</template>

<script>
	export default {
		name: 'c-globalHeader01',
		transition: "header",
		data () {
			return {
				spBtn: false
			}
		},
		props: {
			current: {
				type: String,
				default: 'home'
			},
		},
		computed:{
			spMenuBtnSet: function(){
				return {
					close: this.spBtn,
					open: !this.spBtn
				}
			}
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.page-enter
	.page-leave-active
		.c-globalHeader01
			+MQ_MIN(SP_RES_WID01)
				transform translate3d(0, -101%, 0)

	.c-globalHeader01
		position fixed
		top 0
		left 0
		z-index 5000

		width 100%

		transform translate3d(0, 0, 0)
		transition all 0.5s cubic-bezier(0,-0.06,0,1.01)

		will-change transform

		&.is-blue
			.componentWrapper
				.block.is-nav

					nav

						li
							color #040278

							&.is-current
							&.is-contact
								color #FFF
							
							a
								background-color rgba(#FFF, 0.2)
				.block.is-logo
					p.logo
						img
							&.is-white
								filter: invert(0%) sepia(80%) saturate(7475%) hue-rotate(333deg) brightness(98%) contrast(104%);
		
		&.is-white
			.componentWrapper
				.block.is-nav

					nav

						li
							color #000

							&.is-current
							&.is-contact
								color #FFF
							
							a
								background-color rgba(#FFF, 0.2)

				.block.is-logo
					p.logo
						img
							&.is-white
								filter: invert(0%) sepia(80%) saturate(7475%) hue-rotate(333deg) brightness(98%) contrast(104%);

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
							&.is-contact
								a
									background-color #e02400
							a
								background-color #e02400


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
							background-color rgba(#000, 0.05)
							border-bottom 1px solid rgba(#FFFFFF, 0.2)
							border-left 1px solid rgba(#FFFFFF, 0.2)
							text-decoration none

							transition all 0.3s ease

							&:hover
								color #FFF !important
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
			
			.block.is-spNav
				overflow hidden
				display none
				position absolute
				top 0
				left 0
				width 100svw
				height 0
				z-index 100
				transition all 0.2s 0.2s linear

				+MQ_MAX(SP_RES_WID01)
					display block

				&::after
					content ""
					position absolute
					top 0
					right 0
					z-index 0
					width 0
					height 0
					background-color rgba(0, 0, 0, 0.96)
					transition all 0.3s 0.2s ease-in-out
				
				&.close
					height 100svh
					transition all 0.2s ease-in-out
					&::after
						width 100svw
						height 100svh

						.page-leave-active &
							width 0
							height 0
					
					ul
						li
							&:nth-of-type(2n)
								a
									&::after
										transform scaleY(1.0)
										transition all 0.2s 0.6s ease-in-out

										.page-leave-active &
											transform scaleY(0)
											transition all 0.2s ease-in-out
										
							a
								&::before
									transform scaleX(1.0)
									transition all 0.2s 0.6s ease-in-out

									.page-leave-active &
										transform scaleX(0)
										transition all 0.2s ease-in-out

								&>span
									span
										transform translate3d(0, 0, 0)
										transition all 0.2s 0.8s ease-in-out

										.page-leave-active &
											transform translate3d(0, 101%, 0)
											transition all 0.2s ease-in-out

					
				ul
					position relative
					z-index 1000
					display flex
					flex-wrap wrap

					li
						width 50%
						height calc(100svh / 4)

						&:nth-of-type(2n)
							a
								&::after
									content ""
									display block
									position absolute
									left 0
									bottom 0
									width 1px
									height 100%
									background-color rgba(255, 255, 255, 0.2)
									transform scaleY(0)
									transition all 0.2s ease-in-out


						&.is-contact
							width 100%

							a
								&::before
									content ""
									display block
									position absolute
									top 0
									left 0
									width 100%
									height 100%
									background-color #e02400

								&:hover
									background-color #e02400

						a
							display flex
							flex-direction column
							align-items center
							justify-content center
							position relative
							width 100%
							height 100%
							color #FFF
							text-decoration none

							&::before
								content ""
								display block
								position absolute
								left 0
								bottom 0
								width 100%
								height 1px
								background-color rgba(255, 255, 255, 0.2)
								transform scaleX(0)
								transition all 0.2s ease-in-out

							&>span
								overflow hidden
								display block
								line-height 1.0
								font-weight bold

								&.is-en
									font-family 'Oswald', sans-serif
									font-size clamp(1.0rem, 16cqw, 1.8rem)
								&.is-jp
									margin-top 1em
									font-size clamp(1.0rem, 11cqw, 1.3rem)
								
								span
									display block
									transform translate3d(0, 101%, 0)
									transition all 0.2s ease-in-out


			
			.block.is-btn
				display none
				cursor pointer
				position absolute
				top 0
				right 0
				z-index 2000
				width 14svw
				min-width 60px
				height 14svw
				min-height 60px
				background-color #000
				transition all 0.5s cubic-bezier(0,-0.06,0,1.01)

				.page-enter &
				.page-leave-active &
					transform translate3d(0, -101%, 0)

				+MQ_MAX(SP_RES_WID01)
					display block

				&.close

					.btn
						span
							&:nth-of-type(1)
								top 0
								transform rotate(45deg)

							&:nth-of-type(2)
								transform translate3d(-100%, -50%, 0)

							&:nth-of-type(3)
								bottom 0
								transform rotate(-45deg)

				.btn
					overflow hidden
					position absolute
					top 50%
					left 50%
					z-index 100
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
							transition all 0.3s ease-in-out
							transform-origin left

						&:nth-of-type(2)
							top 50%
							transform translate3d(0, -50%, 0)
							transition all 0.3s ease-in-out

						&:nth-of-type(3)
							bottom 0
							transition all 0.3s ease-in-out
							transform-origin left bottom

	
</style>