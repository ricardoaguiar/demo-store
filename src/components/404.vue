<template>
  <Header />
  <div class="not-found-container pt-6">
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
</template>

<script setup lang="ts">
import { useAsset } from '@/composables'
import Header from '@/components/Header.vue'
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
}

.not-found-title {
  font-size: 3rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}

.not-found-image {
  width: 100%;
  margin-bottom: 2rem;
}

.back-to-products {
  text-decoration: none;
}

.back-button {
  background-color: #2c3e50;
  color: #fff;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #34495e;
}
</style>
