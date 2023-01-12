<template lang="pug">
	section.c-topIndustrySet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						h2.m-sectionTitle01
							span.is-jp 事業案内
							span.is-en INDUSTRY

					.block.is-slider
						.swiper-wrapper
							.swiper-slide
								.m-topIndustrySet01_slide01
									.block.is-bg
									.block.is-text
										h3.title 建築内装設計施工
										p.text 病院・学校・ホテル・カーディーラーなど、あらゆる商業施設の木工事及び造作家具工事を設計から施工までワンストップで行います。
							.swiper-slide
								.m-topIndustrySet01_slide01
									.block.is-bg
									.block.is-text
										h3.title 建築内装設計施工
										p.text 病院・学校・ホテル・カーディーラーなど、あらゆる商業施設の木工事及び造作家具工事を設計から施工までワンストップで行います。
							.swiper-slide
								.m-topIndustrySet01_slide01
									.block.is-bg
									.block.is-text
										h3.title 建築内装設計施工
										p.text 病院・学校・ホテル・カーディーラーなど、あらゆる商業施設の木工事及び造作家具工事を設計から施工までワンストップで行います。

</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	// Swiper.use([Navigation, Pagination, EffectFade]);
	let _g;

	export default {
		name: 'c-topIndustrySet01',
		
		mounted() {

			const mainContentsSlider = new Swiper(".c-topIndustrySet01 .block.is-slider", {
				slidesPerView: 2.2,
				spaceBetween: 10,
				// autoHeight: true,
				// effect: 'fade',
				// fadeEffect: {
				// 	crossFade: true
				// },
				// allowTouchMove: false,
				// navigation: {
				// 	nextEl: ".swiper-button-next",
				// 	prevEl: ".swiper-button-prev",
				// },
				// breakpoints: {
				// 	900: {
				// 		autoHeight: false,
				// 	},
				// }
			});

		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"

	.c-topIndustrySet01
		overflow hidden

		// .block.is-slider
		// 	.swiper-slide
		// 		width 33vw
		// 		background-color #F00
	.m-topIndustrySet01_slide01
		position relative
		.block.is-bg
			width 100%
			padding-top 100%
			background-color #F00
		.block.is-text
			position absolute
			right 0
			bottom 0
			width 60%

</style>