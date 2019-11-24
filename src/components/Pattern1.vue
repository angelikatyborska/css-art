<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Pattern1',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  width: 90vh;
  height: 90vh;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  margin: 0 auto;
  padding-top: 5vh;
}

.cell {
  position: relative;
  overflow: visible;

  $radius: 10vh;

  &:before {
    content: '';
    display: block;
    position: absolute;
    background: black;
    width: 100%;
    height: 100%;
    border-radius: $radius 0 $radius 0;
  }

  &:nth-child(3n) {
    &:before {
      border-radius: $radius 0 0 0;
    }
  }

  &:nth-child(6n) {
    &:before {
      border-radius: $radius $radius $radius 0;
    }
  }

  &:nth-child(9n) {
    &:before {
      border-radius: 0 $radius $radius $radius;
    }
  }
}
</style>
