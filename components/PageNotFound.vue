<template>
  <div class="page">
    <div class="mars"></div>
    <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
    <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
    <p class="title">Oh no!!</p>
    <p class="subtitle">
      You’re either misspelling the URL <br />
      or requesting a page that's no longer here.
    </p>
    <div align="center" class="center">
      <NuxtLink class="btn-back" to="/">Back to home page</NuxtLink>
    </div>
    <img
      src="https://assets.codepen.io/1538474/astronaut.svg"
      class="astronaut"
    />
    <img
      src="https://assets.codepen.io/1538474/spaceship.svg"
      class="spaceship"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  overflow-y: hidden;
}
nav {
  visibility: hidden;
}

@keyframes floating {
  from {
    transform: translateY(0px);
  }
  65% {
    transform: translateY(15px);
  }
  to {
    transform: translateY(0px);
  }
}
html {
  height: 100%;
  overflow-y: hidden;
}

.page {
  background-image: url("https://assets.codepen.io/1538474/star.svg"),
    linear-gradient(to bottom, #05007a, #4d007d);
  height: 100%;
  margin: 0;
  background-attachment: fixed;
  overflow: hidden;
  position: absolute;
  inset: 0;
  overflow-y: hidden;
}

.mars {
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 35vmin;
  background: url("https://assets.codepen.io/1538474/mars.svg") no-repeat bottom
    center;
  background-size: cover;
}

.logo-404 {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 16vmin;
  width: 15vmin;
}
@media (max-width: 480px) and (min-width: 320px) {
  .logo-404 {
    top: 45vmin;
  }
}

.meteor {
  position: absolute;
  right: 2vmin;
  top: 16vmin;
}

.title {
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 6vmin;
  margin-top: 30vmin;
}
@media (max-width: 480px) and (min-width: 320px) {
  .title {
    margin-top: 65vmin;
  }
}

.center {
  margin-block-start: 2rem;
}

.subtitle {
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 3vmin;
}

.btn-back {
  border: 1px solid white;
  color: white;
  padding: 12px;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  border-radius: 5px;
}
.btn-back:hover {
  background: white;
  color: #4d007d;
}
@media (max-width: 480px) and (min-width: 320px) {
  .btn-back {
    font-size: 3.5vmin;
  }
}

.astronaut {
  position: absolute;
  top: 18vmin;
  left: 10vmin;
  height: 20vmin;
  animation: floating 3s infinite ease-in-out;
}

.spaceship {
  position: absolute;
  bottom: 15vmin;
  right: 24vmin;
}
@media (max-width: 480px) and (min-width: 320px) {
  .spaceship {
    width: 45vmin;
    bottom: 18vmin;
  }
}

@media screen and (max-width: 550px) {
  .logo-404 {
    top: 45vmin;
    width: 20vmin;
  }
  .title {
    margin-top: 55vmin;
  }
}
@media screen and (max-width: 400px) {
  .logo-404 {
    top: 55vmin;
    width: 30vmin;
  }
  .title {
    margin-top: 75vmin;
  }
  .subtitle {
    font-size: 5vmin !important;
  }
  .astronaut {
    top: 30vmin;
    left: 2vmin;
    height: 29vmin;
  }
}
@media screen and (max-width: 300px) {
  .logo-404 {
    top: 45vmin;
    width: 55vmin;
  }
  .astronaut {
    top: 75vmin;
    left: 60vmin;
    height: 30vmin;
  }
  .title {
    margin-top: 105vmin;
  }
}
</style>
