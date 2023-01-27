<template lang="pug">
	.m-borderBtn01
		p.btn
			nuxt-link(:to='`${url}`')
				span.is-bg(:class='`${className}`')
				span.is-slideUpDownInTextAnimation
					span.is-text(:class='`${className}`') {{ text }}

</template>

<script>
	import 'swiper/swiper-bundle.css'
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	let _g;
			
	let canvas, app = [], bgLine01 = [], maskLine01 = [], hover = [], rotation = Math.PI / 45, addRotation = [];

	export default {
		name: 'm-borderBtn01',
		props: {
			className: {
				type: String,
				default: 'is-type01'
			},
			text : {
				type: String,
				default: 'DETAIL'
			},
			url : {
				type: String,
				default: '#'
			}
		},
		mounted() {
			// _g = window.GLOBAL;
			// canvas = document.querySelectorAll('.m-borderBtn01 .is-bg');
			// console.log(canvas.length);

			// [].slice.call(canvas).forEach(function(element, i) {
				
			// 	hover[i] = false;
			// 	addRotation[i] = 45;

			// 	if(document.getElementById('l-contentsTop').dataset.top != 'loaded') {

			// 		app[i]	= new PIXI.Application({
			// 			width: element.clientWidth * 2,
			// 			height: element.clientHeight * 2,
			// 			// backgroundColor: 0xffffff,
			// 			resolution: 1,
			// 			autoDensity: true,
			// 			transparent: true,
			// 			backgroundAlpha: 0
			// 			// resizeTo: window
			// 		});

			// 	}

			// 	for (var j = app[i].stage.children.length - 1; j >= 0; j--) {
			// 		app[i].stage.removeChild(app[i].stage.children[j]);
			// 	};

			// 	if(app[i].stage.children.length < 2) {
			// 		element.appendChild(app[i].view);

			// 		bgLine01[i] = new PIXI.Graphics();

			// 		bgLine01[i].x = 0;
			// 		bgLine01[i].y = 0;

			// 		maskLine01[i] = new PIXI.Graphics();

			// 		maskLine01[i].pivot.x = app[i].renderer.width / 2;
			// 		maskLine01[i].pivot.y = app[i].renderer.height / 2;

			// 		maskLine01[i].x = app[i].renderer.width / 2;
			// 		maskLine01[i].y = app[i].renderer.height / 2;

			// 		app[i].stage.addChild(bgLine01[i]);
			// 		app[i].stage.addChild(maskLine01[i]);
			// 		bgLine01[i].mask = maskLine01[i];
			// 	}

			// 	app[i].animationUpdate = function(delta) {
			// 		bgLine01[i].clear();
			// 		bgLine01[i].lineStyle(2, (element.classList.contains('is-white') ? 0xFFFFFF : 0xE02400), 1, 0);
			// 		bgLine01[i].drawRoundedRect(0, 0, app[i].renderer.width, app[i].renderer.height, 200);
			// 		bgLine01[i].endFill();

			// 		maskLine01[i].clear();
			// 		maskLine01[i].beginFill(0xffff00);
			// 		maskLine01[i].drawRect(0, - app[i].renderer.height / 2 - 20, app[i].renderer.width, app[i].renderer.height);
			// 		maskLine01[i].endFill();

			// 		maskLine01[i].beginFill(0xffff00);
			// 		maskLine01[i].drawRect(0, app[i].renderer.height / 2 + 20, app[i].renderer.width, app[i].renderer.height);
			// 		maskLine01[i].endFill();

			// 		if(hover[i] == false) {
			// 			if (addRotation[i] <= 45) {
			// 				addRotation[i] += 3;
			// 			}
			// 		} else if (hover[i] == true){
			// 			if (addRotation[i] >= 13) {
			// 				addRotation[i] -= 3;
			// 			}
			// 		}

			// 		maskLine01[i].rotation = Math.PI / addRotation[i];
			// 	}

			// 	if(document.getElementById('l-contentsTop').dataset.top == 'loaded') {
			// 		app[i].ticker.remove(app[i].animationUpdate);
			// 	} else {
			// 		app[i].ticker.add(app[i].animationUpdate);
			// 	}

			// 	app[i].ticker.autoStart = false;
			// 	app[i].ticker.stop();
				

			// 	inView({
			// 		className: '.m-borderBtn01 .is-bg',
			// 		reverse: true,
			// 		range: 'window',
			// 	});

			// 	_g.scroll(function(){
			// 		if(element.classList.contains('is-inview') ) {
			// 			app[i].ticker.start();;
			// 		} else {
			// 			app[i].ticker.stop();
			// 		}
			// 	})

			// 	element.addEventListener('mouseenter',function(e){
			// 		hover[i] = true;
			// 	});

			// 	element.addEventListener('mouseleave',function(e){
			// 		hover[i] = false;
			// 	});

			// });
		},
		methods: {
		}
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"
	
	.page-leave-active
		.m-borderBtn01
			a
				opacity 0
				transition all 0.3s ease !important

	.m-borderBtn01
		// opacity 0

		.btn
			container-type inline-size
			max-width 280px
			width 30svw
			min-width 200px

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
				will-change opacity

				&:hover
					span
						&.is-bg
							background-color #E02400
							
							&.is-white
								background-color #FFF

						&.is-text
							color #FFF
							&.is-white
								color #E02400
				
				
				span
					display block

					&.is-bg
						position absolute
						top 0
						left 0
						width 100%
						height 100%
						border 1px solid #E02400
						border-radius 100px
						transition all 0.3s ease

						&.is-white
							border 1px solid #FFF

						canvas
							position absolute
							top 0
							left 0
							width 100% !important
							height 100% !important
					
					&.is-text
						pointer-events none
						position relative
						z-index 100
						color #E02400
						font-family 'Oswald', sans-serif
						font-weight bold
						line-height 1.0
						font-size clamp(1.0rem, 6cqw, 1.4rem)
						transition all 0.3s ease

						&.is-white
							color #FFF


</style>