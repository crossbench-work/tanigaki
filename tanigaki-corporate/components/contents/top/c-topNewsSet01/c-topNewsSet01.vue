<template lang="pug">
	section.c-topNewsSet01
		.componentWrapper
			.block.is-date
				p.date
					span 2022.08.26
			.block.is-text
				p.text
					span ここにはニュースの見出しが入ります
			.block.is-btn
				p.btn
					span
					span
					span

</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'

	export default {
		name: 'c-topNewsSet01',
		
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-topNewsSet01
		display flex
		justify-content flex-end
		position relative
		z-index 1000
		
		width 100%
		height 0

		&>.componentWrapper
			overflow hidden
			display flex
			width 50%
			max-width 720px
			min-width 500px
			
			height 15svw
			min-height 130px
			max-height 180px
			border-top-left-radius 10px
			border-bottom-left-radius 10px
			box-shadow 0 4px 20px rgba(#000, 0.1)
			transform translate3d(0, -50%, 0)

			+MQ_MAX(SP_RES_WID01)
				width 90%
				height 8svw
				min-width 0
				min-height 80px
				max-height 130px
				transform translate3d(0, -80%, 0)

			.block
				container-type inline-size
				display flex
				align-items center
				&.is-date
					width 20%
					color #FFF
					background-color #E02400
					justify-content center
					font-weight bold
					font-size clamp(1.1rem, 2cqw, 1.4rem)

				&.is-text
					width 70%
					padding 0 4%
					background-color #FFF
					box-sizing border-box
					font-size clamp(1.1rem, 2cqw, 1.4rem)

				&.is-btn
					justify-content center
					width 10%
					background-color #000
					.btn
						position relative
						width 30px
						height 24px

						span
							display block
							position absolute
							width 100%
							height 4px
							background-color #FFF
							border-radius 100px

							&:nth-of-type(1)
								top 0
							&:nth-of-type(2)
								top 50%
								margin-top -2px
							&:nth-of-type(3)
								bottom 0
							


</style>