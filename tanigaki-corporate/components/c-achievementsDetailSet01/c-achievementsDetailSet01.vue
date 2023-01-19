<template lang="pug">
	section.c-achievementsDetailSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-mainvisual
						.area.is-image
							p.image
								img(:src="`${achievement.mainImage.url}`", alt="")
						.area.is-text
							h2.title
								span {{ achievement.title }}
							dl
								dt 竣工年月：
								dd {{ achievement.date }}
								dt 所在地：
								dd {{ achievement.location }}
								dt クライアント：
								dd {{ achievement.client }}
								dt 担当業務：
								dd {{ achievement.role }}

					.block.is-text
						.l-contentsWrapper.is-small
							.area.is-text(v-html="achievement.content")

					.block.is-list
						.l-contentsWrapper.is-small(v-html="achievement.images")

					.block.is-btn
</template>

<script>
	
	export default {
		name: 'c-achievementsDetailSet01',
		props: {
			achievement: {}
		},
		mounted() {
			// console.log(this.achievement)
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

			.block.is-mainvisual
				position relative
				.area.is-image
					overflow hidden
					width 100%
					border-radius 30px
					img
						width 100%
						height auto

				.area.is-text
					position absolute
					bottom 0
					left 0
					width 55%
					max-width 780px
					padding 2% 4% 0
					border-top-right-radius 30px
					box-sizing border-box
					background-color #FFF

					.title
						color #040278
						font-weight bold
					dl
						display flex
						flex-wrap wrap

			.block.is-text
				margin-top 6%

			.block.is-list
				margin-top 6%
				ul
					display flex
					flex-wrap wrap
					gap 40px
					
					li
						overflow hidden
						width calc(50.0% - 20px)
						border-radius 20px
						
						img
							width 100%
							height auto

			.block.is-btn
				margin-top 6%

			
</style>