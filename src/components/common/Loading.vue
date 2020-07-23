<template>
	<div v-show="api.is_loading" class="loader-wrapper">
		<div class="loader"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			api: this.$store.state.api
		};
	},
};
</script>