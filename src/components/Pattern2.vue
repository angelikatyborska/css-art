<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Pattern2',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.grid {
  @include square-canvas();
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.cell {
  position: relative;
  overflow: visible;

  $radius: 10vh;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: $radius;
    background: black;
  }

  &:nth-child(2n) {
    &:before {
      border-radius: 0 0 0 0;
    }
  }

  &:nth-child(3n) {
    &:before {
      border-radius: $radius 0 $radius 0;
    }
  }
}
</style>
