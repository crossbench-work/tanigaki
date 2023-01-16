<template lang="pug">
	div.c-industryPageContents
		c-globalHeader01(current = "industry")
		c-pageTitleSet01(jp = '事業内容', en = 'INDUSTRY')

		aside.c-industryInnerLinkSet01
			.componentWrapper
				ul
					li
						a(href="") 
							p.image
							p.text
								span.is-num 01
								span.is-text 建築内装
					li
						a(href="")
							p.image
							p.text
								span.is-num 02
								span.is-text 船舶内装
					li
						a(href="")
							p.image
							p.text
								span.is-num 03
								span.is-text 造作家具
		
		section.c-industryBlockSet01
			.componentWrapper
				.block.is-image
					.area.is-num
						p 01
					.area.is-image
				.block.is-image
					.area.is-title
						.m-border-leftTitle01
							h2.title
								span 建築内装設計施工
					.area.is-text
						h3.title 兵庫県下有数の施工対応能力
						p.text 病院・学校・ホテル・カーディーラーなど、あらゆる商業施設の木工事及び造作家具工事を設計から施工までワンストップで行います。弊社は兵庫県下では有数の施工対応力を誇ります。
					.area.is-btn
					
				.block.is-thumbnail
					ul
						li
		
		section.c-industryBlockSet01
			.componentWrapper
				.block.is-image
					.area.is-num
						p 02
					.area.is-image
				.block.is-image
					.area.is-title
						.m-border-leftTitle01
							h2.title
								span 船舶内装設計施工
					.area.is-text
						h3.title 全国的にも稀な船舶内装専門業者
						p.text フェリー・商船・潜水艦・クルーザーなど、あらゆる船舶内装工事を設計から施工までワンストップで行います。全国でも数少ない船舶内装専門業者として、活躍の場は全国にわたります。
					.area.is-btn

				.block.is-thumbnail
					ul
						li
		
		section.c-industryBlockSet01
			.componentWrapper
				.block.is-image
					.area.is-num
						p 03
					.area.is-image
				.block.is-image
					.area.is-title
						.m-border-leftTitle01
							h2.title
								span 造作家具設計施工
					.area.is-text
						h3.title 船舶内装で培った
							br
							| 堅牢で自由な設計の家具を製作
						p.text 建築内装・船舶内装における造作家具を自社工場で設計・製作します。既製品では出来ない自由な設計と、船舶内装で培った堅牢な家具をご提供します。
					.area.is-btn

				.block.is-thumbnail
					ul
						li
					

		c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'IndustryPage',
	layout: "l-mainWrapper01",
	mounted() {
	}
})
</script>

<style lang="stylus">
	

</style>



