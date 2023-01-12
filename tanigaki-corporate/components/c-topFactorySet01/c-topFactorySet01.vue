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
	@import "~/assets/stylus/_s_mixin"

	.c-topFactorySet01
		&>.componentWrapper
			container-type inline-size

			height 100svh
			max-height 800px
			padding clamp(60px, 10cqw, 190px) 0
			box-sizing border-box
			background-color #DFDFDF

			.block.is-title
				margin-bottom clamp(30px, 6cqw, 60px)

</style>