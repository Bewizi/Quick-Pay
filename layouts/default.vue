<script setup lang="ts">
import Header from '~/components/Header.vue';
</script>
<template>
    <!-- <p class="text-red-500 text-3xl font-bold underline uppercase">Header</p> -->
    <Header />
    <slot />
    <p class="text-red-500 text-3xl font-bold underline uppercase">Footer</p>
</template>