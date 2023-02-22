<template lang="pug">
	.factoryBlockSet01_wrapper
		.js-inviewPoint
			section.c-factoryBlockSet01.is-contentsLeft
				.componentWrapper
					.l-contentsWrapper
						.l-mqWrapper
							.block.is-content
								.area.is-image.is-fadeInAnimation
									.box.is-image
										p.image
											m-basePicture(:sources="[{ srcset: 'factory_main_image01_sp.png', type: 'image/png', media: '640px'}]", src="factory_main_image01.png", alt="設計部 本社事務所棟")
								.area.is-text
									.box.is-title
										m-border-leftTitle01(text = "設計部", smallText = "本社事務所棟" className = "is-animate")
									.box.is-text.is-fadeInAnimation
										h3.title 蓄積された実績により
											br
											| ご要望をカタチにする頭脳集団
										p.text 全ての仕事は設計から始まります。 お客様との打ち合わせにより、ご要望を図面に表現します。 蓄積された実績により、機能性・意匠性・コスト効率性を最適化したご提案をします。
									.box.is-btn
							.block.is-lists.is-fadeInAnimation
								.swiper-wrapper
									.swiper-slide
										p.image
											m-basePicture(src="factory01_image01.png", alt="家具工場とのスムーズな連携")
										h4.title 家具工場とのスムーズな連携
										p.text 設計部と家具工場が併設されており、図面で表しにくい細かい納まりの検討が製作段階でスムーズに行えます。
									.swiper-slide
										p.image
											m-basePicture(src="factory01_image02.png", alt="居住空間から細部までご提案")
										h4.title 居住空間から細部までご提案
										p.text 船舶内装設計では居住空間のレイアウトから細かな納まりまでトータルで最適なご提案をします。
									.swiper-slide
										p.image
											m-basePicture(src="factory01_image03.png", alt="培ったノウハウを活かす提案力")
										h4.title 培ったノウハウを活かす提案力
										p.text 長年培ってきたノウハウにより、カラーコーディネートや各内装材の使用用途における適材適所のご提案をします。
									.swiper-slide
										p.image
											m-basePicture(src="factory01_image04.png", alt="原設計図を元に詳細図を作成")
										h4.title 原設計図を元に詳細図を作成
										p.text 建築内装設計では、設計事務所様からの原設計図を基に、木工事・家具工事に関する図面を施工レベルの詳細図に。
		.js-inviewPoint
			section.c-factoryBlockSet01
				.componentWrapper
					.l-contentsWrapper
						.l-mqWrapper
							.block.is-content
								.area.is-image.is-fadeInAnimation
									.box.is-image
										p.image
											m-basePicture(:sources="[{ srcset: 'factory_main_image02_sp.png', type: 'image/png', media: '640px'}]", src="factory_main_image02.png", alt="家具工房 本社工場")
								.area.is-text
									.box.is-title
										m-border-leftTitle01(text = "家具工場", smallText = "本社工場" className = "is-animate")

									.box.is-text.is-fadeInAnimation
										h3.title 多様なオーダーメイド家具を
											br
											| 心を込めて製作する職人集団
										p.text 設計から図面を引き受け、家具の製作を行います。 ベテランから若手まで切磋琢磨して技術を磨き続けています。 熟練のワザにより魂のこもった家具をご提供します。
									.box.is-btn
							.block.is-lists.is-fadeInAnimation
								.swiper-wrapper
									.swiper-slide
										p.image
											m-basePicture(src="factory02_image01.png", alt="熟練の職人が心を込めて製作")
										h4.title 熟練の職人が心を込めて製作
										p.text 箱状の家具から曲線形状の家具まであらゆる形状の家具を熟練の家具職人が心を込めて製作します。
									.swiper-slide
										p.image
											m-basePicture(src="factory02_image02.png", alt="堅牢で丁寧な組み立て")
										h4.title 堅牢で丁寧な組み立て
										p.text 祖業である船舶内装で培った堅牢な家具を熟練の職人が丁寧に心を込めて組み立てていきます。
									.swiper-slide
										p.image
											m-basePicture(src="factory02_image03.png", alt="パネルソーを3台設備")
										h4.title 質の高い納まりの家具製作
										p.text 現場実測に基づいた最適な寸法で家具を製作することにより、造作家具ならではの質の高い納まりを実現します。
									.swiper-slide
										p.image
											m-basePicture(src="factory02_image04.png", alt="塗装品にも対応")
										h4.title 塗装品にも対応
										p.text 工場3階に塗装ブースを設けておりますので、塗装品にも対応可能です。

</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	let thumbnailSlider = [];
	export default {
		name: 'c-factoryBlockSet01',
		mounted() {

			let target = document.querySelectorAll('.c-factoryBlockSet01 .block.is-lists');

			[].slice.call(target).forEach(function(element, i) {
				thumbnailSlider[i] =  new Swiper(element, {
					slidesPerView: 'auto',
					spaceBetween: 2 + '%',
					loop: true,
				})
			});
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-factoryBlockSet01
		&:last-child
			&>.componentWrapper
				padding-botom 0
			&.is-contentsLeft
				display block
				&>.componentWrapper
					background-image url('~/assets/images/contents/top_industry_texture01.png')

					.block.is-content
						.area.is-image
							order 1

			&>.componentWrapper
				padding clamp(40px, 8cqw, 120px) 0

				.block.is-content
					display flex
					flex-wrap wrap

					.area.is-image
						position relative
						width 45%
						z-index 100

						+MQ_MAX(600px)
							width 100%
						
						.box.is-image
							
							p.image
								overflow hidden
								width 100%
								border-radius 20px

								img
									width 100%
									height auto

									&.is-pc
										+MQ_MAX(600px)
											display none
									&.is-sp
										display none
										+MQ_MAX(600px)
											display block

										

					.area.is-text
						width 38%
						padding 6% 6% 0

						+MQ_MAX(600px)
							order 1
							width 100%
							padding 5% 0 0

						.box.is-text
							margin-top 8%

							+MQ_MAX(600px)
								margin-top 4%

							.title
								color #E02400
								font-size clamp(1.2rem, 7cqw, 1.8rem)
								font-weight bold
							
							.text
								margin-top 2%
								font-size clamp(1.0rem, 6cqw, 1.4rem)

						.box.is-btn
							margin-top 4%
				
			.block.is-lists
				margin-top clamp(-60px, -13svw, -200px)
				
				+MQ_MAX(SP_RES_WID01)
					margin-top 5%

				.swiper-slide
					width 24svw
					max-width 380px
					min-width 240px

					+MQ_MAX(SP_RES_WID01)
						width 30svw
						max-width 300px
						min-width 200px

					.image
						overflow hidden
						width 100%
						border-radius 10px
						img
							width 100%
							height auto
					
					.title
						margin-top 4%
						color #E02400
						font-size clamp(1.2rem, 2.5cqw, 1.6rem)
						font-weight bold
					
					.text
						margin-top 2%
						font-size clamp(1.0rem, 2cqw, 1.4rem)
</style>