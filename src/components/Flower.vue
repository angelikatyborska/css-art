<template>
  <div class="wrapper">
    <div class="flower" :key="m" v-for="m in 7">
      <div :key="n" v-for="n in 12" class="petal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flower',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@use "sass:math";
@import "../variables.scss";

.wrapper {
  @include square-canvas-child();
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.flower {
  position: absolute;
  border-radius: 50%;
  background: white;

  @for $i from 0 through 6 {
    &:nth-child(#{$i + 1}) {
      $padding: #{15% + $i * 5%};
      top: $padding;
      right: $padding;
      bottom: $padding;
      left: $padding;
    }
  }

  &:nth-child(2n + 1) {
    .petal {
      background: black;
    }
  }

  &:nth-child(4n + 3) {
    .petal {
      background: $accent;
    }
  }

  &:nth-child(2n + 2) {
    .petal {
      background: white;
    }
  }
}

.petal {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center bottom;
  background: black;
  height: 50%;
  animation: grow;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  width: 0;

  $petals-number: 12;

  @for $i from 0 through $petals-number - 1 {
    &:nth-child(#{$i}) {
      transform: translateX(-50%) rotate(#{(math.div($i, $petals-number)) * 360deg});
    }
  }

  @keyframes grow {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }
}

</style>
