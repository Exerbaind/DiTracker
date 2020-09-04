<template>
  <button class="btn">
    <router-link :to="router" class="link">{{ this.title }}</router-link>
  </button>
</template>
<script>
export default {
  props: {
    router: String,
    title: String
  }
};
</script>
<style lang="scss">
.btn {
  background-color: black;
  padding: 10px 0;
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
    &:active {
      transform: scale(0.95);
    }
  }
  .link {
    text-decoration: none;
    color: white;
    height: 100%;
    width: 100%;
    padding: 10px 40px;
  }
}
</style>