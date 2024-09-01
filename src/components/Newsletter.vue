<template>
  <section class="newsletter-area">
    <div class="container">
      <div class="columns is-justify-content-space-between">
        <!-- Newsletter Text -->
        <div class="column is-full-mobile is-two-thirds-desktop">
          <div class="newsletter-text">
            <h2 class="title is-3">Join our Newsletter</h2>
            <p>Nulla ac convallis lorem, eget euismod nisl. bibendum nec.</p>
          </div>
        </div>

        <!-- Newsletter Form -->
        <div class="column is-full-mobile is-one-third-desktop">
          <div class="newsletter-form">
            <form @submit.prevent="submit">
              <input
                class="input nl-email"
                type="email"
                placeholder="Your E-mail"
                required
              />
              <button class="button is-dark input-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function submit(): void {
  alert('Thank you for subscribing')
}
</script>

<style scoped lang="scss">
.newsletter-area {
  background-color: #dbf0fa;
  padding: 75px;
}

.newsletter-text {
  h2 {
    color: #2c3539;
    margin-bottom: 10px;
  }

  p {
    color: #2c3539;
    margin-bottom: 0;
  }
}

.newsletter-form {
  form {
    display: flex;
    gap: 1rem;

    .nl-email {
      flex-grow: 1;
      background-color: inherit !important;
      color: #2c3539;
      font-size: 20px;
      font-style: italic;
      border: none;
      outline: none;
      border-bottom: 2px solid #2c3539;
      padding: 0 15px;
    }

    .input-button {
      transition-duration: 500ms;
      background-color: #2c3539;
      color: #fff;
      font-size: 18px;
      box-shadow:
        0 8px 6px 0 rgba(0, 0, 0, 0.1),
        0 16px 70px 0 rgba(0, 0, 0, 0.69);
      border: none;

      &:hover,
      &:focus {
        background-color: inherit;
        color: black;
      }
    }
  }
}
</style>
