<template lang="pug">
	.js-inviewPoint.is-contactSet01
		section.c-contactSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								m-sectionTitle01(jp = 'お問合せ', en = 'CONTACT', className = 'is-white is-animate')

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
		name: 'c-contactSet01',
		mounted() {
			inView({
				className: '.js-inviewPoint.is-contactSet01',
				reverse: false
			});
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"
				
	.c-contactSet01
		&>.componentWrapper
			container-type inline-size
			overflow hidden
			position relative

			height 100svh
			max-height 700px
			padding clamp(60px, 10cqw, 190px) 0
			box-sizing border-box
			background-color #DFDFDF
			background-image url('~/assets/images/common/common_contact_bg01.png')
			background-repeat no-repeat
			background-size cover
			background-position center

			+MQ_MAX(SP_RES_WID01)
				max-height 500px
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
				background-image url('~/assets/images/common/common_contact_texture01.png')
				mix-blend-mode multiply

			&::after
				content ""
				display block
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				background-color #EFEFEF
				transform translate3d(0, 0, 0)

				.is-inview &
					transform translate3d(0, 101%, 0)
					transition all 0.3s ease-out 0.5s

			.block.is-title
				margin-bottom clamp(30px, 6cqw, 60px)
				
			.block.is-text
				position relative
				z-index 100
				.m-largeText01
					overflow hidden
				
					span
						color #FFF
				
					.is-slideUpDownInTextAnimation
						will-change transform
						.page-leave-active &
							transform translate3d(0, 101%, 0)
							transition all 0.3s ease-out
						span
							.is-inview &
								animation-duration 0.2s
								animation-delay (0.7 + 0.04)s

			.block.is-btn
				position relative
				margin-top 5%
				z-index 100

				a
					span
						color #FFF

				.m-borderBtn01
					opacity 0
					.is-inview &
						animation-name fadeIn
						animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
						animation-fill-mode forwards
						animation-duration 0.4s
						animation-delay 0.8s
				
				.is-slideUpDownInTextAnimation
					span
						.is-inview &
							animation-duration 0.3s
						for num in (1..2)
							&:nth-of-type({num})
								animation-delay (1.0 + num * 0.04)s

</style>