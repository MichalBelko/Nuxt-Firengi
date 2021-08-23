<template>
  <div class="review-card">
    <div class="image-container">
      <img :src="review.picture.large" alt="" />
    </div>
    <div class="text-container">
      <h6>{{ review.login.username }}</h6>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        quam magni beatae possimus debitis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["review"]
};
</script>

<style scoped>
.review-card {
  margin-top: 1.5rem;
  align-items: center;
  display: flex;
  gap: 2rem;
}

img {
  border-radius: 100%;
}
p {
  color: grey;
  margin-bottom: 0;
  font-size: clamp(0.8rem, 0.5vw + 0.7rem, 1.1rem);
}
.container {
  padding-inline: 0 !important;
}
</style>
