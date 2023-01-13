<template lang="pug">
	.m-borderBtn01
		p.btn
			a(href="")
				span.is-bg(:class='`${className}`')
				span.is-text DETAIL

</template>

<script>
	import 'swiper/swiper-bundle.css'
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	let _g;
			
	let canvas, app = [], bgLine01 = [], maskLine01 = [], hover = [], rotation = Math.PI / 45;

	export default {
		name: 'm-borderBtn01',
		props: {
			className: {
				type: String,
				default: 'is-type01'
			},
		},
		mounted() {
			_g = window.GLOBAL;
			canvas = document.querySelectorAll('.m-borderBtn01 .is-bg');

			[].slice.call(canvas).forEach(function(element, i) {
				hover[i] = false;

				app[i]	= new PIXI.Application({
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

				bgLine01[i] = new PIXI.Graphics();

				bgLine01[i].x = 0;
				bgLine01[i].y = 0;

				bgLine01[i].lineStyle(2, (element.classList.contains('is-white') ? 0xFFFFFF : 0xE02400), 1, 0);
				bgLine01[i].drawRoundedRect(0, 0, app[i].renderer.width, app[i].renderer.height, 200);
				bgLine01[i].endFill();

				app[i].stage.addChild(bgLine01[i]);


				maskLine01[i] = new PIXI.Graphics();

				maskLine01[i].pivot.x = app[i].renderer.width / 2;
				maskLine01[i].pivot.y = app[i].renderer.height / 2;

				maskLine01[i].x = app[i].renderer.width / 2;
				maskLine01[i].y = app[i].renderer.height / 2;

				app[i].stage.addChild(maskLine01[i]);

				maskLine01[i].rotation = rotation;

				bgLine01[i].mask = maskLine01[i];


				app[i].ticker.add(function(delta){
					maskLine01[i].beginFill(0xffff00);
					maskLine01[i].drawRect(0, - app[i].renderer.height / 2 - 20, app[i].renderer.width, app[i].renderer.height);
					maskLine01[i].endFill();

					maskLine01[i].beginFill(0xffff00);
					maskLine01[i].drawRect(0, app[i].renderer.height / 2 + 20, app[i].renderer.width, app[i].renderer.height);
					maskLine01[i].endFill();

				});

				app[i].ticker.autoStart = false;
				app[i].ticker.stop();
				

				inView({
					className: '.m-borderBtn01 .is-bg',
					reverse: true
				});

				_g.scroll(function(){
					if(element.classList.contains('is-inview') ) {
						app[i].ticker.start();;
					} else {
						app[i].ticker.stop();
					}
				})

				element.addEventListener('mouseenter',function(e){
					if(hover[i] == false) {
						gsap.to(maskLine01[i], {
							duration: 0.3,
							rotation: 0.4,
						});
					}
					hover[i] = true;
				});

				element.addEventListener('mouseleave',function(e){
					if(hover[i] == true) {
						gsap.to(maskLine01[i], {
							duration: 0.3,
							rotation: -0.4,
						});
					}
					hover[i] = false;
				});

				

			});
		},
		methods: {
		}
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"

	.m-borderBtn01
		container-type inline-size
		max-width 280px
		width 30%
		min-width 200px
		.btn
			a
				display flex
				justify-content center
				align-items center
				position relative
				width 100%
				height 100%
				padding 10% 15%
				box-sizing border-box
				text-decoration none
				
				span
					display block

					&.is-bg
						position absolute
						top 0
						left 0
						width 100%
						height 100%

						canvas
							position absolute
							top 0
							left 0
							width 100% !important
							height 100% !important
					
					&.is-text
						position relative
						z-index 100
						color #E02400
						font-family 'Oswald', sans-serif
						font-weight bold
						line-height 0.8
						font-size clamp(1.0rem, 6cqw, 1.4rem)


</style>