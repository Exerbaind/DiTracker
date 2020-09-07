<template>
  <button @click="$emit('handler')" class="btn">{{btnName}}</button>
</template>
<script>
export default {
  props: {
    btnName: String
  }
};
</script>
<style lang="scss">
.btn {
  background-color: black;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  margin-top: 15px;
  @media screen and (min-width: 1000px) {
    &:hover {
      background-color: #0064b7;
    }
    &:active {
      transform: scale(0.95);
    }
  }
}
</style>