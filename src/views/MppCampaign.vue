<template>
  <transition name="intro-first">
    <div class="home" v-if="showCustomCursor" @mousemove="updateMousePosition">
      <div>
        <IntroFirst />
        <MppSectionManifesto />
        <!-- <IntroSecond /> -->
      </div>
    </div>
  </transition>
</template>

<script>
import IntroFirst from "@/components/MppCampaign/MppIntroFirst";
import MppSectionManifesto from "@/components/MppCampaign/MppSectionManifesto";
// import IntroSecond from "@/components/HomeIntroSecond";

export default {
  name: "home",
  components: {
    IntroFirst,
    MppSectionManifesto,
    // IntroSecond
  },
  data: () => ({
    showCustomCursor: true,
  }),
  computed: {},
  watch: {},
  created() {
    // Event.$on("introShow", () => {
    //   this.showCustomCursor = false;
    //   setTimeout(() => {
    //     this.showCustomCursor = true;
    //   }, 50);
    // });
  },
  methods: {
    updateMousePosition(e) {
      this.$store.commit("updateMousePosition", { x: e.pageX, y: e.pageY });
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-first-enter-active {
  transition: transform 1.7s ease-out;
}
.intro-first-enter {
  transform: scale(1.03);
}
.intro-first-enter-to {
  transform: scale(1);
}
</style>
