<template>
  <div class="home">
    <Loading v-if="!isLoad"></Loading>
    <div v-else>
      <IntroFirst></IntroFirst>
    </div>
  </div>
</template>

<script>
import IntroFirst from "@/components/IntroFirst";
import Loading from "@/components/Loading";

export default {
  name: "home",
  data: () => ({
    isLoad: false
  }),
  components: {
    Loading,
    IntroFirst
  },
  created() {
    window.onload = () => {
      console.log("all loaded");
      this.isLoad = true;
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
