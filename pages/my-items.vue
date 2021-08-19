<template>
  <div>
    <Nav />
    <h1>My items</h1>
    <MyItem v-for="item in myRentals" :key="item.id" :item="item" />
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
}
</style>
