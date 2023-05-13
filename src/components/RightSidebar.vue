<template>
  <div id="app">
    <v-navigation-drawer v-model="drawer" permanent app light clipped floating right width="250" color="white">
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="[icon, text] in functionLinks" :key="icon" link>
          <v-list-item-icon>
            <v-icon :color="listItemIconColor">{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: "RightSidebar",
  data: () => ({
    drawer: true,
    miniSidebar: true,
    userInfo: {
      initialName: 'YL',
      initialEmail: '@g',
      fullName: 'Yiming Liao',
      email: 'yonmineliao@gmail.com',
      avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
      background: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
    },
    listItemIconColor: '#0848a8',
    functionLinks: [
      ['mdi-forum', 'Message'],
      ['mdi-account-multiple', 'Friends'],
      ['mdi-inbox-arrow-down', 'Archive'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
      ['mdi-monitor-dashboard', 'Dashboard'],
      ['mdi-wallet', 'Wallet'],
      ['mdi-shopping', 'Marketplace'],
      ['mdi-cog', 'Setting'],
      ['mdi-cog', 'Setting'],
      ['mdi-cog', 'Setting'],
    ],
  })
}
</script>

<style scoped>

</style>
