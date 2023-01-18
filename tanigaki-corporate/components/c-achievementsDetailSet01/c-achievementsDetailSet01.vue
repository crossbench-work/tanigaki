<template lang="pug">
	section.c-achievementsDetailSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.l-contentsWrapper.is-middle
						.block.is-text
							.l-contentsWrapper.is-small
								.area.is-text
									p.m-baseText01 ここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入ります
								.area.is-text
									p.m-baseText01 ここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入りますここにはコピーが入ります

						.block.is-list
							ul
								li
									p.image
										img(src="https://placehold.jp/480x300.png", alt="")
								li
									p.image
										img(src="https://placehold.jp/480x300.png", alt="")
								li
									p.image
										img(src="https://placehold.jp/480x300.png", alt="")
								li
									p.image
										img(src="https://placehold.jp/480x300.png", alt="")
								li
									p.image
										img(src="https://placehold.jp/480x300.png", alt="")
								li
									p.image
										img(src="https://placehold.jp/480x300.png", alt="")

						.block.is-btn
</template>

<script>
	
	export default {
		name: 'c-achievementsDetailSet01',
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-achievementsDetailSet01
		&>.componentWrapper
			padding clamp(40px, 8cqw, 120px) 0

			.block.is-text
				margin-top 6%

			.block.is-list
				margin-top 6%
				ul
					display flex
					flex-wrap wrap
					gap 40px
					
					li
						width calc(50.0% - 20px)
						
						.image
							overflow hidden
							width 100%
							border-radius 20px
							
							img
								width 100%
								height auto

			.block.is-btn
				margin-top 6%

			
</style>