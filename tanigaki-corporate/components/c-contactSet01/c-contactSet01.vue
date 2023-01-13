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
					.block.is-text
						.l-contentsWrapper.is-middle
							h2.m-largeText01
								span 設計から製作まで
									br
									| ワンストップオーダーが可能な
									br
									| 自社工場をご紹介します。
					.block.is-btn
						.l-contentsWrapper.is-middle
							m-borderBtn01
					
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
			position relative

			height 100svh
			max-height 700px
			padding clamp(60px, 10cqw, 190px) 0
			box-sizing border-box
			background-color #DFDFDF
			background-image url('~/assets/images/common/common_contact_bg01.png')
			background-repeat no-repeat
			background-size cover
			background-position center

			&::before
				content ""
				display block
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				background-image url('~/assets/images/common/common_contact_texture01.png')
				mix-blend-mode multiply

			.block.is-title
				margin-bottom clamp(30px, 6cqw, 60px)

				.m-sectionTitle01
					span
						&.is-jp
							color rgba(#FFF, 0.8)
						&.is-en
							color rgba(#FFF, 0.2)
				
			.block.is-text	
				.m-largeText01
					span
						color #FFF
</style>