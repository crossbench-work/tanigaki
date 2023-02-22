<template lang="pug">
	div.c-companyPageContents
		c-globalHeader01(current = "company")
		main.l-mainContainer
			.js-headerTypeSet
				c-pageTitleSet01(jp = '会社案内', en = 'COMPANY')
			.js-headerTypeSet.is-blue
				c-companyAbout01
			.js-headerTypeSet.is-white
				c-companyMessageSet01
			.js-headerTypeSet
				c-companyOutlineSet01
			.js-headerTypeSet.is-blue
				c-companyHistorySet01
			.js-headerTypeSet
				c-contactSet01
		c-globalFooter01


</template>

<script>
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

export default Vue.extend({
	name: 'CompanyPage',
	layout: "l-mainWrapper01",
	head: {
		title: '会社案内 | 谷垣工業株式会社',
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
	
	
	

	
			
	
				


</style>



