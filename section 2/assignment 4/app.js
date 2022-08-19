const app = Vue.createApp({
	data() {
		return {
			userClass: "",
			visibility: "visible",
			bgColor: "",
			paraVisibilty: true,
		};
	},
	computed: {
		customStyles() {
			return {
				user1: this.userClass === "user1",
				user2: this.userClass === "user2",
				visible: this.paraVisibilty,
				hidden: !this.paraVisibilty,
			};
		},
	},
	methods: {
		toggleClass() {
			this.paraVisibilty = !this.paraVisibilty;
		},
	},
});
app.mount("#assignment");
