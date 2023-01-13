<template lang="pug">
	section.c-topFactorySet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01
								span.is-jp 工場紹介
								span.is-en FACTORY

					.block.is-text
						.l-contentsWrapper.is-middle
							h2.m-largeText01
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

	export default {
		name: 'c-topFactorySet01',
		
		mounted() {

		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-topFactorySet01
		&>.componentWrapper
			container-type inline-size

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

			.block.is-title
				margin-bottom clamp(30px, 6cqw, 60px)
				
				.m-sectionTitle01
					span
						&.is-jp
							color rgba(#FFF, 0.8)
						&.is-en
							color rgba(#FFF, 0.2)
			
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