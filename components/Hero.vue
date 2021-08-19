<template>
  <div class="Hero container">
    <div class="text-container">
      <h1 class="header">Find your Fire Extinguisher</h1>
      <p class="snippet">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus
        nobis suscipit cumque expedita deserunt adipisci facilis odit esse
        officia!
      </p>
      <button class="button btn">Start Looking</button>
    </div>
    <img src="../assets/fire-extinguisher.svg" alt="hero" class="image" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.Hero {
  transform: scale(0.85);
  position: relative;
  display: flex;
  padding: 3rem 0;
  align-items: flex-start;
  justify-content: space-around;
  height: 100vh;
}
.text-container {
  width: 50%;
  line-height: 1.5;
}
button.button:active,
button.button:focus {
  outline: none;
  border: none;
}
.header {
  font-weight: 900;
  font-size: 5rem;
  padding-block: 1rem;
  margin-bottom: 2rem;
}
.snippet {
  color: #808080;
  font-size: 1.25rem;
}
.image {
  max-width: 27.5rem;
  margin-top: 2rem;
}
.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.button {
  padding: 1rem 4rem;
  border-radius: 5rem;
  background-color: rgb(231, 81, 43);
  color: #ffffff;
  margin-inline: auto;
  margin-top: 3rem;
  display: block;
  font-weight: 700;
  transition: 0.3s;
  letter-spacing: 1px;
  font-size: 1rem;
  transform: scale(1.2);
}
.button:hover {
  transform: scale(1.23);
}
@media (max-width: 500px) {
  .Hero {
    height: 40vh;
  }
}
</style>
