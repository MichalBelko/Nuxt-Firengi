<template>
  <div>
    <Nav />
    <div v-if="product" class="container py-2 px-0">
      <div class="hero-container">
        <img
          :src="require(`@/assets/images/${product.image}`)"
          alt=""
          class="image"
        />
        <div class="info-box">
          <h1>{{ product.title }}</h1>
          <p class="snippet">{{ product.snippet }}</p>
          <RentModal :product="product" />
        </div>
      </div>
      <div class="whats-included-container">
        <div class="included-container">
          <h6>Super Effective</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
        </div>
        <div class="included-container">
          <h6>Clean & Tidy</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
        </div>
        <div class="included-container">
          <h6>Cancel Anytime</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
        </div>
        <div class="included-container">
          <h6>Satisfaction Guaranteed</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
        </div>
      </div>
      <div class="description-container">
        <p>
          {{ product.description }}
        </p>
      </div>
      <Reviews />
    </div>
    <div v-else>
      <PageNotFound />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.hero-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.image {
  width: 20rem;
}
.hero-container > * {
  flex-basis: 50%;
}

.info-box {
  background-color: rgba(207, 201, 201, 0.322);
  padding: 2rem;
  border-radius: 0.5rem;
}
.whats-included-container {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
}
.description-container {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}
.included-container {
  margin-top: 1.5rem;
}
h1 {
  font-size: clamp(1.4rem, 1vw + 1.2rem, 2rem);
}
h6 {
  font-size: 1.15rem;
  font-weight: 400;
}
p {
  color: grey;
}
.snippet {
  color: rgba(0, 0, 0, 0.774);
  margin-top: 1rem;
}
h3 {
  font-size: clamp(1.4rem, 0.6vw + 1.3rem, 1.8rem);
}
button {
  border: none;

  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
  display: inline-block;
}
.description-container {
  margin-top: 3rem;
  color: grey;
}
.padding {
  padding: 10rem 0;
}
@media screen and (max-width: 768px) {
  * {
    text-align: center;
  }
  .hero-container > * {
    flex-basis: 100%;
  }
}
</style>
