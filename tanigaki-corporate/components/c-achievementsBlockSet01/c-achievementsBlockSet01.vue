<template lang="pug">
	section.c-achievementsBlockSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.l-contentsWrapper.is-middle
						ul
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります
							li
								a(href="")
									p.image
										img(src="https://placehold.jp/580x380.png", alt="")
									h2.title 実績先を記入
									p.text ここにはコメントが入りますここにはコメントが入りますここにはコメントが入りますここにはコメント入ります


</template>

<script>
	
	export default {
		name: 'c-achievementsBlockSet01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-achievementsBlockSet01
		&>.componentWrapper
			padding clamp(40px, 8cqw, 120px) 0
			ul
				display flex
				flex-wrap wrap
				gap 40px

				li
					width calc(50.0% - 20px)
					a
						display block
						color inherit
						text-decoration none
					.image
						overflow hidden
						width 100%
						border-radius 20px
						
						img
							width 100%
							height auto
					.title
						margin-top 2%
						color #E02400
						font-size clamp(1.2rem, 7cqw, 1.8rem)
						font-weight bold
					
					.text
						margin-top 1%
						font-size clamp(1.0rem, 6cqw, 1.4rem)
</style>