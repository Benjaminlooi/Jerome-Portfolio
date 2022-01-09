<template>
  <v-app>
    <Loading />
    <Menu />
    <router-view
  /></v-app>
</template>

<script>
import Loading from "@/components/TheLoading";
import Menu from "@/components/TheMenu";

export default {
  name: "App",

  components: {
    Loading,
    Menu,
  },
  computed: {},
  created() {
    let image = new Image();
    image.src = require("./assets/jerome_bg.jpg");
    image.onload = () => {
      this.$store.commit("updateIsLoading", false);
    };
  },
  methods: {},
  data: () => ({
    //
  }),
};
</script>
