<template lang="pug">
	.js-inviewPoint
		div.c-contactPageContents
			c-globalHeader01(current = "contact")
			main.l-mainContainer
				.js-headerTypeSet
					c-pageTitleSet01(jp = 'お問合せ', en = 'CONTACT')
				.js-headerTypeSet.is-blue
					.c-contactThanksSet
						.componentWrapper
							.l-contentsWrapper
								.l-mqWrapper
									.block.is-text
										p.text お問い合わせありがとうございました。
											br
											| この度は、お問い合わせいただき、誠にありがとうございました。
											br
											| お送りいただきました内容を確認の上、担当者より折り返しご連絡させていただきます。
											br
											| TEL 078-784-0111（代）
											br
											| お急ぎの場合はお電話にてご連絡ください。
									.block.is-btn
										m-borderBtn01(url = "/", text="TOP")
			c-globalFooter01

</template>

<script>
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

export default Vue.extend({
	name: 'ContactPage',
	layout: "l-mainWrapper01",
	head: {
		title: 'お問合せ | 谷垣工業株式会社',
		meta: [
			{ hid: 'description', name: 'description', content: '谷垣工業では、建築内装及び造作家具において自社で設計・デザイン・施工を行うことにより、 斬新で機能的な空間デザインを提案させていただいております。また、船舶内装という特殊な艤 装工事でも、その技術力を生かし高く評価されております。今後も固定観念にとらわれる事なく 、お客様に満足していただけますよう努力してまいります。' }
		]
	},
	mounted() {
		inView({
			className: '.js-headerTypeSet',
			reverse: true,
			ajust: 0.001,
			afterChange: function(el){
				if(el.tg.classList.contains('is-inview')) {
					if(el.tg.classList.contains('is-blue')) {
						document.querySelector('.c-globalHeader01').classList.add('is-blue');
					} else {
						document.querySelector('.c-globalHeader01').classList.remove('is-blue');
					}

					if(el.tg.classList.contains('is-white')) {
						document.querySelector('.c-globalHeader01').classList.add('is-white');
					} else {
						document.querySelector('.c-globalHeader01').classList.remove('is-white');
					}
				}
			},
		});
		this.$nextTick(() => {
			let _t= this;
			_t.$nuxt.$loading.start()
			setTimeout(function(){
				_t.$nuxt.$loading.finish()
				inView({
					className: '.js-inviewPoint',
					reverse: false
				});
			}, 1000)
		})
	}
})
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"
	.c-contactThanksSet
		.componentWrapper
			padding clamp(40px, 8cqw, 120px) 0
			.block.is-text
				font-size clamp(1.2rem, 1.5cqw, 1.4rem)
				text-align center

				+MQ_MAX(600px)
					text-align left
				
			.block.is-btn
				display flex
				justify-content center
				margin-top 4%

</style>


<!-- <script src="https://sdk.form.run/js/v2/embed.js"></script>
<div
  class="formrun-embed"
  data-formrun-form="@illbe"
  data-formrun-redirect="true">
</div> -->
