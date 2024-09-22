<template>
  <span class="logo">
    <img
      src="/src/assets/img/fi-logo.svg"
      width="40"
      height="40"
      alt="site-logo"
      title="site-logo"
    />
  </span>
</template>

<style scoped lang="scss">
.logo {
  @include responsive(mobile, max) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  & {
    display: flex;
    width: 2rem;
    height: 2rem;
  }
}
</style>
