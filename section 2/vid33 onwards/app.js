const app = Vue.createApp({
	data() {
		return {
			boxAselected: false,
			boxBselected: false,
			boxCselected: false,
		};
	},
	methods: {
		boxSelected(value) {
			if (value === "A") {
				this.boxAselected = !this.boxAselected;
			} else if (value === "B") {
				this.boxBselected = !this.boxBselected;
			} else if (value === "C") {
				this.boxCselected = !this.boxCselected;
			}
		},
	},
});
app.mount("#styling");
