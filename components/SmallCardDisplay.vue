<template>
  <div class="container">
    <h3 class="header">{{ cardsSection.title }}</h3>
    <div class="card-container1">
      <SmallCard
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
::selection {
  color: white;
  background-color: #212943;
}
.container {
  padding: 2rem 0;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  border-inline: 5px solid #212943;
  width: fit-content;
  padding-inline: 20px;
  padding-block: 5px;
  text-align: center;
  margin-inline: auto;
}
.card-container1 {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
