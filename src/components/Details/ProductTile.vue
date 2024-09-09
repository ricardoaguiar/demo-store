<template>
  <div
    :class="[
      'product-detail',
      { 'product-detail__related-product': isRelatedProduct },
    ]"
  >
    <div class="is-6">
      <img class="img-fluid" :src="useAsset(item.img)" :alt="item.title" />
    </div>

    <div
      class="column is-6 is-flex is-align-items-center is-justify-content-start"
    >
      <div class="product-name info pt-0">
        <template v-if="!isRelatedProduct">
          <span class="pr-3">★★★★★</span>
          <h6 class="is-size-6" style="width: 190px">3 reviews</h6>
        </template>
        <h1 class="title is-3 is-uppercase pt-3">{{ item.title }}</h1>
        <h4 class="subtitle is-4">${{ item.price }}</h4>
        <div class="control number has-text-centered">
          <ButtonComponent
            actionType="decrement"
            :quantity="quantity"
            @quantity="updateQuantity"
            buttonClass="button decrement-button"
            buttonText="−"
          />
          <span>{{ quantity }}</span>
          <ButtonComponent
            actionType="increment"
            :quantity="quantity"
            @quantity="updateQuantity"
            buttonClass="button increment-button"
            buttonText="+"
          />
        </div>

        <ButtonComponent
          v-if="isRelatedProduct"
          buttonClass="button is-light is-large"
          buttonText="view details"
          :isRelatedProduct="true"
          :routerLink="`/details/${item.id}`"
          :item="item"
        />

        <ButtonComponent
          actionType="addToCart"
          :item="item"
          buttonClass="button add-to-cart-button"
          @cart="handleAddToCart"
          buttonText="add to cart"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Product } from '@/types'
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

const store = useMainStore()
const route = useRouter()

const { item, isRelatedProduct } = defineProps({
  item: Object,
  isRelatedProduct: Boolean,
})

const quantity = ref(1)

// Handle the quantity update event
function updateQuantity(newQuantity) {
  quantity.value = newQuantity // Update the quantity state
}

// Handle Add to Cart
function handleAddToCart(item: Product) {
  for (let i = 0; i < quantity.value; i++) {
    store.inCart(item)
    store.updateLocalStorage()
  }
}
</script>

<style scoped lang="scss">
pre {
  font-size: 14px;
}

.product-detail {
  width: 100%;
  margin: auto;
  padding: 2rem;

  outline: 1px solid red;

  @include flex($direction: row, $gap: 2rem);

  @include responsive(mobile) {
    @include flex($direction: column);
  }
}

.product-detail__related-product {
  @include flex($direction: column);
  padding: 1rem;
}

//.product-name {
//  @include responsive(mobile) {
//    @include flex($gap: 1rem);
//  }
//}

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
    margin-bottom: 30px;
  }

  .button {
    border: none;
    background: inherit;
    outline: none;

    &:active {
      background-color: lightgrey;
    }
  }
}

.add-to-cart-button {
  transition-duration: 500ms;
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
