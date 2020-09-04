<template>
  <nav class="navigation">
    <router-link to="/todos" class="navigation__link">Заметки</router-link>
    <router-link to="/todo" class="navigation__link">Новая заметка</router-link>
    <router-link to="/profile" class="navigation__link">Профиль</router-link>
  </nav>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 10vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid grey;
  padding-top: 30px;
  .navigation__link {
    margin: 10px 0;
    text-decoration: none;
    padding-left: 10px;
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    color: black;
    &.router-link-exact-active {
      color: #0064b7;
      &:after {
        content: "";
        display: block;
        position: absolute;
        right: -1px;
        top: 0;
        background-color: #0064b7;
        height: 100%;
        width: 3px;
      }
    }
  }
}
</style>