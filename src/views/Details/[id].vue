<template>
  <div class="container py-5" style="padding-top: 70px">
    <!-- TODO dont allow accessing of the route to this page '/info' except if there is info to display -->
    <!--    <Breadcrumb :details="item.details" />-->
    <!--    <Box :item="item.details" />-->
    <!--    <Text />-->

    <div class="related-item">
      <hr />
      <h6 class="pb-4">RELATED PRODUCTS</h6>
      details
      <!--      <Card v-if="isClient" :cards="sliceItems" />-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types'
import { useMainStore } from '@/store'
import { useRoute } from 'vue-router'
import { ref, onMounted, reactive, computed } from 'vue'
const store = useMainStore()
const route = useRoute()
import Card from '@/components/Products/Card.vue'
import Breadcrumb from '@/components/Details/Breadcrumb.vue'
import Box from '@/components/Details/Box.vue'
import Text from '@/components/Details/Text.vue'

const isClient = ref(false)

interface Item {
  details: Product
  relatedItems: Product[]
}

const item: Item = reactive({
  details: {},
  relatedItems: [],
})

onMounted(() => {
  let itemId = Number(route.params.id)
  item.details = store.items[itemId]
})

const sliceItems = computed(() => {
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * store.items.length)
    item.relatedItems.push(store.items[randomIndex])
  }
  return item.relatedItems
})
</script>

<style scoped>
hr {
  width: 50px;
  border-bottom: 1px solid black;
}

.related-item {
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>
