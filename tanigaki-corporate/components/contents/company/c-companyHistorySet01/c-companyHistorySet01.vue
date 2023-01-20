<template lang="pug">
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

</template>

<script>
	
	export default {
		name: 'c-companyHistorySet01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

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