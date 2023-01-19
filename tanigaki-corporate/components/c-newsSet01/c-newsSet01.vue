<template lang="pug">
	section.c-newsSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.l-contentsWrapper.is-middle
						.block.is-news
							dl
								.area.is-news(v-for="(list, index) of lists")
									nuxt-link(:to="'/news/' + list.id")
										dt.date {{list.publishedAtJp}}
										dd.text {{list.title}}
								

</template>

<script>

	export default {
		name: 'c-newsSet01',
		props: {
			lists: {
				type: Array,
				required: true,
			},
		},
		mounted() {
			// console.log(this.lists)
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
				.area.is-news
					border-bottom 1px solid rgba(#D9D9D9, 0.5)

					&:last-child
						border-bottom none

				a
					display block
					padding clamp(20px, 4cqw, 40px) 0
					color inherit
					text-decoration none

				dt.date
					margin-top 2%
					color #E02400
					font-size clamp(1.0rem, 6cqw, 1.4rem)
					font-weight bold
				dd.text
					margin-top 1%
					font-size clamp(1.0rem, 7cqw, 1.6rem)
</style>