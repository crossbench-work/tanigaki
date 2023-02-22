<template lang="pug">
	h2.m-sectionTitle01(:class='`${className}`')
		span.is-jp
			span {{ jp }}
		span.is-en
			span {{ en }}

</template>

<script>
	export default {
		name: 'm-sectionTitle01',
		props: {
			className: {
				type: String,
				default: ''
			},
			jp : {
				type: String,
				default: 'タイトル'
			},
			en : {
				type: String,
				default: 'TITLE'
			}
		},
		mounted() {
		},
		methods: {
		}
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"
	
	.m-sectionTitle01
		// container-type inline-size
		display flex
		flex-wrap wrap
		flex-direction column
		align-items flex-start

		&.is-animate
			&>span
				color transparent

				.is-inview &
					transition color ease-in-out 0.8s 0.7s

				&::after
					.is-inview &
						animation-name mask-bg
						animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
						animation-fill-mode forwards
						animation-duration 1.0s
				
				&.is-jp
					color transparent
					.is-inview &
						color rgba(#040278, 0.8)
					&::before
					&::after
						background-color #040278
				&.is-en
					color transparent
					.is-inview &
						color rgba(#171663, 0.2)
					&::before
					&::after
						background-color #171663

		&.is-white
			&.is-animate
				&>span
					color transparent !important

					&.is-jp
						.is-inview &
							color rgba(#FFF, 0.8) !important
						&::before
						&::after
							background-color #FFF
					&.is-en
						color transparent
						.is-inview &
							color rgba(#FFF, 0.2) !important
						&::before
						&::after
							background-color #FFF
			&>span
				&.is-jp
					color rgba(#FFF, 0.8)
				&.is-en
					color rgba(#FFF, 0.2)
			

		&.is-middle
			&>span
				&.is-jp
					font-size clamp(1.3rem, 3cqw, 3.0rem)
				&.is-en
					font-size clamp(4.5rem, 7.5cqw, 9.0rem)

		&>span
			overflow hidden
			display block
			position relative

			span
				will-change opacity
				.page-leave-active &
					transition opacity 0.8s ease
					opacity 0
			

			// &::before
			&::after
				content ""
				position absolute
				top 0
				left 0
				width 100%
				height 100%

			&::before
				transform translate3d(0, -101%, 0)
				transition all 0.8s cubic-bezier(0,0.8,0.8,0)

				will-change transform
				
				.page-leave-active &
					transform translate3d(0, 101%, 0)

			&::after
				transform translate3d(0, 101%, 0)
			
			&.is-jp
				color rgba(#040278, 0.8)
				font-size clamp(2.0rem, 4cqw, 4.0rem)
				font-weight bold
				line-height 1.0
				z-index 100

				
			&.is-en
				margin-top -0.3em
				color rgba(#171663, 0.2)
				font-family 'Oswald', sans-serif
				font-size clamp(6.0rem, 13cqw, 15.0rem)
				font-weight bold
				line-height 1.0
				vertical-align top
				z-index 0

				


</style>