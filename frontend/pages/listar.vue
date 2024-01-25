<template>
  <div class="list-page my-8 px-4 mx-auto">
    <v-card v-for="item in items" :key="item.id" variant="flat" border prepend-icon="home">
      <template #prepend>
        <VIcon>attach_file</VIcon>
      </template>
      <template #title> {{ item.title }} </template>
      <template #subtitle>{{ item.remind_in }}</template>
      <template #append>
        <VIcon><Deleta :id="item.id" @id-removido="removerItem"></Deleta></VIcon>
        <!--  -->
      </template>
    </v-card>
  </div>
</template>
<script>
  import axios from "axios"
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
      } catch (error) {
        console.error(error)
      }
    },
    methods: {
      removerItem(id) {
        const newItems = this.items.filter((item) => item.id !== id)
        this.items = newItems
      },
    },
  }
</script>
<style>
  .list-page {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
