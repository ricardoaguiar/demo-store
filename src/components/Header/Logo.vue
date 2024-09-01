<template>
  <span class="navbar-item">
    <img
      src="/src/assets/img/fi-logo.svg"
      width="40"
      height="40"
      alt="site-logo"
      title="site-logo"
      class="logo"
    />
  </span>
</template>

<style scoped>
/* Responsive adjustments */
@media only screen and (max-width: 768px) {
  .navbar-item {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo {
    width: 50px;
    height: 50px;
  }
}
</style>
