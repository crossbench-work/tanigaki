<template lang="pug">
	.js-inviewPoint
		section.c-companyAbout01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								m-border-leftTitle01(text = "誠実なものづくりで<br>社会に貢献", className = "is-animate")
								
						.block.is-text
							.l-contentsWrapper.is-middle
								.is-fadeInAnimation
									p.m-baseText01
										span テクノロジーの弛まぬ進化によって、私たちの生活は「機能的に豊か」になりました。
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
			position relative
			padding clamp(40px, 8cqw, 120px) 0 clamp(100px, 20cqw, 260px) 

			+MQ_MAX(SP_RES_WID01)
				padding-bottom 10%

			&::before
				content ""
				display block
				position absolute
				top 50%
				right 0
				width 45svw
				max-width 700px
				height 45svw
				max-height 700px
				background-image url(" require(`~/assets/images/contents/company_about_bg01.png?webp`) ")
				background-repeat no-repeat
				background-size cover
				background-position center
				transform translate3d(10%, -50%, 0)
				

			.block.is-title
				margin-bottom 2%

			.block.is-text
				.m-baseText01
					width 70%
					max-width 600px

					+MQ_MAX(SP_RES_WID01)
						width 100%
						max-width 100%
</style>