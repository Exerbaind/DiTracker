<template>
  <div class="todo">
    <h1 class="todo__header">Создать заметку</h1>
    <form @submit.prevent="sendNote" class="todo__form">
      <label>Заголовок:</label>
      <input type="text" v-model="noteTitle" name="noteTitle" id="noteTitle" class="todo__title" />
      <label>Описание:</label>
      <textarea v-model="noteDesc" name="noteDesc" id="noteDesc" class="todo__desc" rows="6"></textarea>
      <label>Цвет заметки:</label>
      <!-- <input type="text" v-model="backC" name="backC" id="backC" /> -->
      <select name="backC" id="backC" v-model="backC">
        <option value="white">Белый</option>
        <option value="black">Черный</option>
        <option value="red">Красный</option>
        <option value="green">Зеленый</option>
        <option value="blue">Синий</option>
      </select>
      <label>Цвет текста:</label>
      <!-- <input type="text" v-model="textC" name="textC" id="textC" /> -->
      <select name="textC" id="textC" v-model="textC">
        <option value="black">Черный</option>
        <option value="white">Белый</option>
        <option value="red">Красный</option>
        <option value="green">Зеленый</option>
        <option value="blue">Синий</option>
      </select>
      <input type="submit" value="Отправить" class="todo__sbt" />
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
  padding: 40px;
  @media screen and (max-width: 1060px) {
    left: 0;
    width: 100%;
    top: 40px;
    padding: 20px;
    height: auto;
  }
  .todo__header {
    font-size: 36px;
  }
  .todo__form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    max-width: 450px;
    @media screen and (max-width: 1060px) {
      margin-top: 0;
    }
    label {
      font-size: 18px;
      margin-top: 15px;
    }
    .todo__title {
      padding: 10px;
      font-size: 16px;
    }
    .todo__desc {
      padding: 10px;
      font-size: 16px;
    }
    .todo__sbt {
      background-color: black;
      padding: 10px 0;
      font-size: 16px;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
      outline: none;
      margin-top: 15px;
      @media screen and (min-width: 1000px) {
        &:hover {
          background-color: #0064b7;
        }
        &:active {
          transform: scale(0.95);
        }
      }
    }
    select {
      @media screen and (max-width: 1060px) {
        height: 40px;
        padding: 0 10px;
      }
    }
  }
}
</style>
