<template lang="pug">
	.js-inviewPoint.is-pageTitleSet01
		.c-pageTitleSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								m-sectionTitle01(:jp = 'jp', :en = 'en', className = 'is-white is-animate')


</template>

<script>
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	export default {
		name: 'c-pageTitleSet01',
		props: {
			jp: {
				type: String,
				default: 'タイトル'
			},
			en: {
				type: String,
				default: 'title'
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.$nuxt.$loading.start()
				setTimeout(function(){
					this.$nuxt.$loading.finish()
					inView({
						className: '.js-inviewPoint.is-pageTitleSet01',
						reverse: false
					});
				}, 1000)
			})

			
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-pageTitleSet01
		display flex
		justify-content flex-start
		align-items center
		flex-wrap wrap
		position relative
		width 100%
		height clamp(200px, 34cqw, 450px)
		background-image url('~/assets/images/common/common_pageTitle_bg01.png')
		background-size cover
		background-position center
		background-repeat no-repeat
		overflow hidden
		

		&::before
		&::after
			content ""
			display block
			position absolute
			z-index 0
			top 0
			left 0
			width 100%
			height 100%
			
		&::before
			background-image url('~/assets/images/common/common_pageTitle_texture01.png')
		
		&::after
			background-color #0E0BA3
			transform translate3d(0, 0, 0)
			z-index 1000

			.is-inview &
				transform translate3d(0, -101%, 0)
				transition all 0.8s ease-out 0.2s

			.page-leave-active &
				transform translate3d(0, 0, 0)
				transition all 0.8s ease-out

		&>.componentWrapper
			width 100%

		.block.is-title
			position relative
			z-index 2000
		
</style>