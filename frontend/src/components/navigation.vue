<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <router-link to="/todos" class="navigation__link">Заметки</router-link>
      <router-link to="/todo" class="navigation__link">Новая заметка</router-link>
      <router-link to="/profile" class="navigation__link">Профиль</router-link>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 10vw;
  height: 100vh;
  border-right: 1px solid grey;
  padding-top: 30px;
  background-color: white;
  z-index: 10;
  @media screen and (max-width: 1060px) {
    width: 100%;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid grey;
    padding-top: 0px;
  }
  .navigation__list {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1060px) {
      flex-direction: row;
      border-right: none;
      overflow-x: hidden;
      overflow-y: hidden;
      width: auto;
      width: 100%;
      justify-content: center;
    }
    .navigation__link {
      margin: 10px 0;
      text-decoration: none;
      padding-left: 10px;
      position: relative;
      height: 40px;
      display: flex;
      align-items: center;
      color: black;
      text-align: center;
      @media screen and (max-width: 1060px) {
        width: 130px;
        justify-content: center;
        margin: 5px 0;
      }
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
          @media screen and (max-width: 1060px) {
            right: none;
            top: 108%;
            height: 2px;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>