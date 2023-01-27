<template lang="pug">
	.js-inviewPoint
		section.c-newsDetailSet01.is-fadeInAnimation
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.l-contentsWrapper.is-middle
							.block.is-title
								h2.title(v-html="list.title")
							.block.is-contents(v-html="list.content")
							
							.block.is-btn
								m-borderBtn01(url = "/news/", text="BACK")
								

</template>

<script>

	export default {
		name: 'c-newsDetailSet01',
		props: {
			list: {}
		},
		mounted() {
			console.log(this.lists)
		},
		methods: {
			
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	

	.c-newsDetailSet01
		&>.componentWrapper
			padding clamp(60px, 10cqw, 190px) 0

			.block.is-title
				color #040278
				font-size clamp(1.6rem, 3cqw, 2.8rem)
				font-weight bold
			
			.block.is-contents
				margin-top 3%
				overflow-wrap break-word

				h1, h2, h3, h4, h5
					font-weight bold
				h1
					margin-top 2.0%
					font-size clamp(1.6rem, 3cqw, 2.8rem)
				h2
					margin-top 1.8%
					font-size clamp(1.5rem, 2.5cqw, 2.4rem)
				h3
					margin-top 1.6%
					font-size clamp(1.4rem, 2.0cqw, 2.0rem)
				h4
					margin-top 1.4%
					font-size clamp(1.3rem, 1.8cqw, 1.8rem)
				h5
					margin-top 1%
					font-size clamp(1.2rem, 1.6cqw, 1.6rem)
				p
					margin-top 1%
					font-size clamp(1.2rem, 1.6cqw, 1.6rem)
				
				*:first-child
					margin-top 0
			
			.block.is-btn
				display flex
				justify-content center
				margin-top 6%
</style>