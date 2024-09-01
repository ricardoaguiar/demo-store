<script setup lang="ts">
import { useAsset } from '@/composables'
</script>

<template>
  <div class="control is-hidden-mobile has-icons-right">
    <input class="input search-input" type="search" placeholder="Search" />
    <span class="icon is-small is-right">
      <img
        :src="useAsset('search', 'svg')"
        alt="Search"
        width="25"
        height="25"
      />
    </span>
  </div>
</template>

<style scoped>
.control {
  display: inline-flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1023px) and (min-width: 769px) {
    display: none;
  }
}

.search-input {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding-right: 2.5rem; /* Adjusted to make room for the icon */
  transition: width 0.3s ease-in-out;
  width: 12rem;
  box-shadow: none;

  &:focus {
    outline: none;
    width: 16rem;
    box-shadow: none;
  }
}

.icon.is-right {
  position: absolute;
  right: 0.5em;
  cursor: default;
  pointer-events: none;
}

.icon.is-right img {
  pointer-events: none;
}
</style>
