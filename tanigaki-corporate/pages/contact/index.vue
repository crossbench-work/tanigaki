<template lang="pug">
	div.c-contactPageContents
		c-globalHeader01(current = "contact")
		main.l-mainWrapper
			c-pageTitleSet01(jp = 'お問合せ', en = 'CONTACT')
			.formrun-embed(data-formrun-form="@illbe" data-formrun-redirect="true")
			c-contactSet01
		c-globalFooter01


</template>

<script lang="ts">
import Vue from 'vue'
import inView from '~/assets/javascript/_j_inView/_j_inView.js'

export default Vue.extend({
	name: 'ContactPage',
	layout: "l-mainWrapper01",
	head () {
		return {
			script: [
				{ src: 'https://sdk.form.run/js/v2/embed.js' }
			]
		}
	},
	mounted() {
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
