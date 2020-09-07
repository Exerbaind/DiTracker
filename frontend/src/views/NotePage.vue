<template>
  <div class="note-page">
    <SingleNoteCard v-for="note in note" v-bind:note="note" :key="note.id" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SingleNoteCard from "../components/singleNoteCard";
export default {
  data() {
    return {
      id: this.$route.params["id"],
      note: {}
    };
  },
  components: {
    SingleNoteCard
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.getProfile();
  },
  mounted() {
    this.note = this.user.notes.filter(note => note.id == this.id);
  }
};
</script>
<style lang="scss">
.note-page {
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
}
</style>