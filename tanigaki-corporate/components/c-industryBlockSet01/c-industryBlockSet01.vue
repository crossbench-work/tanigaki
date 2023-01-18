<template lang="pug">
	.c-industryBlockSet01_wrapper
		section.c-industryBlockSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-content
							.area.is-image
								.box.is-num
									p 01
								.box.is-image
									p.image
										img(src="https://placehold.jp/600x800.png", alt="")
							.area.is-text
								.box.is-title
									.m-border-leftTitle01
										h2.title
											span 建築内装設計施工
								.box.is-text
									h3.title 兵庫県下有数の施工対応能力
									p.text 病院・学校・ホテル・カーディーラーなど、あらゆる商業施設の木工事及び造作家具工事を設計から施工までワンストップで行います。弊社は兵庫県下では有数の施工対応力を誇ります。
								.box.is-btn
							
						.block.is-thumbnail
							.swiper-wrapper
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")


		section.c-industryBlockSet01.is-contentsLeft
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-content
							.area.is-image
								.box.is-num
									p 02
								.box.is-image
									p.image
										img(src="https://placehold.jp/600x800.png", alt="")
							.area.is-text
								.box.is-title
									.m-border-leftTitle01
										h2.title
											span 船舶内装設計施工
								.box.is-text
									h3.title 全国的にも稀な船舶内装専門業者
									p.text フェリー・商船・潜水艦・クルーザーなど、あらゆる船舶内装工事を設計から施工までワンストップで行います。全国でも数少ない船舶内装専門業者として、活躍の場は全国にわたります。
								.box.is-btn
							
						.block.is-thumbnail
							.swiper-wrapper
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")

		section.c-industryBlockSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-content
							.area.is-image
								.box.is-num
									p 03
								.box.is-image
									p.image
										img(src="https://placehold.jp/600x800.png", alt="")
							.area.is-text
								.box.is-title
									.m-border-leftTitle01
										h2.title
											span 造作家具設計施工
								.box.is-text
									h3.title 船舶内装で培った
										br
										| 堅牢で自由な設計の家具を製作
									p.text 建築内装・船舶内装における造作家具を自社工場で設計・製作します。既製品では出来ない自由な設計と、船舶内装で培った堅牢な家具をご提供します。
								.box.is-btn
							
						.block.is-thumbnail
							.swiper-wrapper
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")
								.swiper-slide
									.image
										img(src="https://placehold.jp/300x300.png", alt="")

				

</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	let thumbnailSlider = [];
	export default {
		name: 'c-industryBlockSet01',
		mounted() {
			let target = document.querySelectorAll('.c-industryBlockSet01 .block.is-thumbnail');

			[].slice.call(target).forEach(function(element, i) {
				thumbnailSlider[i] =  new Swiper(element, {
					slidesPerView: 'auto',
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

	.c-industryBlockSet01
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
			
			.block.is-thumbnail
				margin-top clamp(-180px, -18svw, -260px)
				.swiper-slide
					width 22svw
					max-width 300px
					min-width 200px

					.image
						width 100%
						img
							width 100%
							height auto
</style>