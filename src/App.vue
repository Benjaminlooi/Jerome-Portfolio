<template>
  <div id="app">
    <Loading />
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Loading from "@/components/TheLoading";
import Menu from "@/components/TheMenu";

export default {
  components: {
    Loading,
    Menu
  },
  computed: {},
  created() {
    let image = new Image();
    image.src = require("./assets/jerome_bg.jpg");
    image.onload = () => {
      this.$store.commit("updateIsLoading", false);
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap");

body {
  font-family: "Roboto Condensed", sans-serif;
  margin: 0;
  overflow-x: hidden;
}
a {
  color: inherit;
  text-decoration: none;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  // font-size: 100%;
  // font: inherit;
  // vertical-align: baseline;
}
</style>
