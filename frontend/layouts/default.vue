<template>
  <VApp>
    <VAppBar border flat> <VAppBarTitle>Anotações</VAppBarTitle></VAppBar>

    <VNavigationDrawer>
      <v-card v-for="item in items" :key="item.id" variant="flat" border prepend-icon="home">
        <template #prepend>
          <VIcon>attach_file</VIcon>
        </template>
        <template #title> {{ item.title }} </template>
        <template #subtitle>{{ item.remind_in }}</template>
        <template #append>
          <VIcon><Deleta :id="item.id" @id-removido="removerItem"></Deleta></VIcon>
        </template>
      </v-card>
    </VNavigationDrawer>
    <VMain>
      <slot />
    </VMain>
  </VApp>
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
