const app = Vue.createApp({
	data() {
		return {
			currentUserInput: "",
			message: "Vue is great!",
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			this.message = this.currentUserInput;
		},
	},
	beforeCreate() {
		console.log("before create")
	},
	created() {
		console.log( "created")
	},
	beforeMount() {
		console.log( "before mounted")
	},
	mounted() {
		console.log( "mounted")
	},
});

app.mount("#app");

const app2 = Vue.createApp({
	template: `
    <h2>How Vue Works</h2>
    <p>{{ message }}</p>
  `,
	data() {
		return {
			message: "Message from 2nd app",
		};
	},
	methods: {},
});

app2.mount("#app2");

/////

// const data = {
// 	message: "Hello",
// 	longMessage: "Hello World!!",
// };

// const handler = {
// 	set(target, key, value) {
// 		if (key === "message") {
// 			target.longMessage = value + " World!!";
// 		}
// 		console.log(target, key, value);
// 	},
// };

// const proxy = new Proxy(data, handler);

// proxy.message = "Hi";
// proxy.message = "Hamza";
// console.log(proxy.longMessage);
