<template>
  <div id="app">
    <v-app id="inspire">
      <div id="system-bar">
        <SystemBar></SystemBar>
      </div>
      <div id="header">
        <Header></Header>
      </div>
      <div id="left-sidebar">
        <LeftSidebar></LeftSidebar>
      </div>
      <div id="right-sidebar">
        <RightSidebar></RightSidebar>
      </div>
      <div id="main-body">
        <v-main>
          <v-container class="py-8 px-6" fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
      </div>
      <div id="cover">
        <Cover></Cover>
      </div>
      <div id="footer">
        <Footer></Footer>
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

export default {
  components: {RightSidebar, Cover, MessageLists, Footer, LeftSidebar, Header, SystemBar},
  data: () => ({}),
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
</style>
