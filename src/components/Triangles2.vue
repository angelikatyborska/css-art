<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Triangles2',
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
  background: white;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    background: transparent;
    border-top: calc(60vh / 20) solid white;
    border-right: calc(60vh / 20) solid black;
    border-bottom: calc(60vh / 20) solid white;
    border-left: calc(60vh / 20) solid black;
  }

  @for $i from 0 through 9 {
    @for $j from 0 through 9 {
      &:nth-child(#{$i * 10 + $j + 1}) {
        &:before {
          transform: translateX(-50%) translateY(-50%) rotate(#{45deg + 30deg * ($i + $j)});
        }
      }
    }
  }
}
</style>
