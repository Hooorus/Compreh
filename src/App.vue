<template>
  <div id="app">
    <v-app>
<!--      <router-link to="/main/home" style="z-index: 9999" class="blue"><h1>go to home page</h1></router-link>-->
<!--      <router-link to="/main/profile/12" style="z-index: 9999" class="blue"><h1>go to profile page</h1></router-link>-->
<!--      <router-link to="/login" style="z-index: 9999" class="blue"><h1>go to login page</h1></router-link>-->
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import SystemBar from "@/components/systembar/SystemBar.vue";
import Header from "@/components/navbar/Header.vue";
import LeftSidebar from "@/components/leftsidebar/LeftSidebar.vue";
import Footer from "@/components/footer/Footer.vue";
import MessageLists from "@/components/main/MessageLists.vue";
import Cover from "@/components/cover/Cover.vue";
import RightSidebar from "@/components/rightsidebar/RightSidebar.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import FindWhatView from "@/views/FindWhatView.vue";

export default {
  components: {FindWhatView, LoginPage, RightSidebar, Cover, MessageLists, Footer, LeftSidebar, Header, SystemBar},
  data: () => ({
    routerPathEQLogin: this.$route.params.path,
    loginViewPath: "/login",
    loginInfo: {
      email: '12',
      password: '12',
    },
    isLoggedIn: true,
  }),
  created() {

  },
  mounted() {
    console.log(this.$route)
  },
  computed:{
  },

  watch: {

  },
  methods: {

  }
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
