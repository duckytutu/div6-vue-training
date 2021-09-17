<template>
  <div id="app">
    <!-- <HomePage /> -->
    <TodoList :list="list" />
    <button @click="handleAddTodo">Add todo</button>

    <ul>
      <li v-for="pet in petList" :key="pet.id">Name: {{ pet.name }} - {{ pet.status }}</li>
    </ul>
  </div>
</template>

<script>
// import HomePage from './HomePage'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: { TodoList },
  created() {
    this.$store.dispatch('fetchPetList', 'available')
  },
  data() {
    return {
      
    }
  },
  computed: { 
    list() {
      return this.$store.state.todos
    },
    petList() {
      return this.$store.state.petList
    },
    total() {
      return this.$store.getters.totalTodos
    }
  },
  methods: { 
    handleAddTodo() {
      const newTodo = { id: Date.now(), title: 'Do task 1', done: false }
      this.$store.commit('ADD_TODO', newTodo )
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
