<template lang="pug">
	.js-inviewPoint.is-topIndustrySet01
		section.c-topIndustrySet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								m-sectionTitle01(jp = '事業案内', en = 'INDUSTRY', className = 'is-animate')

						.block.is-slider
							.swiper-wrapper
								.swiper-slide
									.m-topIndustrySet01_slide01
										nuxt-link(to="/industry/#section01")
											.block.is-more
												span MORE
											.block.is-bg
												.area.is-bg(data-slide = 'top_industory_bg01.jpg')
											.block.is-num
												span.is-slideLeftRightInTextAnimation
													span
														span 0
													span
														span 1
											.block.is-text
												h3.title
													span.js-slideInTextAnimation.is-slideUpDownInTextAnimation 建築内装設計施工
												p.text
													span.is-fadeInAnimation
														span 病院・学校・ホテル・カーディーラーなど、あらゆる商業施設の木工事及び造作家具工事を設計から施工までワンストップで行います。
								.swiper-slide
									.m-topIndustrySet01_slide01
										nuxt-link(to="/industry/#section02")
											.block.is-more
												span MORE
											.block.is-bg
												.area.is-bg(data-slide = 'top_industory_bg02.jpg')
											.block.is-num
												span.is-slideLeftRightInTextAnimation
													span
														span 0
													span
														span 2
											.block.is-text
												h3.title
													span.js-slideInTextAnimation.is-slideUpDownInTextAnimation 船舶内装設計施工
												p.text
													span.is-fadeInAnimation
														span フェリー・商船・潜水艦・クルーザーなど、あらゆる船舶内装工事を設計から施工までワンストップで行います。
								.swiper-slide
									.m-topIndustrySet01_slide01
										nuxt-link(to="/industry/#section03")
											.block.is-more
												span MORE
											.block.is-bg
												.area.is-bg(data-slide = 'top_industory_bg03.jpg')
											.block.is-num 
												span.is-slideLeftRightInTextAnimation
													span
														span 0
													span
														span 3
											.block.is-text
												h3.title
													span.js-slideInTextAnimation.is-slideUpDownInTextAnimation 造作家具設計施工
												p.text
													span.is-fadeInAnimation
														span 建築内装・船舶内装における造作家具を自社工場で設計・製作します。既製品では出来ない自由な設計と、船舶内装で培った堅牢な家具をご提供します。
						
						.block.is-pager
							.m-topIndustrySet01_count01
								.block.is-bg
								.block.is-count
									ul
										li.child
											span.is-fadeInAnimation
												span.m-topIndustrySet01_count01_child 01
										li.parent
											span.is-fadeInAnimation
												span 03

							.m-topIndustrySet01_arrows01
								ul
									li.is-prev.swiper-button-prev
										img(src="~/assets/images/contents/top_industory_arrow01.png", alt="prev")
									li.is-next.swiper-button-next
										img(src="~/assets/images/contents/top_industory_arrow02.png", alt="next")
						
						.block.is-btn
							m-borderBtn01(url = "/industry/")


</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	import spanWrap from '~/assets/javascript/_j_spanWrap/_j_spanWrap.js'

	let _g;
	let topIndustry;
	let slideBgCanvas, app = [], sliderBg = [], bgMask01 = [], texture01 = [], bgTexture01 = [], sliderCount, sliderCountNum, sliderCountApp, sliderCountLine01, sliderCountLine02, hover = [], scale = [];
	let SLIDER_LENGTH = 3, SLIDER_CURRENT = 1, SCALE = 2.0;
	

	export default {
		name: 'c-topIndustrySet01',
		
		mounted() {

			_g = window.GLOBAL;
			

			spanWrap( document.querySelectorAll('.c-topIndustrySet01 .js-slideInTextAnimation') );

			

			

			this.$nextTick(() => {
				this.$nuxt.$loading.start()
				inView({
					className: '.c-topIndustrySet01',
					addClassName: 'is-inviewReverse',
					reverse: true
				});
				setTimeout(function(){
					this.$nuxt.$loading.finish()
					inView({
						className: '.js-inviewPoint.is-topIndustrySet01',
						reverse: false
					});
				}, 1000)
			})

			

			topIndustry = document.querySelector('.c-topIndustrySet01');

			slideBgCanvas = document.querySelectorAll('.m-topIndustrySet01_slide01 .area.is-bg');

			sliderCountNum = document.querySelector('.m-topIndustrySet01_count01_child');

			const mainContentsSlider = new Swiper(".c-topIndustrySet01 .block.is-slider", {
				slidesPerView: 'auto',
				spaceBetween: 1 + '%',
				centeredSlides: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				on: { // イベントを登録する
					afterInit: (swiper) => {
						[].slice.call(slideBgCanvas).forEach(function(element, i) {
						
							if(document.getElementById('l-contentsTop').dataset.top != 'loaded') {
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
							}

							scale[i] = SCALE;
							
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

							
							
							
							app[i].animationUpdate = function(delta) {
								bgMask01[i].width = app[i].renderer.width;
								bgMask01[i].height = app[i].renderer.height;

								sliderBg[i].width = app[i].renderer.width;
								sliderBg[i].height = app[i].renderer.width * 600 / 500;

								if(hover[i] == false) {
									sliderBg[i].width = app[i].renderer.width - scale;
									if (scale[i] > SCALE) {
										scale[i] -= 0.005;
									}
									sliderBg[i].scale.x = scale[i];
									sliderBg[i].scale.y = scale[i];
								} else if (hover[i] == true){
									if (scale[i] < SCALE + 0.1) {
										scale[i] += 0.005;
									}
									sliderBg[i].scale.x = scale[i];
									sliderBg[i].scale.y = scale[i];	
								}
								
								sliderBg[i].x = app[i].renderer.width / 2;
								sliderBg[i].y = app[i].renderer.height / 2;
								bgTexture01[i].width = app[i].renderer.width;
								bgTexture01[i].height = app[i].renderer.height;
							}

							if(_g.UA == 'pc') {
								if(document.getElementById('l-contentsTop').dataset.top == 'loaded') {
									app[i].ticker.remove(app[i].animationUpdate);
								} else {
									app[i].ticker.add(app[i].animationUpdate);
								}
							} else {
								app[i].animationUpdate();
							}
							element.addEventListener('mouseenter',function(e){
								hover[i] = true;
							});

							element.addEventListener('mouseleave',function(e){
								hover[i] = false;
							});

						});

						
						sliderCount = document.querySelector('.m-topIndustrySet01_count01 .block.is-bg');
						
						if(document.getElementById('l-contentsTop').dataset.top != 'loaded') {
							sliderCountApp = new PIXI.Application({
								width: sliderCount.clientWidth * 2,
								height: sliderCount.clientHeight * 2,
								resolution: 1,
								autoDensity: true,
								transparent: true,
								backgroundAlpha: 0
							});
						}

						for (var j = sliderCountApp.stage.children.length - 1; j >= 0; j--) {
							sliderCountApp.stage.removeChild(sliderCountApp.stage.children[j]);
						};

						if(sliderCountApp.stage.children.length < 2) {
							sliderCount.appendChild(sliderCountApp.view);

							sliderCountLine01 = new PIXI.Graphics();

							sliderCountLine01.x = 0;
							sliderCountLine01.y = 0;

							sliderCountLine01.lineStyle(10, 0xD9D9D9, 0.4, 0);
							sliderCountLine01.drawCircle(sliderCountApp.renderer.width / 2, sliderCountApp.renderer.width / 2, sliderCountApp.renderer.width / 2);
							sliderCountLine01.endFill();

							sliderCountApp.stage.addChild(sliderCountLine01);

							sliderCountLine02 = new PIXI.Graphics();
							sliderCountLine02.x = 0;
							sliderCountLine02.y = 0;

							sliderCountLine02.lineStyle(10, 0xD9D9D9, 1.0, 0);
							sliderCountLine02.arc(sliderCountApp.renderer.width / 2, sliderCountApp.renderer.width / 2, sliderCountApp.renderer.width / 2, 0, Math.PI * 2 * SLIDER_CURRENT / SLIDER_LENGTH, false);
							sliderCountLine02.endFill();
							
							sliderCountApp.stage.addChild(sliderCountLine02);
						}

						sliderCountApp.animationUpdate = function(delta) {
							sliderCountLine02.clear();
							sliderCountLine02.lineStyle(10, 0xD9D9D9, 1.0, 0);
							sliderCountLine02.arc(sliderCountApp.renderer.width / 2, sliderCountApp.renderer.width / 2, sliderCountApp.renderer.width / 2, 0, Math.PI * 2 * SLIDER_CURRENT / SLIDER_LENGTH, false);
							sliderCountLine02.endFill();
						}

						// if(document.getElementById('l-contentsTop').dataset.top == 'loaded') {
						// 	sliderCountApp.ticker.remove(sliderCountApp.animationUpdate);
						// } else {
						// 	document.getElementById('l-contentsTop').dataset.top = 'loaded';
						// 	sliderCountApp.ticker.add(sliderCountApp.animationUpdate);
						// }

						sliderCountApp.ticker.add(sliderCountApp.animationUpdate);

					},
					slideChange: (swiper) => {
						SLIDER_CURRENT = swiper.realIndex + 1;

						sliderCountNum.textContent = '0' + SLIDER_CURRENT;
					}
				},
			});

			

		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-topIndustrySet01

		&>.componentWrapper
			container-type inline-size
			overflow hidden
			padding clamp(60px, 10cqw, 190px) 0
			background-image url('~/assets/images/contents/top_industry_texture01.png')

		.block.is-title
			position relative
			margin-bottom -20px
			z-index 100
		
		.block.is-slider
			position relative
			width 37%
			z-index 50

			will-change transform opacity

			.page-leave-active &
				transition all 0.8s ease-out
				transform translate3d(15px, 0, 0)
				opacity 0

			+MQ_MAX(SP_RES_WID01)
				width 53%

				+MQ_MAX(450px)
					width 100%

			.swiper-slide
				width 40vw
				max-width 500px

				+MQ_MAX(SP_RES_WID01)
					width 50vw

					+MQ_MAX(450px)
						width 90vw
				
				&:nth-of-type(2)
					.m-topIndustrySet01_slide01
					.block.is-more
						top 65%
								
						.block.is-text
							top 0
							bottom auto
							padding 4% 0 4% 4%
						.block.is-num
							position absolute
							top auto
							bottom 5%
							left 5%
		.block.is-pager
			container-type inline-size
			position relative
			display flex
			align-items flex-end
			width 0
			transform translate3d(0, clamp(-120px, -20svw, -200px), 0)
			z-index 1000

			will-change opacity

			.page-leave-active &
				transition all 0.6s ease-out
				opacity 0

			+MQ_MAX(SP_RES_WID01)
				transform translate3d(0, clamp(-40px, -6svw, -100px), 0)

		.block.is-btn
			
			display flex
			justify-content flex-end
			flex-wrap wrap
			margin-top 5%

			.m-borderBtn01
				opacity 0
				.is-inview &
					animation-name fadeIn
					animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
					animation-fill-mode forwards
					animation-duration 0.8s
					animation-delay 0.8s
				

			.is-slideUpDownInTextAnimation
				span
					.is-inview &
						animation-duration 1.0s
					for num in (1..2)
						&:nth-of-type({num})
							animation-delay (1.0 + num * 0.04)s


	.m-topIndustrySet01_slide01
		container-type inline-size
		position relative
		
		a
			display block
			position relative
			color inherit

			&:hover
				.block.is-more
					opacity 1.0

		.block.is-more
			opacity 0
			pointer-events none
			display flex
			position absolute
			top 35%
			left 50%
			z-index 1000
			padding-right 6%
			color #FFF
			font-family 'Oswald', sans-serif
			font-size clamp(1.5rem, 7cqw, 3.0rem)
			font-weight bold
			line-height 0.75
			transform translate3d(-50%, -50%, 0)
			transition opacity 0.8s ease

			&::after
				content ""
				display block
				position absolute
				top 50%
				right 0
				width 17%
				padding-top 17%
				background-image url('~/assets/images/contents/top_industory_more_arrow01.svg')
				background-repeat no-repeat
				background-size contain
				background-position center
				transform translate3d(0, -30%, 0)
		
		.block.is-bg
			overflow hidden
			position relative
			width 100%
			padding-top 120%
			// background-color #F00

			
			+MQ_MAX(SP_RES_WID01)
				&::after
					content ""
					display block
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					background-color transparent
					z-index 200

					will-change transform

			.area.is-bg
				position absolute
				top 0
				left 0
				width 100%
				height 100%

				opacity 0

				.is-inview &
					animation-name fadeIn
					animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
					animation-fill-mode forwards
					animation-duration 0.8s
					animation-delay 0.4s

				canvas
					position absolute
					top 0
					left 0
					width 100% !important
					height 100% !important
					z-index 0

					transform translate3d(101%, 0, 0)

					.is-inview &
						animation-name slideRightLeftIn
						animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
						animation-fill-mode forwards
						animation-duration 0.6s
						animation-delay 0.4s
		
		.block.is-num
			position absolute
			top 5%
			left 5%
			color rgba(#FFF, 0.3)
			font-family 'Oswald', sans-serif
			font-size clamp(5.0rem, 18cqw, 9.0rem)
			font-weight 500
			line-height 1.0

			.is-slideLeftRightInTextAnimation
				span
					span
						.is-inview &
							animation-duration 0.4s

					for num in (1..20)
						&:nth-of-type({num})
							span
								animation-delay (0.6 + num * 0.09)s

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
				font-size clamp(1.2rem, 7cqw, 1.8rem)
				font-weight bold

				.is-slideUpDownInTextAnimation

					span
						.is-inview &
							animation-duration 0.3s
						for num in (1..200)
							&:nth-of-type({num})
								animation-delay (1.0 + num * 0.04)s

			.text
				margin-top 2%
				font-size clamp(1.0rem, 6cqw, 1.4rem)

				.is-fadeInAnimation
					span
						.is-inview &
							animation-duration 0.8s
							animation-delay (1.5 + 0.04)s
	
	.m-topIndustrySet01_count01
		container-type inline-size
		overflow hidden
		display flex
		justify-content center
		align-items center
		position absolute
		top 0
		left 0
		width 20svw
		max-width 200px
		min-width 120px
		height 20svw
		max-height 200px
		min-height 120px
		border-radius 200px
		// background-color #F00

		.block.is-bg
			position absolute
			top 0
			left 0
			width 100%
			height 100%

			opacity 0

			.is-inview &
				animation-name fadeIn
				animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
				animation-fill-mode forwards
				animation-duration 0.8s
				animation-delay 1.3s

			canvas
				position absolute
				top 0
				left 0
				width 100% !important
				height 100% !important
				transform rotate(-90deg)
		
		.block.is-count
			position relative
			width 35%
			padding-top 35%

			ul
				position absolute
				top 0
				left 0
				width 100%
				height 100%

				&:before
					content ""
					display block
					position absolute
					top 50%
					left 50%
					width 0
					height 1px
					background-color #D9D9D9
					transform translate3d(-50%, -50%, 0) rotate(-45deg)

					.is-inview &
						width 140%
						transition width 0.8s 1.5s ease

				li
					position absolute
					color rgba(#040278, 0.8)
					font-family 'Oswald', sans-serif
					font-size clamp(2.0rem, 15cqw, 3.4rem)
					font-weight bold
					line-height 1.0

					&:nth-of-type(1)
						top 0
						left 0
					
					&:nth-of-type(2)
						right 0
						bottom 0
					

					.is-fadeInAnimation
						span
							.is-inview &
								animation-duration 0.8s
							for num in (1..2)
								&:nth-of-type({num})
									animation-delay (1.6 + num * 0.04)s
					

	.m-topIndustrySet01_arrows01
		position absolute
		top clamp(100px, 17svw, 170px)
		left clamp(calc(120px + 40px), 20svw, calc(200px + 40px))
		width 90px
		height 10px
		transform translate3d(0, -100%, 0)

		+MQ_MAX(SP_RES_WID01)
			display none

		ul
			display flex
			justify-content space-between

			li
				overflow hidden
				cursor pointer
				position static !important
				width 40%


				&::after
					content none

				img
					width 100%
					height auto

					transform: translate3d(-101%, 0, 0);

					.is-inview &
						animation-name slideLeftRightIn
						animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
						animation-fill-mode forwards
						animation-duration 0.8s
						animation-delay 1.3s

</style>