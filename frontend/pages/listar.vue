<template>
  <div class="list-page my-8 px-4 mx-auto">
    <v-card v-for="item in items" :key="item.id" variant="flat" border prepend-icon="home">
      <template #prepend>
        <VIcon>attach_file</VIcon>
      </template>
      <template #title> {{ item.title }} </template>
      <template #subtitle>{{ item.remind_in }}</template>
      <template #append>
        <VIcon>delete</VIcon>
      </template>
    </v-card>
  </div>
</template>
<script>
  import axios from "axios"
  // const instance = axios.create({ baseURL: "http://localhost:8000/annotations/"})
  export default {
    data() {
      return {
        items: null,
      }
    },
    async mounted() {
      try {
        const response = await axios.get("http://localhost:8000/annotations/")
        this.items = response.data
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    },
  }
</script>
<style>
  .list-page {
    max-width: 800px;
  }
</style>
