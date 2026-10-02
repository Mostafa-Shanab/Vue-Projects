const app = Vue.createApp({
  data() {
    return {
      userclass: "",
      showUser: true,
      backColor: "",
    };
  },
  computed: {
    styleClass() {
      return [
        this.userclass,
        { hidden: !this.showUser, visible: this.showUser },
      ];
    },
  },
});

app.mount("#assignment");
