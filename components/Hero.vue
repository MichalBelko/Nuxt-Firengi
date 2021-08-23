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
  align-items: center;
  justify-content: space-around;
  padding-block: 5rem;
  flex-wrap: wrap-reverse;
}
.Hero > * {
  width: 50%;
}
.text-container {
  line-height: 1.6;
}
button.button:active,
button.button:focus {
  outline: none;
  border: none;
}
.header {
  font-weight: 900;
  font-size: clamp(2rem, 4.8vw + 1.1rem, 5rem);
  padding-block: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}
.snippet {
  color: #808080;
  font-size: clamp(1rem, 0.4vw + 0.9rem, 1.25rem);
}
.image {
  max-width: 35%;
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
@media screen and (max-width: 800px) {
  .Hero > * {
    flex-basis: 100%;
  }
  .Hero {
    padding: 0;
  }
  .text-container {
    text-align: center;
  }
  .button {
    padding: 1rem 2rem;
  }
}
</style>
