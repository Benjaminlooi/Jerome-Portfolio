<template>
  <div>
    <MenuIcon />
    <div class="images-container mt-32 mx-5">
      <div class="w-full mb-5">
        <img src="../assets/IMG_20171122_123138.jpg" alt />
      </div>
      <div class="w-full mb-5">
        <img src="../assets/IMG-20171014-WA0001.jpg" alt />
      </div>
      <div class="w-full mb-5">
        <img src="../assets/qp2ffgt9l0521.jpg" alt />
      </div>
      <div class="w-full mb-5">
        <img src="../assets/IMG_20171122_123138.jpg" alt />
      </div>
      <div class="w-full mb-5">
        <img src="../assets/IMG-20171014-WA0001.jpg" alt />
      </div>
      <div class="w-full mb-5">
        <img src="../assets/qp2ffgt9l0521.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/components/MenuIcon";

export default {
  components: {
    MenuIcon
  }
};
</script>

<style lang="scss" scoped>
.image img {
  position: relative;
  width: 360px;
}
.images-container {
  column-count: 3;
  column-gap: 1.25rem;
}
</style>
