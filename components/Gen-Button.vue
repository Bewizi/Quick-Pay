<script lang="ts" setup>
import {Button} from "~/components/ui/button";

defineProps<{
  defaultClass?: string
}>()
</script>

<template>
  <Button :class="defaultClass || 'bg-[#0045A5] text-white hover:bg-[#0045A5]/90 rounded-full font-bold px-8 '">
    <slot/>
  </Button>
</template>

<style scoped>

</style>