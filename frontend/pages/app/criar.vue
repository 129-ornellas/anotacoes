<template>
  <div class="create-page">
    <h4>Anotações</h4>
    <v-textarea variant="outlined" label="Texto"></v-textarea>
    <v-text-field variant="outlined" prefix="R$" label="Potencial do Negócio"></v-text-field>
    <v-select variant="outlined" chips label="Categorização" multiple></v-select>
    <v-text-field variant="outlined" label="Lembrete" type="date"></v-text-field>
    <VBtn variant="flat" size="large" color="blue">Salvar</VBtn>
    <VBtn variant="flat" color="red" icon="delete"></VBtn>
  </div>
</template>
<style>
  .create-page {
    width: 100%;
    height: 100%;
  }
</style>
