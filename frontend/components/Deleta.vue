import type { Axios } from 'axios';
<template>
  <v-dialog width="500">
    <template #activator="{ props }">
      <VBtn variant="flat" icon="delete" v-bind="props"></VBtn
    ></template>

    <template #default="{ isActive }">
      <v-card title="Excluir">
        <h1></h1>
        <v-card-text>Tem certeza que deseja excluir? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Cancelar" @click="isActive.value = false"></v-btn>
          <v-btn
            color="red"
            text="Excluir"
            @click="(isActive.value = false), deletaAnotacao()"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
  import axios from "axios"
  export default {
    props: {
      id: { type: Number, required: true },
    },
    emits: ["id-removido"],
    methods: {
      deletaAnotacao() {
        const url = `http://localhost:8000/annotations/${this.id}`
        console.log(url)
        axios
          .delete(url)
          .then((response) => {
            if (response.status === 200) {
              this.$emit("id-removido", this.id)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
  }
  //   console.log(this.key)
</script>
