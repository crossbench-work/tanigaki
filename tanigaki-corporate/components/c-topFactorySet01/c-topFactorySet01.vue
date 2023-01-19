<template lang="pug">
	section.c-topFactorySet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01.is-white.is-animate
								span.is-jp 工場紹介
								span.is-en FACTORY

					.block.is-text
						.l-contentsWrapper.is-middle
							h2.m-largeText01
								span.is-slideUpDownInTextAnimation
									span 設計から製作まで
										br
										| ワンストップオーダーが可能な
										br
										| 自社工場をご紹介します。
					
					.block.is-btn
						.l-contentsWrapper.is-middle
							m-borderBtn01(className ="is-white")
</template>

<script>
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	export default {
		name: 'c-topFactorySet01',
		
		mounted() {
			inView({
				className: '.c-topFactorySet01',
				reverse: true
			});
		},
		methods: {
		}
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-topFactorySet01
		&.is-inview
			&>.componentWrapper
				&::after
					transform translate3d(0, 101%, 0)
					transition all 0.3s ease-out 0.5s
				.block.is-text
					.is-slideUpDownInTextAnimation
						span
							animation-duration 0.2s
							animation-delay (0.7 + 0.04)s
			

		&>.componentWrapper
			container-type inline-size

			overflow hidden
			position relative

			height 100svh
			max-height 800px
			padding clamp(60px, 10cqw, 190px) 0
			box-sizing border-box
			background-color #DFDFDF
			background-image url('~/assets/images/contents/top_factory_bg01.png')
			background-repeat no-repeat
			background-size cover
			background-position center

			+MQ_MAX(SP_RES_WID01)
				max-height 600px
				+MQ_MAX(450px)
					max-height 400px

			&::before
				content ""
				display block
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				background-image url('~/assets/images/contents/top_factory_texture01.png')
			
			&::after
				content ""
				display block
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				background-color #013FB9
				transform translate3d(0, 0, 0)

			.block.is-title
				position relative
				margin-bottom clamp(30px, 6cqw, 60px)
				z-index 1000
				
			.block.is-text
				position relative
				z-index 100
				
				.m-largeText01
					span
						color #FFF
				
				
			.block.is-btn
				position relative
				margin-top 5%
				z-index 100

				a
					span
						color #FFF

</style>