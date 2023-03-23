<template>
  <div class="container">
    <div class="sidebar">
      <template v-if="isList">
        <div class="sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="sidebar-title_separator"></div>
        </div>
        <div class="sidebar-content">
          <ol
            class="sidebar-content_ol"
            v-for="(item, index) in data.list"
            :key="item.id"
          >
            <li class="sidebar-content_li">
              <component :is="linkComponent" :to="item.link" class="pointer">
                <span>{{ index + 1 }}.</span>{{ item.title }}
              </component>
            </li>
          </ol>
        </div>
      </template>
      <template v-if="isImage">
        <template v-if="data.image.clickable">
          <component :is="linkComponent" :to="data.image.link">
            <img :src="data.image.src" :alt="data.image.name" class="pointer" />
          </component>
        </template>
        <template v-else>
          <img :src="data.image.src" :alt="data.image.name" />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "TvSidebar",
  props: {
    isList: {
      type: Boolean,
      default: false,
    },
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
    image: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    linkComponent() {
      return this.linkTag === "nuxt-link" ? "nuxt-link" : "router-link";
    },
  },
};
</script>

<style scoped>
.container {
  display: inline-flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.dark-mode .container .sidebar .sidebar-title h1 {
  background: var(--color-background-card-dark);
  color: var(--color-text-dark);
}

.light-mode .container .sidebar .sidebar-title h1 {
  background: var(--color-background-card-light);
  color: var(--color-text-light);
}

.container .sidebar .sidebar-title {
  position: relative;
  min-height: 35px;
  margin-top: 10px;
}

.container .sidebar .sidebar-title h1 {
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
  display: inline;
  white-space: nowrap;
}

.dark-mode .container .sidebar .sidebar-title_separator {
  background: var(--color-background-card-dark);
}

.light-mode .container .sidebar .sidebar-title_separator {
  background: var(--color-background-card-light);
}

.container .sidebar .sidebar-title .sidebar-title_separator {
  position: absolute;
  display: block;
  width: 100vw;
  height: 5px;
  margin-top: 10px;
  left: 0;
  bottom: 0;
}

.container .sidebar .sidebar-content .sidebar-content_ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

.container .sidebar .sidebar-content .sidebar-content_li {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.container .sidebar .pointer {
  cursor: pointer;
}

.container .sidebar .sidebar-content .sidebar-content_li:first-of-type {
  margin-top: 10px;
}

.container .sidebar .sidebar-content .sidebar-content_li:not(:last-child) {
  margin-bottom: 15px;
}

.dark-mode .container .sidebar .sidebar-content .sidebar-content_li span {
  color: var(--color-background-card-dark);
}

.light-mode .container .sidebar .sidebar-content .sidebar-content_li span {
  color: var(--color-background-card-light);
}

.container .sidebar .sidebar-content .sidebar-content_li span {
  font-size: 34px;
  margin-right: 10px;
}

.container .sidebar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
