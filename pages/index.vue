<template>
  <div>
    <Nav />
    <Hero />
    <LargeCardDisplay
      v-for="(cardInfo, index) in largeCardInfo"
      :key="cardInfo.Id"
      :cardsSection="cardInfo"
    />
    <SmallCardDisplay
      v-for="(cardInfo, index) in smallCardInfo"
      :key="index"
      :cardsSection="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections } from "../assets/data";
import { smallCardSections } from "../assets/data";

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
::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
}
::-webkit-scrollbar-thumb {
  background-color: #212943;
}
body {
  min-height: 100vh;
}
</style>
