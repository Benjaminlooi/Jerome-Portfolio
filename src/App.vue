<template>
  <v-app>
    <Loading />
    <Menu />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Loading from '@/components/TheLoading.vue';
import Menu from '@/components/TheMenu.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
    Loading,
    Menu,
  },
  computed: {},
  created(): void {
    let image = new Image();
    image.src = require('./assets/jerome_bg.jpg');
    image.onload = () => {
      this.$store.commit('updateIsLoading', false);
    };
  },
  methods: {},
  data: () => ({
    //
  }),
});
</script>
