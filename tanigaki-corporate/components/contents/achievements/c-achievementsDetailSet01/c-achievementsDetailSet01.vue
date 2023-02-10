<template lang="pug">
	.js-inviewPoint
		section.c-achievementsDetailSet01.is-fadeInAnimation
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-mainvisual
							.area.is-image
								p.image(:style="`background-image: url(${achievement.mainImage.url}?w=1360&fm=webp)`")
							.area.is-text
								h2.title
									span {{ achievement.title }}
								dl
									dt 竣工年月：
									dd {{ achievement.date }}
									dt 所在地：
									dd {{ achievement.location }}
									dt 施工：
									dd {{ achievement.client }}
									dt 担当業務：
									dd {{ achievement.role }}

						.block.is-text
							.l-contentsWrapper.is-small
								.area.is-text(v-for="(content, index) of achievement.content" :key="content.id")
									p.text {{ content.achievement_content }}

						.block.is-list
							.l-contentsWrapper.is-small
								ul
									li(v-for="(image, index) of achievement.images" :key="image.id").js-imageGroup

										p.image(:style="`background-image: url(${image.image.url}?w=490&fm=webp)`" @click="$set(open, index, true)")

										vue-modaltor(:visible="open[index]")
											template(#body)
												.c-modalContent(@click="$set(open, index, false)")
													.componentWrapper
														.block.is-content
															.area.is-close(@click="$set(open, index, false)")
																.close
																	span
																	span
															.area.is-image
																.largeImage
																	img(:src="`${image.image.url}?w=640&fm=webp`")

															.area.is-text(v-if = "image.caption")
																p.text {{ image.caption }}


										

						.block.is-btn
							m-borderBtn01(url = "/achievements/", text="BACK")
							
</template>

<script>
	
	export default {
		name: 'c-achievementsDetailSet01',
		data() {
			return {
				open: [],
			}
		},
		props: {
			achievement: {}
		},
		mounted() {
			// let _t = this;
			// [].slice.call(document.querySelectorAll('.js-imageGroup')).forEach(function(element, i) {
			// 	_t.open[i] = false;
			// });
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-achievementsDetailSet01
		position relative
		z-index 9000
		&>.componentWrapper
			padding clamp(40px, 8cqw, 120px) 0

			.block.is-mainvisual
				position relative
				
				.area.is-image
					position relative
					width 100%
					padding-top 50%
					overflow hidden

					.image
						position absolute
						top 0
						left 0
						width 100%
						height 100%
						border-radius 30px
						background-size cover
						background-position center
						background-repeat no-repeat

						+MQ_MAX(600px)
							border-radius 10px

				.area.is-text
					position absolute
					bottom 0
					left 0
					width 55%
					max-width 780px
					padding 2% 4% 0
					border-top-right-radius 30px
					box-sizing border-box
					background-color #FFF

					+MQ_MAX(600px)
						position relative
						width 100%
						max-width 100%
						padding 4% 0 0

					.title
						color #040278
						font-size clamp(1.6rem, 3cqw, 2.8rem)
						font-weight bold
					dl
						display flex
						flex-wrap wrap
						margin-top 1%
						font-size clamp(1.2rem, 1.5cqw, 1.4rem)
						dt
							font-weight bold
						dd
							margin-right 1em
							

			.block.is-text
				margin-top 6%

			.block.is-list
				margin-top 6%

				.modaltor
					z-index 9990
					.modaltor__overlay
						position relative
						background-color transparent !important

						&::before
						&::after
							content ""
							display block
							position absolute
							top 0
							left 0
							width 100%
							height 100%

						&::before
							background-color rgba(0, 0, 0, 0.5)
						
						&:after
							background-image url('~/assets/images/contents/industry_link_texture01.png')
							background-size 4px
							mix-blend-mode multiply
							opacity 0.6

				.modaltor__panel
					// max-width 800px
					overflow visible
					width 100% !important
					background transparent !important
					box-shadow none

				.modaltor__close
					display none
				.modaltor__content
					width 100%
					margin 0 auto
				

				.c-modalContent
					
					&>.componentWrapper
						width 80%
						max-width 800px
						margin 0 auto
						.block.is-content
							position relative
							.area.is-close
								cursor pointer
								position absolute
								top 0
								left 0
								width 40px
								height 40px
								background-color #000
								border-radius 100px
								transform translate3d(-30%, -30%, 0)

								.close
									position absolute
									top 50%
									left 50%
									width 20px
									height 20px
									transform translate3d(-50%, -50%, 0)

									span
										display block
										position absolute
										left 0
										width 133%
										height 1px
										background-color #FFF

										&:nth-of-type(1)
											top 0
											transform rotate(45deg)
											transform-origin left top
										&:nth-of-type(2)
											bottom 0
											transform rotate(-45deg)
											transform-origin left bottom

							.area.is-image
								max-height 80svh
								overflow-y scroll
								overflow-x hidden
								border-radius 30px
								.largeImage
									
									width 100%

									img
										width 100%
							.area.is-text
								display flex
								justify-content center
								margin-top 10px
								.text
									padding 5px 20px
									background-color #FFF
									border-radius 100px

				ul
					display flex
					flex-wrap wrap
					justify-content space-between
					
					li
						cursor pointer
						overflow hidden
						position relative
						width 49%
						padding-top 30%
						border-radius 20px
						&:hover
							.image
								transform scale(1.05)
						+MQ_MAX(600px)
							border-radius 10px

						&:nth-of-type(n + 3)
							margin-top 2%
						
						.image
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							background-size cover
							background-position center
							background-repeat no-repeat
							transition all 0.3s ease
						

			.block.is-btn
				display flex
				justify-content center
				margin-top 6%

			
</style>