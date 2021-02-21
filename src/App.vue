<template>
  <v-app>
    <Loading />
    <!--<NavDrawer :drawer="drawer" />-->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <v-app-bar flat="flat">
          <v-toolbar-title class="headline text-uppercase">
            <router-link to="/" aria-label="Homepage">RainSplat</router-link>
            <router-link to="/sample-page" aria-label="Homepage">Sample</router-link>
            <router-link to="/styleguide" aria-label="Styleguide">StyleGuide</router-link>
          </v-toolbar-title>
        </v-app-bar>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Loading from "./components/common/Loading";

export default {
  name: "App",
  components: {
    Loading,
  },
  computed: {},
};
</script>
