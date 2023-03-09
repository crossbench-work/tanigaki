<template lang="pug">
	.js-inviewPoint
		section.c-companyOutlineSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								m-sectionTitle01(jp = '会社概要', en = 'OUTLINE', className = 'is-middle is-white is-animate')

						.block.is-table
							.l-contentsWrapper.is-middle
								.c-tableSet01
									dl
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 会社名
											dd
												.is-fadeInAnimation
													p.m-baseText01 谷垣工業株式会社
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 事業所
											dd
												.is-fadeInAnimation
													.imageWrapper
														.area.is-text
															.area.is-text
																p.m-baseText01 〈本社 / 本社工場〉
															.area.is-text
																p.m-baseText01 神戸市垂水区小束山本町1丁目5番1号
																	br
																	| TEL（078）-784-0111（代表）
																	br
																	| FAX（078）-782-6270
															.area.is-btn
																m-borderBtn01(blank = true, className ="is-white", text='MAP', url = 'https://goo.gl/maps/vaafxyaDDKHJHTCK7')
														.area.is-image.is-floatRight
															p.image
																img(src="~/assets/images/contents/company_outline_image01.png", alt="〈本社 / 本社工場〉")


										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 資本金
											dd
												.is-fadeInAnimation
													p.m-baseText01 ３,240万円
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 創業
											dd
												.is-fadeInAnimation
													p.m-baseText01 昭和14年12月
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 設立
											dd
												.is-fadeInAnimation
													p.m-baseText01 昭和47年2月5日
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 役員一覧
											dd
												.is-fadeInAnimation
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
												.is-fadeInAnimation
													p.title
														span 事業内容
											dd
												.is-fadeInAnimation
													p.m-baseText01 船舶内装設計施工事業、建築内装設計施工事業、造作家具設計施工事業
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 建設業許可
											dd
												.is-fadeInAnimation
													p.m-baseText01 兵庫県知事許可（般-2）第108916号
														br
														| 建築工事業・内装仕上工事業・大工工事業
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 主要取引先
											dd
												.is-fadeInAnimation
													p.m-baseText01 清水建設株式会社、三菱重工業株式会社神戸造船所、三菱造船株式会社、阪九フェリー株式会社 
														br
														| 高島屋スペースクリエイツ株式会社、株式会社Ｊ.フロント建装　　　(敬称略・順不同)
										.block.is-column
											dt
												.is-fadeInAnimation
													p.title
														span 取引金融機関
											dd
												.is-fadeInAnimation
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
	
	.c-tableSet01
		.block.is-column
			display flex

			padding clamp(20px, 3%, 40px) 0
			color #FFF
			border-top 1px solid rgba(#FFF, 0.2)

			+MQ_MAX(SP_RES_WID01)
				flex-direction column

			.area.is-text
				margin-bottom clamp(15px, 2svw, 30px)
				&:last-child
					margin-bottom 0
			
			.imageWrapper
				display flex
				justify-content space-between
				width 100%

				+MQ_MAX(SP_RES_WID01)
					display block

			.area.is-image
				padding-left clamp(10px, 2svw, 20px)
				+MQ_MAX(SP_RES_WID01)
					padding-left 0
				.image
					width 100%
					border-radius 20px
					overflow hidden
					img
						width 100%
						height auto
			dt
				width 10%
				padding 0 clamp(10px, 2svw, 20px)
				font-size clamp(1.4rem, 1.4cqw, 1.8rem)
				font-weight bold

				+MQ_MAX(SP_RES_WID01)
					width 100%
					margin-bottom 3%
					padding-left 0
			dd
				width 90%

				+MQ_MAX(SP_RES_WID01)
					width 100%
</style>