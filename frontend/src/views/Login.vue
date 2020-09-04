<template>
  <div class="login">
    <div class="login__container">
      <h1 class="form__title">Вход</h1>
      <form class="login__form" @submit.prevent="loginUser">
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="email"
          class="input__data"
        />
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          class="input__data"
          placeholder="пароль"
        />
        <input type="submit" value="Войти" class="submit__btn" />
      </form>
      <p class="regist__answ">Нет аккаунта?</p>
      <Button title="Регистрация" router="/register" class="to-register" />
    </div>
  </div>
</template>
<script>
import Button from "../components/button";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    Button
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/todos");
            location.reload();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  .login__container {
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    .form__title {
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
    }
    .login__form {
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
        transition: 0.3s;
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
    .regist__answ {
      margin: 20px 0 10px 0;
      text-align: center;
      color: #0064b7;
    }
    .to-register {
      background-color: #0064b7;
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