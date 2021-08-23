<template>
  <div>
    <Nav />
    <h1>My items</h1>
    <MyItem v-for="(item, index) in myRentals" :key="index" :item="item" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["myRentals"])
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-block: 1rem;
  font-size: clamp(2rem, 3.2vw + 1.4rem, 4rem);
}
</style>
