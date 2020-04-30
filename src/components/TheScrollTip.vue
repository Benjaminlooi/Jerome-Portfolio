<template>
  <div id="scrollTip"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div#scrollTip {
  width: 24px;
  height: 36px;
  position: absolute;
  border: 2px solid white;
  border-radius: 14px;
  bottom: 35px;
  left: calc(50vw - 12px);
  display: block;
  box-sizing: content-box;
  animation: scroll-tip-intro 0.3s ease-out;
  &::after {
    content: "";
    width: 2px;
    height: 17px;
    display: block;
    background-color: white;
    position: absolute;
    left: 11px;
    margin-top: 4px;
    border-radius: 2px;
    animation: scrollMouse 1500ms infinite ease-in-out;
  }
}
@keyframes scrollMouse {
  0% {
    height: 10px;
  }
  50% {
    height: 15px;
  }
  100% {
    height: 10px;
  }
}
@keyframes scroll-tip-intro {
  0% {
    // border: 0px solid white;
    transform: rotate(360deg);
  }
  100% {
    // border: 2px solid white;
    transform: rotate(0deg);
  }
}
</style>