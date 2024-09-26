<template>
  <Header />
  <div class="not-found-container">
    <h1 class="not-found-title">Oops! 404 - Page Not Found</h1>
    <p class="not-found-message">
      It looks like the page you're looking for doesn't exist or has been moved.
    </p>
    <img
      class="not-found-image"
      :src="useAsset('404.jpg')"
      alt="Page Not Found"
    />
    <ButtonComponent class="back-button" @click="backToProducts"
      >Back to Product List</ButtonComponent
    >
  </div>
  <Footer />
</template>

<script setup lang="ts">
import router from '@/router'
import { useAsset } from '@/composables'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

function backToProducts(): void {
  router.push({ path: '/products' })
}
</script>

<style scoped lang="scss">
.not-found-container {
  @include flex(
    $direction: column,
    $alignItems: center,
    $justifyContent: center
  );
  text-align: center;
  padding: $spacing-5;
  color: $color-black;
  margin-top: $spacing-10;

  @include responsive(mobile, max) {
    margin-top: $spacing-6;
    padding: 0;
  }
}

.not-found-title {
  font-size: $font-size-3xl;
  margin-bottom: $spacing-base;

  @include responsive(mobile, max) {
    font-size: $font-size-2xl;
  }
}

.not-found-message {
  font-size: $font-size-xl;
  color: $color-grey;
  margin-bottom: $spacing-8;
}

.not-found-image {
  width: 80%;
  margin-bottom: $spacing-8;

  @include responsive(mobile, max) {
    width: 100vw;
  }
}

.back-to-products {
  text-decoration: none;
}

.back-button {
  background-color: $color-black;
  color: $color-white;
  padding: $spacing-2 $spacing-base;
  font-weight: $bold;
  font-size: $font-size-xl;
  text-transform: capitalize;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @include responsive(mobile, max) {
    margin-bottom: $spacing-8;
  }
}

.back-button:hover {
  background-color: $color-grey;
}
</style>
