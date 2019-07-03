<template>
  <transition name="slide-up" v-on:before-leave="beforeLeave">
    <div class="loading" v-if="isLoading">
      <div class="loading-box">
        <span>J</span>
        <span>E</span>
        <span>R</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
        <p class="loading-text">Loading</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    isLoading: function() {
      return this.$store.state.isLoading;
    }
  },
  methods: {
    beforeLeave() {
      // console.log("running before leave");
      Event.$emit("introShow");
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
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  background-color: #fff;
  z-index: 999;
}
.loading-box {
  // display: inline-block;
  margin: auto;
  font-family: "Anton", sans-serif;
}
.loading-box span {
  display: inline-block;
  line-height: 0.9;
  font-size: 6em;
  user-select: none;
}
.loading-box span:nth-child(1) {
  transform: rotateY(0deg);
  animation: rotate1 4s ease-out infinite;
}
.loading-box span:nth-child(2) {
  transform: rotateY(0deg);
  animation: rotate2 4s ease-out infinite;
}
.loading-box span:nth-child(3) {
  transform: rotateY(0deg);
  animation: rotate3 4s ease-out infinite;
}
.loading-box span:nth-child(4) {
  transform: rotateY(0deg);
  animation: rotate4 4s ease-out infinite;
}
.loading-box span:nth-child(5) {
  transform: rotateY(0deg);
  animation: rotate5 4s ease-out infinite;
}
@keyframes rotate1 {
  40% {
    transform: rotateY(0deg);
  }
  55%,
  80% {
    transform: rotateY(180deg);
  }
}
@keyframes rotate2 {
  40% {
    transform: rotateY(0deg);
  }
  60%,
  80% {
    transform: rotateY(180deg);
  }
}
@keyframes rotate3 {
  40% {
    transform: rotateY(0deg);
  }
  55%,
  80% {
    transform: rotateY(180deg);
  }
}
@keyframes rotate4 {
  40% {
    transform: rotateY(0deg);
  }
  70%,
  80% {
    transform: rotateY(180deg);
  }
}
@keyframes rotate5 {
  40% {
    transform: rotateY(0deg);
  }
  75%,
  80% {
    transform: rotateY(180deg);
  }
}
.loading-box span:nth-child(6) {
  transform: rotate(0deg);
  transform-origin: bottom right;
  animation: balanceRight 4s ease-out infinite;
}

@keyframes balanceRight {
  60% {
    transform: rotate(0deg);
  }
  75%,
  80% {
    transform: rotate(45deg);
  }
}
p.loading-text {
  font-size: 1em;
  text-align: center;
}
.loading-text:after {
  content: " .";
  animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: black;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
  }
}
</style>
