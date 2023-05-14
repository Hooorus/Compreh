<template>
  <div id="app">
        <v-app id="inspire">
          <!--      <div id="system-bar">-->
          <transition name="fade">
            <SystemBar></SystemBar>
          </transition>
          <!--      </div>-->
          <!--      <div id="header">-->
          <transition name="fade">
            <Header></Header>
          </transition>
          <!--      </div>-->
          <!--      <div id="left-sidebar">-->
          <transition name="fade">
            <LeftSidebar></LeftSidebar>
          </transition>
          <!--      </div>-->
          <!--      <div id="right-sidebar">-->
          <transition name="fade">
            <RightSidebar id="right-sidebar"></RightSidebar>
          </transition>
          <!--      </div>-->
          <!--      <div id="main-body">-->
          <v-main>
            <v-container class="py-8 px-6" fluid>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </v-container>
          </v-main>
          <div id="cover">
            <Cover></Cover>
          </div>
        </v-app>
  </div>
</template>

<script>
import SystemBar from "@/components/SystemBar.vue";
import Header from "@/components/Header.vue";
import LeftSidebar from "@/components/LeftSidebar.vue";
import Footer from "@/components/Footer.vue";
import MessageLists from "@/components/MessageLists.vue";
import Cover from "@/components/Cover.vue";
import RightSidebar from "@/components/RightSidebar.vue";
import LoginPage from "@/views/LoginPage.vue";

export default {
  name: "HomeView",
  components: {LoginPage, RightSidebar, Cover, MessageLists, Footer, LeftSidebar, Header, SystemBar},
  data: () => ({
    routerPathEQLogin: this.$route.params.path,
    loginViewPath: '/login',
    loginInfo: {
      email: '12',
      password: '12',
    },
    isLoggedIn: true,
  }),
  created() {

  },
  mounted() {

  },
  watch: {},
  methods: {}
}
</script>
<style scoped>
#app {

}

#app ::-webkit-scrollbar {
  display: none;
}

#system-bar {

}

#header {

}

#left-sidebar {

}

.right-sidebar {
  z-index: 950;
}

#main-body {

}

#footer {
  z-index: 900
}

#cover {
  position: fixed;
  bottom: 2vh;
  right: 1vw;
  z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
