<template>
  <div class="grid">
    <div :key="n" v-for="n in 121" class="cell" />
  </div>
</template>

<script>
export default {
  name: 'Pattern4-2',
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.grid {
  @include square-canvas-child();
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
}

.cell {
  position: relative;
  overflow: visible;

  $radius: 0.1em;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0 0 0 0;
    background: black;
  }

  &:nth-child(4n + 1) {
    &:before {
      border-radius: $radius 0 $radius 0;
    }
  }

  &:nth-child(4n + 2) {
    &:before {
      border-radius: 0 $radius 0 $radius;
    }
  }

  &:nth-child(4n + 3) {
    &:before {
      border-radius: 0 $radius 0 $radius;
    }
  }

  &:nth-child(4n + 4) {
    &:before {
      border-radius: $radius 0 $radius 0;
      animation-name: morph;
      animation-fill-mode: both;
      animation-duration: 8s;
      animation-iteration-count: infinite;
    }
  }

  @keyframes morph {
    $half-hold-time: 8%;

    #{0% + $half-hold-time} {
      border-radius: $radius 0 $radius 0;
    }

    #{25% - $half-hold-time} {
      border-radius: $radius $radius $radius $radius;
    }

    #{25% + $half-hold-time} {
      border-radius: $radius $radius $radius $radius;
    }

    #{50% - $half-hold-time} {
      border-radius: 0 $radius 0 $radius;
    }

    #{50% + $half-hold-time} {
      border-radius: 0 $radius 0 $radius;
    }

    #{75% - $half-hold-time} {
      border-radius: $radius $radius $radius $radius;
    }

    #{75% + $half-hold-time} {
      border-radius: $radius $radius $radius $radius;
    }

    #{100% - $half-hold-time} {
      border-radius: $radius 0 $radius 0;
    }
  }
}
</style>
