<template>
  <section>
    <form @submit.prevent="setUser">
      <div class="inputs">
        <div>
          <label> User Name : </label>
          <input type="text" v-model="userName" />
        </div>
        <div>
          <label> Age : </label>
          <input type="text" v-model="age" />
        </div>
      </div>

      <div>
        <button>Set User</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  emits: ["setUser"],
  data() {
    return {
      userName: "",
      age: "",
    };
  },
  methods: {
    setUser() {
      if (!this.userName || !this.age) return;

      this.$emit("setUser", this.userName, this.age);
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-inline: 35px;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 25%;
}

.inputs div {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.inputs input {
  flex: 1;
  max-width: 55%;
}

section {
  border: 1px solid;
  border-radius: 25px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
