<template>
  <h1>这是首页</h1>
  <router-link to="/workbench"> workbench </router-link>
  <TodoList />
  <h1 @click="toggle1">全屏化</h1>
  <Rate :value="score" />
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="1" theme="green"></Rate>
  <router-view></router-view>
</template>

<script setup>
import TodoList from "../components/TodoList.vue";
import Rate from "../components/Rate.vue";
import { useFullscreen } from "@vueuse/core";
import { ref } from "vue";
const { toggle } = useFullscreen();
function toggle1() {
  console.log("测试全屏化");
  toggle();
}
let score = ref(3);
</script>
