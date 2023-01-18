<template lang="pug">
	section.c-companyMessageSet01
		.componentWrapper
			.block.is-title
				.l-contentsWrapper
					.l-mqWrapper
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01.is-middle
								span.is-jp 社長挨拶
								span.is-en MESSAGE
			.block.is-bg
				.l-contentsWrapper
					.l-mqWrapper
						.l-contentsWrapper.is-middle
							.area.is-text
								p.director 代表取締役社長
								h3.name 谷垣 正彰
								p.text キャッチコピーキャッチコピーキャッチコピー
			.block.is-text
				.l-contentsWrapper
					.l-mqWrapper
						.l-contentsWrapper.is-small
							.area.is-text
								p.m-baseText01 私たちは昭和14年の創業以来、船舶建築内装業者として、
									br
									| お客様のご支援とご愛顧のもと、
									br
									| 今日まで発展してくることができました。
									br
									| その原動となるのは「誠実なものづくり」に徹することです。
								p.m-baseText01  品質の高いインテリアを表現したい
									br
									| 完璧な製品を作りたい
							.area.is-text
								p.m-baseText01 誠実な想いをもとにひとつずつを作り上げていく中で、
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
				span
					&.is-en
						margin-bottom -0.35em
			.block.is-bg
				background-color #DFDFDF
				.l-contentsWrapper.is-middle
					display flex
					justify-content flex-end
					align-items center
					background-color #DFDFDF
					height 36svw
					max-height 550px

					.area.is-text
						max-width 480px
						width 40%

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
					.area.is-text
						width 49%
</style>