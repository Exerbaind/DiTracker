<template>
  <div class="note" :style="{backgroundColor: `${note.backC}`}">
    <h1 class="note__title" :style="{color: `${note.textC}`}">{{ note.title }}</h1>
    <hr :style="{backgroundColor: `${note.textC}`}" />
    <p class="note_desc" :style="{color: `${note.textC}`}">{{ note.description }}</p>
    <button @click="$emit('deleteNote', note.id)">удалить</button>
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
<style lang="scss">
.note {
  width: 49%;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
  .note__title {
    font-size: 30px;
    border: none;
  }
  hr {
    border: none;
    height: 1px;
    background-color: black;
    margin: 5px 0 10px 0;
  }
}
</style>