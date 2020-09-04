<template>
  <div class="profile">
    <h1>Профиль</h1>
    <p>{{user.name}}</p>
    <button @click="logoutUser">Выйти</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
    ...mapActions(["getProfile"]),
    logoutUser() {
      this.logout();
      location.reload();
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.getProfile();
  }
};
</script>
<style lang="scss">
.profile {
  position: relative;
  left: 10vw;
  width: 90vw;
}
</style>
