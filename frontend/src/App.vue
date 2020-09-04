<template>
  <div id="app">
    <Navigation v-if="isLoggedIn" />
    <Errors v-if="error" :msg="error" />
    <router-view />
  </div>
</template>
<script>
import Errors from "./components/errors";
import Navigation from "./components/navigation";
import { mapGetters } from "vuex";
export default {
  components: {
    Errors,
    Navigation
  },
  computed: {
    ...mapGetters(["error", "isLoggedIn"])
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}
</style>
