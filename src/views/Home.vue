<template>
  <div class="home">
    <transition name="slide-up" v-on:before-leave="beforeLeave">
      <Loading v-if="!isLoad"></Loading>
    </transition>
    <div>
      <transition name="intro-first">
        <IntroFirst v-if="show"></IntroFirst>
      </transition>
    </div>
  </div>
</template>

<script>
import IntroFirst from "@/components/IntroFirst";
import Loading from "@/components/Loading";

export default {
  name: "home",
  data: () => ({
    show: true
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
  created() {},
  methods: {
    slide() {
      this.$store.commit("updateIsLoad");
    },
    beforeLeave() {
      console.log("running before leave");
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 50);
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
.intro-first-enter-active {
  transition: transform 1.5s ease-out;
}
.intro-first-enter {
  transform: scale(1.03);
}
.intro-first-enter-to {
  transform: scale(1);
}
</style>
