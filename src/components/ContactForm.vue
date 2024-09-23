<template>
  <section>
    <div class="container py-5">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <img
            class="image"
            src="@/assets/img/speaker.jpg"
            alt="speaker"
            title="speaker"
          />
        </div>
        <div class="column is-half">
          <h1 class="title">Hello there</h1>
          <h2 class="subtitle" style="color: grey">
            Got a thought to discuss?
          </h2>
          <form>
            <div class="field">
              <div class="control">
                <input id="name" type="text" class="input" required />
                <label class="label" for="name">Name</label>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input id="email" type="email" class="input" required />
                <label class="label" for="email">E-mail</label>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea
                  id="message"
                  class="textarea"
                  rows="3"
                  required
                ></textarea>
                <label class="label" for="message">Message</label>
              </div>
            </div>
            <button class="button is-light" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
form {
  padding: 50px 0;
}

.field {
  //margin-bottom: 2rem;
  //position: relative;
}

.label {
  //font-weight: 100;
  //font-size: 1.5rem;
  //color: grey;
  //position: absolute;
  //transition: 0.5s ease-in-out;
  //top: 10px;
  //left: 10px;
  //z-index: 0;
  //pointer-events: none;
}

.input,
.textarea {
  //font-size: 1.4rem;
  //font-weight: 100;
  //background-color: transparent;
  //border: 1px solid #555;
  //transition: all 0.5s;
  //border-radius: 0;
}

.input:focus,
.input:valid,
.textarea:focus,
.textarea:valid {
  //border-color: #71acd6;
}

.input:focus ~ .label,
.input:valid ~ .label,
.textarea:focus ~ .label,
.textarea:valid ~ .label {
  //color: #71acd6;
  //font-size: 1rem;
  //top: -10px;
  //left: 0;
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

  &:hover,
  &:focus {
    background-color: inherit;
    color: black;
    border: 1px solid $color-black;
  }
}
</style>
