<template>
  <li>
    <h2>
      {{ firstName }} {{ lastName }}
      {{ friendIsFavorite ? "(Favorite)" : "" }}
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">
      {{ friendIsFavorite ? "Unfavorite" : "Favorite" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phone }}</li>
      <li><strong>Email: </strong>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["email", "firstName", "lastName", "phone", "isFavorite"],
  props: {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
      console.log("🚀 ~ this.friendIsFavorite:", this.friendIsFavorite);
      console.log("🚀 ~ this.isFavorite:", this.isFavorite);
    },
  },
};
</script>
