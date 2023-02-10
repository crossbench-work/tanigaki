<template lang="pug">
	.js-inviewPoint
		section.c-companyMessageSet01
			.componentWrapper
				.block.is-title
					.l-contentsWrapper
						.l-mqWrapper
							.l-contentsWrapper.is-middle
								m-sectionTitle01(jp = '社長挨拶', en = 'MESSAGE', className = 'is-middle is-animate')
								
				.block.is-bg
					.l-contentsWrapper
						.l-mqWrapper
							.l-contentsWrapper.is-middle
								.area.is-text
									.is-fadeInAnimation
										p.director
											span 代表取締役社長
									
									.is-fadeInAnimation
										h3.name
											span 谷垣 正彰
									.is-fadeInAnimation
										p.text
											span 船舶内装業者として磨いた技術、
												br
												| 誠実なものづくり
				.block.is-text
					.l-contentsWrapper
						.l-mqWrapper
							.l-contentsWrapper.is-small
								.area.is-text
									.is-fadeInAnimation
										p.m-baseText01 
											span 私たちは昭和14年の創業以来、船舶建築内装業者として、
												br
												| お客様のご支援とご愛顧のもと、
												br
												| 今日まで発展してくることができました。
												br
												| その原動となるのは「誠実なものづくり」に徹することです。
									
										p.m-baseText01
											span 品質の高いインテリアを表現したい
												br
												| 完璧な製品を作りたい
								.area.is-text
									.is-fadeInAnimation
										p.m-baseText01
											span 誠実な想いをもとにひとつずつを作り上げていく中で、
												br
												| 日々技術を磨いてまいりました。
												br
												| これからも固定概念にとらわれることなく、
												br
												| お客様に満足していただけるよう努力してまいります。

</template>

<script>
	
	export default {
		name: 'c-companyMessageSet01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-companyMessageSet01
		margin-bottom 10%
		&>.componentWrapper
			container-type inline-size
			.block.is-title
				position relative
				z-index 600
				span
					&.is-en
						margin-bottom -0.35em
			.block.is-bg
				position relative

				&::before
					content ""
					display block
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					background-image url(" require(`~/assets/images/contents/company_message_bg01.png?webp`) ")
					background-repeat no-repeat
					background-size cover
					background-position center

					+MQ_MAX(SP_RES_WID01)
						position relative
						height 0
						padding-top 30%


				.l-contentsWrapper.is-middle
					position relative
					z-index 100
					display flex
					justify-content flex-end
					align-items center
					// background-color #DFDFDF
					height 36svw
					max-height 550px

					+MQ_MAX(SP_RES_WID01)
						justify-content flex-start
						height auto

					.area.is-text
						max-width 480px
						width 40%

						
						
						+MQ_MAX(SP_RES_WID01)
							width 100%
							max-width 100%
							margin-top 4%


					.director
						font-size clamp(1.4rem, 1.2cqw, 1.8rem)
					.name
						color #E02400
						font-size clamp(1.4rem, 2.5cqw, 3.8rem)
						font-weight bold
					.text
						font-size clamp(1.4rem, 1.9cqw, 2.8rem)

			.block.is-text
				margin-top 5%
				.l-contentsWrapper.is-small
					display flex
					justify-content space-between

					+MQ_MAX(SP_RES_WID01)
						display block

					.area.is-text
						width 49%

						+MQ_MAX(SP_RES_WID01)
							width 100%
							margin-top 3%
							
							br
								display none
						
						.m-baseText01
							margin-top 3%
							&:first-child
								margin-top 0
						
						&:first-child
							+MQ_MAX(SP_RES_WID01)
								margin-top 0
</style>