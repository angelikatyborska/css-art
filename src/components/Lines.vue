<template>
  <div class="grid">
    <div :key="n" v-for="n in 441" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Lines',
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
  grid-template-columns: repeat(21, 1fr);
  grid-template-rows: repeat(21, 1fr);
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
    transform: translateX(-50%) translateY(-50%);
    background: black;
    width: 1vh;
    height: 100%;
  }

  @for $i from 0 through 20 {
    @for $j from 0 through 20 {
      &:nth-child(#{$i * 21 + $j + 1}) {
        &:before {
          transform: translateX(-50%) translateY(-50%) rotate(#{(10 - $j) * 9deg});
        }
      }
    }
  }
}
</style>
