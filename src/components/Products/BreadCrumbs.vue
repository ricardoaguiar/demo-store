<template>
  <div>
    <h1 class="title pt-3 has-text-centered">New Arrivals</h1>
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
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 20px;

  a {
    text-decoration: none !important;
    color: #2c3539 !important;
  }

  .is-active a {
    color: #f2be00 !important;
  }
}
</style>
