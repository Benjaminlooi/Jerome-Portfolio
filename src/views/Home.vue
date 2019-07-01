<template>
  <div class="home">
    <transition name="slide-up" v-on:before-leave="beforeLeave">
      <Loading v-if="!isLoad"></Loading>
    </transition>
    <transition name="menu-transition">
      <Menu v-if="menuIsShow"></Menu>
    </transition>
    <div>
      <transition name="intro-first">
        <IntroFirst v-if="show"></IntroFirst>
      </transition>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import Menu from "@/components/Menu";
import IntroFirst from "@/components/IntroFirst";

export default {
  name: "home",
  components: {
    Loading,
    Menu,
    IntroFirst
  },
  data: () => ({
    show: true
  }),
  computed: {
    isLoad: function() {
      return this.$store.state.isLoad;
    },
    menuIsShow: function() {
      return this.$store.state.menuIsShow;
    }
  },
  watch: {
    menuIsShow: function(val) {
      // if(val)
    }
  },
  created() {
    // console.log(this.menuIsShow)
  },
  methods: {
    slide() {
      this.$store.commit("updateIsLoad");
    },
    beforeLeave() {
      // console.log("running before leave");
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
  transition: transform 1.7s ease-out;
}
.intro-first-enter {
  transform: scale(1.03);
}
.intro-first-enter-to {
  transform: scale(1);
}

.menu-transition-enter-active {
  transition: filter 0.5s ease-out, background-color 0.5s ease-out;
}
.menu-transition-enter {
  background-color: red;
  filter: blur(10px);
}
.menu-transition-enter-to {
  background-color: green;
  filter: blur(0);
}
</style>
