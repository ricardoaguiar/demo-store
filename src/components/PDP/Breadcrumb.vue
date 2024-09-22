<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/products">Products</RouterLink>
        </li>
        <li>
          <RouterLink to="/products">{{ details.categoryName }}</RouterLink>
        </li>
        <li class="is-active">
          <a aria-current="page">{{ details.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types'

defineProps<{
  details: Product
}>()
</script>

<style scoped lang="scss">
.breadcrumb {
  background: inherit;
  margin-bottom: $spacing-2;
  padding-left: $spacing-1;

  a {
    text-decoration: none;
    color: $primary-color;
    font-size: $font-size-lg;

    &:hover {
      text-decoration: underline;
    }
  }

  .is-active a {
    color: $secondary-color;
    pointer-events: none;
  }
}
</style>
