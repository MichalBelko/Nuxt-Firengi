<template>
  <NuxtLink :to="`/products/${card.id}`" class="card-container2">
    <img
      :src="require(`../assets/images/${card.image}`)"
      alt="card"
      class="image"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: ["card"]
};
</script>

<style scoped>
::selection {
  color: white;
  background-color: #212943;
}
a:hover {
  text-decoration: none;
}
.card-container2 {
  width: 20rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.5rem;
  cursor: pointer;
}
.image {
  width: 100%;
  height: 100%;
}
</style>
