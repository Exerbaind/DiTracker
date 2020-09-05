<template>
  <div class="todo">
    <h1>Создать заметку</h1>
    <form @submit.prevent="sendNote">
      <label>Заголовок</label>
      <input type="text" v-model="noteTitle" name="noteTitle" id="noteTitle" />
      <label>Описание</label>
      <input type="text" v-model="noteDesc" name="noteDesc" id="noteDesc" />
      <label>Цвет заметки</label>
      <!-- <input type="text" v-model="backC" name="backC" id="backC" /> -->
      <select name="backC" id="backC" v-model="backC">
        <option value="white">Белый</option>
        <option value="black">Черный</option>
        <option value="red">Красный</option>
        <option value="green">Зеленый</option>
        <option value="blue">Синий</option>
      </select>
      <label>Цвет текста</label>
      <!-- <input type="text" v-model="textC" name="textC" id="textC" /> -->
      <select name="textC" id="textC" v-model="textC">
        <option value="black">Черный</option>
        <option value="white">Белый</option>
        <option value="red">Красный</option>
        <option value="green">Зеленый</option>
        <option value="blue">Синий</option>
      </select>
      <input type="submit" value="Отправить" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      noteTitle: "",
      noteDesc: "",
      backC: "white",
      textC: "black"
    };
  },
  methods: {
    ...mapActions(["putNote", "getProfile"]),
    sendNote() {
      let note = {
        id: Date.now(),
        email: this.user.email,
        title: this.noteTitle,
        description: this.noteDesc,
        backC: this.backC,
        textC: this.textC
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
