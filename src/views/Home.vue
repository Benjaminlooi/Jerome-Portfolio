<template>
  <div class="home">
    <transition name="slide-up">
      <Loading v-if="!isLoad"></Loading>
    </transition>
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
  data: () => ({}),
  components: {
    Loading,
    IntroFirst
  },
  computed: {
    isLoad: function() {
      return this.$store.state.isLoad;
    }
  },
  created() {},
  methods: {
    slide() {
      this.$store.commit("updateIsLoad");
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-up-leave-active {
  transition: bottom 0.4s ease-in;
}
.slide-up-leave {
  bottom: 0;
}
.slide-up-leave-to {
  bottom: 100vh;
}
</style>
