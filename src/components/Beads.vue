<template>
  <div class="grid">
    <div :key="n" v-for="n in 176" class="cell" />
  </div>
</template>

<script>
export default {
  name: 'Beads',
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.grid {
  @include square-canvas-child();
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(16, 1fr);
}

.cell {
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    border-radius: 50%;
    background: black;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: black;
    width: 0.01em;
  }

  &:nth-child(2n + 1) {
    &:before {
      top: unset;
      bottom: 0;
    }
  }
}
</style>
