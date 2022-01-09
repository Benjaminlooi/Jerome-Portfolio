<template>
  <div>
    <v-timeline
      class="pt-32 pb-10 pr-5 pr-sm-0"
      :dense="$vuetify.breakpoint.xsOnly"
    >
      <v-timeline-item
        v-for="(girlfriendHistory, i) in girlfriendHistoryList"
        :key="i"
        :color="girlfriendHistory.color"
        fill-dot
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${girlfriendHistory.color}--text`"
            v-text="girlfriendHistory.date"
          ></span>
        </template>

        <v-card :color="girlfriendHistory.color" dark>
          <v-img
            contain
            max-height="250"
            :src="require('../assets/' + girlfriendHistory.imgUrl)"
            class="bg-white"
          ></v-img>

          <v-card-title class="text-h6">
            {{ girlfriendHistory.title }}
          </v-card-title>
          <!-- <v-card-text class="white text--primary">
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </p>
          </v-card-text> -->
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="orange" fill-dot small>
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold orange--text`"
            >Jan 2020 - Present</span
          >
        </template>

        <v-card color="orange" dark>
          <v-img
            max-height="250"
            :src="require('../assets/' + 'priestly_celibacy.jpg')"
            class="bg-white"
          ></v-img>

          <v-card-title class="text-h6"> Embraced Celibacy </v-card-title>
          <!-- <v-card-text class="white text--primary">
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </p>
          </v-card-text> -->
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    girlfriendHistoryList: [
      {
        title: "Charlene",
        date: "Sept 2019 - Oct 2019",
        imgUrl: "charlene.jpg",
        color: "pink",
      },
      {
        title: "Lydia",
        date: "Oct 2019 - Nov 2019",
        imgUrl: "lydia.jpg",
        color: "cyan",
      },
      {
        title: "Apu",
        date: "Nov 2019 - Dec 2019",
        imgUrl: "girl_portrait_1.jpg",
        color: "green",
      },
      {
        title: "Kashmeera",
        date: "Dec 2019 - Jan 2020",
        imgUrl: "kashmeera.jpg",
        color: "amber",
      },
    ],
  }),
};
</script>

<style></style>
