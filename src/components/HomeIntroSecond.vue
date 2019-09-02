<template>
  <div
    class="intro-second w-screen h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden"
  >
    <div ref="bubble" class="bubble rounded-full w-40 h-40 border-solid border-white border-2 z-20"></div>
    <div ref="bubblePulse" class="bubble-pulse absolute z-10 w-48 h-48 bg-gray-100 rounded-full"></div>
    <div class="i-am-text absolute text-white font-bold">I'm</div>
    <div ref="text" class="the-text absolute text-white font-bold">{{currentText}}</div>
  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap";

export default {
  data: () => ({
    timeline: null,
    textTimeline: null,
    texts: [
      "BOLD",
      "DELICIOUS",
      "GENTLEMAN",
      "FABULOUS",
      "STRONG",
      "AGGRESIVE",
      "ORDINARY",
      "HANDSOME",
      "CHARMING",
      "ATTRACTIVE",
      "SEXY"
    ],
    currentText: "BOLD"
  }),
  computed: {},
  mounted() {
    const { bubble, bubblePulse, text } = this.$refs;
    this.timeline = new TimelineLite({
      onComplete: () => {
        this.timeline.restart()
      }
    });

    this.timeline
      .to(bubble, 0.3, {
        scale: 0.8,
        rotation: 16,
        ease: Back.easeOut.config(1.7)
      })
      .to(
        bubblePulse,
        0.4,
        {
          scale: 0.9,
          opacity: 1
        },
        "-=0.5"
      );

    this.timeline
      .to(bubble, 1.1, {
        scale: 1,
        rotation: "-=16",
        ease: Elastic.easeOut.config(2.5, 0.5)
      })
      .to(
        bubblePulse,
        1,
        {
          scale: 3,
          opacity: 0,
          ease: Expo.easeOut
        },
        "-=1.1"
      );

    this.textTimeline = new TimelineLite({
      delay: 0.3,
      onComplete: () => {
        this.randomiseText();
        this.textTimeline.restart();
      }
    });

    this.textTimeline
      .to(text, 0.9000000000000001, {
        scale: 1.1,
        opacity: 1,
        ease: Back.easeOut.config(1.7)
      })
      .to(text, 0.5, {
        scale: 1.2
      })
      .to(text, 0.2, {
        scale: 0.3,
        opacity: 0.2,
        ease: Expo.easeOut
      });
    // console.log(this.timeline.duration())
    // console.log(this.textTimeline.duration())
  },
  methods: {
    randomiseText: function() {
      const textToPick = this.texts.filter(text => text !== this.currentText);
      this.currentText =
        textToPick[Math.floor(Math.random() * textToPick.length)];
    }
  }
};
</script>

<style lang="scss" scoped>
.intro-second {
}
.bubble {
  background: url("../assets/IMG_20180816_163537.png") center no-repeat;
  background-size: contain;
  background-color: #272727;
}
.bubble-pulse {
  background-color: #272727;
  opacity: 0;
}
.i-am-text {
  font-size: 8em;
  top: 20%;
}
.the-text {
  font-size: 10em;
  bottom: 15%;
}

@media only screen and (max-width: 600px) {
  .intro-second {
    font-size: 10px;
  }
  .the-text {
    font-size: 6em;
    bottom: 25%;
  }
}
</style>
