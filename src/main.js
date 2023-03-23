import { createApp } from "vue";
import Demo from "./Demo.vue";
import "@/assets/css/variables.css";
import "@/assets/css/global.css";
import "todovue-demo/dist/tvdemo.css";
import "todovue-button/dist/tvbutton.css";
import "todovue-label/dist/tvlabel.css";

createApp(Demo).mount("#todovue-sidebar");
