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
@use "sass:math";
@import "../variables.scss";

$sqrt2: 1.41421356;

.grid {
  @include square-canvas-child();;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 1px solid $light-gray;
}

.cell {
  position: relative;
  overflow: visible;
  background-color: white;
  background-position: center;
  border: 1px solid $light-gray;
  border-collapse: collapse;
}

$size: 16px;

@mixin stripes-horizontal() {
  background-image: linear-gradient(to bottom, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%);
  background-size: $size $size;
}

@mixin stripes-vertical() {
  background-image: linear-gradient(to right, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%);
  background-size: $size $size;
}

@mixin dashed-stripes-horizontal() {
  $width: 12.5%;
  background-image:
    linear-gradient(45deg, transparent 33.33%, white 33.33%, white 66.67%, transparent 66.67%),
    linear-gradient(to right, transparent #{25% - $width * 0.5}, black #{25% - $width * 0.5}, black #{25% + $width * 0.5}, transparent #{25% + $width * 0.5}),
    linear-gradient(to right, transparent #{75% - $width * 0.5}, black #{75% - $width * 0.5}, black #{75% + $width * 0.5}, transparent #{75% + $width * 0.5});
  background-size: $size $size;
}

@mixin stripes-diagonal-north-west() {
  background-image: linear-gradient(45deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%), linear-gradient(45deg, black 12.5%, transparent 12.5%), linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

@mixin stripes-diagonal-north-east() {
  background-image: linear-gradient(135deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%), linear-gradient(135deg, black 12.5%, transparent 12.5%), linear-gradient(135deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

@mixin stripes-diagonal-both-sides() {
  background-image:
    linear-gradient(135deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%),
    linear-gradient(135deg, black 12.5%, transparent 12.5%),
    linear-gradient(135deg, transparent 87.5%, black 87.5%),
    linear-gradient(45deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%),
    linear-gradient(45deg, black 12.5%, transparent 12.5%),
    linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size, $size $size, $size $size, $size $size;
}

@mixin metal-striped-floor() {
  $width: 6.25%;
  $offset: 6.25%;
  background-image:
    linear-gradient(to bottom, white 12.5%, transparent 12.5%),
    linear-gradient(to right, white 12.5%, transparent 12.5%),
    linear-gradient(to bottom, transparent 87.5%, white 87.5%),
    linear-gradient(to right, transparent 87.5%, white 87.5%),
    linear-gradient(45deg, transparent #{50% - 0.5 * $width}, black #{50% - 0.5 * $width}, black #{50% + 0.5 * $width}, transparent #{50% + 0.5 * $width}),
    linear-gradient(45deg, transparent #{50% - 1.5 * $width - $offset}, black #{50% - 1.5 * $width - $offset}, black #{50% - 0.5 * $width - $offset}, transparent #{50% - 0.5 * $width - $offset}),
    linear-gradient(45deg, transparent #{50% + 0.5 * $width + $offset}, black #{50% + 0.5 * $width + $offset}, black #{50% + 1.5 * $width + $offset}, transparent #{50% + 1.5 * $width + $offset});

  background-size: $size $size, $size $size, $size $size;
}

@mixin equilateral_triangle() {
  background-color: black;
  background-image: linear-gradient(60deg, transparent 50%, white 50%), linear-gradient(-60deg, transparent 50%, white 50%);
  background-size: $size $size, $size $size;
  background-position: center calc(50% - #{0.25 * $size});
}

// accidental creation when attempting to do stripes_diagonal_north_east
@mixin bowties-diagonal() {
  background-image: linear-gradient(135deg, white 25%, black 25%, black 75%, white 75%);
  background-size: $size $size;
}

@mixin rounded-bowties-diagonal() {
  background-image:
    conic-gradient(from 0deg, white 0deg, white 90deg, transparent 90deg, transparent 180deg, white 180deg, white 270deg, transparent 270deg),
    radial-gradient(at 50% 50%, black 50% * $sqrt2, transparent 50% * $sqrt2);
  background-size: $size $size;
}

// accidental creation when attempting to change bowties_diagonal
@mixin zig-zag-diagonal() {
  background-image: linear-gradient(30deg, white 25%, black 25%, black 75%, white 75%);
  background-size: $size $size;
}

// accidental creation when attempting to do stripes_diagonal_north_east
@mixin trapezoids-diagonal() {
  background-image: linear-gradient(45deg, transparent 25%, black 25%, black 75%, transparent 75%), linear-gradient(45deg, black 12.5%, transparent 12.5%), linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

// accidental creation when attempting to do stripes_diagonal_north_east
@mixin trapezoids-chain-diagonal() {
  background-image: linear-gradient(45deg, transparent 30%, black 30%, black 70%, transparent 70%), linear-gradient(45deg, black 12.5%, transparent 12.5%), linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size;
}

@mixin double-stripes-horizontal() {
  $offset: 25%;
  $width: 12.5%;
  background-image:
    linear-gradient(to bottom, transparent #{50% - $offset - $width}, black #{50% - $offset - $width}, black #{50% - $offset}, transparent #{50% - $offset}),
    linear-gradient(to bottom, transparent #{50% + $offset}, black #{50% + $offset}, black #{50% + $offset + $width}, transparent #{50% + $offset + $width});
  background-size: $size $size, $size $size;
}

@mixin double-stripes-vertical() {
  $offset: 25%;
  $width: 12.5%;
  background-image:
    linear-gradient(to right, transparent #{50% - $offset - $width}, black #{50% - $offset - $width}, black #{50% - $offset}, transparent #{50% - $offset}),
    linear-gradient(to right, transparent #{50% + $offset}, black #{50% + $offset}, black #{50% + $offset + $width}, transparent #{50% + $offset + $width});
  background-size: $size $size, $size $size;
}

@mixin dashed-double-stripes-horizontal() {
  $offset: 25%;
  $width: 12.5%;
  $empty-offset: 25%;
  background-image:
    linear-gradient(to right, white 0.5 * $empty-offset, transparent 0.5 * $empty-offset, transparent #{100 - 0.5 * $empty-offset} , white #{100 - 0.5 * $empty-offset} ),
    linear-gradient(to right, transparent #{50% - 0.5 * $empty-offset}, white #{50% - 0.5 * $empty-offset}, white #{50% + 0.5 * $empty-offset}, transparent #{50% + 0.5 * $empty-offset}),
    linear-gradient(to bottom, transparent #{50% - $offset - $width}, black #{50% - $offset - $width}, black #{50% - $offset}, transparent #{50% - $offset}),
    linear-gradient(to bottom, transparent #{50% + $offset}, black #{50% + $offset}, black #{50% + $offset + $width}, transparent #{50% + $offset + $width});
  background-size: $size $size;
}

@mixin dashed-double-stripes-vertical() {
  $offset: 25%;
  $width: 12.5%;
  $empty-offset: 25%;
  background-image:
    linear-gradient(to bottom, white 0.5 * $empty-offset, transparent 0.5 * $empty-offset, transparent #{100 - 0.5 * $empty-offset} , white #{100 - 0.5 * $empty-offset} ),
    linear-gradient(to bottom, transparent #{50% - 0.5 * $empty-offset}, white #{50% - 0.5 * $empty-offset}, white #{50% + 0.5 * $empty-offset}, transparent #{50% + 0.5 * $empty-offset}),
    linear-gradient(to right, transparent #{50% - $offset - $width}, black #{50% - $offset - $width}, black #{50% - $offset}, transparent #{50% - $offset}),
    linear-gradient(to right, transparent #{50% + $offset}, black #{50% + $offset}, black #{50% + $offset + $width}, transparent #{50% + $offset + $width});
  background-size: $size $size;
}

@mixin color-stripes-horizontal {
  $width: 12.5%;
  background-color: $light-gray;
  background-image:
    linear-gradient(to right, transparent #{25% - $width * 0.5}, black #{25% - $width * 0.5}, black #{25% + $width * 0.5}, transparent #{25% + $width * 0.5}),
    linear-gradient(to right, transparent #{75% - $width * 0.5}, white #{75% - $width * 0.5}, white #{75% + $width * 0.5}, transparent #{75% + $width * 0.5});
  background-size: $size $size, $size $size;
}

@mixin color-dots() {
  background-color: $light-gray;
  background-image:
    radial-gradient(at 25% 25%, black math.div(25%, $sqrt2), transparent math.div(25%, $sqrt2)),
    radial-gradient(at 75% 75%, white math.div(25%, $sqrt2), transparent math.div(25%, $sqrt2));
  background-size: $size $size;
}

// accidental creation when attempting to do color-dots
@mixin dot-checkers() {
  background-color: white;
  background-image:
    radial-gradient(at 25% 25%, black math.div(50%, $sqrt2), transparent math.div(50%, $sqrt2)),
    radial-gradient(at 75% 75%, black math.div(50%, $sqrt2), transparent math.div(50%, $sqrt2));
  background-size: $size $size;
}

// accidental creation when attempting to do chessboard
@mixin lattice() {
  background-image:
    linear-gradient(to right, black 25%, transparent 25%, transparent 75%, black 75%),
    linear-gradient(to bottom, black 25%, transparent 25%, transparent 75%, black 75%);
  background-size: $size $size, $size $size;
}

@mixin corners() {
  background-image:
    conic-gradient(from 0deg, white 0deg, white 90deg, transparent 90deg, transparent 180deg, white 180deg, white 270deg, transparent 270deg),
    linear-gradient(to right, white 12.5%, transparent 12.5%, transparent 87.5%, white 87.5%),
    linear-gradient(to bottom, white 12.5%, transparent 12.5%, transparent 87.5%, white 87.5%),
    linear-gradient(to right, black 25%, transparent 25%, transparent 75%, black 75%),
    linear-gradient(to bottom, black 25%, transparent 25%, transparent 75%, black 75%);
  background-size: $size $size;
  background-blend-mode: normal, normal, normal, normal, normal;
}

@mixin round-corners() {
  background-image:
    conic-gradient(from 90deg, white 0deg, white 90deg, transparent 90deg, transparent 180deg, white 180deg, white 270deg, transparent 270deg),
    radial-gradient(at 50% 50%, white 33.33% * $sqrt2, transparent 33.33% * $sqrt2),
    radial-gradient(at 50% 50%, black 50% * $sqrt2, transparent 50% * $sqrt2);
  background-size: $size $size;
}

@mixin empty-squares() {
  background-image:
    linear-gradient(to right, white 12.5%, transparent 12.5%, transparent 87.5%, white 87.5%),
    linear-gradient(to bottom, white 12.5%, transparent 12.5%, transparent 87.5%, white 87.5%),
    linear-gradient(to right, black 25%, transparent 25%, transparent 75%, black 75%),
    linear-gradient(to bottom, black 25%, transparent 25%, transparent 75%, black 75%);
  background-size: $size $size, $size $size, $size $size, $size $size;
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

@mixin exes() {
  $width: 6.25%;
  $offset: 25%;
  background-image:
    linear-gradient(45deg, white  #{$offset}, transparent #{$offset}, transparent #{100% - $offset}, white #{100% - $offset}),
    linear-gradient(135deg, white  #{$offset}, transparent #{$offset}, transparent #{100% - $offset}, white #{100% - $offset}),
    linear-gradient(45deg, transparent #{50% - $width}, black #{50% - $width}, black #{50% + $width}, transparent #{50% + $width}),
    linear-gradient(135deg, transparent  #{50% - $width}, black  #{50% - $width}, black #{50% + $width}, transparent #{50% + $width});
  background-size: $size $size, $size $size, $size $size, $size $size;
}

@mixin dots() {
  background-image:
    radial-gradient(at 50% 50%, transparent math.div(50%, $sqrt2), black math.div(50%, $sqrt2));
  background-size: $size $size;
}

@mixin chains() {
  background-image:
    radial-gradient(at 50% 50%, white 25% * $sqrt2, transparent 25% * $sqrt2),
    radial-gradient(at 50% 50%, black 50% * $sqrt2, transparent 50% * $sqrt2);
  background-size: $size $size, $size $size;
}

@mixin stars() {
  $width: 10deg;
  background-image:
    conic-gradient(from -1 * $width, black 0deg, black $width, transparent $width, transparent 72deg, black 72deg, black #{72deg + $width}, transparent #{72deg + $width}, transparent 144deg, black 144deg, black #{144deg + $width}, transparent #{144deg + $width}, transparent 216deg, black 216deg, black #{216deg + $width}, transparent #{216deg + $width}, transparent 288deg, black 288deg, black #{288deg + $width}, transparent #{288deg + $width}, transparent 360deg),
    radial-gradient(at 50% 50%, white 33.33% * $sqrt2, transparent 33.33% * $sqrt2);
  background-size: $size $size;
}

@mixin stars() {
  $width: 30deg;
  background-image:
    radial-gradient(at 50% 50%, black 12.5% * $sqrt2, transparent 12.5% * $sqrt2),
    radial-gradient(at 50% 50%, transparent 33.33% * $sqrt2, white 33.33% * $sqrt2),
conic-gradient(from -0.5 * $width, black 0deg, black $width, transparent $width, transparent 72deg, black 72deg, black #{72deg + $width}, transparent #{72deg + $width}, transparent 144deg, black 144deg, black #{144deg + $width}, transparent #{144deg + $width}, transparent 216deg, black 216deg, black #{216deg + $width}, transparent #{216deg + $width}, transparent 288deg, black 288deg, black #{288deg + $width}, transparent #{288deg + $width}, transparent 360deg);
  background-size: $size $size;
}

// accidental creation when attempting to do stars
@mixin asymmetric-stars() {
  $width: 10deg;
  background-image:
    conic-gradient(from 0deg, black 0deg, black $width, transparent $width, transparent 72deg, black 72deg, black #{72deg + $width}, transparent #{72deg + $width}, transparent 144deg, black 144deg, black #{144deg + $width}, transparent #{144deg + $width}, transparent 216deg, black 216deg, black #{216deg + $width}, transparent #{216deg + $width}, transparent 360deg);
  background-size: $size $size;
}

@mixin cs() {
  background-image:
    linear-gradient(-90deg, white 50%, transparent 50%),
    radial-gradient(at 50% 50%, white 12.5% * $sqrt2, transparent 12.5% * $sqrt2),
    radial-gradient(at 50% 50%, black 25% * $sqrt2, transparent 25% * $sqrt2);
  background-size: $size $size, $size $size, $size $size;
  //background-position: calc(50% + #{0.5 * $size}) center;
  background-position: calc(50% - #{0.33 * $size}) center;
}

// accidental creation when attempting to do dots
@mixin sparkles() {
  background-image:
    radial-gradient(at 50% 50%, transparent 50% * $sqrt2, black 50% * $sqrt2);
  background-size: $size $size;
}

@mixin hypno() {
  background-image:
    repeating-radial-gradient(circle at 50% 50%, black, black $size * 0.25, transparent $size * 0.25, transparent $size * 0.5);
}

@mixin half-dots() {
  background-image:
    linear-gradient(to bottom, transparent 50%, white 50%),
    radial-gradient(at 50% 50%, black math.div(100%, $sqrt2), transparent math.div(100%, $sqrt2));
  background-blend-mode: difference, normal;
  background-size: $size $size, $size $size;
}

@mixin checker() {
  background-image:
    linear-gradient(to bottom, transparent 50%, white 50%),
    linear-gradient(to right, black 50%, white 50%);
  background-blend-mode: difference, normal;
  background-size: $size $size, $size $size;
}

@mixin black-leaves() {
  background-image:
    conic-gradient(from 0deg, black 0deg, black 90deg, transparent 90deg, transparent 180deg, black 180deg, black 270deg, transparent 270deg),
    radial-gradient(at 50% 50%, black 50% * $sqrt2, transparent 50% * $sqrt2);
  background-size: $size $size;
}

.cell:nth-child(1) {
  @include checker();
}

.cell:nth-child(2) {
  @include dots();
}

.cell:nth-child(5) {
  @include color-dots();
}

.cell:nth-child(9) {
  @include double-stripes-vertical();
}

.cell:nth-child(15) {
  @include black-leaves();
}

.cell:nth-child(16) {
  @include pluses();
}

.cell:nth-child(17) {
  @include trapezoids-diagonal();
}

.cell:nth-child(18) {
  @include dashed-double-stripes-horizontal();
}

.cell:nth-child(19) {
  @include empty-squares();
}

.cell:nth-child(20) {
  @include double-stripes-horizontal();
}

.cell:nth-child(22) {
  @include rounded-bowties-diagonal();
}

.cell:nth-child(23) {
  @include sparkles();
}

.cell:nth-child(24) {
  @include corners();
}

.cell:nth-child(25) {
  @include metal-striped-floor();
}

.cell:nth-child(29) {
  @include dashed-double-stripes-vertical();
}

.cell:nth-child(32) {
  @include dot-checkers();
}

.cell:nth-child(38) {
  @include stripes-horizontal();
}

.cell:nth-child(39) {
  @include chains();
}

.cell:nth-child(41) {
  @include exes();
}

.cell:nth-child(44) {
  @include asymmetric-stars();
}

.cell:nth-child(51) {
  @include stripes-vertical();
}

.cell:nth-child(52) {
  @include equilateral_triangle();
}

.cell:nth-child(54) {
  @include hypno();
}

.cell:nth-child(55) {
  @include dashed-stripes-horizontal();
}

.cell:nth-child(59) {
  @include lattice();
}

.cell:nth-child(61) {
  @include stars();
}

.cell:nth-child(68) {
  @include color-stripes-horizontal();
}

.cell:nth-child(73) {
  @include half-dots();
}

.cell:nth-child(78) {
  @include zig-zag-diagonal();
}

.cell:nth-child(79) {
  @include trapezoids-chain-diagonal();
}

.cell:nth-child(81) {
  @include stripes-diagonal-north-west();
}

.cell:nth-child(82) {
  @include stripes-diagonal-both-sides();
}

.cell:nth-child(85) {
  @include round-corners();
}

.cell:nth-child(88) {
  @include cs();
}

.cell:nth-child(92) {
  @include stripes-diagonal-north-east();
}

.cell:nth-child(94) {
  @include bowties-diagonal();
}

</style>
