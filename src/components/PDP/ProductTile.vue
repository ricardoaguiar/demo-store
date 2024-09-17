<template>
  <div
    :class="[
      isRelatedProduct ? 'product-detail__related-product' : 'product-detail',
    ]"
  >
    <ButtonComponent
      buttonClass="view-item-button"
      :isRelatedProduct="true"
      @click="navigateToProduct"
      :product="product"
      :style="{ cursor: !isRelatedProduct ? 'auto' : '' }"
    >
      <img
        class="img-fluid"
        :src="useAsset(product?.img)"
        :alt="product?.title"
      />
    </ButtonComponent>

    <div class="product-info">
      <template v-if="!isRelatedProduct">
        <h1 class="title">{{ product?.title }}</h1>
        <h6 class="is-size-6" style="width: 190px">
          <span class="pr-3">{{ product.stars }}</span>
          {{ product.reviews }} reviews
        </h6>
        <p>{{ product.description }}</p>
      </template>

      <h1 class="title" v-if="isRelatedProduct">{{ product?.title }}</h1>
      <h3 class="price">${{ product?.price }}</h3>

      <div class="flex counter-container has-text-centered">
        <div>
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
          actionType="addToCart"
          :product="product"
          buttonClass="button add-to-cart-button"
          @cart="handleAddToCart"
          @click="toggleCart"
          buttonText="add to cart"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '@/types'
import { useMainStore } from '@/store'
import { useAsset, useCart } from '@/composables'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const store = useMainStore()
const { toggleCart } = useCart()
const router = useRouter()

const { product, isRelatedProduct } = defineProps({
  product: Object,
  isRelatedProduct: Boolean,
})

const quantity = ref(1)

// Handle the quantity update event
function updateQuantity(newQuantity: number): void {
  quantity.value = newQuantity // Update the quantity state
}

// Handle Add to Cart
function handleAddToCart(product: Product) {
  for (let i = 0; i < quantity.value; i++) {
    store.inCart(product)
    store.updateLocalStorage()
  }
}

function navigateToProduct() {
  store.resetFilters()
  router.push(`/details/${product?.id}`).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
</script>

<style scoped lang="scss">
.view-item-button {
  background: #ffffff;
  @include space(padding-inline, $half-spacing, $base-spacing);
  flex: 100%;
}

.counter-container {
  gap: 1rem;
  align-items: center;
  justify-content: center;
  @include flex($direction: row);

  @include responsive(mobile) {
    flex-direction: row;
  }

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
  width: 100%;
  gap: 0.75rem;

  @include flex(
    $direction: column,
    $gap: $half-spacing,
    $align: flex-start,
    $justify: center
  );
  @include space(margin-right, $one-and-half-spacing, $base-spacing);

  @include responsive(mobile) {
    gap: 0.75rem;
  }
}

.product-detail {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 100%;
  margin: auto;

  @include flex($direction: row, $gap: 2rem);
  @include space(margin-block, $one-spacing, $base-spacing);
  @include responsive(mobile) {
    @include flex($direction: column);

    width: fit-content;
  }

  .product-info {
    @include responsive(mobile) {
      @include space(padding, $double-spacing, $base-spacing);
    }
    @include responsive(tablet) {
      @include space(padding, $one-and-half-spacing, $base-spacing);
    }
  }
}

.product-detail__related-product {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  @include flex($direction: column, $align: center);
  @include space(margin-block, 0, 0);

  .product-info {
    align-items: center;
    margin: 0 0 1rem 0;
  }
  .counter-container {
    flex-direction: column;
    gap: $quarter-spacing;
  }
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
  //box-shadow:
  //  0 26px 38px rgba(0, 0, 0, 0.2),
  //  0 6px 20px rgba(0, 0, 0, 0.19);
  border-radius: 2px;

  &:hover,
  &:focus {
    background-color: inherit;
    color: black;
  }
}
</style>
