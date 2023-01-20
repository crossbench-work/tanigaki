<template lang="pug">
	.js-inviewPoint.is-topAchievementSet01
		section.c-topAchievementSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								m-sectionTitle01(jp = '施工実績', en = 'ACHIEVEMENTS', className = 'is-animate')
						
						.block.is-slider
							.swiper-wrapper
								.swiper-slide(v-for="(achievement, index) of achievements" :key="achievement.id")
									nuxt-link(:to="'/achievements/' + achievement.id")
										.m-topAchievementSet01_slide01
											.block.is-image
												img(src="~/assets/images/contents/top_achievement_image01.png", alt="")
											.block.is-text
												h3.title.js-slideInTextAnimation.is-slideUpDownInTextAnimation {{achievement.title}}
												p.text.is-slideUpDownInTextAnimation
													span ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
									

						.block.is-progress
							span
</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	import spanWrap from '~/assets/javascript/_j_spanWrap/_j_spanWrap.js'

	let progress;
	let SLIDER_LENGTH = 3, SLIDER_CURRENT = 1;

	export default {
		name: 'c-topAchievementSet01',
		props: {
			achievements: {
				type: Array,
				required: true,
			},
		},
		mounted() {
			inView({
				className: '.js-inviewPoint.is-topAchievementSet01',
				reverse: false
			});

			progress = document.querySelector('.block.is-progress span')
			SLIDER_LENGTH = document.querySelectorAll('.m-topAchievementSet01_slide01').length;

			const mainContentsSlider = new Swiper(".c-topAchievementSet01 .block.is-slider", {
				slidesPerView: 'auto',
				spaceBetween: 3 + '%',
				centeredSlides: true,
				on: {
					afterInit: (swiper) => {
						SLIDER_CURRENT = swiper.realIndex + 1;
						progress.style.width = SLIDER_CURRENT / SLIDER_LENGTH * 100 + "%";

						spanWrap( document.querySelectorAll('.c-topAchievementSet01 .js-slideInTextAnimation') );
					},
					slideChange: (swiper) => {
						SLIDER_CURRENT = swiper.realIndex + 1;
						progress.style.width = SLIDER_CURRENT / SLIDER_LENGTH * 100 + "%";
					}
				}
			})
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-topAchievementSet01
		&>.componentWrapper
			container-type inline-size
			padding clamp(60px, 10cqw, 190px) 0
			background-image url('~/assets/images/contents/top_industry_texture01.png')

			.block.is-title
				position relative
				margin-bottom -20px
				z-index 100

			.block.is-slider
				width 37%

				will-change transform opacity

				.page-leave-active &
					transition all 0.5s ease-out
					transform translate3d(15px, 0, 0)
					opacity 0

				+MQ_MAX(SP_RES_WID01)
					width 77%

				.swiper-slide
					width 33vw
					max-width 580px

					+MQ_MAX(SP_RES_WID01)
						width 70vw
					
					a
						display block
						color inherit
						text-decoration none
			
			.block.is-progress
				overflow hidden
				position relative
				width 80%
				max-width 1000px
				height 3px
				margin 5% auto 0
				background-color #D9D9D9
				border-radius 100px

				will-change transform
				transform scaleX(0)

				.is-inview &
					transform scaleX(1.0)
					transition all 0.3s ease 1.8s

					.page-leave-active &
						transition all 0.3s 0.3s ease-out
						transform scaleX(0)

				span
					display block
					position absolute
					top 0
					left 0
					width 10%
					height 100%
					background-color #E02400

					will-change transform
					transform scaleX(0)
					transform-origin left

					.is-inview &
						transform scaleX(1.0)
						transition all 0.3s ease 2.1s

						.page-leave-active &
							transition all 0.2s ease-out
							transform scaleX(0)
				

	.m-topAchievementSet01_slide01
		container-type inline-size
		width 100%

		opacity 0

		.is-inview &
			animation-name fadeIn
			animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
			animation-fill-mode forwards
			animation-duration 0.3s
			animation-delay 0.9s

		&:hover
			.block.is-image
				img
					transform scale(1.05)

		
		.block.is-image
			overflow hidden
			width 100%
			border-radius 20px

			.is-inview &
				animation-name slideRightLeftIn
				animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
				animation-fill-mode forwards
				animation-duration 0.2s
				animation-delay 0.9s

			img
				width 100%
				height auto
				transition all 0.3s ease
		
		.block.is-text
			.title
				margin-top 4%
				color #E02400
				font-size clamp(1.2rem, 3.5cqw, 1.8rem)
				font-weight bold

				&.is-slideUpDownInTextAnimation
					span
						.is-inview &
							animation-duration 0.05s
						for num in (1..20)
							&:nth-of-type({num})
								animation-delay (1.0 + num * 0.04)s
			.text
				margin-top 2%
				font-size clamp(1.0rem, 3cqw, 1.4rem)

				&.is-slideUpDownInTextAnimation
					span
						.is-inview &
							animation-duration 0.15s
						for num in (1..20)
							&:nth-of-type({num})
								animation-delay (1.4 + num * 0.04)s
	

</style>