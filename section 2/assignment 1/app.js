const app = Vue.createApp({
	data() {
		return {
			myName: "Hamza",
			myAge: 24,
			imgURL: "https://picsum.photos/200/300",
		};
	},
	methods: {
		randomNumberGenerator() {
			return Math.random();
		},
	},
});
app.mount("#assignment");
