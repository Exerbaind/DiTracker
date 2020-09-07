<template>
  <div class="profile">
    <h1 class="profile__title">Профиль</h1>
    <div class="profile__info">
      <p>Имя: {{user.name}}</p>
      <p>Фамилия: {{user.lastName}}</p>
      <p>Номер: {{user.number}}</p>
    </div>
    <btnAction @handler="logoutUser" btnName="Изменить данные" />
    <br />
    <btnAction @handler="logoutUser" btnName="Выйти из профиля" />

    <!-- <button >Выйти</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import btnAction from "../components/actionButton";
export default {
  methods: {
    ...mapActions(["logout"]),
    ...mapActions(["getProfile"]),
    logoutUser() {
      this.logout();
      location.reload();
    }
  },
  components: {
    btnAction
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
  padding: 40px;
  @media screen and (max-width: 1060px) {
    left: 0;
    width: 100%;
    top: 40px;
    padding: 20px;
    height: auto;
  }
  .profile__info p {
    margin-top: 10px;
    font-size: 18px;
  }
}
</style>
