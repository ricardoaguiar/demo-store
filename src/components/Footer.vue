<script setup lang="ts">
import footerDataJson from '@data/footer.json'

const footerData = footerDataJson
</script>

<template>
  <footer class="footer has-background-light">
    <div class="columns">
      <div
        v-for="(section, index) in footerData.sections"
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
            <span v-html="social.icon"></span>
          </a>
        </div>
      </div>
      <div class="column is-half has-text-right">
        <p>{{ footerData.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.links-list {
  list-style: none;
  padding-left: 0;
}

.social-links {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
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
