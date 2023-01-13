<template lang="pug">
	section.c-topMainvisualSet01
		.componentWrapper
			.block.is-bg
				.area.is-canvas#topMainvisualBg01
			
			.block.is-text
				h2.title
					span CONNECT TO THE
						br
						| NEXT GENERATION
				p.text テクノロジーのたゆまぬ進化によって、私たちの生活は「機能的」に豊かになりました。私たちの日常に溶け込む家具やインテリアは「感情的」な豊かさを形成する一部を担っていると考えます。変わりゆく時代の中で、確かな伝統と技術をもって人々の心を豊かにする居住空間をご提供いたします。
			
			.block.is-scroll
				p.scroll
</template>

<script>
	let _g, mainvisual;
	let canvas, app, mainvisualTitle, mainvisualBg01, mainvisualBg02, mainvisualTexture01;
	let width = 400, height = 200;

	export default {
		name: 'c-topMainvisualSet',
		
		mounted() {

			_g = window.GLOBAL;

			canvas = document.getElementById('topMainvisualBg01');
			mainvisual = document.querySelector('.c-topMainvisualSet01');

			app = new PIXI.Application({
				width: _g.GLOBAL_WIDTH * 2,
				height: mainvisual.clientHeight * 2,
				backgroundColor: 0x222222,
				resolution: 1,
				autoDensity: true,
				resizeTo: window
			});

			canvas.appendChild(app.view);

			mainvisualBg01 = PIXI.Sprite.from('/images/contents/top_mainvisual_bg01.png');
			mainvisualBg01.anchor.x = 0.5;
			mainvisualBg01.anchor.y = 0.5;
			

			mainvisualBg02 = PIXI.Sprite.from('/images/contents/top_mainvisual_bg01.png');
			mainvisualBg02.anchor.x = 0.5;
			mainvisualBg02.anchor.y = 0.5;
			
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
			app.stage.addChild(mainvisualTitle);
			
		
			app.ticker.add(function(delta){

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

				mainvisualBg01.x = app.renderer.width / 2;
				mainvisualBg01.y = app.renderer.height / 2;

				mainvisualBg02.x = app.renderer.width / 2;
				mainvisualBg02.y = app.renderer.height / 2;

				mainvisualTexture01.width = app.renderer.width;
				mainvisualTexture01.height = app.renderer.height;

				mainvisualTitle.style.fontSize = app.renderer.width * 0.1;
				mainvisualTitle.style.lineHeight = app.renderer.width * 0.11;
				mainvisualTitle.style.wordWrapWidth = app.renderer.width * 0.8;
				mainvisualTitle.x = app.renderer.width * 0.05;
				mainvisualTitle.y = app.renderer.height * 0.35;
			});
			

			// bgImg = new Image();
			// bgImg.onload = function () {
				// mainvisualBg01 = new PIXI.Texture.fromImage('/assets/images/contents/top_mainvisual_bg01.png');
			// };
			// bgImg.src = '/assets/images/contents/top_mainvisual_bg01.png';

			

		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"

	section.c-topMainvisualSet01
		container-type inline-size
		position relative

		width 100%
		height 100svh
		min-height 600px
		max-height 800px
		background-color #0E0BA3
		
		.componentWrapper
			
			.block.is-bg, .area.is-canvas, canvas
				position absolute
				width 100% !important
				height 100% !important
				z-index 0
			
			.block.is-text
				position absolute
				top 35.2%
				left 5.0%
				z-index 100

				.title
					color transparent
					font-family 'Oswald', sans-serif
					font-size 10cqw
					font-weight bold
					line-height 1.0
					vertical-align top
					z-index 0

				.text
					width 76%
					margin-top 2%
					font-size 1.0cqw
					color #FFF

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

						animation-name rotation
						animation-duration 30.0s
						animation-timing-function linear
						animation-iteration-count infinite


	
</style>