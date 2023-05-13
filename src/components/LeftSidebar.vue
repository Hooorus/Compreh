<template>
  <div id="app">
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="miniSidebar" :mini-variant-width="56"
                         permanent app dark floating width=250 :src="userInfo.background">
      <v-list>
        <v-list-item class="align-center pa-0">
          <v-list-item-avatar class="align-center ma-2" size="40">
            <img :src="userInfo.avatar" :alt="userInfo.fullName"/>
          </v-list-item-avatar>
          <v-divider inset></v-divider>
          <v-btn icon @click.stop="miniSidebar = !miniSidebar">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6" v-if="miniSidebar===true">{{ userInfo.initialName }}</v-list-item-title>
          <v-list-item-title class="text-h6" v-else-if="miniSidebar===false">{{
              userInfo.fullName
            }}
          </v-list-item-title>
          <v-list-item-subtitle v-if="miniSidebar===true">{{ userInfo.initialEmail }}</v-list-item-subtitle>
          <v-list-item-subtitle v-else-if="miniSidebar===false">{{ userInfo.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
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
  name: "LeftSidebar",
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
    listItemIconColor: '#eeeeee',
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
      ['mdi-database', 'Database'],
      ['mdi-cog', 'Setting'],
      ['mdi-cog', 'Setting'],
    ],
  })
}
</script>

<style scoped>

</style>
