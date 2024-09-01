<template>
  <div>
    <div class="columns is-variable is-5 mb-5">
      <div class="column is-6">
        <img class="img-fluid" :src="item.img" :alt="item.title" />
      </div>

      <div
        class="column is-6 is-flex is-align-items-center is-justify-content-start"
      >
        <div class="info pt-0">
          <span class="pr-3">★★★★★</span>
          <h6 class="is-size-6" style="width: 190px">3 reviews</h6>
          <h1 class="title is-3 is-uppercase pt-3">{{ item.title }}</h1>
          <h4 class="subtitle is-4">${{ item.price }}</h4>
          <br /><br /><br />
          <div class="control number has-text-centered">
            <button
              class="button decrement-button"
              @click="decrement"
              style="border-right: 0.2px solid lightgrey; margin-right: 11px"
            >
              −
            </button>
            <span>{{ quantity }}</span>
            <button
              class="button increment-button"
              @click="increment"
              style="border-left: 0.2px solid lightgrey; margin-left: 16px"
            >
              +
            </button>
            <br /><br />
          </div>
          <button class="button add-to-cart-button" @click="addToCart(item)">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Product } from '@/types'
import { useMainStore } from '@/store'

const store = useMainStore()

defineProps<{
  item: Product
}>()

const quantity = ref(1)

const increment = () => (quantity.value < 9 ? quantity.value++ : 0)
const decrement = () => (quantity.value > 1 ? quantity.value-- : 0)

function addToCart(item: Product) {
  for (let i = 0; i < quantity.value; i++) {
    store.inCart(item)
  }
}
</script>

<style scoped lang="scss">
.img-fluid {
  width: 100%;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 6px 20px rgba(0, 0, 0, 0.19);
}

.control {
  .number {
    border: 0.2px solid lightgrey;
    font-size: 19px;
    font-weight: bold;
    height: 35px;
    width: 155px;
    margin-bottom: 30px;
  }

  .button {
    border: none;
    background: inherit;
    width: 56px;
    height: 35px;
    outline: none;

    &:active {
      background-color: lightgrey;
    }
  }
}

.add-to-cart-button {
  transition-duration: 500ms;
  width: 155px;
  height: 70px;
  background-color: #2c3539;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  border: none;
  box-shadow:
    0 26px 38px rgba(0, 0, 0, 0.2),
    0 6px 20px rgba(0, 0, 0, 0.19);

  &:hover,
  &:focus {
    background-color: inherit;
    color: black;
  }
}
</style>
