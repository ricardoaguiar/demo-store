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
          <RouterLink to="/products">{{ details.type }}</RouterLink>
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

  a {
    text-decoration: none;
    color: #2c3539 !important;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }

  .is-active a {
    color: #f2be00 !important;
    pointer-events: none;
  }
}
</style>
