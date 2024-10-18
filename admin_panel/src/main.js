import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Font Awesome components
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "./assets/main.css";
// Import the specific icons you want to use
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faBars);

const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount("#app");
