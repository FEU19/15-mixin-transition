// secret
const fruits = ['äpple', 'päron', 'banan', 'mango'];

// shared
function getRandomFruit() {
	return fruits[getRandomInt(fruits.length)]
}

// secret
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


export default {
	data: () => ({
		prop: true
	}),
    methods: {
        getFruits() {
            return fruits;
        },
		// addFruit - if needed
		// removeFruit - if needed
		randomFruit: getRandomFruit
    },
	created() {
		console.log('Mixin created');
	}
}
