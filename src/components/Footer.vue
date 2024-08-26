<template>
  <footer class="grid footer has-background-light">
    <div class="grid links">
      <div v-for="(section, index) in footerData.sections" :key="index">
        <h3 class="title is-5">{{ section.title }}</h3>
        <ul class="links-list">
          <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
            <RouterLink :to="link.url">{{ link.text }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid social-copyright">
      <div class="social">
        <h3 class="title is-5">Get Social</h3>
        <div class="flex social-links">
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
      <div class="copyright">
        <p>{{ footerData.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FooterData } from '@/types'
import footerDataJson from '@data/footer.json'
const footerData = footerDataJson as FooterData
</script>

<style scoped>
.footer {
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.footer > .links {
  grid-column: span 3; /* Spans three columns */
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.footer > .social-copyright {
  grid-template-columns: 1fr 1fr;
  grid-column: span 2;
  gap: 20px;
  align-items: end;
}

.footer > .social-copyright > .social {
  text-align: left;

  .title {
    margin-bottom: 0.75rem;
  }
}

.social-links {
  flex-direction: row;
  justify-content: left;
  gap: 2rem;
}

.icon.is-small {
  height: auto;
}

.footer > .social-copyright > .copyright {
  text-align: right;
}

@media (max-width: 600px) {
  .footer > .links {
    grid-template-columns: 1fr; /* Stacks links vertically on small screens */
  }

  .footer > .social-copyright {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer > .social-copyright > .social,
  .footer > .social-copyright > .copyright {
    text-align: center;
  }

  .social-links {
    justify-content: center;
    padding-bottom: 1rem;
  }
}
</style>
