<template>
  <div class="app-page">
    <VIcon class="ap-icon mb-2" size="48px">attach_file</VIcon>
    <h1 class="mb-4">Anotações</h1>
    <VBtn variant="flat" color="primary" prepend-icon="add" to="/criar">Criar Anotação</VBtn>
  </div>
</template>

<style>
  .app-page {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .ap-icon {
    transform: rotate(225deg);
  }
</style>
