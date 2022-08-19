const app = Vue.createApp({
	data() {
		return {
			number: 0,
		};
	},
	computed: {
		result() {
			if (this.number < 37) {
				return "Not there yet!" + " " + this.number;
			} else if (this.number > 37) {
				return "Too much!" + " " + this.number;
			} else {
				return this.number;
			}
		},
	},
	watch: {
		result() {
			setTimeout(() => {
				this.number = 0;
			}, 5000);
		},
	},
	methods: {
		add1() {
			this.number += 1;
		},
		add5() {
			this.number += 5;
		},
	},
});
app.mount("#assignment");
