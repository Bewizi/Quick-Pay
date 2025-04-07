<script lang="ts" setup></script>

<template>
  <section class="container max-w-7xl mx-auto px-8 py-4 lg:px-5">
    <header class="flex justify-between items-center">
      <a href="#">
        <!-- <NuxtImg
        src="/public/images/rovel-Logo.svg"
        alt="image file description"
        /> -->
        <img alt="rovel sub" src="/public/images/rovel-Logo.svg" width="45px"/>
      </a>
      <nav class="">
        <ul class="flex items-center space-x-8">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="#">Features</NuxtLink>
          <NuxtLink to="#">About Us</NuxtLink>
          <NuxtLink to="#">How it works</NuxtLink>
          <NuxtLink to="#">FAQS</NuxtLink>
          <NuxtLink to="">Contact Us</NuxtLink>
        </ul>
      </nav>

      <!--      REGISTRATION -->
      <div class="flex items-center space-x-4">
        <GenButton
            default-class="border-2 border-blue-500 bg-transparent text-[#0045A5] hover:bg-transparent rounded-full px-8">
          Login
        </GenButton>
        <GenButton default-class="">Register</GenButton>
        <!--        <GenButton defaultClass="">Bus</GenButton>-->
      </div>

      <!--      FOR MOBILE SCREEN MENU BAR AND CLOSE -->
      <!--      <Button>-->
      <!--        <AlignCenterIcon/>-->
      <!--      </Button>-->
    </header>
  </section>
</template>
