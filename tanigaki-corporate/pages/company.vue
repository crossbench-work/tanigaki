<template lang="pug">
	div.c-companyPageContents
		c-globalHeader01(current = "company")
		c-pageTitleSet01(jp = '会社案内', en = 'COMPANY')

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
		
		section.c-companyHistorySet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								h2.m-sectionTitle01.is-middle
									span.is-jp 沿革
									span.is-en HISTORY
						.block.is-history
							.l-contentsWrapper.is-middle
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1939
												span.is-jp 昭和14年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 12月
												ul.list
													li
														p.m-baseText01 合名会社 谷垣木工所創立
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1953
												span.is-jp 昭和28年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 5月
												ul.list
													li
														p.m-baseText01 資本金700万円に増資
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1964
												span.is-jp 昭和39年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 5月
												ul.list
													li
														p.m-baseText01 資本金1800万円に増資
													li
														p.m-baseText01 団地共同組合神戸木工センターに加入
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1967
												span.is-jp 昭和42年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 11月
												ul.list
													li
														p.m-baseText01 神戸木工センターに工場移転
													li
														p.m-baseText01 船舶用化粧板（マリンカラー）の製造開始

								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1968
												span.is-jp 昭和43年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 6月
												ul.list
													li
														p.m-baseText01 資本金2,500万円に増資
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1953
												span.is-jp 昭和28年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 5月
												ul.list
													li
														p.m-baseText01 資本金700万円に増資

								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1969
												span.is-jp 昭和44年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 6月
												ul.list
													li
														p.m-baseText01 資本金3,300万円に増資
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1972
												span.is-jp 昭和47年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 2月
												ul.list
													li
														p.m-baseText01 谷垣工業株式会社　設立
											.area.is-month
												h4.title 4月
												ul.list
													li
														p.m-baseText01 合名会社谷垣木工所より営業権を引き継ぎ、谷垣工業株式会社で営業開始

								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1975
												span.is-jp 昭和50年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 8月
												ul.list
													li
														p.m-baseText01 資本金1,800万円に増資
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1976
												span.is-jp 昭和51年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 7月
												ul.list
													li
														p.m-baseText01 資本金2,700万円に増資


								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1977
												span.is-jp 昭和52年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 7月
												ul.list
													li
														p.m-baseText01 資本金3,240万円に増資
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 1986
												span.is-jp 昭和61年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 12月
												ul.list
													li
														p.m-baseText01 建設業登録

								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 2000
												span.is-jp 平成12年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 12月
												ul.list
													li
														p.m-baseText01 本社事務所棟建設着手
								
								.c-historySet01
									.componentWrapper
										.block.is-year
											h3.year
												span.is-en 2001
												span.is-jp 平成13年
										.block.is-line
										.block.is-contents
											.area.is-month
												h4.title 4月
												ul.list
													li
														p.m-baseText01 本社事務所棟完成

		
		c-contactSet01
		c-globalFooter01


</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'CompanyPage',
	layout: "l-mainWrapper01",
	mounted() {
	}
})
</script>

<style lang="stylus">
	.c-companyAbout01
		&>.componentWrapper
			container-type inline-size
			overflow hidden
			padding clamp(40px, 8cqw, 120px) 0 clamp(100px, 20cqw, 260px) 

			.block.is-title
				margin-bottom 2%
	
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
			
	.c-tableSet01
		.block.is-column
			display flex

			padding clamp(20px, 3%, 40px) 0
			color #FFF
			border-top 1px solid rgba(#FFF, 0.2)

			.area.is-text
				margin-bottom 15%
				&:last-child
					margin-bottom 0

			dt
				width 10%
				padding 0 clamp(10px, 2%, 20px)
				font-size clamp(1.4rem, 1.4cqw, 1.8rem)
				font-weight bold
			
	.c-companyHistorySet01
		margin-bottom 10%
		&>.componentWrapper
			.block.is-title
				margin-bottom clamp(30px, 6cqw, 60px)



	.c-historySet01
		&:last-child
			.componentWrapper
				.block
					padding-bottom 0
				.block.is-line
					&:before
						display none
					
			
		.componentWrapper
			display flex

			.block
				padding-bottom clamp(20px, 3cqw, 40px)

				

			.block.is-year
				width clamp(100px, 13%, 150px)
				h3.year
					span
						display block
						&.is-en
							font-family 'Oswald', sans-serif
							font-size clamp(3.5rem, 6.0cqw, 7.5rem)
							font-weight bold
							line-height 0.75
						&.is-jp
							margin-top 0.7em
							font-size clamp(1.4rem, 1.4cqw, 1.8rem)
			.block.is-line
				position relative
				width clamp(50px, 10%, 120px)
				&:before
					content ""
					display block
					position absolute
					top 7%
					left 50%
					width 2px
					height 100%
					background-color #CFCFCF
					transform translate3d(-50%, 0, 0)
				
				&:after
					content ""
					display block
					position absolute
					top 7%
					left 50%
					width clamp(14px, 1.5svw, 22px)
					height clamp(14px, 1.5svw, 22px)
					background-color #040278
					border-radius 100px
					transform translate3d(-50%, 0, 0)
					

			.block.is-contents
				
				.title
					color #E02400
					font-weight bold
					font-size clamp(1.4rem, 1.4cqw, 1.8rem)
				


</style>



