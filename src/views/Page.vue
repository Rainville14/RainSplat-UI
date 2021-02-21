<template>
  <div class="pa-6 bg-neutral mt-6">
    <h1>{{title}}</h1>
    <div v-html="renderedContent">Test</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState({
      renderedContent: (state) => state.pages.content.renderedContent,
      title: (state) => state.pages.content.title,
    }),
  },
  methods: {
    ...mapActions("pages", ["getPageContent"]),
    loadContent() {
      this.getPageContent(this.$route.params.slug);
    },
  },
  beforeMount() {
    this.loadContent();
  },
};
</script>
