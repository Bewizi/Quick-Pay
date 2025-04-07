<script setup lang="ts">
import Button from './ui/button/Button.vue'
import { AlignCenterIcon } from 'lucide-vue-next';
</script>

<template>
    <nav class="flex justify-between items-center border-2 border-red">
        <a href="#">
            <!-- <NuxtImg
            src="/public/images/rovel-Logo.svg"
            alt="image file description"
            /> -->
            <img src="/public/images/rovel-Logo.svg" alt="rovel sub" width="45px">
        </a>
        <ul class="flex">
            <li>Home</li>
            <li>Features</li>
            <li>About Us</li>
            <li>How it works</li>
            <li>FAQS</li>
            <li>Contact Us</li>
        </ul>
        <div>
            <Button>Login</Button>
            <Button>Register</Button>
        </div>
        <Button>
            <AlignCenterIcon />
        </Button>
    </nav>
</template>