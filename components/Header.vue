<script lang="ts" setup>
import {reactive, ref} from "vue";
import type {NavLinks} from "~/types";
import {AlignCenterIcon, X} from "lucide-vue-next";

// ALL HEADER LINKS
const links = reactive<NavLinks[]>([
  {id: 1, name: "Home", href: "/"},
  {id: 2, name: "Features", href: "#"},
  {id: 3, name: "About Us", href: "#"},
  {id: 4, name: "How it works", href: "#"},
  {id: 5, name: "FAQS", href: "#"},
  {id: 6, name: "Contact Us", href: "#"},
]);

// ACTIVE LINK INDICATING WHICH LINK IS ACTIVE
const activeLink = ref("Home");

// USE OF NAVIGATION GUARD
const visibility = ref<boolean>(false);
const toggleVisibility = () => (visibility.value = !visibility.value);
</script>

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

      <!--      DESKTOP -->
      <nav class="hidden lg:block">
        <ul class="flex items-center space-x-8">
          <li v-for="link in links" :key="link.id">
            <NuxtLink
                :class="
                activeLink === link.name ? 'text-[#0045A5] font-bold' : ''
              "
                :to="link.href"
                class="hover:text-[#0045A5]"
                @click="activeLink = link.name"
            >
              {{ link.name }}
            </NuxtLink>

            <div
                v-if="activeLink === link.name"
                class="bg-[#0045A5] w-5 h-[0.15rem] mt-1 rounded-full flex mx-auto"
            ></div>
          </li>
        </ul>
      </nav>

      <!--      REGISTRATION -->
      <div class="hidden items-center gap-4 lg:flex">
        <GenButton
            class="border-2 border-blue-500 bg-transparent text-[#0045A5] hover:bg-transparent"
        >
          Login
        </GenButton>
        <GenButton>Register</GenButton>
        <!--        <GenButton defaultClass="">Bus</GenButton>-->
      </div>

      <!--      FOR MOBILE SCREEN MENU BAR AND CLOSE -->
      <div class="lg:hidden cursor-pointer" @click="toggleVisibility">
        <AlignCenterIcon v-if="!visibility"/>
        <X v-else/>
      </div>
    </header>

    <!--      NAV LINK MOBILE-->
    <nav
        v-if="visibility"
        class="lg:hidden fixed w-full left-0  h-screen bg-white/50 z-50 flex flex-col items-center justify-center gap-8"
    >
      <ul class="flex flex-col items-center gap-8">
        <li v-for="link in links" :key="link.id">
          <NuxtLink
              :class="activeLink === link.name ? 'text-[#0045A5] font-bold' : ''"
              :to="link.href"
              class="hover:text-[#0045A5]"
              @click="activeLink = link.name"
          >
            {{ link.name }}
          </NuxtLink>

          <div
              v-if="activeLink === link.name"
              class="bg-[#0045A5] w-5 h-[0.15rem] mt-1 rounded-full flex mx-auto"
          ></div>
        </li>
      </ul>

      <div class="flex flex-col items-center gap-4 lg:hidden">
        <GenButton
            class="border-2 border-blue-500 bg-transparent text-[#0045A5] hover:bg-transparent"
        >
          Login
        </GenButton>
        <GenButton>Register</GenButton>
      </div>
    </nav>
  </section>
</template>
