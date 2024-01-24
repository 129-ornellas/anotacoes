<template>
  <div class="create-page my-8 px-4 mx-auto">
    <v-textarea v-model="title" variant="outlined" label="Texto"></v-textarea>
    <v-text-field
      v-model.number="business_potential"
      variant="outlined"
      prefix="R$"
      label="Potencial do Negócio"
      type="number"></v-text-field>
    <v-select
      v-model="category"
      :items="categorys"
      variant="outlined"
      chips
      label="Categorização"></v-select>
    <v-text-field
      v-model="remind_in"
      variant="outlined"
      label="Lembrete"
      type="datetime-local"></v-text-field>
    <v-btn-group variant="outlined" divided border style="width: 100%">
      <VBtn variant="flat" size="large" style="width: 90%" @click="criaAnotacao">Salvar</VBtn>
      <VBtn variant="flat" icon="delete" style="width: 10%"></VBtn>
    </v-btn-group>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        title: null,
        business_potential: null,
        category: null,
        categorys: ["Muito importante", "Medio", "Pouco importante"],
        remind_in: null,
      }
    },
    methods: {
      criaAnotacao() {
        axios
          .post("http://localhost:8000/annotations/", {
            title: this.title,
            business_potential: this.business_potential,
            category: this.category,
            remind_in: this.remind_in,
          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
  }
</script>

<style>
  .create-page {
    max-width: 800px;
  }
</style>
