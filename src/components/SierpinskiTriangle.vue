<template>
  <div class="wrapper">
    <div class="triangle-wrapper">
      <div class="triangle">
        <div :key="n" v-for="n in 3" class="triangle">
          <div :key="n" v-for="n in 3" class="triangle">
            <div :key="n" v-for="n in 3" class="triangle">
              <div :key="n" v-for="n in 3" class="triangle">
                <div :key="n" v-for="n in 3" class="triangle">
                  <div :key="n" v-for="n in 3" class="triangle">
                    <div :key="n" v-for="n in 3" class="triangle">
                      <div :key="n" v-for="n in 3" class="triangle">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SierpinskiTriangle',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.wrapper {
  @include square-canvas-child();
  position: relative;
  box-sizing: border-box;
}

@mixin triangle($a, $color) {
  $b: $a * 1.73205080757 / 2;
  width: 0;
  border-top: 0 solid transparent;
  border-right: $a / 2 solid transparent;
  border-bottom: $b solid $color;
  border-left: $a / 2 solid transparent;
}

.triangle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.triangle .triangle {
  top: 0;

  &:nth-child(1) {
    transform: translateX(-50%);
  }

  &:nth-child(2) {
    transform: translateX(-100%) translateY(100%);
  }

  &:nth-child(3) {
    transform: translateY(100%);
  }
}

$max-size: 0.9em;
$levels: 9;

@for $i from 1 through $levels {
  $selector: '';
  $x: 1;

  @for $j from 1 through $i {
    $selector: '.triangle #{$selector}';
    $x: $x * 2;
  }

  $color: white;

  @if $i == $levels {
    $color: black;
  }

  #{$selector} {
    @include triangle($max-size * 2 / $x, $color);
  }
}
</style>
