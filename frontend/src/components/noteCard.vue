<template>
  <div class="note" :style="{backgroundColor: `${note.backC}`}">
    <h1 class="note__title" :style="{color: `${note.textC}`}">{{ note.title }}</h1>
    <!-- <hr :style="{backgroundColor: `${note.textC}`}" />
    <p class="note_desc" :style="{color: `${note.textC}`}">{{ note.description }}</p>-->
    <div class="actions">
      <button @click="$emit('deleteNote', note.id)" class="btn_done">готово</button>
      <router-link :to="`/todos/${note.id}`" class="btn_edit">подробнее</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["note"],

  methods: {
    ...mapActions(["getProfile"])
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.getProfile();
  }
};
</script>
<style lang="scss" scoped>
.note {
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: translate(3px, -3px);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }
  @media screen and (max-width: 1060px) {
    flex-direction: column;
  }

  .note__title {
    font-size: 30px;
    border: none;
    width: 80%;
    @media screen and (max-width: 1060px) {
      width: 100%;
    }
  }
  .actions {
    width: 20%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1060px) {
      width: 100%;
      margin-top: 10px;
    }
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
    .btn_done {
      width: 49%;
      background-color: black;
      padding: 10px 0;
      font-size: 16px;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
      outline: none;

      @media screen and (min-width: 1060px) {
        &:hover {
          background-color: #00c853;
        }
        &:active {
          transform: scale(0.95);
        }
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        margin-top: 10px;
      }
    }
    .btn_edit {
      width: 49%;
      background-color: black;
      padding: 10px 0;
      font-size: 16px;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
      outline: none;
      text-decoration: none;
      text-align: center;
      @media screen and (min-width: 1060px) {
        &:hover {
          background-color: #0064b7;
        }
        &:active {
          transform: scale(0.95);
        }
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>