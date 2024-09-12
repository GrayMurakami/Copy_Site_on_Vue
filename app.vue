<template>
  <NuxtLayout>
    <Header />
    <div class="page">
      <NuxtPage />
    </div>
    <Footer />
  </NuxtLayout>
</template>

<style scoped>
  .page {
    flex-grow: 1;
  }
</style>