<template>
  <v-app>
    <v-navigation-drawer :class="{'resize-navigation' : drawer}" app>
      <!--Nav bar  -->
      <NavBar :isShow="isShow" @resize="resizeShow"/>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer, isShow = !isShow"></v-app-bar-nav-icon>
      <!-- Header -->
      <Header />
    </v-app-bar>

    <v-main>
      <!-- Main content  -->
      <Content />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
import Header from "./components/layout/Header.vue";
import Content from "./components/layout/Content.vue";
import "./css/main.css";
export default {
  components: {
    NavBar,
    Header,
    Content,
  },
  data: () => ({
    drawer: null,
    isShow: true,
  }),
  methods:{
    resizeShow(){
      this.isShow = !this.isShow;
      this.drawer = !this.drawer;
    }
  }
};
</script>
