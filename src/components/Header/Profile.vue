<script setup lang="ts">
import { useAsset } from '@/composables'
</script>

<template>
  <div class="user">
    <img
      data-bs-toggle="modal"
      data-bs-target="#userModal"
      :src="useAsset('user', 'svg')"
      alt="gender-neutral-user"
      title="gender-neutral-user"
      class="image is-25x25"
    />
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
    min-width: 25px;
    min-height: 25px;
  }
}
</style>
