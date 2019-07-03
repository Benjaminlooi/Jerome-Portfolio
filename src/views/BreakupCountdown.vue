<template>
  <div>
    <MenuIcon />
    <div class="flex flex-col mt-12">
      <div class="container mx-auto py-5">
        <h1 class="text-4xl">Guessing Jerome's breakup date...</h1>
      </div>
      <div class="mx-auto">
        <div v-for="item in countdown" :key="item.name" class="mb-2">
          <h1>{{item.name}}'s guess</h1>
          <flip-countdown :deadline="item.breakup_date"></flip-countdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/components/MenuIcon";
import FlipCountdown from "vue2-flip-countdown";

export default {
  components: {
    MenuIcon,
    FlipCountdown
  },
  data: () => ({
    countdown: [
      {
        name: "Ben",
        breakup_date: "2019-12-25 00:00:00"
      },
      {
        name: "Nigel",
        breakup_date: "2019-11-25 00:32:52"
      },
      {
        name: "Max",
        breakup_date: "2019-10-05 14:00:32"
      },
      {
        name: "Ashwin",
        breakup_date: "2019-12-27 12:30:12"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>
