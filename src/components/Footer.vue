<script setup lang="ts">
import { ref, onMounted } from 'vue'

const footerData = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/data/footer.json')
    if (response.ok) {
      footerData.value = await response.json()
    } else {
      console.error('Failed to load footer data')
    }
  } catch (error) {
    console.error('Error fetching footer data:', error)
  }
})
</script>

<template>
  <footer class="footer has-background-light" v-if="footerData">
    <!-- Navigation and Links Section -->
    <div class="columns">
      <div
        v-if="footerData"
        v-for="(section, index) in footerData.footer"
        :key="index"
        class="column"
      >
        <h3 class="title is-5">{{ section.title }}</h3>
        <ul class="links-list">
          <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
            <RouterLink :to="link.url">{{ link.text }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Social Media and Contact Section -->
    <div class="columns is-vcentered">
      <div class="column is-half">
        <h3 class="title is-5">Get Social</h3>
        <div class="social-links">
          <a
            v-for="(social, i) in footerData.social"
            :key="i"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="icon is-small"
          >
            <!-- Render the social media icons using v-html to use the provided SVGs -->
            <span v-html="social.icon"></span>
          </a>
        </div>
      </div>

      <!-- Contact Information Section -->
      <div class="column is-half has-text-right">
        <p>{{ footerData.contactInfo.address }}</p>
        <p>
          Email:
          <a :href="'mailto:' + footerData.contactInfo.email">{{
            footerData.contactInfo.email
          }}</a>
        </p>
        <p>
          Phone:
          <a :href="'tel:' + footerData.contactInfo.phone">{{
            footerData.contactInfo.phone
          }}</a>
        </p>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="has-text-centered">
      <p>{{ footerData.copyright }}</p>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.links-list {
  list-style: none;
  padding-left: 0;
}

.social-links {
  display: flex;
  justify-content: flex-start;
  gap: $spacing-base;
}

.icon.is-small {
  height: auto;
}

@media (max-width: 600px) {
  .columns {
    flex-direction: column;
  }

  .column.is-half {
    text-align: center;
    margin-bottom: 1rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
