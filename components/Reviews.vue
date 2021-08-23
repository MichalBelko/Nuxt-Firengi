<template>
  <div>
    <h3>Customer Reviews</h3>
    <div v-if="!$fetchState.pending">
      <ReviewCard
        v-for="reviewer in reviewers.results"
        :key="reviewer.login.uuid"
        :review="reviewer"
      />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewers: []
    };
  },
  async fetch() {
    this.reviewers = await fetch(
      "https://randomuser.me/api/?results=5"
    ).then(res => res.json());
  }
};
</script>

<style scoped>
h3 {
  font-size: clamp(1.4rem, 0.6vw + 1.3rem, 1.8rem);
}
</style>
