<template>
  <div class="todos">
    <NoteCard
      v-for="note in user.notes"
      v-bind:note="note"
      :key="note.id"
      @deleteNote="deleteNote"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NoteCard from "../components/noteCard";
export default {
  components: {
    NoteCard
  },
  methods: {
    ...mapActions(["getProfile", "removeNote"]),
    deleteNote(id) {
      let noteToRemove = {
        email: this.user.email,
        id: id
      };
      this.removeNote(noteToRemove);
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
.todos {
  position: relative;
  left: 10vw;
  width: 90vw;
}
</style>
