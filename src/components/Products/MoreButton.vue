<template>
  <div class="is-flex is-justify-content-center mx-5 mx-sm-0 pt-1">
    <button
      type="button"
      @click="$emit('incrementCards')"
      class="button is-fullwidth is-outlined"
    >
      More +
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'incrementCards'): void
}>()
</script>

<style scoped>
.button {
  border-radius: 0;
}
</style>
