const app = Vue.createApp({
	data() {
		return {
			goalText: "",
			goals: [],
			taskListVisibility: true,
		};
	},
	computed: {
		buttonCaption() {
			return this.taskListVisibility ? "Hide" : "Show";
		},
	},
	methods: {
		addGoal() {
			console.log(this.goalText);
			this.goals.push(this.goalText);
			this.goalText = "";
			console.log(this.goals);
		},
		toggleTaskList() {
			this.taskListVisibility = !this.taskListVisibility;
		},
	},
});

app.mount("#assignment");
