<template lang="pug">
	section.c-achievementsDetailSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-mainvisual
						.area.is-image
							p.image(:style="`background-image: url(${achievement.mainImage.url})`")
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
							.area.is-text(v-for="(content, index) of achievement.content" :key="content.id")
								p.text {{ content.achievement_content }}

					.block.is-list
						.l-contentsWrapper.is-small
							ul
								li(v-for="(image, index) of achievement.images" :key="image.id")
									p.image(:style="`background-image: url(${image.image.url})`")

					.block.is-btn
</template>

<script>
	
	export default {
		name: 'c-achievementsDetailSet01',
		props: {
			achievement: {}
		},
		mounted() {
			console.log(this.achievement)
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
					position relative
					width 100%
					padding-top 50%
					overflow hidden

					.image
						position absolute
						top 0
						left 0
						width 100%
						height 100%
						border-radius 30px
						background-size cover
						background-position center
						background-repeat no-repeat

						+MQ_MAX(600px)
							border-radius 10px

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

					+MQ_MAX(600px)
						position relative
						width 100%
						max-width 100%
						padding 4% 0 0

					.title
						color #040278
						font-size clamp(1.6rem, 3cqw, 2.8rem)
						font-weight bold
					dl
						display flex
						flex-wrap wrap
						margin-top 1%
						font-size clamp(1.2rem, 1.5cqw, 1.4rem)
						dt
							font-weight bold
						dd
							margin-right 1em
							

			.block.is-text
				margin-top 6%

			.block.is-list
				margin-top 6%
				ul
					display flex
					flex-wrap wrap
					justify-content space-between
					
					li
						overflow hidden
						position relative
						width 49%
						padding-top 30%
						border-radius 20px
						+MQ_MAX(600px)
							border-radius 10px

						&:nth-of-type(n + 3)
							margin-top 2%
						
						.image
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							background-size cover
							background-position center
							background-repeat no-repeat
						

			.block.is-btn
				margin-top 6%

			
</style>