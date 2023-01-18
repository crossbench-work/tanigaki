<template lang="pug">
	section.c-companyOutlineSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01.is-middle
								span.is-jp 会社概要
								span.is-en OUTLINE
					.block.is-table
						.l-contentsWrapper.is-middle
							.c-tableSet01
								dl
									.block.is-column
										dt
											p.title 会社名
										dd
											p.m-baseText01 谷垣工業株式会社
									.block.is-column
										dt
											p.title 事業所
										dd
											p.m-baseText01 谷垣工業株式会社
									.block.is-column
										dt
											p.title 資本金
										dd
											p.m-baseText01 ３,240万円
									.block.is-column
										dt
											p.title 創業
										dd
											p.m-baseText01 昭和14年12月
									.block.is-column
										dt
											p.title 設立
										dd
											p.m-baseText01 昭和47年2月5日
									.block.is-column
										dt
											p.title 役員一覧
										dd
											.area.is-text
												p.m-baseText01
													b 代表取締役社長
													br
													| 谷垣 正彰
											.area.is-text
												p.m-baseText01
													b 常務取締役
													br
													| 谷垣 友彰
											.area.is-text
												p.m-baseText01
													b 取締役
													br
													| 武内 功
											.area.is-text
												p.m-baseText01
													b 取締役
													br
													| 澤村 誠二

									.block.is-column
										dt
											p.title 事業内容
										dd
											p.m-baseText01 船舶内装設計施工事業、建築内装設計施工事業、造作家具設計施工事業
									.block.is-column
										dt
											p.title 建設業許可
										dd
											p.m-baseText01 兵庫県知事許可（般-2）第108916号
												br
												| 建築工事業・内装仕上工事業・大工工事業
									.block.is-column
										dt
											p.title 主要取引先
										dd
											p.m-baseText01 昭和47年2月5日
									.block.is-column
										dt
											p.title 設立
										dd
											p.m-baseText01 清水建設株式会社、三菱重工業株式会社神戸造船所、三菱造船株式会社、阪九フェリー株式会社 
												br
												| 高島屋スペースクリエイツ株式会社、株式会社Ｊ.フロント建装　　　(敬称略・順不同)
									.block.is-column
										dt
											p.title 取引金融機関
										dd
											p.m-baseText01 三井住友銀行 垂水支店、三菱UFJ銀行 兵庫支店、商工組合中央金庫 神戸支店　　　(敬称略・順不同)
	

</template>

<script>
	
	export default {
		name: 'c-companyOutlineSet01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-companyOutlineSet01
		margin-bottom 10%
		background-image url('~/assets/images/contents/company_outline_bg01.png')

		&>.componentWrapper
			container-type inline-size
			overflow hidden
			padding clamp(40px, 8cqw, 120px) 0

			.block.is-title
				margin-bottom clamp(30px, 6cqw, 60px)

				.m-sectionTitle01
					span
						&.is-jp
							color rgba(#FFF, 0.8)
						&.is-en
							color rgba(#FFF, 0.2)
</style>