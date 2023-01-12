<template lang="pug">
	section.c-topAchievementSet01
		.componentWrapper
			.l-contentsWrapper
				.l-mqWrapper
					.block.is-title
						.l-contentsWrapper.is-middle
							h2.m-sectionTitle01
								span.is-jp 施工実績
								span.is-en ACHIEVEMENTS
</template>

<script>
	export default {
		name: 'c-topAchievementSet01',
		
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"


	.c-topAchievementSet01
		&>.componentWrapper
			container-type inline-size
			padding clamp(60px, 10cqw, 190px) 0
	

</style>