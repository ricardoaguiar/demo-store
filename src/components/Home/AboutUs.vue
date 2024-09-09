<script setup lang="ts">
import { useAsset } from '@/composables'
import { ref, onMounted } from 'vue'

const aboutUsContent = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/data/content.json')
    if (response.ok) {
      aboutUsContent.value = await response.json()
    } else {
      console.error('Failed to load footer data')
    }
  } catch (error) {
    console.error('Error fetching about data:', error)
  }
})
</script>

<template>
  <section class="about-us">
    <div class="container">
      <h1 class="title is-3 has-text-centered">About Us</h1>

      <!-- Ensure aboutUsContent is loaded before rendering -->
      <div v-if="aboutUsContent">
        <div
          v-for="(item, index) in aboutUsContent.aboutUs"
          :key="index"
          :class="[
            'columns is-vcentered about-us-content',
            { 'is-reverse': item.reverse },
          ]"
        >
          <!-- Image Section -->
          <div class="column is-half image-container">
            <img
              :src="useAsset(item.image)"
              alt="home-img"
              title="home-img"
              class="about-us-img"
              loading="lazy"
            />
          </div>

          <!-- Text Section -->
          <div class="column is-half about-us-text">
            <h2 class="subtitle is-4">{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <p v-else>Loading...</p>
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
