<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'CirclesSquares',
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
    background: black;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 60%;
    height: 60%;
  }

  @for $i from 0 through 9 {
    @for $j from 0 through 9 {
      &:nth-child(#{$i * 10 + $j + 1}) {
        &:before {
          border-radius: #{($i + $j) * 2.8%};
        }
      }
    }
  }
}
</style>
