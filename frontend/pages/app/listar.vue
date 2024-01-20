<template>
  <div class="list-page my-8 px-4 mx-auto">
    <v-card variant="flat" border prepend-icon="home">
      <template #prepend>
        <VIcon>attach_file</VIcon>
      </template>
      <template #title> This is a title </template>
      <template #subtitle> 27/05/2024 - 23:12</template>
      <template #append>
        <VIcon>delete</VIcon>
      </template>
    </v-card>
  </div>
</template>

<style>
  .list-page {
    max-width: 800px;
  }
</style>
