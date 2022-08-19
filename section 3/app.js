const app = Vue.createApp({
	data() {
		return {
			goalValue: "",
			goals: [],
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.goalValue);
			this.goalValue = "";
		},
		removeGoal(ind) {
			this.goals.splice(ind, 1);
		},
	},
});

app.mount("#user-goals");
