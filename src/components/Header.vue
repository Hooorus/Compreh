<template>
  <div id="app">
    <v-app-bar app elevation="3" clipped-right color="primary">
      <v-btn v-for="link in toolbarLinks" :key="link" text rounded>{{ link }}</v-btn>
      <v-btn id="specialActivity" text rounded>{{ specialActivity }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon rounded class="ma-2" @click="toggleTheme">
        <v-icon>{{ icons.mdiThemeLightDark }}</v-icon>
      </v-btn>
      <v-responsive max-width="250">
        <v-text-field rounded dense flat hide-details solo-inverted></v-text-field>
      </v-responsive>
    </v-app-bar>
  </div>
</template>

<script>
import {mdiThemeLightDark} from '@mdi/js'

export default {
  name: "Header",
  data: () => ({
    icons: {
      mdiThemeLightDark,
    },
    themeIcon: "",
    specialActivity: 'Anniversary',
    toolbarLinks: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
}
</script>

<style scoped>
#specialActivity {
  text-transform: capitalize;
  font-family: 'ZCOOL Addict Italic 02';
  font-size: 20px;
  font-weight: bolder;
}
</style>
