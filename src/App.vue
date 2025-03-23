<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hi. I'm Svitlana. This is my Vue.js App"/>
  <button @click="sayHello">Click Me If You Like It</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  methods: {
    sayHello() {
      alert('Thank You!');
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6b1036;
  margin-top: 60px;
  padding: 30px;
}
button {
  padding: 20px;
  background-color: #6b1036;
  color: white;
  border: none;
  font-size: 1.2em;
}
</style>
