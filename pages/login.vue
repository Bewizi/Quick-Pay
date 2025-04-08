<script lang="ts" setup>
import {ref} from "vue";
import {Eye, EyeOff} from "lucide-vue-next";
import {Button} from "~/components/ui/button";
import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "~/components/ui/form";
import {Input} from "~/components/ui/input";
import type {LoginFormSchema} from "~/types";

//THE DEFAULT LAYOUT FOR THE LOGIN PAGE
definePageMeta({
  layout: "auth-layout",
});

// LOADING STATE
const isLoading = ref<boolean>(false);
// PASSWORD VISIBILITY
const isPasswordVisible = ref<boolean>(true);

// Reactive form values
const formValues = ref<LoginFormSchema>({
  email: "",
  password: "",
});

// Submit function
const handleSubmit = () => {
  isLoading.value = true;
  try {
    // Perform your form submission logic here
    console.log("Form Submitted", formValues.value);
    // simple validation for password and confirm password(optional)
    // if (formValues.value.password !== formValues.value.confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }

    Object.keys(formValues.value).forEach((key) => {
      formValues.value[key as keyof LoginFormSchema] = "";
    });
  } catch (e) {
    console.log("Error submitting form:", e);
    alert("An error occurred while submitting the form. Please try again.");
    return;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center py-2">
      <!--      image logo-->
      <!--      image logo -->
      <h1 class="font-mono text-4xl lg:text-6xl font-bold text-[#1e1e1e] mb-5">
        Login
      </h1>
      <p class="font-medium lg:text-lg font-sans text-[#4e4e4e]">
        Fill the details below to start using Quick Pay
      </p>
    </div>
    <Form @submit.prevent="handleSubmit">
      <!-- Email Field -->
      <FormField name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input v-model="formValues.email" placeholder="Email"/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      </FormField>

      <!-- Password Field -->
      <FormField name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <div class="relative">
              <Input
                  v-model="formValues.password"
                  :type="isPasswordVisible ? 'password' : 'text'"
                  placeholder="Password"
              />
              <button
                  class="absolute right-2 top-2 cursor-pointer"
                  @click="isPasswordVisible = !isPasswordVisible"
              >
                <component
                    :is="isPasswordVisible ? EyeOff : Eye"
                    class="cursor-pointer w-5 h-5"
                />
              </button>
            </div>
          </FormControl>
          <FormMessage/>
        </FormItem>
      </FormField>
      <div class=" my-3.5">
        <GenButton class="flex mx-auto w-full text-lg rounded-md" type="submit">Login</GenButton>
      </div>
    </Form>
    <p class="text-sm lg:text-lg">
      Don't have an account?
      <NuxtLink class="text-blue-500 hover:underline" to="/register"
      >Register
      </NuxtLink>
    </p>
  </section>
</template>

<style scoped></style>
