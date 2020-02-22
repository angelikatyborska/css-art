<template>
  <div class="canvas">
    <div class="hex"></div>
    <div class="hex"></div>
    <div class="hex"></div>
    <div class="hex"></div>
    <div class="hex"></div>
    <div class="hex"></div>
  </div>
</template>

<script>
export default {
  name: 'Hex',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.canvas {
  @include square-canvas();
  position: relative;
  box-sizing: border-box;
}

@mixin hex($width, $color) {
  $root-three: 1.732050808;
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

.hex {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transform-origin: 50%;
  $max-size: 30vw;
  $size-step: 5vw;
  $min-animation-duration: 10s;

  &:nth-child(1) {
    @include hex($max-size, black);
    animation-name: rotate;
    animation-duration: $min-animation-duration;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:nth-child(2) {
    @include hex($max-size - 1 * $size-step, white);
  }

  &:nth-child(3) {
    @include hex($max-size - 2 * $size-step, var(--accent-color));
    animation-name: rotate;
    animation-duration: 2 * $min-animation-duration;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: reverse;
  }

  &:nth-child(4) {
    @include hex($max-size - 3 * $size-step, white);
  }

  &:nth-child(5) {
    @include hex($max-size - 4 * $size-step, black);
    animation-name: rotate;
    animation-duration: 4 * $min-animation-duration;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:nth-child(6) {
    @include hex($max-size - 5 * $size-step, white);
  }
}

@keyframes rotate {
  0% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }

  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

</style>
