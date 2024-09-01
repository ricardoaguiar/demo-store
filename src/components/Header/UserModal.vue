<template>
  <div
    class="modal"
    :class="{ 'is-active': isModalActive }"
    @click="closeModal"
  >
    <div class="modal-background"></div>
    <div class="modal-card" @click.stop>
      <header class="modal-card-head">
        <p class="modal-card-title">User Login</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label class="label">Email address</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                Remember me
              </label>
            </div>
          </div>
          <div class="control mt-4">
            <button type="submit" class="button is-success is-fullwidth">
              Sign in
            </button>
          </div>
        </form>
      </section>
      <footer class="modal-card-foot is-justify-content-space-between">
        <a href="#" class="is-underlined">Forgot password?</a>
        <a href="#" class="is-underlined">Sign up</a>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModalActive = ref(false)

const closeModal = () => {
  isModalActive.value = false
}

const handleSubmit = () => {
  // Handle the form submission logic
  closeModal()
}
</script>

<style scoped>
.modal-card-foot a {
  margin-right: auto;
}
</style>
