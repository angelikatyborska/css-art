<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Squares1',
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
    top: 50%;
    left: 50%;
    background: black;
  }

  @for $i from 0 through 9 {
    @for $j from 0 through 9 {
      &:nth-child(#{$i * 10 + $j + 1}) {
        &:before {
          $size: #{(130 - ($i + $j) * 7) * 1%};
          width: $size;
          height: $size;
          transform: translateX(-50%) translateY(-50%) rotate(#{45deg + 30deg * ($i + $j)});
        }
      }
    }
  }
}
</style>
