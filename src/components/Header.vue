<template>
  <div id="app">
    <v-app-bar app color="white" elevation="3" clipped-right>
      <v-btn v-for="link in toolbarLinks" :key="link" text rounded>{{ link }}</v-btn>
      <v-spacer></v-spacer>
      <v-responsive max-width="250">
        <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
      </v-responsive>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
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

</style>
