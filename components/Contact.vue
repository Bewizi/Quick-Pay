<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "./ui/button/Button.vue";
import Textarea from "./ui/textarea/Textarea.vue";
// import FormDescription from './ui/form/FormDescription.vue';

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    email: z.string().email("Must be a valid email").max(254),
    textarea: z
      .string()
      .min(10, { message: "Must be at least 10 characters" })
      .max(160, { message: "Must not be more than 160 characters" }),
  }),
);

function onSubmit(values: {}) {
  console.log("Form submitted!", values);
}
</script>
<template>
  <section>
    <div>
      <h2>Contact Us</h2>
      <h5>Got Questions? Let's Talk</h5>

      <div class="contact-info">
        <div class="info-group">
          <span class="w-36 h-36 bg-blue"></span>
          <span>
            <h4>Email Address</h4>
            <h5>Jodanrovel@gmail.com</h5>
          </span>
        </div>
        <div class="info-group">
          <span class="w-36 h-36 bg-blue"></span>
          <span>
            <h4>Call Us</h4>
            <h5>(505) 555-0125</h5>
          </span>
        </div>
        <div class="info-group">
          <span class="w-36 h-36 bg-blue"></span>
          <span>
            <h4>Address</h4>
            <h5>2972 Westheimer Rd. Santa Ana, Illinois 85486</h5>
          </span>
        </div>
      </div>
    </div>
    <div class="border-2 p-2">
      <Form :validation-schema="formSchema" @submit="onSubmit">
        <p class="font-md">Send Us A Message</p>
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Alogbe Racheal"
                v-bind="componentField"
                class="w-38"
              />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="John@gmail.com"
                v-bind="componentField"
                class="w-38"
              />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="textarea">
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us a little joke"
                v-bind="componentField"
              />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <Button>Send</Button>
      </Form>
    </div>
  </section>
</template>
