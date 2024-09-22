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
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  buttonText: String,
  buttonClass: String,
  customStyle: Object,
  disabled: Boolean,
})

const emit = defineEmits(['click'])

const route = useRoute()

const isCurrentPage = computed(() => route.path === props.routerLink)

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
