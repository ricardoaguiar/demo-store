<template>
  <!--  Render RouterLink if routerLink prop is passed-->
  <RouterLink
    v-if="routerLink && !isCheckout && !isCurrentPage"
    :to="routerLink"
    :class="buttonClass"
    class="button"
  >
    <button :class="buttonClass" :style="customStyle" :disabled="disabled">
      <slot>{{ buttonText }}</slot>
    </button>
  </RouterLink>

  <button
    v-else
    :class="buttonClass"
    :style="customStyle"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  actionType: {
    type: String,
    default: 'addToCart',
  },
  item: Object,
  quantity: Number,
  buttonText: String,
  buttonClass: String,
  customStyle: Object,
  disabled: Boolean,
  routerLink: String,
  isCheckout: Boolean,
  isInCart: Boolean,
})

const emit = defineEmits(['quantity', 'cart'])

const route = useRoute()

const isCurrentPage = computed(() => route.path === props.routerLink)

// Handle increment function
function handleIncrement() {
  if (props.quantity < 9) {
    emit('quantity', props.quantity + 1) // Emit updated quantity to parent
  }
}

// Handle decrement function
function handleDecrement() {
  if (props.quantity > 1) {
    emit('quantity', props.quantity - 1) // Emit updated quantity to parent
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

<style scoped lang="scss">
/*
.button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #ffffff;
}
*/

button {
  outline: none;
}

button:disabled {
  cursor: not-allowed;
}
</style>
