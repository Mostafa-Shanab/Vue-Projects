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
      logs: [],
    };
  },
  computed: {
    monsterHealthStyle() {
      return {
        width: this.monsterHealth + "%",
      };
    },
    playerHealthStyle() {
      return {
        width: this.playerHealth + "%",
      };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) {
        this.playerHealth = 0;
        this.winner = "Monster Wins";
        if (this.monsterHealth <= 0) this.winner = "Draw";
      }
      if (value > 100) this.playerHealth = 100;
    },
    monsterHealth(value) {
      if (value <= 0) {
        this.monsterHealth = 0;
        this.winner = "Shanab Wins";
        if (this.playerHealth <= 0) this.winner = "Draw";
      }
      if (value > 100) this.monsterHealth = 100;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 10);
      this.monsterHealth -= attackValue;
      this.addLog(`Shanab Attack Monster and damage it with ${attackValue}%`);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLog(`Monster Attack Shanab and damage him with ${attackValue}%`);
    },
    healMonster() {
      const healValue = getRandomValue(1, 3);
      this.monsterHealth += healValue;
      this.addLog(`Monster Heal with ${healValue}%`);
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(5, 8);
      this.playerHealth += healValue;
      this.addLog(`Shanab Heal with ${healValue}%`);
      this.healMonster();
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(15, 25);
      this.monsterHealth -= attackValue;
      this.addLog(
        `Shanab Special Attack Monster and damage it with ${attackValue}%`,
      );
      this.attackPlayer();
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logs = [];
      // this.addLog("Start a new Game");
    },
    surrender() {
      this.winner = "Monster Wins";
      this.addLog("Shanab surrender");
    },
    addLog(message) {
      this.logs.unshift(message);
    },
  },
});

app.mount("#game");
