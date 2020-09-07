<template>
  <div class="todos">
    <h1 class="todos__title">Заметки</h1>
    <div class="todos__list">
      <NoteCard
        v-for="note in user.notes"
        v-bind:note="note"
        :key="note.id"
        @deleteNote="deleteNote"
      />
    </div>
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
  padding: 20px 40px;
  @media screen and (max-width: 1060px) {
    left: 0;
    width: 100%;
    top: 40px;
    padding: 20px;
    height: auto;
  }
  .todos__title {
    font-size: 36px;
  }
  .todos__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
