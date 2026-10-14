<template>
  <div>
    <active-user :userName="userName" :age="age"></active-user>
    <user-data @setUser="setUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "shanab",
      age: "23",
    };
  },
  methods: {
    setUser(userName, age) {
      this.userName = userName;
      this.age = age;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
</style>
