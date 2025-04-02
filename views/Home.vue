<template>
    <div>
      <h1>Home</h1>
      <p>Welcome to my Vue app</p>
      <router-link v-for="destination in destinations"
      :key="destination.id"
      :to="destination.slug"
      >
    <h2>{{ destination.name }}</h2>
    </router-link>
      
    </div>
  </template>

  <script>
import sourceData from '@./data.json'
export default {
    data(){
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>