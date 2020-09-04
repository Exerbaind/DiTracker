<template>
  <div class="note" :style="{backgroundColor: `${note.backC}`}">
    <h1 class="note__title">{{ note.title }}</h1>
    <p class="note_desc">{{ note.description }}</p>
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
</style>