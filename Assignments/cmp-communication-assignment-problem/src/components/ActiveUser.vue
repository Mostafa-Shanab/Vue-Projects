<template>
  <section>
    <div>
      <h2>username : {{ userName }}</h2>
      <h3>age : {{ age }}</h3>
    </div>
  </section>
</template>
<script>
export default {
  props: ["userName", "age"],
};
</script>

<style scoped>
div {
  text-align: center;
  text-transform: capitalize;
}
</style>
