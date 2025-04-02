<template>
    <div>
      <h1>Random Facts</h1>
      <p>Find interesting facts here.</p>
      <GoBack />
    </div>
  </template>
  
  <script>
  import GoBack from './GoBack.vue';
  
  export default {
    components: { GoBack }
  };
  </script>