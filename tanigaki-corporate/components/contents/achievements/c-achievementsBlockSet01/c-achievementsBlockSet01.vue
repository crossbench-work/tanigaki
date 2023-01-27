<template lang="pug">
	.js-inviewPoint
		section.c-achievementsBlockSet01
			.componentWrapper
				.l-contentsWrapper
					.l-mqWrapper
						.l-contentsWrapper.is-middle.is-fadeInAnimation
							ul
								li(v-for="(achievement, index) of achievements" :key="achievement.id")
									nuxt-link(:to="'/achievements/' + achievement.id")
										p.image
											span(:style="`background-image: url(${achievement.mainImage.url})`")
										h2.title {{achievement.title}}
										dl
											dt 竣工年月：
											dd {{ achievement.date }}
											dt 所在地：
											dd {{ achievement.location }}
											dt クライアント：
											dd {{ achievement.client }}
											dt 担当業務：
											dd {{ achievement.role }}
									

</template>

<script>
	
	export default {
		name: 'c-achievementsBlockSet01',
		props: {
			achievements: {
				type: Array,
				required: true,
			},
		},
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
				justify-content space-between
				flex-wrap wrap

				li
					width 48%

					+MQ_MAX(600px)
						width 100%

					&:nth-of-type(n+2)
						+MQ_MAX(600px)
							margin-top 3%

					a
						display block
						color inherit
						text-decoration none

						&:hover
							.image
								span
									transform scale(1.05)
					
					.image
						overflow hidden
						position relative
						width 100%
						padding-top 60%
						border-radius 20px
						
						+MQ_MAX(600px)
							border-radius 10px

						span
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							background-size cover
							background-position center
							background-repeat no-repeat
							transition all 0.3s ease

						
					.title
						margin-top 2%
						color #E02400
						font-size clamp(1.2rem, 3.5cqw, 1.8rem)
						font-weight bold
					
					dl
						margin-top 1%
						display flex
						flex-wrap wrap
						margin-top 1%
						font-size clamp(1.2rem, 1.5cqw, 1.4rem)

						dt
							font-weight bold
						dd
							margin-right 1em
</style>