<template lang="pug">
	.js-inviewPoint
		section.c-companyHistorySet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.block.is-title
							.l-contentsWrapper.is-middle
								m-sectionTitle01(jp = '沿革', en = 'HISTORY', className = 'is-middle is-animate')

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
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	export default {
		name: 'c-companyHistorySet01',
		mounted() {
			inView({
				className: '.c-historySet01',
				addClassName: 'is-inviewHistory',
				reverse: false
			});
			
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	
			
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
		
		&.is-inviewHistory
			.componentWrapper
				.block.is-year
					.year
						span
							color inherit
							.page-leave-active &
								color transparent
							&::before
								.page-leave-active &
									transform translate3d(101%, 0, 0)

							&::after
								transform translate3d(-101%, 0, 0)
				
				.block.is-line
					.page-leave-active &
						&::before
							height 0 !important

					&::before
						height 100%
						will-change height
						transition height 0.3s 0.8s ease-in

						.page-leave-active &
							height 0 !important
							transition-delay 0s
					
					&::after
						opacity 0
						animation-name fadeIn
						animation-duration 0.2s
						animation-delay 0.4s
						animation-timing-function ease-out
						animation-fill-mode forwards
						
						.page-leave-active &
							animation-delay 0s
							opacity 0
				
				.block.is-contents
					opacity 1.0
					transition opacity 0.8s 0.8s ease
					

		.componentWrapper
			display flex
			flex-wrap wrap

			.block
				padding-bottom clamp(20px, 3cqw, 40px)

			.block.is-year
				width 12%
				max-width 140px
				min-width 65px
				margin-top -1.3em

				+MQ_MAX(SP_RES_WID01)
					margin-top -0.5em
				.year
					display flex
					flex-direction column
					align-items flex-start
					span
						overflow hidden
						display block
						position relative

						color transparent
						transition color ease 0.1s 0.5s

						&.is-en
							font-family 'Oswald', sans-serif
							font-size clamp(3.5rem, 6.0cqw, 7.5rem)
							font-weight bold
							line-height 1.0

							&::before
							&::after
								background-color #000

						&.is-jp
							margin-top 0.3em
							font-size clamp(1.4rem, 1.4cqw, 1.8rem)

							&::before
							&::after
								background-color #DFDFDF
						
						&::before
						&::after
							content ""
							display block
							position absolute
							z-index 0
							top 0
							left 0
							width 100%
							height 100%
							transition all 0.7s cubic-bezier(0,0.8,0.8,0)
						
						&::before
							transform translate3d(-101%, 0, 0)

						&::after
							transform translate3d(101%, 0, 0)
								
			.block.is-line
				position relative
				width 10%
				max-width 100px
				min-width 40px
				&:before
					content ""
					display block
					position absolute
					top 7%
					left 50%
					width 2px
					height 0
					background-color #CFCFCF
					transform translate3d(-50%, 0, 0)
				
				&:after
					opacity 0
					content ""
					display block
					position absolute
					top 7%
					left 50%
					width clamp(10px, 1.5svw, 22px)
					height clamp(10px, 1.5svw, 22px)
					background-color #040278
					border-radius 100px
					transform translate3d(-50%, 0, 0)
					

			.block.is-contents
				opacity 0
				will-change opacity
				transition opacity 0.1s ease-in
				width 67%

				+MQ_MAX(SP_RES_WID01)
					width 60%

				.page-leave-active &
					transition opacity 0.1s ease
					opacity 0 !important
					

				.title
					color #E02400
					font-weight bold
					font-size clamp(1.4rem, 1.4cqw, 1.8rem)
</style>