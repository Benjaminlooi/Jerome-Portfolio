<template>
  <div>
    <MenuIcon />
    <div id="love-life" class="container px-2 sm:mx-auto mt-4">
      <div class="flex">
        <button
          @click="page = 0"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
        >Hall Of Fame</button>
        <button
          @click="page = 1"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2"
        >Candidates</button>
      </div>
      <HallOfFame v-if="page == 0" />
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/components/TheMenuIcon";
import HallOfFame from "@/components/HallOfFame";
export default {
  components: {
    MenuIcon,
    HallOfFame
  },
  data: () => ({
    page: 0
  })
};
</script>

<style lang="scss" scoped>
</style>