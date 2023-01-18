<template lang="pug">
	section.c-newsSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.l-contentsWrapper.is-middle
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

</template>

<script>
	
	export default {
		name: 'c-newsSet01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-newsSet01
		&>.componentWrapper
			padding clamp(30px, 4cqw, 60px) 0
			background-image url('~/assets/images/contents/top_industry_texture01.png')

			dl
				a
					display block
					padding clamp(20px, 4cqw, 40px) 0
					color inherit
					text-decoration none
					border-bottom 1px solid rgba(#D9D9D9, 0.5)

					&:last-child
						border-bottom none

					dt.date
						margin-top 2%
						color #E02400
						font-size clamp(1.0rem, 6cqw, 1.4rem)
						font-weight bold
					dd.text
						margin-top 1%
						font-size clamp(1.0rem, 7cqw, 1.6rem)
</style>