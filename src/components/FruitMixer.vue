<template>
    <div>
        <h2>Fruit mixer</h2>
        <div>
            Today's fruit is: {{todaysFruit}}
        </div>
        <div>
            We also have:
            <span v-for="fruit in fruits" :key="fruit">{{fruit}}</span>
        </div>
    </div>
</template>

<script>
import FruitService from '../shared/FruitService'
// console.log('FruitService:', FruitService);

export default {
    mixins: [FruitService],
    data: () => ({
        fruits: [],
        todaysFruit: ''
    }),
    mounted() {
        // We could also use beforeMount
        this.todaysFruit = this.randomFruit();
        this.fruits = this.getFruits();
    }
}
</script>

<style scoped>

</style>
