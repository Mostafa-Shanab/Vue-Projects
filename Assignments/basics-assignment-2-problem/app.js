const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello, Vue!");
    },
    handleKeydown(event) {
      this.output1 = event.target.value;
    },
    handleEnter(event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
