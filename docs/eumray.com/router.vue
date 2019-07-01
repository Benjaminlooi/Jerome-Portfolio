<script>
import Router from "vue-router";
import intro from "./Intro.vue";
import pr1 from "./pr1.vue";
import pr2 from "./pr2.vue";
import pr3 from "./pr3.vue";
import pr4 from "./pr4.vue";
import about from "./about.vue";
import contact from "./contact.vue";
const Main = { template: "<div>main</div>" };
const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };
const routes = [
  { path: "/", component: intro },
  { path: "/pr1", component: pr1 },
  { path: "/pr2", component: pr2 },
  { path: "/pr3", component: pr3 },
  { path: "/pr4", component: pr4 },
  { path: "/about", component: about },
  { path: "/contact", component: contact }
];
export default new Router({
  mode: "history",
  routes
});
</script>



// WEBPACK FOOTER //
// src/router.vue