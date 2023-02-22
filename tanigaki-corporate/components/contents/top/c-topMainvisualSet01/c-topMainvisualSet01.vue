<template lang="pug">
	.js-inviewPoint.is-topMainvisualSet01
		section.c-topMainvisualSet01
			.componentWrapper
				.block.is-bg
					.area.is-canvas#topMainvisualBg01
				
				.block.is-text
					h2.title
						span.is-pc CONNECT TO THE
							br
							| NEXT GENERATION
						span.is-sp CONNECT TO
							br
							| THE NEXT
							br
							| GENERATION
					p.text テクノロジーのたゆまぬ進化によって、私たちの生活は「機能的」に豊かになりました。私たちの日常に溶け込む家具やインテリアは「感情的」な豊かさを形成する一部を担っていると考えます。変わりゆく時代の中で、確かな伝統と技術をもって人々の心を豊かにする居住空間をご提供いたします。
				
				.block.is-scroll
					p.scroll
		c-topNewsSet01(:news = 'news')
</template>

<script>

	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	let _g, mainvisual;
	let canvas, app, mainvisualTitle, mainvisualBg01, mainvisualBg02, mainvisualTexture01, mainvisualLogo01;
	let width = 400, height = 200, scale = 1.0;

	export default {
		name: 'c-topMainvisualSet',
		props: {
			news: {
				type: Array,
				required: true,
			},
		},
		beforeMount() {
			var publishedAtJp = {
				'publishedAtJp': '0000.00.00'
			};
			this.news.forEach(function(element, index){
				Object.assign(element, publishedAtJp);
			})
		},
		mounted() {

			this.$nextTick(() => {
				this.$nuxt.$loading.start()
				inView({
					className: '.c-topMainvisualSet01',
					addClassName: 'is-inviewReverse',
					reverse: true
				});
				setTimeout(function(){
					this.$nuxt.$loading.finish()
					inView({
						className: '.js-inviewPoint.is-topMainvisualSet01',
						reverse: false
					});
				}, 1000)
			})

			_g = window.GLOBAL;

			canvas = document.getElementById('topMainvisualBg01');
			mainvisual = document.querySelector('.c-topMainvisualSet01');


			if(document.getElementById('l-contentsTop').dataset.top != 'loaded') {
				app = new PIXI.Application({
					width: _g.GLOBAL_WIDTH * 2,
					height: mainvisual.clientHeight * 2,
					// backgroundColor: 0x222222,
					resolution: 1,
					autoDensity: true,
					resizeTo: mainvisual,
					backgroundAlpha: 0
				});
			}
			
			canvas.appendChild(app.view);

			mainvisualBg01 = PIXI.Sprite.from('/images/contents/top_mainvisual_bg01.jpg');
			mainvisualBg01.anchor.x = 0.5;
			mainvisualBg01.anchor.y = 0.5;
			

			mainvisualBg02 = PIXI.Sprite.from('/images/contents/top_mainvisual_bg01.jpg');
			mainvisualBg02.anchor.x = 0.5;
			mainvisualBg02.anchor.y = 0.5;

			mainvisualLogo01 = PIXI.Sprite.from('/images/contents/top_mainvisual_logo01.png');
			
			const texture = PIXI.Texture.from('/images/contents/top_mainvisual_texture01.png');

			mainvisualTexture01 = new PIXI.TilingSprite(texture);
			

			mainvisualTitle = new PIXI.Text('CONNECT TO THE NEXT GENERATION', {
				fontFamily: 'Oswald',
				fontWeight: 'bold',
				fill: ['#FFFFFF'],
				wordWrap: true,
			});

			mainvisualBg02.mask = mainvisualTitle
		
			app.stage.addChild(mainvisualBg01);
			app.stage.addChild(mainvisualTexture01);
			app.stage.addChild(mainvisualBg02);
			app.stage.addChild(mainvisualLogo01);
			app.stage.addChild(mainvisualTitle);

			app.animationUpdate = function(delta) {
				if(app.renderer.width > app.renderer.height * 1.5) {
					mainvisualBg01.width = app.renderer.width;
					mainvisualBg01.height = app.renderer.width * 900 / 1400;

					mainvisualBg02.width = app.renderer.width;
					mainvisualBg02.height = app.renderer.width * 900 / 1400;
				} else {
					mainvisualBg01.height = app.renderer.height
					mainvisualBg01.width = app.renderer.height * 1400 / 900;

					mainvisualBg02.height = app.renderer.height
					mainvisualBg02.width = app.renderer.height * 1400 / 900;
				}

				mainvisualLogo01.width = app.renderer.width * 0.5;
				mainvisualLogo01.height = app.renderer.width * 0.6;

				mainvisualLogo01.x = 0;
				mainvisualLogo01.y = app.renderer.height - mainvisualLogo01.height*0.85;

				mainvisualBg01.x = app.renderer.width / 2;
				mainvisualBg01.y = app.renderer.height / 2;

				mainvisualBg02.x = app.renderer.width / 2;
				mainvisualBg02.y = app.renderer.height / 2;

				mainvisualTexture01.width = app.renderer.width;
				mainvisualTexture01.height = app.renderer.height;

				
				if(app.renderer.width < 850) {
					if(app.renderer.width < 460) {
						mainvisualTitle.style.fontSize = 60;
						mainvisualTitle.style.lineHeight = 60;
						mainvisualTitle.style.wordWrapWidth = 360;	
					} else if(app.renderer.width < 640) {
						mainvisualTitle.style.fontSize = 80;
						mainvisualTitle.style.lineHeight = 82;
						mainvisualTitle.style.wordWrapWidth = 450;
					} else {
						mainvisualTitle.style.fontSize = 110;
						mainvisualTitle.style.lineHeight = 110;
						mainvisualTitle.style.wordWrapWidth = 640;	
					}
					
					
					mainvisualTitle.x = app.renderer.width * 0.05;
					mainvisualTitle.y = app.renderer.height * 0.2;

				} else {
					mainvisualTitle.style.fontSize = app.renderer.width * 0.1;
					mainvisualTitle.style.lineHeight = app.renderer.width * 0.11;
					mainvisualTitle.style.wordWrapWidth = app.renderer.width * 0.8;	
					mainvisualTitle.x = app.renderer.width * 0.05;
					mainvisualTitle.y = app.renderer.height * 0.25;
				}

				if (scale < 1.2) {
					scale += 0.0005
				} else {
					scale = 1
				}

				mainvisualBg01.scale.x = scale
				mainvisualBg01.scale.y = scale
				mainvisualBg02.scale.x = scale
				mainvisualBg02.scale.y = scale
			}

			// if(document.getElementById('l-contentsTop').dataset.top == 'loaded') {
			// 	app.ticker.remove(app.animationUpdate);
			// } else {
				app.ticker.add(app.animationUpdate);
			// }

			_g.scroll(function(){
				if(mainvisual.classList.contains('is-inviewReverse') ) {
					app.ticker.start();;
				} else {
					app.ticker.stop();
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

	section.c-topMainvisualSet01
		container-type inline-size
		overflow hidden
		position relative

		width 100%
		height 100svh
		min-height 700px
		max-height 800px
		background-color #0E0BA3

		+MQ_MAX(SP_RES_WID01)
			max-height 100%
		
		.componentWrapper

			&::before
			&::after
				content ""
				display block
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				background-color #0E0BA3
				z-index 100

				will-change transform
			
			&::before
				transform translate3d(0, -101%, 0)
				z-index 1000

				.page-leave-active &
					transform translate3d(0, 0, 0)
					transition all 0.3s ease-out
			&::after
				transform translate3d(0, 0, 0)
				.is-inview &
					transform translate3d(0, -101%, 0)
					transition all 0.3s ease-out 0.2s
			
			.block.is-bg, .area.is-canvas, canvas
				position absolute
				width 100% !important
				height 100% !important
				z-index 0
			
			.block.is-bg
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
			
			.block.is-text
				
				position absolute
				top 25.2%
				left 5.0%
				z-index 100

				+MQ_MAX(SP_RES_WID01)
					top 19.6%
					width 90%

				.title
					color transparent
					font-family 'Oswald', sans-serif
					font-size 10cqw
					font-weight bold
					line-height 1.0
					vertical-align top
					z-index 0

					+MQ_MAX(SP_RES_WID01)
						max-width 640px
						font-size 11.0rem
						line-height 1.03
						
						+MQ_MAX(640px)
							max-width 460px
							font-size 7.8rem
							line-height 1.1

						+MQ_MAX(460px)
							font-size 6.2rem
							line-height 1.01

					span
						&.is-pc
							+MQ_MAX(SP_RES_WID01)
								display none

						&.is-sp
							display none
							+MQ_MAX(SP_RES_WID01)
								display block

				.text
					width 76%
					margin-top 3%
					font-size 1.0cqw
					color #FFF

					+MQ_MAX(SP_RES_WID01)
					
						width 100%
						font-size 1.8rem
						+MQ_MAX(640px)
							width 100%
							font-size 1.6rem

						+MQ_MAX(460px)
							font-size 3.0cqw

			.block.is-scroll
				position absolute
				right -2%
				bottom 6svw
				width 15svw
				min-width 140px
				max-width 200px
				height 15svw
				min-height 140px
				max-height 200px
				
				// background-color #F00
				// border-radius 200px
				z-index 100

				transform translate3d(101%, 0, 0)

				.is-inview &
					animation-name slideRightLeftIn
					animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
					animation-fill-mode forwards
					animation-duration 0.2s
					animation-delay 1.0s

				+MQ_MAX(SP_RES_WID01)
					bottom 14svw
					width 30svw
					min-width 150px
					max-width 300px

					height 30svw
					min-height 150px
					max-height 300px

				@keyframes rotation
					0%
						transform rotate(0)
					100%
						transform rotate(360deg)

				.scroll
					position absolute
					top 0
					left 0
					width 100%
					height 100%

					&::before
						content ""
						display block
						position absolute
						top 50%
						left 50%
						width 10%
						height 10%
						background-image url('~/assets/images/contents/top_mainvisual_arrow01.svg')
						background-position center
						background-repeat no-repeat
						background-size contain
						transform translate3d(-50%, -50%, 0)
					
					&::after
						content ""
						display block
						position absolute
						top 0
						left 0
						width 100%
						height 100%
						background-image url('~/assets/images/contents/top_mainvisual_scroll01.png')
						background-position center
						background-repeat no-repeat
						background-size contain

						.is-inview &
							animation-name rotation
							animation-duration 30.0s
							animation-timing-function linear
							animation-iteration-count infinite


	
</style>