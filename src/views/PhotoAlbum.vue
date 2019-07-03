<template>
  <div>
    <MenuIcon />
    <div class="container">
      <div class="image">
        <img src="../assets/IMG_20171122_123138.jpg" alt />
      </div>
      <div class="image">
        <img src="../assets/IMG_20171122_123138.jpg" alt />
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
.image img{
  position:relative;
  width: 360px;
}
</style>
