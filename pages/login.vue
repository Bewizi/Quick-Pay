<script lang="ts" setup>
import { ref } from "vue";
import { Eye, EyeOff } from "lucide-vue-next";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "@/components/ui/input";
import type { LoginFormSchema } from "~/types";
import { Separator } from "@/components/ui/separator";
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
  <section class="flex justify-between w-full flex-row-reverse">
    <div>
      <NuxtImg
        alt="Auth Image"
        src="/images/Rovel-Hub.png"
        width="700px"
        height=""
      />
    </div>

    <section class="container max-w-sm mx-auto mt-10">
      <div class="flex flex-col py-2 mb-4">
        <!--      image logo-->
        <div class="mx-auto mb-10">
          <NuxtImg
            src="/images/rovel-Logo.svg"
            alt="Logo"
            width="100px"
            height="100px"
          />
        </div>
        <!--      image logo -->
        <h1
          class="font-mono text-4xl lg:text-6xl font-bold text-[#0083C7] mb-10 text-center"
        >
          Welcome
        </h1>
        <p class="font-bold lg:text-3xl font-sans text-[#363535]">Login</p>
      </div>
      <Form @submit.prevent="handleSubmit">
        <!-- Email Field -->
        <div class="mb-5">
          <FormField name="email">
            <FormItem>
              <FormLabel class="text-[#282727] text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  v-model="formValues.email"
                  placeholder="Email"
                  class="py-6 text-lg placeholder:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <!-- Password Field -->
        <FormField name="password">
          <FormItem>
            <FormLabel class="text-[#282727] text-lg">Password</FormLabel>
            <FormControl>
              <div class="relative">
                <Input
                  v-model="formValues.password"
                  :type="isPasswordVisible ? 'password' : 'text'"
                  placeholder="Password"
                  class="py-6 text-lg placeholder:text-lg"
                />
                <button
                  class="absolute right-2 top-4 cursor-pointer"
                  @click="isPasswordVisible = !isPasswordVisible"
                >
                  <component
                    :is="isPasswordVisible ? EyeOff : Eye"
                    class="cursor-pointer w-5 h-5"
                  />
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <div class="flex justify-between items-center my-8">
          <!--REMEMBER ME-->
          <div class="flex items-center gap-2">
            <Input
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              name="remember-me"
              value="true"
            />
            <label
              class="text-sm lg:text-lg font-normal text-[#333333]"
              for="remember-me"
              >Remember Me
            </label>
          </div>
          <!--      FORGOT PASSWORD-->
          <p class="text-sm lg:text-lg text-[#0083C7]">
            <NuxtLink class="hover:underline" to="">Forgot Password? </NuxtLink>
          </p>
        </div>

        <div class="my-3.5">
          <GenButton
            class="flex mx-auto w-full text-lg rounded-md bg-[#0083C7] py-6"
            type="submit"
            >Login
          </GenButton>
        </div>
      </Form>

      <!--      SEPARATOR-->
      <Separator class="my-8 text-[#5D5B5C]" label="Or continue with" />

      <!--      SOCIAL ICONS-->
      <div class="flex justify-between mb-5 gap-5">
        <div class="border-2 border-[#5D5B5C] rounded-md w-full">
          <NuxtLink to="">
            <NuxtImg
              alt="Google"
              class="mx-auto rounded-full py-4"
              src="/images/Google-Logo.svg"
              size="100vw sm:50vw md:400px"
            />
          </NuxtLink>
        </div>

        <div class="border-2 border-[#5D5B5C] rounded-md w-full">
          <NuxtLink to="">
            <NuxtImg
              alt="Facebook"
              class="mx-auto rounded-full py-4"
              src="/images/facebook-logo.svg"
              size="100vw sm:50vw md:400px"
            />
          </NuxtLink>
        </div>
      </div>

      <p class="text-sm lg:text-lg text-center text-[#ADADAD]">
        Don't have an account?
        <NuxtLink class="text-[#0083C7] hover:underline" to="/register"
          >Register
        </NuxtLink>
      </p>
    </section>
  </section>
</template>

<style scoped></style>
