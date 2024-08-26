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
}

.search-input {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding-right: 30px;
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
  right: 0.5em;
  cursor: default;
}

.icon.is-right img {
  pointer-events: none;
}

.control.has-icons-right .icon.is-right {
  position: absolute;
  pointer-events: none;
}
</style>
