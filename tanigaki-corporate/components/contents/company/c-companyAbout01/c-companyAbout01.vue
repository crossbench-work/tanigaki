<template lang="pug">
	section.c-companyAbout01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							.m-border-leftTitle01
								h2.title
									span 誠実なものづくりで
										br
										| 社会に貢献
					.block.is-text
						.l-contentsWrapper.is-middle
							p.m-baseText01 テクノロジーの弛まぬ進化によって、私たちの生活は「機能的に豊か」になりました。
								br
								| 私たちは、日常に溶け込む家具やインテリアは「感情的な豊かさ」を形成する一部を担っていると考えます。
								br
								| 変わりゆく時代の中で、確かな伝統と技術をもって人々の心を豊かにする居住空間をご提供いたします。
				

</template>

<script>
	
	export default {
		name: 'c-companyAbout01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-companyAbout01
		&>.componentWrapper
			container-type inline-size
			overflow hidden
			padding clamp(40px, 8cqw, 120px) 0 clamp(100px, 20cqw, 260px) 

			.block.is-title
				margin-bottom 2%
</style>