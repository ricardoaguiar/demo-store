<template>
  <button
    :class="buttonClass"
    :style="customStyle"
    :disabled="disabled"
    @click="handleClick"
    class="button"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  buttonText: String,
  buttonClass: String,
  customStyle: Object,
  disabled: Boolean,
})

const emit = defineEmits(['click'])

function handleClick(): void {
  emit('click')
}
</script>

<style scoped lang="scss">
.button {
  outline: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}
</style>
