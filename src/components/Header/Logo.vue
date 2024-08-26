<template>
  <span class="navbar-brand">
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

<style>
@media only screen and (max-width: 768px) {
  .navbar-brand {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .logo {
    width: 50px;
    height: 50px;
  }
}
</style>
