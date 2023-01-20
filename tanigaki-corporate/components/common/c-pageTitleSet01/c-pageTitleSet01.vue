<template lang="pug">
	.c-pageTitleSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h1.m-sectionTitle01
								span.is-jp {{jp}}
								span.is-en {{en}}


</template>

<script>

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
		height 450px
		background-image url('~/assets/images/common/common_pageTitle_bg01.png')
		background-size cover
		background-position center
		background-repeat no-repeat
		overflow hidden
		

		&::before
			content ""
			display block
			position absolute
			z-index 0
			top 0
			left 0
			width 100%
			height 100%
			background-image url('~/assets/images/common/common_pageTitle_texture01.png')

		&>.componentWrapper
			width 100%

		.block.is-title
			position relative
			z-index 100
		.m-sectionTitle01
			span
				&.is-jp
					color rgba(#FFF, 0.8)
				&.is-en
					color rgba(#FFF, 0.2)
</style>