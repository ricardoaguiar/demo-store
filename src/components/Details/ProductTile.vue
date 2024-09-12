<template>
  <div
    :class="[
      'product-detail',
      { 'product-detail__related-product': isRelatedProduct },
    ]"
  >
    <div class="is-6">
      <img class="img-fluid" :src="useAsset(item?.img)" :alt="item?.title" />
    </div>

    <div class="grid product-info">
      <template v-if="!isRelatedProduct">
        <span class="pr-3">★★★★★</span>
        <h6 class="is-size-6" style="width: 190px">3 reviews</h6>
      </template>

      <h1 class="title">{{ item?.title }}</h1>
      <h3 class="price">${{ item?.price }}</h3>

      <div class="flex counter-container has-text-centered">
        <ButtonComponent
          actionType="decrement"
          :quantity="quantity"
          @quantity="updateQuantity"
          buttonClass="button update-quantity"
          buttonText="−"
        />
        <span class="quantity">{{ quantity }}</span>
        <ButtonComponent
          actionType="increment"
          :quantity="quantity"
          @quantity="updateQuantity"
          buttonClass="button update-quantity"
          buttonText="+"
        />
      </div>

      <ButtonComponent
        v-if="isRelatedProduct"
        buttonClass="button"
        buttonText="view details"
        :isRelatedProduct="true"
        @click="navigateToProduct"
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Product } from '@/types'
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import router from '@/router'

const store = useMainStore()
const route = useRouter()

const { item, isRelatedProduct } = defineProps({
  item: Object,
  isRelatedProduct: Boolean,
})

const quantity = ref(1)

// Handle the quantity update event
function updateQuantity(newQuantity: number): void {
  quantity.value = newQuantity // Update the quantity state
}

// Handle Add to Cart
function handleAddToCart(item: Product) {
  for (let i = 0; i < quantity.value; i++) {
    store.inCart(item)
    store.updateLocalStorage()
  }
}

function navigateToProduct() {
  router.push(`/details/${item?.id}`).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
</script>

<style scoped lang="scss">
.counter-container {
  gap: 0.25rem;
  align-items: center;
  justify-content: center;

  &:deep(button) {
    line-height: 2;
  }
}
.quantity {
  font-weight: bolder;
  padding: 0.25rem 0.5rem;
}

.update-quantity {
  border-radius: 0;
  border: none;
  outline: none;
}

.title {
  margin: 0.5rem 0 0;
  font-size: 1.8rem;

  @include responsive(mobile) {
    font-size: 1.25rem;
    margin: 0;
  }
}

.price {
  font-size: 1.2rem;
  font-weight: bolder;
}

.product-info {
  grid-template-columns: 1fr;
  width: 100%;
  gap: 0.75rem;

  @include responsive(retina) {
    gap: 0.75rem;
  }
}

.product-detail {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 100%;
  margin: auto;

  @include flex($direction: row, $gap: 2rem);
  @include responsive(mobile) {
    @include flex($direction: column);
  }
}

.product-detail__related-product {
  @include flex($direction: column);
  padding: 0 1rem 1rem;
}

.img-fluid {
  width: 100%;
  //box-shadow:
  //  0 4px 8px rgba(0, 0, 0, 0.2),
  //  0 6px 20px rgba(0, 0, 0, 0.19);
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
