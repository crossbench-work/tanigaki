<template lang="pug">
	.factoryBlockSet01_wrapper
		.js-inviewPoint
			section.c-factoryBlockSet01.is-contentsLeft
				.componentWrapper
					.l-contentsWrapper
						.l-mqWrapper
							.block.is-content
								.area.is-image.is-fadeInAnimation
									.box.is-image
										p.image
											img(src="~/assets/images/contents/factory_main_image01.png", alt="設計部 本社事務所棟").is-pc
											img(src="~/assets/images/contents/factory_main_image01_sp.png", alt="設計部 本社事務所棟").is-sp
								.area.is-text
									.box.is-title
										m-border-leftTitle01(text = "設計部", smallText = "本社事務所棟" className = "is-animate")
									.box.is-text.is-fadeInAnimation
										h3.title 蓄積された実績により
											br
											| ご要望をカタチにする頭脳集団
										p.text 全ての仕事は設計から始まります。 お客様との打ち合わせにより、ご要望を図面に表現します。 蓄積された実績により、機能性・意匠性・コスト効率性を最適化したご提案をします。
									.box.is-btn
							.block.is-lists.is-fadeInAnimation
								.swiper-wrapper
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。
		.js-inviewPoint
			section.c-factoryBlockSet01
				.componentWrapper
					.l-contentsWrapper
						.l-mqWrapper
							.block.is-content
								.area.is-image.is-fadeInAnimation
									.box.is-image
										p.image
											img(src="~/assets/images/contents/factory_main_image02.png", alt="家具工房 本社工場").is-pc
											img(src="~/assets/images/contents/factory_main_image02_sp.png", alt="家具工房 本社工場").is-sp
								.area.is-text
									.box.is-title
										m-border-leftTitle01(text = "家具工房", smallText = "本社工場" className = "is-animate")

									.box.is-text.is-fadeInAnimation
										h3.title 蓄積された実績により
											br
											| ご要望をカタチにする頭脳集団
										p.text 全ての仕事は設計から始まります。 お客様との打ち合わせにより、ご要望を図面に表現します。 蓄積された実績により、機能性・意匠性・コスト効率性を最適化したご提案をします。
									.box.is-btn
							.block.is-lists.is-fadeInAnimation
								.swiper-wrapper
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。
									.swiper-slide
										p.image
											img(src="https://placehold.jp/380x300.png", alt="")
										h4.title 紹介する部門の強み
										p.text 設計部の強みやできることを写真を使って端的に伝えます。設計部の強みやできることを写真を使って端的に伝えます。

</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	let thumbnailSlider = [];
	export default {
		name: 'c-factoryBlockSet01',
		mounted() {

			let target = document.querySelectorAll('.c-factoryBlockSet01 .block.is-lists');

			[].slice.call(target).forEach(function(element, i) {
				thumbnailSlider[i] =  new Swiper(element, {
					slidesPerView: 'auto',
					spaceBetween: 2 + '%',
					loop: true,
				})
			});
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-factoryBlockSet01
		&:last-child
			&>.componentWrapper
				padding-botom 0
			&.is-contentsLeft
				display block
				&>.componentWrapper
					background-image url('~/assets/images/contents/top_industry_texture01.png')

					.block.is-content
						.area.is-image
							order 1

			&>.componentWrapper
				padding clamp(40px, 8cqw, 120px) 0

				.block.is-content
					display flex
					flex-wrap wrap

					.area.is-image
						position relative
						width 45%
						z-index 100

						+MQ_MAX(600px)
							width 100%
						
						.box.is-image
							
							p.image
								overflow hidden
								width 100%
								border-radius 20px

								img
									width 100%
									height auto

									&.is-pc
										+MQ_MAX(600px)
											display none
									&.is-sp
										display none
										+MQ_MAX(600px)
											display block

										

					.area.is-text
						width 38%
						padding 6% 6% 0

						+MQ_MAX(600px)
							order 1
							width 100%
							padding 5% 0 0

						.box.is-text
							margin-top 8%

							+MQ_MAX(600px)
								margin-top 4%

							.title
								color #E02400
								font-size clamp(1.2rem, 7cqw, 1.8rem)
								font-weight bold
							
							.text
								margin-top 2%
								font-size clamp(1.0rem, 6cqw, 1.4rem)

						.box.is-btn
							margin-top 4%
				
			.block.is-lists
				margin-top clamp(-60px, -13svw, -200px)
				
				+MQ_MAX(SP_RES_WID01)
					margin-top 5%

				.swiper-slide
					width 24svw
					max-width 380px
					min-width 240px

					+MQ_MAX(SP_RES_WID01)
						width 30svw
						max-width 300px
						min-width 200px

					.image
						overflow hidden
						width 100%
						border-radius 10px
						img
							width 100%
							height auto
					
					.title
						margin-top 4%
						color #E02400
						font-size clamp(1.2rem, 2.5cqw, 1.6rem)
						font-weight bold
					
					.text
						margin-top 2%
						font-size clamp(1.0rem, 2cqw, 1.4rem)
</style>