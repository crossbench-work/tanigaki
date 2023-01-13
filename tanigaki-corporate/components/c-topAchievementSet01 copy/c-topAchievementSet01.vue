<template lang="pug">
	section.c-topAchievementSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01
								span.is-jp 施工実績
								span.is-en ACHIEVEMENTS
					
					.block.is-slider
						.swiper-wrapper
							.swiper-slide
								.m-topAchievementSet01_slide01
									.block.is-image
										img(src="~/assets/images/contents/top_achievement_image01.png", alt="")
									.block.is-text
										h3.title 実績先を記入
										p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							.swiper-slide
								
								.m-topAchievementSet01_slide01
									.block.is-image
										img(src="~/assets/images/contents/top_achievement_image02.png", alt="")
									.block.is-text
										h3.title 実績先を記入
										p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							.swiper-slide
								.m-topAchievementSet01_slide01
									.block.is-image
										img(src="~/assets/images/contents/top_achievement_image03.png", alt="")
									.block.is-text
										h3.title 実績先を記入
										p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							.swiper-slide
								.m-topAchievementSet01_slide01
									.block.is-image
										img(src="~/assets/images/contents/top_achievement_image01.png", alt="")
									.block.is-text
										h3.title 実績先を記入
										p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							.swiper-slide
								
								.m-topAchievementSet01_slide01
									.block.is-image
										img(src="~/assets/images/contents/top_achievement_image02.png", alt="")
									.block.is-text
										h3.title 実績先を記入
										p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							.swiper-slide
								.m-topAchievementSet01_slide01
									.block.is-image
										img(src="~/assets/images/contents/top_achievement_image03.png", alt="")
									.block.is-text
										h3.title 実績先を記入
										p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります

					.block.is-progress
						span
</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'

	let progress;
	let SLIDER_LENGTH = 3, SLIDER_CURRENT = 1;

	export default {
		name: 'c-topAchievementSet01',
		
		mounted() {
			progress = document.querySelector('.block.is-progress span')
			SLIDER_LENGTH = document.querySelectorAll('.m-topAchievementSet01_slide01').length;

			const mainContentsSlider = new Swiper(".c-topAchievementSet01 .block.is-slider", {
				slidesPerView: 'auto',
				spaceBetween: 6 + '%',
				on: {
					afterInit: (swiper) => {
						SLIDER_CURRENT = swiper.realIndex + 1;
						progress.style.width = SLIDER_CURRENT / SLIDER_LENGTH * 100 + "%";
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
				width 33vw
				max-width 580px
			
			.block.is-progress
				overflow hidden
				position relative
				width 80%
				max-width 1000px
				height 3px
				margin 5% auto 0
				background-color #D9D9D9
				border-radius 100px

				span
					display block
					position absolute
					top 0
					left 0
					width 10%
					height 100%
					background-color #E02400
					transition all 0.3s ease
				

	.m-topAchievementSet01_slide01
		container-type inline-size
		
		.block.is-image
			overflow hidden
			width 100%
			border-radius 20px

			img
				width 100%
				height auto
		
		.block.is-text
			.title
				margin-top 4%
				color #E02400
				font-size clamp(1.2rem, 3.5cqw, 1.8rem)
				font-weight bold
			.text
				margin-top 2%
				font-size clamp(1.0rem, 3cqw, 1.4rem)
	

</style>