<template>
  <div id="canvas-wrapper">
    <div id="canvas" class="canvas">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'square-canvas',
  created() {
    window.addEventListener('resize', this.onResize);
  },
  mounted() {
    this.wrapper = document.querySelector('#canvas-wrapper');
    this.canvas = document.querySelector('#canvas');
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  data() {
    return {
    };
  },
  methods: {
    onResize() {
      if (this.canvas && this.wrapper) {
        const wrapperBoundingRect = this.wrapper.getBoundingClientRect();
        const margin = 40;
        let size = Math.min(wrapperBoundingRect.height, wrapperBoundingRect.width);
        size -= margin;
        this.canvas.style.height = `${size}px`;
        this.canvas.style.width = `${size}px`;
        this.canvas.style.fontSize = `${size}px`; // a trick to allow border sized relative to container size
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "variables.scss";

  #canvas-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

 .canvas {
   position: absolute;
   width: 90vh;
   height: 90vh;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: white;

   @media screen and (max-width: $mobile-max-width) {
     width: 90vw !important;
     height: 90vw !important;
     font-size: 90vw !important;
     position: relative;
     top: 0;
     left: 0;
     transform: none;
     margin: 20px auto;
   }
 }
</style>
