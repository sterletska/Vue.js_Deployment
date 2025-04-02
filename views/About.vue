<template>
    <div>
      <h1>About</h1>
      <p>This app is part of my learning journey, where I explore Vue Router</p>
      <GoBack />
    </div>
  </template>
  
  <script>
  import GoBack from '../components/GoBack.vue';
  
  export default {
    components: { GoBack }
  };
  </script>