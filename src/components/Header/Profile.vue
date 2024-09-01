<script setup lang="ts">
import { useAsset } from '@/composables'
import { ref } from 'vue'

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <div class="user">
    <img
      @click="toggleModal"
      :src="useAsset('user', 'svg')"
      alt="gender-neutral-user"
      title="gender-neutral-user"
      class="image"
    />
    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': showModal }" @click="toggleModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Modal content goes here -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    cursor: pointer;
    display: block;
    width: 25px;
    height: 25px;
  }
}
</style>
