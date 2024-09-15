<template>
  <div class="column p-0">
    <img
      :src="useAsset(item.img)"
      class="cart-img"
      alt="cart-item"
      title="cart-item"
    />
  </div>
  <div class="title-container column p-0 m-0">
    <h4 class="product-title">{{ item.title }}</h4>
    <h6 class="product-price">${{ item.price }}</h6>
    <p>Quantity: {{ item.quantity }}</p>
    <p>Subtotal: ${{ item.price * item.quantity }}</p>

    <div class="flex counter-container has-text-centered">
      <ButtonComponent
        actionType="decrement"
        :quantity="quantity"
        @quantity="updateQuantity"
        buttonClass="button update-quantity"
        buttonText="−"
      />
      <span>{{ item.quantity }}</span>
      <ButtonComponent
        actionType="increment"
        :quantity="quantity"
        @quantity="updateQuantity"
        buttonClass="button update-quantity"
        buttonText="+"
      />
    </div>
  </div>

  <div class="remove-btn-container column p-0">
    <span class="remove-btn" @click="store.outCart(item.id!)">&#10006;</span>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import { ref } from 'vue'

const props = defineProps<{
  item: Object
}>()

const store = useMainStore()
const quantity = ref(props.item.quantity)

function updateQuantity(newQuantity) {
  quantity.value = newQuantity
  props.item.quantity = newQuantity
  store.updateLocalStorage()
}
</script>

<style scoped lang="scss">
.cart-img {
  width: 100%;
}

.product-title {
  @include font-size(16px, 22px, 24px, 26px, 26px);

  font-weight: bold;
}

.product-price {
  @include font-size(18px);
}

.title-container {
  align-self: center;
}

.remove-btn {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
}

.remove-btn:hover {
  background-color: black;
  border-radius: 20px;
  color: white;
}

.counter-container {
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: fit-content;
  line-height: normal;

  .update-quantity {
    border-radius: 0;
    border: none;
    outline: none;
  }

  & * {
    @include flex($direction: row, $gap: $one-spacing);
  }
  @include font-size(16px);
  @include responsive(mobile) {
    flex-direction: row;
  }
}
</style>
