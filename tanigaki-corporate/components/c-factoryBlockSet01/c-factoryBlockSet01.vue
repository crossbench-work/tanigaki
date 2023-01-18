<template lang="pug">
	.factoryBlockSet01_wrapper
		section.c-factoryBlockSet01.is-contentsLeft
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-content
							.area.is-image
								.box.is-image
									p.image
										img(src="https://placehold.jp/600x800.png", alt="")
							.area.is-text
								.box.is-title
									.m-border-leftTitle01
										h2.title
											span 設計部
											span.is-small 本社事務所棟
								.box.is-text
									h3.title 蓄積された実績により
										br
										| ご要望をカタチにする頭脳集団
									p.text 全ての仕事は設計から始まります。 お客様との打ち合わせにより、ご要望を図面に表現します。 蓄積された実績により、機能性・意匠性・コスト効率性を最適化したご提案をします。
								.box.is-btn
						.block.is-lists
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
		
		section.c-factoryBlockSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-content
							.area.is-image
								.box.is-image
									p.image
										img(src="https://placehold.jp/600x800.png", alt="")
							.area.is-text
								.box.is-title
									.m-border-leftTitle01
										h2.title
											span 設計部
											span.is-small 本社事務所棟
								.box.is-text
									h3.title 蓄積された実績により
										br
										| ご要望をカタチにする頭脳集団
									p.text 全ての仕事は設計から始まります。 お客様との打ち合わせにより、ご要望を図面に表現します。 蓄積された実績により、機能性・意匠性・コスト効率性を最適化したご提案をします。
								.box.is-btn
						.block.is-lists
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

					.box.is-num
						position absolute
						top -0.2em
						left 5%

						color rgba(#E8E8E8, 0.8)

						font-family 'Oswald', sans-serif
						font-size clamp(9.0rem, 13cqw, 18.0rem)
						font-weight bold
						line-height 0.75
					
					.box.is-image
						p.image
							overflow hidden
							width 100%
							border-radius 20px
							img
								width 100%
								height auto

				.area.is-text
					width 38%
					padding 6% 6% 0

					.box.is-text
						margin-top 8%

						.title
							color #E02400
							font-size clamp(1.2rem, 7cqw, 1.8rem)
							font-weight bold
						
						.text
							margin-top 2%
							font-size clamp(1.0rem, 6cqw, 1.4rem)
			
			.block.is-lists
				margin-top clamp(-180px, -18svw, -260px)
				.swiper-slide
					width 24svw
					max-width 380px
					min-width 240px

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
						font-size clamp(1.2rem, 7cqw, 1.6rem)
						font-weight bold
					
					.text
						margin-top 2%
						font-size clamp(1.0rem, 6cqw, 1.4rem)
</style>