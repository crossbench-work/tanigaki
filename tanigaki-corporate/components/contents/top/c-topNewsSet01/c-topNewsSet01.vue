<template lang="pug">
	
	section.c-topNewsSet01
		.componentWrapper
			.block.is-current
				.area.is-date(v-bind:class="btnSet")
					p.date
						//- span {{ news[0].publishedAtJp }}
				.area.is-text
					nuxt-link(:to="'/news/' + news[0].id")
						p.text
							span {{ news[0].title }}
				.area.is-btn(v-bind:class="btnSet" @click="btn = !btn")
					p.btn
						span
						span
						span
			.block.is-before(v-bind:class="btnSet")
				dl
					.area.is-news(v-for="(list, index) of news" v-if = "index != 0")
						nuxt-link(:to="'/news/' + list.id")
							dt.date
								//- span {{list.publishedAtJp}}
							dd.text
								span {{list.title}}
						
				.area.is-more
					nuxt-link(:to="'/news/'")
						p.text MORE

</template>

<script>
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone';
	export default {
		name: 'c-topNewsSet01',
		data () {
			return {
				btn: false
			}
		},
		props: {
			news: {
				type: Array,
				required: false,
			},
		},
		beforeMount() {
			dayjs.extend(utc);
			dayjs.extend(timezone);

			var publishedAtJp = {
				'publishedAtJp': ''
			};

			this.news.forEach(function(element, index){
				publishedAtJp['publishedAtJp'] = dayjs.utc(element['publishedAt']).tz('Asia/Tokyo').format('YYYY-MM-DD');
				publishedAtJp['publishedAtJp'] = publishedAtJp['publishedAtJp'].replace(/-/g, '.');
				Object.assign(element, publishedAtJp);
			})
		},
		mounted() {
		},
		methods: {
		},
		computed:{
			btnSet: function(){
				return {
					open: this.btn,
					close: !this.btn
				}
			}
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-topNewsSet01
		display flex
		justify-content flex-end
		position relative
		z-index 1000
		
		width 100%
		height 0

		transform translate3d(101%, 0, 0)

		.is-inview &
			animation-name slideRightLeftIn
			animation-timing-function cubic-bezier(0.8, 0, 0.170, 1)
			animation-fill-mode forwards
			animation-duration 0.5s
			animation-delay 0.4s

		&>.componentWrapper
			
			width 50%
			max-width 720px
			min-width 500px
			
			height 12svw
			min-height 100px
			max-height 150px
			
			box-shadow 0 4px 20px rgba(#000, 0.1)
			transform translate3d(0, -50%, 0)

			.page-leave-active &
				transform translate3d(101%, -50%, 0)
				transition all 0.3s 0.3s ease-out

			+MQ_MAX(SP_RES_WID01)
				width 95%
				height 8svw
				min-width 0
				min-height 80px
				max-height 130px
				transform translate3d(0, -80%, 0)

			.block
				
				&.is-current
					display flex
					flex-wrap wrap
					width 100%
					height 100%
				
				&.is-before
					overflow hidden
					will-change max-height
					transition max-height 0.8s ease-in-out
					
					&.close
						max-height 0
					
					&.open
						max-height 500px

					.area.is-news
						a
							display flex

						.date
							display flex
							align-items center
							width 20%
							height 100%
							padding 2% 0
							color #FFF
							background-color #E02400
							justify-content center
							font-weight bold
							font-size clamp(1.1rem, 1.5cqw, 1.3rem)
							
							+MQ_MAX(SP_RES_WID01)
								width 94px
								height 100%
								font-size 1.2rem

						.text
							display flex
							align-items center
							width 80%
							padding 2% 2%
							background-color #FFF
							box-sizing border-box
							font-size clamp(1.1rem, 1.5cqw, 1.3rem)

							+MQ_MAX(SP_RES_WID01)
								width calc(100% - 94px)
								font-size 1.2rem

							span
								display block
								text-overflow ellipsis
								overflow hidden
								white-space nowrap


				.area
					container-type inline-size					

					&.is-date
						display flex
						align-items center
						width 20%
						color #FFF
						background-color #E02400
						justify-content center
						border-top-left-radius 10px
						border-bottom-left-radius 10px
						font-weight bold
						font-size clamp(1.1rem, 2cqw, 1.4rem)
						transition all 0.3s 0.3s ease

						&.open
							border-bottom-left-radius 0
							transition all 0.01s ease
						
						+MQ_MAX(SP_RES_WID01)
							width 94px
							font-size 1.2rem

					&.is-text
						display flex
						align-items center
						width 70%
						padding 0 4%
						background-color #FFF
						box-sizing border-box
						font-size clamp(1.1rem, 2cqw, 1.4rem)

						+MQ_MAX(SP_RES_WID01)
							width calc(100% - 134px)

					&.is-btn
						cursor pointer
						display flex
						align-items center
						justify-content center
						width 10%
						background-color #000
						transition all 0.3s ease-in-out

						+MQ_MAX(SP_RES_WID01)
							width 40px

						&:hover
							background-color #e02400

						&.open
							.btn
								span
									&:nth-of-type(1)
										top 0
										width 128%
										transform translate3d(-38%, 0, 0) rotate(45deg) 

									&:nth-of-type(2)
										left 0
										transform translate3d(-100%, 0, 0)

									&:nth-of-type(3)
										bottom 0
										width 128%
										transform translate3d(-38%, 0, 0) rotate(-45deg) 

						.btn
							overflow hidden
							position relative
							width 40%
							padding-top 40%

							span
								display block
								position absolute
								left 50%
								width 100%
								height 2px
								background-color #FFF
								border-radius 100px
								transform translate3d(-50%, 0, 0)
								transition all 0.3s ease-in-out

								&:nth-of-type(1)
									top 0
									transform-origin left
								&:nth-of-type(2)
									top 50%
									margin-top -1px
								&:nth-of-type(3)
									bottom 0
									transform-origin left bottom
					
					&.is-news
						width 100%
					
					&.is-more
						color #FFF
						font-family 'Oswald', sans-serif
						font-size clamp(1.0rem, 16cqw, 1.8rem)
						font-weight bold
						text-align center

						a
							display block
							padding 3%
							background-color #000
							border-bottom-left-radius 10px
							transition all 0.3s ease-in-out
							&:hover
								background-color #e02400
					
					a
						color inherit
						text-decoration none

</style>