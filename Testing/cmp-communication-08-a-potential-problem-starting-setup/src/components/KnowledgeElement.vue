<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
    <button @click="hi">Hi</button>
  </li>
</template>

<script>
export default {
  inject: ['topics', 'selectTopic'],
  props: ['id', 'topicName', 'description'],
  methods: {
    hi() {
      console.log(this.topics);
      console.log(this.selectTopic);
      console.log(this.topicName);
      console.log(this.description);
      console.log(this.id);
    },
  },
};
</script>
