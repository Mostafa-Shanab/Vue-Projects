<template>
  <base-card>
    <div>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p>{{ infoText }}</p>
  </base-card>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
