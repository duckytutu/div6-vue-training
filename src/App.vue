<template>
  <div id="app">
    <button @click="toggleImage">{{ show ? "Hide" : "Show" }} image</button>
    <img v-if="show" alt="Vue logo" src="./assets/logo.png">
    <h3>{{ numberA }}</h3>
    <h3>{{ numberB }}</h3>
    <h3>{{ total }}</h3>
    <button @click="test">Click me</button>
    <button @click="calculate(10)">Calculate</button>


    <ul>
      <li v-for="(item, index) in todos" :key="`todo-${index}`">{{ item.title }} - {{ item.done ? "Done" : "Not done" }}</li>
    </ul>

    <!-- có thể viết gọn lại bằng cú pháp 2 way data binding -->

    <!-- <input type="text" :v-model="newTodo.title""> -->
    <input type="text" :value="newTodo.title" @input="onTitleChange($event)">
    <button @click="addTodo">Add</button>

    <!-- ví dụ cho việc 1 component có nhiều v-for -->
    <!--
    <ul>
      <li v-for="(item, index) in posts" :key="`post-${index}`">{{ }}</li>
    </ul> 
    -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // alert('Page loaded')
  },
  data() {
    return {
      numberA: 1,
      numberB: 2,
      show: true,
      anotherTotal: null,
      todos: [
        { id: 1, title: 'Do task 1', done: false},
        { id: 2, title: 'Do task 2', done: true},
        { id: 3, title: 'Do task 3', done: false},
      ],
      newTodo: { id: "", title: "New todo", done: false},
    }
  },
  computed: {
    total() {
      return this.numberA + this.numberB;
    }
  },
  methods: {
    test() {
      this.numberA = 123;
      this.numberB = 456;
    },
    toggleImage() {
      this.show = !this.show;
      console.log(this.show)
    },
    calculate(c) {
      this.anotherTotal = this.numberA + this.numberB + c;
    },
    onTitleChange(event) {
      this.newTodo.title = event.target.value;
    },
    addTodo() {
      // this.todos.push(this.newTodo);
      this.todos = [...this.todos, this.newTodo];
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
