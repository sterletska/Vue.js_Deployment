<template>
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! This page does not exist.</p>
      <GoBack />
    </div>
  </template>
  
  <script>
  import GoBack from './GoBack.vue';
  
  export default {
    components: { GoBack }
  };
  </script>