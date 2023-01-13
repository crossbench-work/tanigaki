<template lang="pug">
	footer.c-globalFooter01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-logo
						.l-contentsWrapper.is-middle
							p.logo
								img(src="~/assets/images/common/common_logo01.svg" alt="谷垣工業株式会社").is-white
					.block.is-map
						.map
					.block.is-nav
						nav.is-global
							.l-contentsWrapper.is-middle
								ul
									li
										a(href="")
											span.is-jp ホーム
									li
										a(href="")
											span.is-jp 会社案内
									li
										a(href="")
											span.is-jp 事業内容
									li
										a(href="")
											span.is-jp 施工実績
									li
										a(href="")
											span.is-jp 工場紹介
									li
										a(href="")
											span.is-jp 新着情報
									li
										a(href="")
											span.is-jp お問合せ
					.block.is-copyright
						.l-contentsWrapper.is-middle
							p.copyright 〒655-0003 ©Copyright 2023 Tanigaki Kogyo. All Rights Reserved
</template>

<script>
	export default {
		name: 'c-globalFooter01',
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"

	.c-globalFooter01

		.componentWrapper
			display block
			padding clamp(40px, 6cqw, 100px) 0
			background-color #000000
			background-image url('~/assets/images/common/common_footer_texture01.png')

			.block.is-logo
				box-sizing border-box
				p.logo
					width 22%
					max-width 295px
					height 100%
					img
						width 100%
						height auto

						&.is-white
							filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(137deg) brightness(103%) contrast(101%);
			.block.is-map
				margin-top 3%
				.map
					width 100%
					height 460px
					background-color #DFDFDF
			
			.block.is-nav
				margin-top 3%
				nav.is-global
					container-type inline-size
					ul
						display flex
						column-gap 6%
					li
						a
							color #FFF
							text-decoration none

							span
								font-size clamp(1.2rem, 1.5cqw, 1.6rem)
			
			.block.is-copyright
				container-type inline-size
				margin-top 3%
				.copyright
					padding-top 3%
					color #FFF
					border-top 1px solid rgba(#D9D9D9, 0.2)
					font-size clamp(1.0rem, 1.1cqw, 1.2rem)
</style>