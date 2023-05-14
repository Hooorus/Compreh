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
            <MessageLists></MessageLists>
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
import MessageLists from "@/components/MessageLists.vue";
import Cover from "@/components/Cover.vue";
import RightSidebar from "@/components/RightSidebar.vue";
import LeftSidebar from "@/components/LeftSidebar.vue";
import SystemBar from "@/components/SystemBar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "MessageView",
  components: {Header, SystemBar, LeftSidebar, RightSidebar, Cover, MessageLists}
}
</script>

<style scoped>

</style>
