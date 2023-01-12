<template lang="pug">
	section.c-topIndustrySet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01
								span.is-jp 事業案内
								span.is-en INDUSTRY

					.block.is-slider
						.swiper-wrapper
							.swiper-slide
								.m-topIndustrySet01_slide01
									.block.is-bg(data-slide = 'top_industory_bg01.png')
									.block.is-text
										h3.title 建築内装設計施工
										p.text 病院・学校・ホテル・カーディーラーなど、あらゆる商業施設の木工事及び造作家具工事を設計から施工までワンストップで行います。
							.swiper-slide
								.m-topIndustrySet01_slide01
									.block.is-bg(data-slide = 'top_industory_bg02.png')
									.block.is-text
										h3.title 船舶内装設計施工
										p.text フェリー・商船・潜水艦・クルーザーなど、あらゆる船舶内装工事を設計から施工までワンストップで行います。
							.swiper-slide
								.m-topIndustrySet01_slide01
									.block.is-bg(data-slide = 'top_industory_bg03.png')
									.block.is-text
										h3.title 造作家具設計施工
										p.text 建築内装・船舶内装における造作家具を自社工場で設計・製作します。既製品では出来ない自由な設計と、船舶内装で培った堅牢な家具をご提供します。

</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	// Swiper.use([Navigation, Pagination, EffectFade]);
	let _g;
	let slideBgCanvas, app = [], sliderBg = [], bgMask01 = [], texture01 = [], bgTexture01 = [];

	export default {
		name: 'c-topIndustrySet01',
		
		mounted() {

			slideBgCanvas = document.querySelectorAll('.m-topIndustrySet01_slide01 .block.is-bg');

			const mainContentsSlider = new Swiper(".c-topIndustrySet01 .block.is-slider", {
				slidesPerView: 'auto',
				spaceBetween: 10,

				on: { // イベントを登録する
					afterInit: (swiper) => {
						[].slice.call(slideBgCanvas).forEach(function(element, i) {
						
						app[i] = new PIXI.Application({
							width: element.clientWidth * 2,
							height: element.clientHeight * 2,
							// backgroundColor: 0xffffff,
							resolution: 1,
							autoDensity: true,
							transparent: true,
							backgroundAlpha: 0
							// resizeTo: window
						});
						
						element.appendChild(app[i].view);

						if(i == 1) {
							bgMask01[i] = PIXI.Sprite.from('/images/contents/top_industory_mask02.png');
						} else {
							bgMask01[i] = PIXI.Sprite.from('/images/contents/top_industory_mask01.png');
						}

						

						sliderBg[i] = PIXI.Sprite.from('/images/contents/' + element.dataset.slide);
						sliderBg[i].anchor.x = 0.5;
						sliderBg[i].anchor.y = 0.5;


						texture01[i] = PIXI.Texture.from('/images/contents/top_industory_texture01.png');
						bgTexture01[i] = new PIXI.TilingSprite(texture01[i]);

						app[i].stage.addChild(bgMask01[i]);
						app[i].stage.addChild(sliderBg[i]);
						app[i].stage.addChild(bgTexture01[i]);

						sliderBg[i].mask = bgMask01[i];
						bgTexture01[i].mask = bgMask01[i];

						bgTexture01[i].blendMode = PIXI.BLEND_MODES.MULTIPLY

						

						app[i].ticker.add(function(delta){
							bgMask01[i].width = app[i].renderer.width;
							bgMask01[i].height = app[i].renderer.height;

							sliderBg[i].width = app[i].renderer.width;
							sliderBg[i].height = app[i].renderer.width * 600 / 500;
						});
						sliderBg[i].x = app[i].renderer.width / 2;
						sliderBg[i].y = app[i].renderer.height / 2;
						bgTexture01[i].width = app[i].renderer.width;
						bgTexture01[i].height = app[i].renderer.height;

					});
					},
				},
			});

			

		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"

	.c-topIndustrySet01

		&>.componentWrapper
			container-type inline-size
			overflow hidden
			padding clamp(60px, 10cqw, 190px) 0

		.block.is-title
			position relative
			margin-bottom -20px
			z-index 100
		
		.block.is-slider
			position relative
			z-index 50
			.swiper-slide
				width 33vw
				max-width 500px
				
				&:nth-of-type(2)
					.m-topIndustrySet01_slide01
						.block.is-text
							top 0
							bottom auto
							padding 4% 0 4% 4%

	.m-topIndustrySet01_slide01
		position relative
		.block.is-bg
			position relative
			width 100%
			padding-top 120%
			// background-color #F00
			canvas
				position absolute
				top 0
				left 0
				width 100% !important
				height 100% !important
				z-index 0
		
		.block.is-text
			container-type inline-size
			position absolute
			right 0
			bottom 0
			width 60%
			height 33%
			padding 4% 0 0 4%
			box-sizing border-box
			z-index 100

			.title
				color #E02400
				font-size clamp(1.2rem, 8cqw, 1.8rem)
				font-weight bold
			.text
				margin-top 2%
				font-size clamp(1.0rem, 6cqw, 1.4rem)
				

</style>