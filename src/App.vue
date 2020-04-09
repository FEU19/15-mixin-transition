<template>
    <div id="app">
        <button @click="showLifecycle1 = !showLifecycle1">Toggle lifecycle 1</button>
        <Lifecycle v-if="showLifecycle1" />

        <hr />

        <button @click="showLifecycle2 = !showLifecycle2">Toggle lifecycle 2</button>
        <Lifecycle v-show="showLifecycle2" />

        <hr />

        <FruitMixer />

        <hr />

        Animation
    </div>
</template>

<script>
import Lifecycle from './components/Lifecycle.vue'
import FruitMixer from './components/FruitMixer.vue'

export default {
    name: 'App',
    components: {
        Lifecycle, FruitMixer
    },
    data: () => ({
        showLifecycle1: true,
        showLifecycle2: true
    })
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
hr {
    margin: 1.5em 0em;
    border: 2px solid gray;
}
</style>
