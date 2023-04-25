<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HundredGradients',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

$sqrt2: 1.41421356;

.grid {
  @include square-canvas-child();
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.cell {
  position: relative;
  overflow: visible;
  background-color: white;
  background-position: center;
  border: 2px solid $light-gray;
  border-collapse: collapse;
}

$size: 16px;

@mixin stripes_horizontal() {
  background-image: linear-gradient(to bottom, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%);
  background-size: $size $size;
}

@mixin stripes_vertical() {
  background-image: linear-gradient(to right, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%);
  background-size: $size $size;
}

@mixin stripes_diagonal_north_west() {
  background-image: linear-gradient(45deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%), linear-gradient(45deg, black 12.5%, transparent 12.5%), linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

//@mixin stripes_diagonal_north_east() {
//  background-image: linear-gradient(45deg, transparent 33.33%, black 33.33%, black 66.66%, transparent 66.66%), linear-gradient(45deg, black 16.66%, transparent 16.66%), linear-gradient(45deg, transparent 83.26%, black 83.26%);
//  background-size: $size $size, $size $size, $size $size;
//}

@mixin stripes_diagonal_north_east() {
  background-image: linear-gradient(135deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%), linear-gradient(135deg, black 12.5%, transparent 12.5%), linear-gradient(135deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

// accidental creation when attempting to do stripes_diagonal_south_west
@mixin triangle_right_angle_north_west() {
  background-image: linear-gradient(135deg, black 25%, white 25%);
  background-size: $size $size;
}

// accidental creation when attempting to do stripes_diagonal_north_east
@mixin bowties_diagonal() {
  background-image: linear-gradient(135deg, white 25%, black 25%, black 75%, white 75%);
  background-size: $size $size;
}

// accidental creation when attempting to change bowties_diagonal
@mixin zig_zag_diagonal() {
  background-image: linear-gradient(30deg, white 25%, black 25%, black 75%, white 75%);
  background-size: $size $size;
}

// accidental creation when attempting to do stripes_diagonal_north_east
@mixin trapezoids_diagonal() {
  background-image: linear-gradient(45deg, transparent 25%, black 25%, black 75%, transparent 75%), linear-gradient(45deg, black 12.5%, transparent 12.5%), linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

// accidental creation when attempting to do stripes_diagonal_north_east
@mixin trapezoids_chain_diagonal() {
  background-image: linear-gradient(45deg, transparent 30%, black 30%, black 70%, transparent 70%), linear-gradient(45deg, black 12.5%, transparent 12.5%), linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

@mixin double_stripes_horizontal() {
  $offset: 25%;
  $width: 12.5%;
  background-image:
    linear-gradient(to bottom, transparent #{50% - $offset - $width}, black #{50% - $offset - $width}, black #{50% - $offset}, transparent #{50% - $offset}),
    linear-gradient(to bottom, transparent #{50% + $offset}, black #{50% + $offset}, black #{50% + $offset + $width}, transparent #{50% + $offset + $width});
  background-size: $size $size, $size $size;
}

@mixin double_stripes_vertical() {
  $offset: 25%;
  $width: 12.5%;
  background-image:
    linear-gradient(to right, transparent #{50% - $offset - $width}, black #{50% - $offset - $width}, black #{50% - $offset}, transparent #{50% - $offset}),
    linear-gradient(to right, transparent #{50% + $offset}, black #{50% + $offset}, black #{50% + $offset + $width}, transparent #{50% + $offset + $width});
  background-size: $size $size, $size $size;
}

// accidental creation when attempting to do chessboard
@mixin lattice() {
  background-image:
    linear-gradient(to right, black 25%, transparent 25%, transparent 75%, black 75%),
    linear-gradient(to bottom, black 25%, transparent 25%, transparent 75%, black 75%);
  background-size: $size $size, $size $size;
}

@mixin pluses() {
  $width: 12.5%;
  $offset: 12.5%;
  background-image:
    linear-gradient(to right, white  #{$offset}, transparent #{$offset}, transparent #{100% - $offset}, white #{100% - $offset}),
    linear-gradient(to bottom, white  #{$offset}, transparent #{$offset}, transparent #{100% - $offset}, white #{100% - $offset}),
    linear-gradient(to right, transparent #{50% - $width}, black #{50% - $width}, black #{50% + $width}, transparent #{50% + $width}),
    linear-gradient(to bottom, transparent  #{50% - $width}, black  #{50% - $width}, black #{50% + $width}, transparent #{50% + $width});
  background-size: $size $size, $size $size, $size $size, $size $size;
}

@mixin dots() {
  background-image:
    radial-gradient(at 50% 50%, transparent 50% / $sqrt2, black 50% / $sqrt2);
  background-size: $size $size;
}

// accidental creation when attempting to do dots
@mixin sparkles() {
  background-image:
    radial-gradient(at 50% 50%, transparent 50% * $sqrt2, $accent 50% * $sqrt2);
  background-size: $size $size;
}

@mixin hypno() {
  background-image:
    repeating-radial-gradient(circle at 50% 50%, black, black $size * 0.25, transparent $size * 0.25, transparent $size * 0.5);
}

.cell:nth-child(2) {
  @include dots()
}

.cell:nth-child(3) {
  @include stripes_diagonal_north_west()
}

.cell:nth-child(9) {
  @include double_stripes_vertical()
}

.cell:nth-child(16) {
  @include pluses()
}

.cell:nth-child(17) {
  @include trapezoids_diagonal()
}

.cell:nth-child(23) {
  @include sparkles()
}

.cell:nth-child(38) {
  @include stripes_horizontal()
}

.cell:nth-child(51) {
  @include stripes_vertical()
}

.cell:nth-child(52) {
  @include triangle_right_angle_north_west()
}

.cell:nth-child(54) {
  @include hypno()
}

.cell:nth-child(59) {
  @include lattice()
}

.cell:nth-child(74) {
  @include stripes_diagonal_north_east()
}

.cell:nth-child(78) {
  @include zig_zag_diagonal()
}

.cell:nth-child(81) {
  @include trapezoids_chain_diagonal()
}

.cell:nth-child(89) {
  @include double_stripes_horizontal()
}

.cell:nth-child(94) {
  @include bowties_diagonal()
}


</style>
