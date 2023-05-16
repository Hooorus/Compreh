<template>
  <div id="app">
    <v-navigation-drawer v-model="drawer" expand-on-hover :mini-variant-width="56"
                         overlay-color="white" mini-variant
                         permanent app dark floating
                         :src="userInfo.background">
      <v-list>
        <v-list-item class="align-center pa-0">
          <v-list-item-avatar class="align-center ma-2" size="40">
            <img :src="userInfo.avatar" :alt="userInfo.fullName"/>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item link :to="'/main/profile'" color="white">
          <v-list-item-content>
            <v-list-item-title class="text-h6 white--text">{{ userInfo.fullName }}</v-list-item-title>
            <v-list-item-subtitle>{{ userInfo.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="[icon, text, url] in functionLinks" :key="icon" link :to="url">
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
  name: "LeftSidebar",
  data: () => ({
    drawer: true,
    userInfo: {
      fullName: 'Yiming Liao',
      email: 'yonmineliao@gmail.com',
      avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
      background: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
    },
    listItemIconColor: '#eeeeee',
    functionLinks: [
      ['mdi-motion-play', 'Find What', '/main/findwhat'],
      ['mdi-forum', 'Message', '/main/message'],
      ['mdi-bell-ring', 'Notification', '/main/notification'],
      ['mdi-account-multiple', 'Friends', '/main/friends'],
      ['mdi-inbox-arrow-down', 'Archive', '/main/archive'],
      ['mdi-shopping', 'Marketplace', '/main/marketplace'],
      ['mdi-delete', 'Trash', '/main/trash'],
      ['mdi-cog', 'Setting', '/main/setting'],
    ],
  })
}
</script>

<style scoped>
</style>
