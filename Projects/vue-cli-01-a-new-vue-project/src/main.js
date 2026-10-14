import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

createApp(App).component("FriendContact", FriendContact).mount("#app");
