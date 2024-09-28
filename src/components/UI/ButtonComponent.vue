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
