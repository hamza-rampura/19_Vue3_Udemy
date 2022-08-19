const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastName: "",
			// fullName: "",
		};
	},
	computed: {
		fullName() {
			console.log("Only Fullname");
			if (this.name === "" || this.lastName === "") {
				return "";
			}
			return this.name + " " + this.lastName;
		},
		// setCounter() {
		// 	console.log("hello");
		// 	if (this.counter >= 50) {
		// 		this.counter = 0;
		// 	}
		// 	return this.counter;
		// },
	},
	watch: {
		counter(value) {
			if (value >= 50) {
				this.counter = 0;
				/* add a set time out here */
			}
		},
		// name(value) {
		// 	if ((this.value = "")) {
		// 		this.fullName = "";
		// 	}
		// 	this.fullName = value + " " + this.lastName;
		// },
		// lastName(value) {
		// 	if ((this.value = "")) {
		// 		this.fullName = "";
		// 	}
		// 	this.fullName = this.name + " " + value;
		// },
	},
	methods: {
		setName(event) {
			this.name = event.target.value;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = "";
		},
		outputFullName() {
			console.log("Running OP fullname");
			// if (this.name === "") {
			// 	return "";
			// }
			// return this.name + " " + "Rampurawala";
		},
	},
});

app.mount("#events");
