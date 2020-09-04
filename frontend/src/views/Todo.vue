<template>
  <div class="todo">
    <h1>Создать заметку</h1>
    <form @submit.prevent="sendNote">
      <label>Заголовок</label>
      <input type="text" v-model="noteTitle" name="noteTitle" id="noteTitle" />
      <label>Описание</label>
      <input type="text" v-model="noteDesc" name="noteDesc" id="noteDesc" />
      <input type="text" v-model="backC" name="backC" id="backC" />
      <input type="submit" value="Отправить" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      noteTitle: "",
      noteDesc: "",
      backC: ""
    };
  },
  methods: {
    ...mapActions(["putNote", "getProfile"]),
    // logoutUser() {
    //   this.logout();
    //   location.reload();
    // },
    sendNote() {
      let note = {
        id: Date.now(),
        email: this.user.email,
        title: this.noteTitle,
        description: this.noteDesc,
        backC: this.backC
      };
      this.putNote(note);
      this.$router.push("/todos");
      this.getProfile();
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    this.getProfile();
  }
};
</script>
<style lang="scss">
.todo {
  position: relative;
  left: 10vw;
  width: 90vw;
}
</style>
