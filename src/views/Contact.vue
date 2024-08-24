<template>
  <ContactForm />
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'

definePageMeta({
  title: 'Contact-Us',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://vue-ecom.vercel.app/contact' }],
})
</script>
