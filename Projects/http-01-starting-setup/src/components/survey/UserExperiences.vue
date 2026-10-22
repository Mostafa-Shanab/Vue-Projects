<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getSurveys"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul v-if="results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else-if="error">{{ error }}</p>
      <p v-else-if="isLoading">Loading.....</p>
      <p v-else>There is No Survyes</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: ['results'],

  components: {
    SurveyResult,
  },

  inject: ['getSurveys', 'isLoading', 'error'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
