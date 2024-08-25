<template>
  <!--  <section class="section">-->
  <div id="heroControls" class="carousel" data-bs-ride="carousel">
    <div class="carousel-content">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['carousel-item', { 'is-active': index === activeIndex }]"
      >
        <img
          class="image"
          :src="getImageSrc(slide.src, slide.ext)"
          :alt="slide.alt"
          :title="slide.title"
        />
      </div>
    </div>
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        type="button"
        :data-slide-to="index"
        :class="['carousel-indicator', { 'is-active': index === activeIndex }]"
        @click="goToSlide(index)"
        :aria-label="'Slide ' + (index + 1)"
      />
    </div>
  </div>
  <!--  </section>-->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAsset } from '@/composables/useAsset'

const activeIndex = ref(0)
const slides = [
  { src: 'jum1', ext: 'jpg', alt: 'First-slide', title: 'First-slide' },
  { src: 'jum2', ext: 'jpg', alt: 'Second-slide', title: 'Second-slide' },
  { src: 'jum3', ext: 'jpg', alt: 'Third-slide', title: 'Third-slide' },
]

const getImageSrc = (path: string, ext: string): string => {
  return useAsset(path, ext)
}

const goToSlide = (index) => {
  activeIndex.value = index
}
</script>

<style scoped>
/*.img-fluid {
  min-width: 800px !important;
  outline: 1px dashed maroon;
}

.carousel-indicators button {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid rgb(129, 127, 127);
}

.carousel-indicators > .active {
  background: #e0f0f8;
}
.carousel {
  outline: 1px solid red;
}*/

.carousel {
  position: relative;
  overflow: hidden;
  outline: 1px solid tomato;
  margin: 1rem;
}

.carousel-content {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  transition: opacity 0.5s ease;
  opacity: 0;
}

.carousel-item.is-active {
  opacity: 1;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.carousel-indicator {
  background-color: white;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid #817f7f;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicator.is-active {
  background-color: #e0f0f8;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
