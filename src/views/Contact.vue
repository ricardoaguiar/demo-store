<template>
  <ContactForm />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

// components
import ContactForm from '@/components/ContactForm.vue'

useHead({
  link: [
    { rel: 'canonical', href: 'https://vue-demo-store.pages.dev/contact' },
  ],
})
</script>
