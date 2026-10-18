const app = Vue.createApp({
  data() {
    return {
      message1: "Shanab !",
      message2: "<h1>Darsh !</h1>",
      link: "https://vuejs.org",
    };
  },
  methods: {
    message() {
      const rand = Math.random();
      console.log(rand);
      return rand > 0.5 ? this.message1 : this.message2;
    },
  },
});

app.mount("#app");
