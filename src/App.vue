<template>
  <div id="app">
    <button @click="toggleImage">{{ show ? "Hide" : "Show" }} image</button>
    <img v-if="show" alt="Vue logo" src="./assets/logo.png">
    <h3>{{ numberA }}</h3>
    <h3>{{ numberB }}</h3>
    <h3>{{ total }}</h3>
    <button @click="test">Click me</button>
    <button @click="calculate(10)">Calculate</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    alert('Page loaded')
  },
  data() {
    return {
      numberA: 1,
      numberB: 2,
      show: true,
      anotherTotal: null
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
