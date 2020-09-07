<template>
  <div class="note">
    <div class="note_default" :style="{backgroundColor: `${note.backC}`}">
      <h1 class="note__title" :style="{color: `${note.textC}`}">{{ note.title }}</h1>
      <hr :style="{backgroundColor: `${note.textC}`}" />
      <p class="note__desc" :style="{color: `${note.textC}`}">{{ note.description }}</p>
      <div class="actions">
        <router-link to="/todos" class="btn_back">назад</router-link>
        <!-- <btnAction btnName="Изменить" @handler="handlerEditMode" class="btn_edit" /> -->
      </div>
    </div>
    <!-- <div class="note_edit" :style="{backgroundColor: `${note.backC}`}" v-if="editMode">
      <form @submit.prevent="saveChanges">
        <input
          type="text"
          v-model="editTitle"
          id="editTitle"
          name="editTitle"
          class="note__title_edit"
        />
        <hr :style="{backgroundColor: `${note.textC}`}" />
        <textarea v-model="editDesc" name="editDesc" id="editDesc" class="note__desc_edit" rows="4"></textarea>
        <input type="submit" value="Сохранить" class="btn_save" />
      </form>
      <div class="actions">
        <router-link :to="`/todos/${note.id}`" class="btn_save">сохранить</router-link>
      </div>
    </div>-->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import btnAction from "../components/actionButton";
export default {
  props: ["note"],
  //   data() {
  //     return {
  //       editMode: false,
  //       editTitle: this.note.title,
  //       editDesc: this.note.description
  //     };
  //   },
  //   components: {
  //     btnAction
  //   },
  methods: {
    ...mapActions(["getProfile"])
    // handlerEditMode() {
    //   this.editMode = true;
    // },
    // saveChanges() {
    //   this.editMode = false;
    // }
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
  .note_default,
  .note_edit {
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 1060px) {
      margin-top: 0px;
    }

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
    .note__desc {
      font-size: 18px;
    }
    .actions {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      @media screen and (min-width: 1060px) {
        justify-content: center;
      }

      .btn_back,
      .btn_edit {
        width: 10%;
        background-color: black;
        padding: 10px 0;
        font-size: 16px;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        outline: none;
        margin: 30px 10px 10px 0;
        text-align: center;
        text-decoration: none;

        @media screen and (min-width: 1060px) {
          &:hover {
            background-color: #0064b7;
          }
          &:active {
            transform: scale(0.95);
          }
        }
        @media screen and (max-width: 1060px) {
          width: 100%;
        }
      }
    }
    // form {
    //   display: flex;
    //   flex-direction: column;
    //   .note__title_edit {
    //     padding: 10px;
    //     font-size: 30px;
    //   }
    //   .note__desc_edit {
    //     font-size: 18px;
    //     padding: 10px;
    //   }
    //   .btn_save {
    //     width: 10%;
    //     background-color: black;
    //     padding: 10px 0;
    //     font-size: 16px;
    //     color: white;
    //     border: none;
    //     border-radius: 10px;
    //     cursor: pointer;
    //     transition: 0.3s;
    //     outline: none;
    //     margin: 30px 10px 10px 0;
    //     //   text-align: center;
    //     text-decoration: none;

    //     @media screen and (min-width: 1000px) {
    //       &:hover {
    //         background-color: #0064b7;
    //       }
    //       &:active {
    //         transform: scale(0.95);
    //       }
    //     }
    //   }
    // }
  }
}
</style>