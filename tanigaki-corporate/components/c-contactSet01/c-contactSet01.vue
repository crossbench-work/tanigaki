<template lang="pug">
	section.c-contactSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01
								span.is-jp お問合せ
								span.is-en CONTACT
					
</template>

<script>
	export default {
		name: 'c-contactSet01',
		
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"

				
	.c-contactSet01
		&>.componentWrapper
			height 100svh
			max-height 700px
			padding clamp(60px, 10cqw, 190px) 0
			box-sizing border-box
			background-color #DFDFDF
</style>