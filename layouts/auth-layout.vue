<script lang="ts" setup>

</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div class="w-full max-w-sm p-8 space-y-3 rounded-xl shadow-md bg-gray-50 text-gray-800">
        <h1 class="text-2xl font-bold text-center">Welcome to our App</h1>
        <slot/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>