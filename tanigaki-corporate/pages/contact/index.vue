<template lang="pug">
	div.c-contactPageContents
		c-globalHeader01(current = "contact")
		main.l-mainContainer
			.js-headerTypeSet
				c-pageTitleSet01(jp = 'お問合せ', en = 'CONTACT')
			.js-headerTypeSet.is-blue
				.formrun-embed(data-formrun-form="@tomoaki-1674636821" data-formrun-redirect="true")
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
	head () {
		return {
			script: [
				{ src: 'https://sdk.form.run/js/v2/embed.js' }
			]
		}
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
	

</style>


<!-- <script src="https://sdk.form.run/js/v2/embed.js"></script>
<div
  class="formrun-embed"
  data-formrun-form="@illbe"
  data-formrun-redirect="true">
</div> -->
