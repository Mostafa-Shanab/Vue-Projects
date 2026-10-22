<template>
  <div>
    <learning-survey @survey-submit="storeSurvey"></learning-survey>
    <user-experiences :results="savedSurveyResults"></user-experiences>
  </div>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

import { computed } from 'vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },

  mounted() {
    this.getSurvyes();
  },

  data() {
    return {
      savedSurveyResults: [],
      isLoading: false,
      error: null,
    };
  },

  provide() {
    return {
      getSurveys: this.getSurvyes,
      isLoading: computed(() => this.isLoading),
      error: computed(() => this.error),
    };
  },

  methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);

      fetch(
        'https://train-vue-7f2e7-default-rtdb.firebaseio.com/surveys.json',
        {
          method: 'POST',
          body: JSON.stringify(surveyResult),
        }
      );

      console.log(surveyResult);
    },

    async getSurvyes() {
      try {
        this.isLoading = true;
        this.error = null;
        this.savedSurveyResults = [];

        const response = await fetch(
          'https://train-vue-7f2e7-default-rtdb.firebaseio.com/surveys.json'
        );
        const data = await response.json();

        if (data)
          for (const survey of Object.values(data)) {
            this.savedSurveyResults.push(survey);
          }
      } catch (err) {
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
