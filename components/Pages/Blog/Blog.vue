<script setup>
const count = ref(0);
const topCount = () => {
  count.value++;
};
</script>

<template>
  <div>
    <buttom class="btn" @click="topCount">Push as much as u love me!: {{ count }}</buttom>
  </div>
</template>

<style scoped>
.btn {
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  width: fit-content;
  display: block;
  font-size: 16px;
  border: 1px solid #000;
  background-color: blue;
  color: aliceblue;
}
</style>