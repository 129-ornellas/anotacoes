<template>
  <div class="create-page my-8 px-4 mx-auto">
    <v-textarea variant="outlined" label="Texto"></v-textarea>
    <v-text-field variant="outlined" prefix="R$" label="Potencial do Negócio"></v-text-field>
    <v-select variant="outlined" chips label="Categorização" multiple></v-select>
    <v-text-field variant="outlined" label="Lembrete" type="datetime-local"></v-text-field>
    <v-btn-group variant="outlined" divided border style="width: 100%">
      <VBtn variant="flat" size="large" style="width: 90%">Salvar</VBtn>
      <VBtn variant="flat" icon="delete" style="width: 10%"></VBtn>
    </v-btn-group>
  </div>
</template>

<style>
  .create-page {
    max-width: 800px;
  }
</style>
