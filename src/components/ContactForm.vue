<template>
  <section class="contact-form">
    <div class="contact-us-img"></div>
    <div class="contact-us-form is-half">
      <h1 class="title">Hello there</h1>
      <h2 class="subtitle" style="color: grey">Get in touch.</h2>
      <form>
        <div class="field">
          <div class="control">
            <label class="label" for="name">Name </label>
            <input
              id="name"
              type="text"
              class="input"
              required
              placeholder="name"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label" for="email">E-mail </label>
            <input
              id="email"
              type="email"
              class="input"
              placeholder="email"
              required
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label" for="message">Message </label>
            <textarea
              id="message"
              class="textarea"
              placeholder="message"
              rows="3"
              required
            ></textarea>
          </div>
        </div>
        <button class="button is-light" type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-form {
  min-height: 100%;
  width: 80vw;
  margin: $spacing-16;
  display: flex;
  gap: $spacing-16 $spacing-8;

  @include responsive(mobile, max) {
    flex-direction: column;
    width: 100vw;
    margin: $spacing-2 0;
    row-gap: $spacing-2;
  }
}

.contact-us-img {
  background-image: url('@/assets/img/speaker.jpg');
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 40vh;

  @include responsive(mobile, max) {
    height: 25vh;
    width: 100vw;
  }
}

.contact-us-form {
  flex: 1;

  .subtitle {
    margin-bottom: $spacing-2;
  }

  @include responsive(mobile, max) {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-2;
    padding: $spacing-base;
  }
}

.label {
  font-size: $font-size-sm;
  color: $color-black;
}

.button {
  transition-duration: 500ms;
  background-color: $color-black;
  color: $color-white;
  font-size: $font-size-lg;
  border-radius: $spacing-1;
  padding-inline: $spacing-8;
  padding-block: $spacing-2;
  border: none;
  width: 40%;

  &:hover,
  &:focus {
    background-color: inherit;
    color: black;
    border: 1px solid $color-black;
  }

  @include responsive(mobile-small, max) {
    width: 100%;
  }
}
</style>
