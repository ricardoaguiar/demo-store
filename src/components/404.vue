<template>
  <Header />
  <div class="not-found-container container py-5">
    <h1 class="not-found-title">Oops! 404 - Page Not Found</h1>
    <p class="not-found-message">
      It looks like the page you're looking for doesn't exist or has been moved.
    </p>
    <img
      class="not-found-image"
      :src="useAsset('404.jpg')"
      alt="Page Not Found"
    />
    <RouterLink to="/products" class="back-to-products">
      <button class="back-button">Back to Product List</button>
    </RouterLink>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { useAsset } from '@/composables'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  color: #000000;
}

.not-found-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}

.not-found-image {
  width: 80%;
  margin-bottom: 2rem;
}

.back-to-products {
  text-decoration: none;
}

.back-button {
  background-color: #000000;
  color: #ffffff;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: capitalize;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #3c3c3c;
}
</style>
