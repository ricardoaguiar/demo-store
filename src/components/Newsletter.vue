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
                class="input"
                type="email"
                placeholder="Your E-mail"
                required
              />
              <button class="submit-button is-dark input-button">Submit</button>
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
  background-color: $light-blue;
  padding: $spacing-16;

  @include responsive(mobile, max) {
    padding: $spacing-12 $spacing-base;
  }
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
    gap: $spacing-base;

    @include responsive(mobile, max) {
      flex-direction: column;
      .input-button {
        padding-block: $spacing-2;
      }
    }

    input {
      @include prevent-ios-zoom($font-size-base);

      outline: none;
      background: $color-white;

      &:focus,
      &:active {
        outline: none;
      }
    }

    .input-button {
      transition-duration: 500ms;
      background-color: $color-black;
      color: $color-white;
      font-size: $font-size-lg;
      border-radius: $spacing-1;
      padding-inline: $spacing-8;

      border: none;

      &:hover,
      &:focus {
        background-color: inherit;
        color: black;
        border: 1px solid $color-black;
      }
    }
  }
}
</style>
