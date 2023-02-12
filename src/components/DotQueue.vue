<template>
  <div class="grid">
    <div :key="n" v-for="n in 11" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Dot Queue',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@use "sass:math";
@import "../variables.scss";

// both must be odd
$rows: 11;

.grid {
  @include square-canvas-child();
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat($rows, 1fr);
  overflow: hidden;
  background-color: $light-gray;
}

.cell {
  $dot-size: 50%;
  position: relative;
  overflow: visible;
  background-color: $light-gray;
  background-image: radial-gradient(black $dot-size * math.div(math.sqrt(2), 2), transparent $dot-size * math.div(math.sqrt(2), 2));
  background-position: 0 0;
  background-size: math.div(100%, $rows) 100%;
  background-repeat: repeat-x;

  @for $i from 0 through $rows {
    $start-pos: 0;
    $end-pos: -2 * math.div(50%, $rows - 1);

    // 0 / 50
    // -25 / 25

    @if $i % 2 == 1 {
      $start-pos: -1 * math.div(50%, $rows - 1);
      $end-pos: math.div(50%, $rows - 1);
    }

    @keyframes anim-#{$i} {
      0% {
        background-position-x: $start-pos;
      }

      #{($i) * math.div(100%, $rows + 1)} {
        background-position-x: $start-pos;
      }

      #{0.01% + $i * math.div(100%, $rows + 1)} {
        background-position-x: $start-pos;
      }

      #{($i + 1) * math.div(100%, $rows + 1)} {
        background-position-x: $end-pos;
      }

      #{0.01% + ($i + 1) * math.div(100%, $rows + 1)} {
        background-position-x: $end-pos;
      }

      100% {
        background-position-x: $end-pos;
      }
    }

    &:nth-child(#{$i}) {
      background-position: $start-pos 0;
      animation-name: anim-#{$i};
      animation-duration: $rows * 2s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: normal;
    }
  }
}
</style>
