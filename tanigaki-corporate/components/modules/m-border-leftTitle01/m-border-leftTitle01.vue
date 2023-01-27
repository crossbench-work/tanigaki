<template lang="pug">
	.m-border-leftTitle01(:class='`${className}`')
		h2.title
			span(v-html="text")
			span.is-small(v-if="smallText" v-html="smallText")

</template>

<script>
	
	export default {
		name: 'm-border-leftTitle01',
		props: {
			className: {
				type: String,
				default: 'is-type01'
			},
			text : {
				type: String,
				default: 'タイトル'
			},
			smallText : {
				type: String
			}
		},
		mounted() {
			
		},
		methods: {
		}
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"
	@keyframes border-leftTitle01 {
		0% {
			transform: translate3d(101%, 0, 0)
		}
		40%, 60% {
			transform: translate3d(0, 0%, 0)
		}
		100% {
			transform: translate3d(calc(-100% + 4px), 0, 0)
		}
	}

	.m-border-leftTitle01
		container-type inline-size
		display flex
		position relative
		font-size clamp(1.6rem, 2.4cqw, 3.6rem)
		font-weight bold

		&.is-animate
			.title
				color transparent

				.is-inview &
					color inherit
					transition color ease 0.8s 0.7s
				
				.page-leave-active &
					transition all 0.8s 0.3s ease
					color transparent
					
				&::before
					width 100%
					height 100%
					transform translate3d(-101%, 0, 0)
					transition all 0.8s cubic-bezier(0,0.8,0.8,0)

					will-change transform
					.page-leave-active &
						transform translate3d(101%, 0, 0)

				&::after
					width 100%
					height 100%
					// transition all 0.3s ease
					transform translate3d(101%, 0, 0)
					will-change translate

					.is-inview &
						animation-name border-leftTitle01
						animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
						animation-fill-mode forwards
						animation-duration 1.0s

		.title
			overflow hidden
			display block
			position relative
			padding 2% 0 3% clamp(15px, 4%, 25px)

			&::before
			&::after
				content ""
				position absolute
				top 0
				left 0
				width 4px
				height 100%
				background-color #040278
				
			span
				display block
				&.is-small
					font-size clamp(1.4rem, 1.6cqw, 1.8rem)


</style>