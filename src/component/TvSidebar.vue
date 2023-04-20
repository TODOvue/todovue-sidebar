<template>
  <div class="tv-sidebar-body">
    <div class="tv-sidebar">
      <template v-if="isImage">
        <template v-if="clickable">
          <component :is="linkComponent" :to="data.image.link">
            <img
              :src="data.image.src"
              :alt="data.image.alt"
              style="cursor: pointer"
            />
          </component>
        </template>
        <template v-else>
          <img :src="data.image.src" :alt="data.image.alt" />
        </template>
      </template>
      <template v-else-if="isLabel">
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div class="tv-sidebar-content-label">
          <tv-label
            v-for="label in limitedList('labels')"
            :key="label.id"
            :color="label.color"
            @click="clickLabel(label)"
          >
            {{ label.name }}
          </tv-label>
        </div>
      </template>
      <template v-else>
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div class="tv-sidebar-content">
          <ol
            class="tv-sidebar-content-ol"
            v-for="(item, index) in limitedList('list')"
            :key="item.id"
          >
            <li class="tv-sidebar-content-li">
              <component :is="linkComponent" :to="item.link" class="pointer">
                <span>{{ index + 1 }}.</span>{{ item.title }}
              </component>
            </li>
          </ol>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import TvLabel from "todovue-label";

export default {
  name: "TvSidebar",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    linkTag: {
      type: String,
      default: "router-link",
    },
    isImage: {
      type: Boolean,
      default: false,
    },
    isLabel: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 0,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TvLabel,
  },
  setup(props, { emit }) {
    const linkComponent = computed(() =>
      props.linkTag === "nuxt-link" ? "nuxt-link" : "router-link"
    );

    const limitedList = (property) => {
      if (!props.data[property]) return [];
      const limit = props.limit > 0 ? props.limit : props.data[property].length;
      return props.data[property].slice(0, limit);
    };

    const clickLabel = (label) => {
      emit("clickLabel", label);
    };

    return {
      linkComponent,
      limitedList,
      clickLabel,
    };
  },
  emits: ["clickLabel"],
};
</script>

<style></style>
