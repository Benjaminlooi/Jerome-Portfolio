<template>
  <div id="hall-of-fame">
    <h1 class="text-2xl my-4">Hall of fame</h1>
    <div class="flex flex-wrap -mx-2">
      <div v-for="(list, index) in lists" :key="index" class="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
        <div class="rounded overflow-hidden shadow-lg">
          <div class="w-full h-64 relative">
            <div
              class="flex items-center justify-center card-images opacity-0 w-full h-full absolute inset-0 z-10"
            >
              <button class="opacity-100 rounded text-white bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent z-20">one</button>
              <div class="absolute inset-0 bg-white opacity-25"></div>
            </div>
            <img class="w-full h-full object-cover" :src="require('../assets/' + list.imgUrl)" alt="Sunset in the mountains" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{list.title}}</div>
            <p class="text-gray-700 text-base">{{list.date}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: [
      {
        title: "Charlene",
        date: "Sept 2019 - Oct 2019",
        imgUrl: "charlene.jpg"
      },
      {
        title: "Lydia",
        date: "Sept 2019 - Oct 2019",
        imgUrl: "lydia.jpg"
      },
      {
        title: "Apu",
        date: "Sept 2019 - Oct 2019",
        imgUrl: "girl_portrait_1.jpg"
      },
      {
        title: "Kashmeera",
        date: "Sept 2019 - Oct 2019",
        imgUrl: "kashmeera.jpg"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.card-images:hover{
  opacity: 1;
}
</style>