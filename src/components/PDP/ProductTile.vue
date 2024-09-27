<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store'
import { useAsset } from '@/composables'
import type { Product } from '@/types'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

const quantity = ref(1)

const store = useMainStore()
const router = useRouter()

defineProps<{
  product: Product
  isRelatedProduct?: boolean
}>()

function updateQuantity(newQuantity: number): void {
  quantity.value = newQuantity
}

function handleClick(actionType: string, product?: Product): void {
  switch (actionType) {
    case 'increment':
      if (quantity.value < 9) {
        updateQuantity(quantity.value + 1)
      }
      break

    case 'decrement':
      if (quantity.value > 1) {
        updateQuantity(quantity.value - 1)
      }
      break

    case 'addToCart':
      if (product) {
        for (let i = 0; i < quantity.value; i++) {
          store.inCart(product)
          store.updateLocalStorage()
        }
        store.toggleCart()
      }
      break

    case 'navigateToProduct':
      if (product) {
        router.push(`/details/${product?.id}`).then(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      }
      break
  }
}
</script>

<template>
  <div
    :class="[
      isRelatedProduct ? 'product-detail__related-product' : 'product-detail',
    ]"
  >
    <ButtonComponent
      buttonClass="view-item-button"
      :isRelatedProduct="true"
      @click="handleClick('navigateToProduct', product)"
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
        <h6 class="is-size-6 title-reviews">
          <span class="pr-3">{{ product?.stars }}</span>
          {{ product?.reviews }} reviews
        </h6>
        <p>{{ product?.description }}</p>
      </template>

      <h1 class="title" v-if="isRelatedProduct">{{ product?.title }}</h1>
      <h3 class="price">${{ product?.price }}</h3>

      <div class="flex counter-container has-text-centered">
        <div class="counter-container-buttons">
          <ButtonComponent
            actionType="decrement"
            :quantity="quantity"
            @click="handleClick('decrement')"
            buttonClass="button update-quantity"
            buttonText="−"
          />
          <span class="quantity">{{ quantity }}</span>
          <ButtonComponent
            actionType="increment"
            :quantity="quantity"
            @click="handleClick('increment')"
            buttonClass="button update-quantity"
            buttonText="+"
          />
        </div>
        <ButtonComponent
          actionType="addToCart"
          buttonClass="button add-to-cart-button"
          @click="handleClick('addToCart', product)"
          buttonText="add to cart"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-reviews {
  width: fit-content;
}

.view-item-button {
  padding-inline: $spacing-base;
  background: $color-white;
  flex: 100%;
  border: none;
}

.counter-container {
  @include flex(
    $direction: row,
    $justifyContent: center,
    $alignItems: center,
    $gap: $spacing-base
  );

  @include responsive(mobile) {
    flex-direction: row;
  }
}

.counter-container-buttons {
  @include flex(
    $direction: row,
    $justifyContent: center,
    $alignItems: center,
    $gap: $spacing-1
  );
}

.update-quantity {
  border: 1px solid $color-black;
  outline: none;
  padding-bottom: 0.2rem;
  height: 33px;
}

.quantity {
  font-weight: bolder;
  padding: $spacing-1 $spacing-2;
  width: 3.2ch;
  background-color: rgba(0, 0, 0, 0.05);
  border: 0.75px solid rgba(0, 0, 0, 0.07);
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
    $gap: $spacing-2,
    $alignItems: flex-start,
    $justifyContent: center
  );

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
  @include responsive(mobile) {
    @include flex($direction: column);

    width: fit-content;
  }

  .product-info {
    @include responsive(mobile, max) {
      padding: $spacing-base;
    }
    @include responsive(tablet-min, min) {
      padding: $spacing-8;
    }
  }
}

.product-detail__related-product {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  @include flex($direction: column, $alignItems: center);

  .product-info {
    align-items: center;
    margin: 0 0 1rem 0;
  }
  .counter-container {
    flex-direction: column;
    gap: $spacing-2;
  }
}

.img-fluid {
  width: 100%;
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
  background-color: $color-black;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  line-height: $line-height-xl;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: inherit;
    color: black;
    outline: 1px solid $color-black;
  }
}
</style>
