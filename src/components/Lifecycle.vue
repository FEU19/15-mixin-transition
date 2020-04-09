<template>
	<div>
		<h1>Lifecycle functions demo</h1>
		<button @click="value += 1">Add 1 to value</button>
		Value is {{value}}
	</div>
</template>

<script>
export default {
	data: () => ({
		value: 1
	}),
	created() {
		console.log('Component is created');
	},
	mounted() {
		// start AJAX here
		console.log('Component is mounted');
	},
	beforeUpdate() {
		console.log('Component before update');
	},
	updated() {
		console.log('Component is updated');
	},
	destroyed(){
		console.log('Component is destroyed');
	}
}
</script>

<style scoped>

</style>
