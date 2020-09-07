<template>
  <p class="error">{{ msg }}</p>
</template>
<script>
export default {
  props: ["msg"]
};
</script>
<style lang="scss">
.error {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: red;
  background-color: rgba($color: red, $alpha: 0.3);
  padding: 10px 40px;
  border: 1px solid red;
  border-top: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
</style>