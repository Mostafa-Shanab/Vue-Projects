const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      showTasks: true,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },
    toggleShow() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount("#assignment");
