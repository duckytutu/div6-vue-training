<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="`todo-${index}`">{{ item.title }} - {{ item.done ? "Done" : "Not done" }}</li>
    </ul>
    <button @click="handleAddTodo">Add todo from Todo list component</button>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    handleAddTodo() {
      const newTodo = { id: Date.now(), title: 'Do task 1', done: false }
      this.$store.commit('ADD_TODO', newTodo )
    }
  }
}
</script>

<style></style>