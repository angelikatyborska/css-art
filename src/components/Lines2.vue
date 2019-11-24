<template>
  <div class="grid">
    <div :key="n" v-for="n in 441" class="cell"></div>
  </div>
</template>

<script>
export default {
  name: 'Lines2',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

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

  &:nth-child(8n) {
      &:before {
      margin-left: 15%;
    }
  }

  &:nth-child(13n + 2) {
    &:before {
      margin-left: -15%;
    }
  }

  &:nth-child(17n + 3) {
    &:before {
      background: $accent;
    }
  }
}
</style>
