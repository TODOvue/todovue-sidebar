<template>
  <tv-demo hideBackground>
    <div v-for="demo in sidebarItemsDemo" :key="demo.id" class="demo">
      <h2>{{ demo.demoTitle }}</h2>
      <tv-sidebar
        :is-list="demo.sidebarProps.isList"
        :is-image="demo.sidebarProps.isImage"
        :data="demo"
      />
    </div>
  </tv-demo>
</template>

<script>
import TvSidebar from "@/component/TvSidebar.vue";
import TvDemo from "todovue-demo";
import { sidebarItemsDemo } from "@/utils/mocks.js";
export default {
  name: "DemoPage",
  data() {
    return {
      sidebarItemsDemo,
    };
  },
  components: {
    TvSidebar,
    TvDemo,
  },
};
</script>

<style></style>
