<template lang="pug">
	div.c-achievementsPageContents
		c-globalHeader01(current = "achievements")
		c-pageTitleSet01(jp = '施工実績', en = 'ACHIEVEMENTS')
		c-achievementsBlockSet01
		c-contactSet01
		c-globalFooter01

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'AchievementsPage',
	layout: "l-mainWrapper01",
	mounted() {
	}
})
</script>

<style lang="stylus">
	
</style>



