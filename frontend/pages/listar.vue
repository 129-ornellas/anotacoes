<template>
  <div class="list-page my-8 px-4 mx-auto">
    <v-card v-for="item in items" :key="item.id" variant="flat" border prepend-icon="home">
      <template #prepend>
        <VIcon>attach_file</VIcon>
      </template>
      <template #title> {{ item.message }} </template>
      <template #subtitle> 27/05/2024 - 23:12</template>
      <template #append>
        <VIcon>delete</VIcon>
      </template>
    </v-card>
  </div>
</template>
<script>
  import axios from "axios"

  export default {
    data() {
      return {
        items: [{ message: "Foo" }, { message: "Bar" }],
      }
    },
    async mounted() {
      try {
        const response = await axios.get("http://localhost:8000/annotations/")
        console.log(response)
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
