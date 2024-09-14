<template>
  <section class="breadcrumb">
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="is-active">
          <a aria-current="page">Products</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped lang="scss">
.breadcrumb {
  display: grid;
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 20px;
  text-transform: capitalize;

  a {
    text-decoration: none !important;
    color: #2c3539 !important;
    text-transform: capitalize;
  }

  .is-active a {
    color: #f2be00 !important;
    text-transform: capitalize;
  }
}
.product-title {
  outline: 1px solid red;
  @include responsive(mobile) {
    font-size: 30px !important;
  }
}
</style>
