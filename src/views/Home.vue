<template>
  <div class="home">
    <IntroFirst></IntroFirst>
  </div>
</template>

<script>
import IntroFirst from "@/components/IntroFirst"

export default {
  name: 'home',
  components: {
    IntroFirst
  },
  created() {
    window.onload = () => {
      console.log('all loaded')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
