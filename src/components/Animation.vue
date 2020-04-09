<template>
	<div>
		<h2>Animation demo</h2>
		<button @click="showHello = !showHello">Toggle visibility</button>
		<transition name="fade-in" appear>
			<div class="hello" v-if="showHello"> Hello! </div>
		</transition>
	</div>
</template>

<script>
export default {
	data: () => ({
		showHello: true
	})
}
</script>

<style scoped>
.fade-in-enter, .fade-in-leave-to {
	opacity: 0;
}
.fade-in-enter-active {
	transition: opacity 3s;
}
.fade-in-leave-active {
	transition: opacity 1s;
}

.hello {
	font-size: 1.3em;
	background-color: pink;
}

</style>
