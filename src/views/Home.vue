<template>
  <div class="home">
    <Loading v-if="!isLoad"></Loading>
    <div>
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
  }),
  components: {
    Loading,
    IntroFirst
  },
  computed: {
    isLoad: function() {
      return this.$store.state.isLoad;
    }
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
</style>
