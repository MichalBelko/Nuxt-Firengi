<template>
  <div>
    <Nav />
    <div class="container">
      <LargeCardDisplay
        v-for="(cardInfo, index) in largeCardInfo.slice(0, 1)"
        :key="index"
        :cardsSection="cardInfo"
      />
      <SmallCardDisplay
        v-for="(cardInfo, index) in smallCardInfo"
        :key="cardInfo.Id"
        :cardsSection="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js";
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    };
  }
};
</script>

<style>
::selection {
  color: white;
  background-color: #212943;
}
img {
  object-fit: cover;
}
a:hover {
  text-decoration: none;
}
</style>
