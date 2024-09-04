<script setup lang="ts">
import { useAsset } from '@/composables'
import contentData from '@data/content.json'

const content = contentData
</script>

<template>
  <section class="about-us">
    <div class="container">
      <h1 class="title is-3 has-text-centered">About Us</h1>

      <div
        v-for="(content, index) in content.aboutUs"
        :key="index"
        :class="[
          'columns is-vcentered about-us-content',
          { 'is-reverse': content.reverse },
        ]"
      >
        <!-- Image Section -->
        <div class="column is-half image-container">
          <img
            :src="useAsset(content.image)"
            alt="home-img"
            title="home-img"
            class="about-us-img"
            loading="lazy"
          />
        </div>

        <!-- Text Section -->
        <div class="column is-half about-us-text">
          <h2 class="subtitle is-4">{{ content.title }}</h2>
          <p>{{ content.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  padding: 2rem;
}

.about-us-content {
  margin-bottom: 2rem;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.about-us-text {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: -5%;
  z-index: 1;
}

.is-reverse {
  flex-direction: row-reverse;
}

.is-reverse .about-us-text {
  margin-left: 0;
  margin-right: -5%;
}

@media screen and (max-width: 768px) {
  .about-us-content {
    flex-direction: column !important;
  }

  .image-container,
  .about-us-text {
    width: 100%;
    margin: 0;
  }

  .about-us-text {
    padding: 1rem;
    box-shadow: none;
    background-color: transparent;
  }
}
</style>
