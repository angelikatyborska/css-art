<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Triangles',
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

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    background: transparent;
    border-top: calc(90vh / 20) solid white;
    border-right: calc(90vh / 20) solid white;
    border-bottom: calc(90vh / 20) solid black;
    border-left: calc(90vh / 20) solid black;
  }

  &:nth-child(3n) {
    &:before {
      border: 0;
    }
  }
}
</style>
