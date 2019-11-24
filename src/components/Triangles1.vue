<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Triangles1',
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
