<template>
  <tv-demo hideBackground :component="component" :variants="demos"></tv-demo>
</template>

<script>
import { defineComponent, shallowRef } from "vue";
import TvSidebar from "@/component/TvSidebar.vue";
import TvDemo from "todovue-demo";
import { demos } from "@/utils/mocks.js";

export default defineComponent({
  name: "DemoSidebar",
  setup() {
    const component = shallowRef(TvSidebar);

    return {
      component,
      demos,
    };
  },
  components: {
    TvDemo,
  },
});
</script>

<style lang="scss"></style>
