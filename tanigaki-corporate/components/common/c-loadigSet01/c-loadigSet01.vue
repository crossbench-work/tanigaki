<template lang="pug">
	section.c-loadigSet01(v-if="loading")
		.componentWrapper
			.block.is-loader
				.icon
					.spring-spinner
						.spring-spinner-part.top
							.spring-spinner-rotator
						
						.spring-spinner-part.bottom
							.spring-spinner-rotator
				.loader Loading
					
</template>

<script>
	export default {
		name: 'c-loadigSet01',
		data: () => ({
			loading: false
		}),
		methods: {
			start() {
				this.loading = true
			},
			finish() {
				this.loading = false
			}
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"
	
	@keyframes spring-spinner-animation {
		0% {
			border-width calc(60px / 7)
		}
		25% {
			border-width calc(60px / 23.33)
		}
		50% {
			transform rotate(115deg)
			border-width calc(60px / 7)
		}
		75% {
			border-width calc(60px / 23.33)
		}
		100% {
			border-width calc(60px / 7)
		}
	}

	.c-loadigSet01
		position fixed
		top 0
		left 0
		z-index 9900
		width 100%
		height 100%
		
		&::before
		&::after
			content ""
			display block
			position absolute
			top 0
			left 0
			width 100%
			height 100%

		&::before
			background-color rgba(0, 0, 0, 0.2)
		
		&:after
			background-image url('~/assets/images/contents/industry_link_texture01.png')
			background-size 4px
			mix-blend-mode multiply
			opacity 0.2

		.block.is-loader
			display flex
			align-items center
			gap 10px
			position absolute
			bottom 10px
			left 10px
			z-index 400
			
		.loader
			color #FFF
			font-family 'Oswald', sans-serif
			font-size clamp(1.0rem, 16cqw, 1.8rem)
			font-weight bold
			
		.icon
			width 30px
			height 30px
			.spring-spinner, .spring-spinner *
				box-sizing: border-box;

			.spring-spinner
				height 30px
				width 30px
			.spring-spinner .spring-spinner-part
				overflow hidden
				height calc(30px / 2)
				width 30px

			.spring-spinner  .spring-spinner-part.bottom
				transform rotate(180deg) scale(-1, 1)

			.spring-spinner .spring-spinner-rotator
				width 30px
				height 30px
				border calc(30px / 7) solid transparent
				border-right-color #fff
				border-top-color #fff
				border-radius 50%
				box-sizing border-box
				animation spring-spinner-animation 3s ease-in-out infinite
				transform rotate(-200deg)
			

			
</style>