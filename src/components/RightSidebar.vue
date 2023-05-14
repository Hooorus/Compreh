<template>
  <div id="app">
    <v-navigation-drawer v-model="drawer" permanent app light clipped floating
                         right width="250" :src="userInfo.RightSidebarBackground">
      <v-divider></v-divider>
      <v-list elevation="5" class="rounded-b-lg overflow-y-auto" shaped max-height="500">
        <v-list-item v-for="item in functionLinks" :key="item" link :color="listItemIconColor">
          <v-list-item-icon>
            <v-icon :color="listItemIconColor">{{ item.avatar }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
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
      RightSidebarBackground: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
    },
    listItemIconColor: '#ffffff',
    listItemTextColor: '#ffffff',
    functionLinks: [
      {id: 1, avatar: 'mdi-account', name: 'Yiming Liao', email: 'yonmineliao@gmail.com'},
      {id: 2, avatar: 'mdi-account', name: 'EricFly', email: 'ichenef@163.com'},
      {id: 3, avatar: 'mdi-account', name: 'Bob Carl', email: 'zhangthird@gmail.com'},
      {id: 4, avatar: 'mdi-account', name: 'Immig Reyes', email: 'immigreyes@gmail.com'},
      {id: 5, avatar: 'mdi-account', name: 'Jack Lee', email: 'voidjacklee@163.com'},
      {id: 5, avatar: 'mdi-account', name: 'Jack Lee', email: 'voidjacklee@163.com'},
      {id: 5, avatar: 'mdi-account', name: 'Jack Lee', email: 'voidjacklee@163.com'},
      {id: 5, avatar: 'mdi-account', name: 'Jack Lee', email: 'voidjacklee@163.com'},
      {id: 5, avatar: 'mdi-account', name: 'Jack Lee', email: 'voidjacklee@163.com'},
      {id: 5, avatar: 'mdi-account', name: 'Jack Lee', email: 'voidjacklee@163.com'},
    ],
  })
}
</script>

<style scoped>

</style>
