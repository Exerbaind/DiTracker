<template>
  <div class="home">
    <h1 class="home__title">Добро пожаловать!</h1>
    <div class="choose__auth">
      <Button title="Войти" router="/login" :btnHandler="null" class="home__btn" />
      <Button title="Регистрация" router="/register" :btnHandler="null" class="home__btn" />
    </div>
  </div>
</template>

<script>
import Button from "../components/button";
export default {
  name: "Home",
  components: {
    Button
  }
};
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100%;
  .home__title {
    font-size: 40px;
    text-transform: uppercase;
  }
  .choose__auth {
    .home__btn {
      margin: 0 20px;
    }
  }
}
</style>
