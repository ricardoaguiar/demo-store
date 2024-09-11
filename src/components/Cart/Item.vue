<template>
  <div class="column p-0">
    <img
      :src="useAsset(item.img)"
      class="image is-96x96"
      alt="cart-item"
      title="cart-item"
    />
  </div>
  <div class="title-container column p-0 m-0">
    <h4 class="title">{{ item.title }}</h4>
    <h6 class="subtitle">${{ item.price }}</h6>
    <p>Quantity: {{ item.quantity }}</p>
    <p>Subtotal: ${{ item.price * item.quantity }}</p>
    <!--    <button @click="store.inCart(item)">+</button>-->
    <!--    <button @click="handleRemoveItem(item.id)">-</button>-->
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
  item?: Object
  quantity?: Number
}>()

const store = useMainStore()
const quantity = ref(props.item.quantity)

function updateQuantity(newQuantity) {
  quantity.value = newQuantity
  props.item.quantity = newQuantity
  store.updateLocalStorage()
}
</script>

<style scoped>
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
</style>
