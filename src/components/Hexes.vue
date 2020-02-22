<template>
  <div class="grid">
    <div :key="n" v-for="n in 256" class="cell">
      <div class="hex"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hexes',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

$root-three: 1.732050808;
$width: 4.5vh;
$gap: 1.25vh;

.grid {
  @include square-canvas();
  display: grid;
  grid-template-columns: repeat(16, $width);
  grid-template-rows: repeat(16, $width / $root-three);
  grid-row-gap: $gap / $root-three + ($width / (2 * $root-three));
  grid-column-gap: $gap;
  justify-content: center;
  align-content: center;
}

@mixin hex($width, $color) {
  width: $width;
  height: $width / $root-three;
  background-color: $color;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: $width / 2 solid transparent;
    border-right: $width / 2 solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: $width / (2 * $root-three) solid $color;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: $width / (2 * $root-three) solid $color;
  }
}

$max: 16;

.cell {
  position: relative;
  overflow: visible;

  @for $i from $max + 1 through 2 * $max {
    &:nth-child(#{2 * $max}n + #{$i}) {
      transform: translateX(calc(50% + #{0.5 * $gap}));
    }
  }

  &:nth-child(100) {
    .hex {
      @include hex($width, var(--accent-color));
    }
  }

  &:nth-child(200) {
    .hex {
      @include hex($width, black);
    }
  }
}

.hex {
  @include hex($width, $light-gray);
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  transform: translateX(-50%) translateY(-50%);
}
</style>
