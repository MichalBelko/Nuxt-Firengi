<template>
  <nav>
    <div class="wrapper">
      <NuxtLink to="/">Firengii</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/my-items">My items</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  position: sticky;
  height: auto;
  top: 0;
  z-index: 2;
  background-color: rgba(2, 11, 41, 0.874);
  color: #fff;
  padding-block: 1.5rem;
  padding-inline: 1rem;
}
nav a {
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  margin-inline: 1rem;
  text-decoration: none;
  font-size: 1.2rem;
}
nav a:hover {
  text-decoration: underline;
  text-decoration-thickness: 10px;
  text-decoration-skip-ink: none;
  text-decoration-color: rgba(48, 86, 211, 0.658);
  text-underline-offset: -10px;
}
.wrapper a:nth-of-type(2) {
  margin-left: auto;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
