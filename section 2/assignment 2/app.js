const app = Vue.createApp({
	data() {
		return {
			inputVal: "",
			confirmedInput: "",
		};
	},
	methods: {
		showAlert() {
			alert("Showing an Alert!");
		},
		showValue(e) {
			this.inputVal = e.target.value;
		},
		showConfirmedValue(e) {
			this.confirmedInput = e.target.value;
		},
	},
});
app.mount("#assignment");
