<template>
  <div class="container">
    <div class="item-container">
      <img :src="require(`@/assets/images/${item.image}`)" alt="" />
      <div class="text-container">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 2rem 0;
  height: 40vmin;
}
.item-container > * {
  flex-basis: 50%;
}
.text-container {
  padding: 0 1rem;
  overflow: auto;
}
img {
  width: 17.5rem;
  border-radius: 0.5rem;
  height: auto;
  object-fit: cover;
}
p {
  font-size: 0.8rem;
  color: grey;
}
h4 {
  font-size: clamp(1.3rem, 0.5vw + 1.2rem, 1.6rem);
}
@media screen and (max-width: 550px) {
  .item-container {
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: 2px solid darkblue;
  }
  .text-container {
    text-align: center;
  }
}
</style>
