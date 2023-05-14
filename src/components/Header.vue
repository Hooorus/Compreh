<template>
  <div id="app">
    <v-app-bar app color="white" elevation="3" clipped-right>
      <v-btn v-for="link in toolbarLinks" :key="link" text rounded>{{ link }}</v-btn>
      <v-btn id="specialActivity" text rounded>{{ specialActivity }}</v-btn>
      <v-spacer></v-spacer>
      <v-responsive max-width="250">
        <v-text-field rounded dense flat hide-details solo-inverted></v-text-field>
      </v-responsive>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    specialActivity: 'Anniversary',
    toolbarLinks: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
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
