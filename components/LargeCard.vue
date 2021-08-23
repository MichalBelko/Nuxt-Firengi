<template>
  <NuxtLink :to="`/products/${card.id}`" class="card">
    <img
      :src="require(`../assets/images/${card.image}`)"
      alt="fe"
      class="image"
    />
    <h3 class="header">{{ card.title }}</h3>
    <p class="snippet">{{ card.snippet }}</p>
  </NuxtLink>
</template>

<script>
export default {
  props: ["card"]
};
</script>

<style scoped>
* {
  text-align: center;
}
.card {
  width: 20rem;
  height: 25rem;
  border: none;

  padding: 0;
  cursor: pointer;
  margin: 0.5rem;
}
.image {
  height: 65%;
  border-radius: 0.5rem;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}

.snippet {
  color: grey;
}
@media screen and (max-width: 350px) {
  .snippet {
    font-size: 0.8rem;
  }
}
</style>
