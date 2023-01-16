<template lang="pug">
	div.c-newsPageContents
		c-globalHeader01(current = "news")
		c-pageTitleSet01(jp = '新着情報', en = 'NEWS')
		section.c-newsSet01
			.componentWrapper
				.block.is-news
					dl
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
						a(href="")
							dt.date 2022.08.26
							dd.text ここにはニュースの見出しが入ります
		c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'NewsPage',
	layout: "l-mainWrapper01",
	mounted() {
	}
})
</script>

<style lang="stylus">
	

</style>



