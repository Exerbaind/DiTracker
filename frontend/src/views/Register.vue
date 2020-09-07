<template>
  <div class="register">
    <div class="register__container">
      <h1 class="form__title">Регистрация</h1>
      <form class="register__form" @submit.prevent="registerUser">
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          class="input__data"
          placeholder="Имя"
        />
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="Email"
          class="input__data"
        />
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          class="input__data"
          placeholder="Пароль"
        />
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          v-model="confirm_password"
          class="input__data"
          placeholder="Подтвердите пароль"
        />
        <input type="submit" class="submit__btn" value="Зарегистрироваться" />
      </form>
      <p class="login__answ">Есть аккаунта?</p>
      <Button title="Вход" router="/login" class="to-login" />
    </div>
  </div>
</template>
<script>
import Button from "../components/button";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  },
  components: {
    Button
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.register(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/login");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  destroyed() {
    location.reload();
  }
};
</script>
<style lang="scss">
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  .register__container {
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    .form__title {
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
    }
    .register__form {
      display: flex;
      flex-direction: column;
      .input__data {
        border: none;
        font-size: 16px;
        padding: 5px;
        border-bottom: 2px solid black;
        outline: none;
        transition: 0.3s;
        border-radius: 5px;
        margin: 15px 0;
        &:focus {
          border-bottom: 2px solid #0064b7;
        }
      }
      .submit__btn {
        background-color: black;
        padding: 10px 40px;
        font-size: 16px;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        outline: none;
        @media screen and (min-width: 1000px) {
          &:hover {
            background-color: #0064b7;
          }
        }
        &:active {
          transform: scale(0.95);
        }
      }
    }
    .login__answ {
      margin: 20px 0 10px 0;
      text-align: center;
      color: #0064b7;
    }
    .to-login {
      background-color: #0064b7;
      width: 100%;
      @media screen and (min-width: 1000px) {
        &:hover {
          opacity: 0.7;
        }
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>