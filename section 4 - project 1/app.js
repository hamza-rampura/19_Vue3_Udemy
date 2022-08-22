function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logMessages: [],
		};
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				//draw
				this.winner = "draw";
			} else if (value <= 0) {
				// player lost
				this.winner = "monster";
			}
			// console.log(this.playerHealth, this.monsterHealth);
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				//draw
				this.winner = "draw";
			} else if (value <= 0) {
				// player lost
				this.winner = "player";
			}
			// console.log(this.playerHealth, this.monsterHealth);
		},
	},
	computed: {
		monsterBarStyle() {
			return this.monsterHealth < 0
				? { width: 0 }
				: { width: this.monsterHealth + "%" };
		},
		playerBarStyle() {
			return this.playerHealth < 0
				? { width: 0 }
				: { width: this.playerHealth + "%" };
		},
		mayUseSpecialAttack() {
			return this.currentRound % 3 !== 0;
		},
	},
	methods: {
		restartGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.currentRound = 0;
			this.winner = null;
			this.logMessages = [];
		},
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue;
			this.addLog("player", "attack", attackValue);
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomValue(7, 12);
			this.playerHealth -= attackValue;
			this.addLog("monster", "attack", attackValue);
		},
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(10, 20);
			this.monsterHealth -= attackValue;
			this.addLog("player", "attack", attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			healValue = getRandomValue(7, 15);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addLog("player", "heals", healValue);
			this.attackPlayer();
		},
		surrender() {
			this.winner = "monster";
		},
		addLog(who, what, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			});
		},
	},
});
app.mount("#game");
