<template>
  <!--  Render RouterLink if routerLink prop is passed-->
  <RouterLink v-if="routerLink" :to="routerLink" class="button-wrapper">
    <button :class="buttonClass" :style="customStyle" :disabled="disabled">
      <slot>{{ buttonText }}</slot>
    </button>
  </RouterLink>

  <button v-else :class="buttonClass" @click="handleClick" :style="customStyle" :disabled="disabled">
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  actionType: {
    type: String,
    default: 'addToCart',
  },
  item: Object, // For addToCart
  quantity: Number, // For increment/decrement
  buttonText: String, // Button text
  buttonClass: String, // Additional classes
  customStyle: Object, // Inline styles
  disabled: Boolean, // Button disabled state
  routerLink: String,
})

const emit = defineEmits(['quantity', 'cart'])

// Increment and Decrement logic
const handleIncrement = () => {
  if (props.quantity && props.quantity < 9) {
    emit('quantity', props.quantity + 1)
  }
}

const handleDecrement = () => {
  if (props.quantity && props.quantity > 1) {
    emit('quantity', props.quantity - 1)
  }
}

// Handle different button actions based on the prop `actionType`
function handleClick() {
  switch (props.actionType) {
    case 'increment':
      handleIncrement()
      break
    case 'decrement':
      handleDecrement()
      break
    case 'addToCart':
      if (props.item) {
        emit('cart', props.item)
      }
      break
  }
}
</script>

<style scoped>
/* Shared styles for the button */
button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}

button:disabled {
  cursor: not-allowed;
}
</style>
