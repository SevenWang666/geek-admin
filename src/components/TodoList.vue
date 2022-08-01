<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
    </div>
    x轴：{{ x }} y轴：{{ y }}
    <h1 @click="add">{{ count }}</h1>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import useTodos from "../composition/useTodos.js";
import useMouse from "../composition/useMouse.js";
let count = ref(1);
let color = ref("red");
function add() {
  count.value++;
  color.value = Math.random() > 0.5 ? "blue" : "red";
}
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
let { x, y } = useMouse();
</script>

<style>
h1 {
  color: v-bind(color);
}
</style>
