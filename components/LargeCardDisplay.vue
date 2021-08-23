<template>
  <div class="container">
    <h4>{{ cardsSection.title }}</h4>
    <p class="snippet">
      {{ cardsSection.snippet }}
    </p>
    <div class="cards-container">
      <LargeCard
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"]
};
</script>

<style scoped>
h4 {
  border-inline: 5px solid #212943;
  border-inline: 5px solid #212943;
  width: fit-content;
  padding-inline: 20px;
  padding-block: 5px;
  margin-inline: auto;
  text-align: center;
}
.container {
  margin-top: 2rem;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
}
.snippet {
  color: #808080;
  margin-bottom: 1.5rem;
  text-align: center;
}
.cards-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
