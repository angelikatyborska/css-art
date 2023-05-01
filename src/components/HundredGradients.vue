<template>
  <div class="grid">
    <div :key="n" v-for="n in 100" class="cell" :title="n">
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
$sqrt3: 1.73205081;

.grid {
  @include square-canvas-child();;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 1px solid black;
}

.cell {
  position: relative;
  overflow: visible;
  background-color: white;
  background-position: center;
  border: 1px solid black;
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

@mixin stripes-diagonal-both-sides-diff() {
  background-image:
    linear-gradient(135deg, transparent 43.75%, white 43.75%, white 56.25%, transparent 56.25%),
    linear-gradient(135deg, white 6.25%, transparent 6.25%),
    linear-gradient(135deg, transparent 93.75%, white 93.75%),
    linear-gradient(45deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%),
    linear-gradient(45deg, black 12.5%, transparent 12.5%),
    linear-gradient(45deg, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size, $size $size, $size $size, $size $size, $size $size;
  background-blend-mode: difference, difference, difference, normal, normal, normal;
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

@mixin equilateral-triangles() {
  background-color: black;
  background-image: linear-gradient(60deg, transparent 50%, white 50%), linear-gradient(-60deg, transparent 50%, white 50%);
  background-size: $size $size, $size $size;
  background-position: center calc(50% - #{0.25 * $size});
}

@mixin triangle-wave() {
  background-color: black;
  background-image: linear-gradient(30deg, transparent 50%, white 50%), linear-gradient(-30deg, transparent 50%, white 50%);
  background-size: $size $size, $size $size;
}

// accidental creation when attempting to do stripes_diagonal_north_east
@mixin bowties-diagonal() {
  background-image: linear-gradient(135deg, white 25%, black 25%, black 75%, white 75%);
  background-size: $size $size;
}

@mixin diamond-lattice() {
  background-image:
    linear-gradient(to right, black 12.5%, transparent 12.5%, transparent 87.75%, black 87.75%),
    linear-gradient(to bottom, black 12.5%, transparent 12.5%, transparent 87.75%, black 87.75%),
    linear-gradient(45deg, black 18.75%, transparent 18.75%, transparent 81.25%, black 81.25%),
    linear-gradient(135deg, black 18.75%, transparent 18.75%, transparent 81.25%, black 81.25%);
  background-size: $size $size;
}

@mixin diamond-chain-big-horizontal() {
  background-image:
    linear-gradient(to bottom, black 12.5%, transparent 12.5%, transparent 87.75%, black 87.75%),
    linear-gradient(45deg, black 18.75%, transparent 18.75%, transparent 81.25%, black 81.25%),
    linear-gradient(135deg, black 18.75%, transparent 18.75%, transparent 81.25%, black 81.25%);
  background-size: $size $size;
}

@mixin rounded-bowties-diagonal() {
  background-image:
    conic-gradient(from 0deg, white 0deg, white 90deg, transparent 90deg, transparent 180deg, white 180deg, white 270deg, transparent 270deg),
    radial-gradient(at 50% 50%, black 75%, transparent 75%);
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

@mixin double-stripes-different-widths-horizontal() {
  background-image: linear-gradient(to bottom, black 6.125%, transparent 6.125%, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%, transparent 93.875%, black 93.875%);
  background-size: $size $size;
}

@mixin double-stripes-different-widths-vertical() {
  background-image: linear-gradient(to right, black 6.125%, transparent 6.125%, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%, transparent 93.875%, black 93.875%);
  background-size: $size $size;
}

@mixin color-stripes-horizontal() {
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

@mixin mickey() {
  background-image:
    radial-gradient(at 50% 50%, black math.div(50%, $sqrt2), transparent math.div(50%, $sqrt2)),
    radial-gradient(at 25% 25%, black math.div(25%, $sqrt2), transparent math.div(25%, $sqrt2)),
    radial-gradient(at 75% 25%, black math.div(25%, $sqrt2), transparent math.div(25%, $sqrt2));
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

@mixin diagonal-triangles-pair() {
  background-image:
    linear-gradient(45deg, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%),
    linear-gradient(to right, black 12.5%, transparent 12.5%, transparent 87.5%, black 87.5%),
    linear-gradient(to bottom, black 12.5%, transparent 12.5%, transparent 87.5%, black 87.5%);
  background-size: $size $size, $size $size;
}

@mixin diagonal-triangles-four() {
  background-image:
    linear-gradient(45deg, transparent 43.75%, black 43.75%, black 56.25%, transparent 56.25%),
    linear-gradient(135deg, transparent 43.75%, black 43.75%, black 56.25%, transparent 56.25%),
    linear-gradient(to right, black 6.25%, transparent 6.25%, transparent 93.75%, black 93.75%),
    linear-gradient(to bottom, black 6.25%, transparent 6.25%, transparent 93.75%, black 93.75%);
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
    radial-gradient(at 50% 50%, white 50%, transparent 50%),
    radial-gradient(at 50% 50%, black 75%, transparent 75%);
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

@mixin letters-x() {
  $width: 6.25%;
  $offset: 25%;
  background-image:
    linear-gradient(45deg, white  #{$offset}, transparent #{$offset}, transparent #{100% - $offset}, white #{100% - $offset}),
    linear-gradient(135deg, white  #{$offset}, transparent #{$offset}, transparent #{100% - $offset}, white #{100% - $offset}),
    linear-gradient(45deg, transparent #{50% - $width}, black #{50% - $width}, black #{50% + $width}, transparent #{50% + $width}),
    linear-gradient(135deg, transparent  #{50% - $width}, black  #{50% - $width}, black #{50% + $width}, transparent #{50% + $width});
  background-size: $size $size, $size $size, $size $size, $size $size;
}

@mixin letters-a() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to bottom, white $padding-top, transparent $padding-top, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, white $padding-right, black $padding-right, black #{$padding-right + $letter-width}, transparent #{$padding-right + $letter-width}, transparent #{100% - $padding-right - $letter-width}, black #{100% - $padding-right - $letter-width}, black #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, transparent $padding-top, black $padding-top, black #{$padding-top + $letter-width}, transparent #{$padding-top + $letter-width}, transparent #{50% - $letter-width * 0.5}, black #{50% - $letter-width * 0.5}, black #{50% + $letter-width * 0.5},transparent #{50% + $letter-width * 0.5});
  background-size: $size $size;
}

@mixin letters-e() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to right, white $padding-right, transparent $padding-right, transparent #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, white $padding-top, transparent $padding-top, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, transparent #{$padding-right}, black #{$padding-right}, black #{$padding-right + $letter-width}, transparent #{$padding-right + $letter-width}),
    linear-gradient(to bottom, transparent #{$padding-top}, black #{$padding-top}, black #{$padding-top + $letter-width}, transparent #{$padding-top + $letter-width}),
    linear-gradient(to bottom, transparent #{100% - $padding-top - $letter-width}, black #{100% - $padding-top - $letter-width}, black #{100% - $padding-top}, transparent #{100% - $padding-top}),
    linear-gradient(to bottom, transparent #{50% - $letter-width * 0.5}, black #{50% - $letter-width * 0.5}, black #{50% + $letter-width * 0.5}, transparent #{50% + $letter-width * 0.5});
  background-size: $size $size;
}

@mixin letters-f() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to right, white $padding-right, transparent $padding-right, transparent #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, white $padding-top, transparent $padding-top, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, transparent #{$padding-right}, black #{$padding-right}, black #{$padding-right + $letter-width}, transparent #{$padding-right + $letter-width}),
    linear-gradient(to bottom, transparent #{$padding-top}, black #{$padding-top}, black #{$padding-top + $letter-width}, transparent #{$padding-top + $letter-width}),
    linear-gradient(to bottom, transparent #{50% - $letter-width * 0.5}, black #{50% - $letter-width * 0.5}, black #{50% + $letter-width * 0.5}, transparent #{50% + $letter-width * 0.5});
  background-size: $size $size;
}

@mixin letters-g() {
  background-image:
    linear-gradient(to right, transparent #{50% + 75% * 0.5}, white #{50% + 75% * 0.5}),
    conic-gradient(from 0deg, transparent 45deg, white 45deg, white 90deg, transparent 90deg, transparent 360deg),
    radial-gradient(at 50% 50%, transparent math.div(50%, $sqrt2), black math.div(50%, $sqrt2), black math.div(75%, $sqrt2), transparent math.div(75%, $sqrt2)),
    linear-gradient(to right, white 50%, transparent 50%),
    linear-gradient(to bottom, transparent 50%, black 50%, black 62.5%, transparent 62.5%);
  background-size: $size $size;
}

@mixin letters-h() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to bottom, white $padding-top, transparent $padding-top, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, white $padding-right, black $padding-right, black #{$padding-right + $letter-width}, transparent #{$padding-right + $letter-width}, transparent #{100% - $padding-right - $letter-width}, black #{100% - $padding-right - $letter-width}, black #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, transparent #{50% - $letter-width * 0.5}, black #{50% - $letter-width * 0.5}, black #{50% + $letter-width * 0.5},transparent #{50% + $letter-width * 0.5});
  background-size: $size $size;
}

@mixin letters-i() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to right, white $padding-right, transparent $padding-right, transparent #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, white $padding-top, black $padding-top, black #{$padding-top + $letter-width}, transparent #{$padding-top + $letter-width}, transparent #{100% - $padding-top - $letter-width}, black #{100% - $padding-top - $letter-width}, black #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, transparent #{50% - $letter-width * 0.5}, black #{50% - $letter-width * 0.5}, black #{50% + $letter-width * 0.5},transparent #{50% + $letter-width * 0.5});
  background-size: $size $size;
}

@mixin letters-n() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to bottom, white $padding-top, transparent $padding-top, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, white $padding-right, black $padding-right, black #{$padding-right + $letter-width}, transparent #{$padding-right + $letter-width}, transparent #{100% - $padding-right - $letter-width}, black #{100% - $padding-right - $letter-width}, black #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(60deg, transparent #{50% - math.div($letter-width, $sqrt3) * 0.5}, black #{50% - math.div($letter-width, $sqrt3) * 0.5}, black #{50% + math.div($letter-width, $sqrt3) * 0.5},transparent #{50% + math.div($letter-width, $sqrt3) * 0.5});
  background-size: $size $size;
}

@mixin letters-k() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to bottom, white $padding-top, transparent $padding-top, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, white #{50% - $letter-width}, black #{50% - $letter-width}, black #{50%}, transparent #{50%}),
    linear-gradient(45deg, transparent #{50% - math.div($letter-width, $sqrt2) * 0.5}, black #{50% - math.div($letter-width, $sqrt2) * 0.5}, black #{50% + math.div($letter-width, $sqrt2) * 0.5},transparent #{50% + math.div($letter-width, $sqrt2) * 0.5}),
    linear-gradient(-45deg, transparent #{50% - math.div($letter-width, $sqrt2) * 0.5}, black #{50% - math.div($letter-width, $sqrt2) * 0.5}, black #{50% + math.div($letter-width, $sqrt2) * 0.5},transparent #{50% + math.div($letter-width, $sqrt2) * 0.5});
  background-size: $size $size;
  background-position: calc(50% - #{$size * 0.25} + #{$letter-width * 0.25}) 50%;
}

@mixin letters-t() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to right, white $padding-right, transparent $padding-right, transparent #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, white $padding-top, black $padding-top, black #{$padding-top + $letter-width}, transparent #{$padding-top + $letter-width}, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, transparent #{50% - $letter-width * 0.5}, black #{50% - $letter-width * 0.5}, black #{50% + $letter-width * 0.5},transparent #{50% + $letter-width * 0.5});
  background-size: $size $size;
}

@mixin letters-z() {
  $padding-top: 12.5%;
  $padding-right: 25%;
  $letter-width: 12.5%;
  background-image:
    linear-gradient(to bottom, white $padding-top, transparent $padding-top, transparent #{100% - $padding-top}, white #{100% - $padding-top}),
    linear-gradient(to right, white $padding-right, transparent $padding-right, transparent #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, transparent $padding-top, black $padding-top, black #{$padding-top + $letter-width}, transparent #{$padding-top + $letter-width}, transparent #{100% - $padding-top - $letter-width}, black #{100% - $padding-top - $letter-width}, black #{100% - $padding-top}, transparent #{100% - $padding-right}),
    linear-gradient(-60deg, transparent #{50% - math.div($letter-width, $sqrt3) * 0.5}, black #{50% - math.div($letter-width, $sqrt3) * 0.5}, black #{50% + math.div($letter-width, $sqrt3) * 0.5},transparent #{50% + math.div($letter-width, $sqrt3) * 0.5});
  background-size: $size $size;
}

@mixin letters-c() {
  background-image:
    linear-gradient(-90deg, white 50%, transparent 50%),
    radial-gradient(at 50% 50%, white 25%, transparent 25%),
    radial-gradient(at 50% 50%, black 50%, transparent 50%);
  background-size: $size $size, $size $size, $size $size;
  background-position: calc(50% - #{0.33 * $size}) center;
}

@mixin padded-bricks-vertical() {
  $padding-right: 25%;
  $width: 12.5%;
  background-image:
    linear-gradient(to right, white $padding-right, black $padding-right, black #{$padding-right + $width}, transparent #{$padding-right + $width}, transparent #{100% - $padding-right - $width}, black #{100% - $padding-right - $width}, black #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to bottom, transparent #{50% - $width * 0.5}, black #{50% - $width * 0.5}, black #{50% + $width * 0.5},transparent #{50% + $width * 0.5});
  background-size: $size $size;
}

@mixin padded-bricks-horizontal() {
  $padding-right: 25%;
  $width: 12.5%;
  background-image:
    linear-gradient(to bottom, white $padding-right, black $padding-right, black #{$padding-right + $width}, transparent #{$padding-right + $width}, transparent #{100% - $padding-right - $width}, black #{100% - $padding-right - $width}, black #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(to right, transparent #{50% - $width * 0.5}, black #{50% - $width * 0.5}, black #{50% + $width * 0.5},transparent #{50% + $width * 0.5});
  background-size: $size $size;
}

@mixin padded-bricks-diagonal() {
  $padding-right: 25%;
  $width: 12.5%;
  background-image:
    linear-gradient(45deg, white $padding-right, black $padding-right, black #{$padding-right + $width}, transparent #{$padding-right + $width}, transparent #{100% - $padding-right - $width}, black #{100% - $padding-right - $width}, black #{100% - $padding-right}, white #{100% - $padding-right}),
    linear-gradient(135deg, transparent #{50% - $width * 0.5}, black #{50% - $width * 0.5}, black #{50% + $width * 0.5},transparent #{50% + $width * 0.5});
  background-size: $size $size;
}

@mixin dots() {
  background-image:
    radial-gradient(at 50% 50%, transparent math.div(50%, $sqrt2), black math.div(50%, $sqrt2));
  background-size: $size $size;
}

@mixin chains() {
  background-image:
    radial-gradient(at 50% 50%, white math.div(50%, $sqrt2), transparent math.div(50%, $sqrt2)),
    radial-gradient(at 50% 50%, black math.div(100%, $sqrt2), transparent math.div(100%, $sqrt2));
  background-size: $size $size, $size $size;
}

@mixin empty-dots() {
  background-image:
    radial-gradient(at 50% 50%, black math.div(25%, $sqrt2), transparent math.div(25%, $sqrt2)),
    radial-gradient(at 50% 50%, white math.div(50%, $sqrt2), transparent math.div(50%, $sqrt2)),
    radial-gradient(at 50% 50%, black math.div(75%, $sqrt2), transparent math.div(75%, $sqrt2));
  background-size: $size $size;
}

@mixin strike-through-chains() {
  background-image:
    linear-gradient(45deg, transparent 43.75%, black 43.75%, black 56.25%, transparent 56.25%),
    radial-gradient(at 50% 50%, white math.div(66.67%, $sqrt2), transparent math.div(66.67%, $sqrt2)),
    radial-gradient(at 50% 50%, black math.div(100%, $sqrt2), transparent math.div(100%, $sqrt2));
  background-size: $size $size, $size $size;
}

@mixin bowties-in-leaves() {
  background-color: black;
  background-image:
    conic-gradient(from 0deg, transparent 0deg, transparent 90deg, white 90deg, white 180deg, transparent 180deg, transparent 270deg, white 270deg, white 360deg),
    radial-gradient(at 50% 50%, black math.div(50%, $sqrt2), transparent math.div(50%, $sqrt2)),
    radial-gradient(at 50% 50%, white math.div(100%, $sqrt2), transparent math.div(100%, $sqrt2));
  background-size: $size $size, $size $size;
}

@mixin stars() {
  $width: 30deg;
  background-image:
    radial-gradient(at 50% 50%, black math.div(25%, $sqrt2), transparent math.div(25%, $sqrt2)),
    radial-gradient(at 50% 50%, transparent math.div(66.67%, $sqrt2), white math.div(66.67%, $sqrt2)),
    conic-gradient(from -0.5 * $width, black 0deg, black $width, transparent $width, transparent 72deg, black 72deg, black #{72deg + $width}, transparent #{72deg + $width}, transparent 144deg, black 144deg, black #{144deg + $width}, transparent #{144deg + $width}, transparent 216deg, black 216deg, black #{216deg + $width}, transparent #{216deg + $width}, transparent 288deg, black 288deg, black #{288deg + $width}, transparent #{288deg + $width}, transparent 360deg);
  background-size: $size $size;
}

@mixin flowers() {
  $width: 45deg;
  background-image:
    radial-gradient(at 50% 50%, black math.div(25%, $sqrt2), transparent math.div(25%, $sqrt2)),
    radial-gradient(at 50% 50%, transparent math.div(87.5%, $sqrt2), white math.div(87.5%, $sqrt2)),
    conic-gradient(from -0.5 * $width, black 0deg, black $width, transparent $width, transparent 60deg, black 60deg, black #{60deg + $width}, transparent #{60deg + $width}, transparent 120deg, black 120deg, black #{120deg + $width}, transparent #{120deg + $width}, transparent 180deg, black 180deg, black #{180deg + $width}, transparent #{180deg + $width}, transparent 240deg, black 240deg, black #{240deg + $width}, transparent #{240deg + $width}, transparent 300deg, black 300deg, black #{300deg + $width}, transparent #{300deg + $width}, transparent 360deg);
  background-size: $size $size;
}

// accidental creation when attempting to do stars
@mixin asymmetric-stars() {
  $width: 10deg;
  background-image:
    conic-gradient(from 0deg, black 0deg, black $width, transparent $width, transparent 72deg, black 72deg, black #{72deg + $width}, transparent #{72deg + $width}, transparent 144deg, black 144deg, black #{144deg + $width}, transparent #{144deg + $width}, transparent 216deg, black 216deg, black #{216deg + $width}, transparent #{216deg + $width}, transparent 360deg);
  background-size: $size $size;
}

// accidental creation when attempting to do dots
@mixin sparkles() {
  background-image:
    radial-gradient(at 50% 50%, transparent math.div(100%, $sqrt2), black math.div(100%, $sqrt2));
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
    radial-gradient(at 50% 50%, black math.div(100%, $sqrt2), transparent math.div(100%, $sqrt2));
  background-size: $size $size;
}

@mixin diamond-chain-small-vertical() {
  $width: 30deg;
  background-color: black;
  background-image:
    conic-gradient(from -0.5 * $width, white 0deg, white $width, transparent $width, transparent 180deg, white 180deg, white #{180deg + $width}, transparent #{180deg + $width});
  background-size: $size $size;
}

@mixin stripes-and-dots-horizontal() {
  background-image:
    radial-gradient(at 50% 50%, black 12.5%, transparent 12.5%),
    linear-gradient(to bottom, black 25%, transparent 25%, transparent 75%, black 75%);
  background-size: $size $size;
}

@mixin stripes-and-dots-vertical() {
  background-image:
    radial-gradient(at 50% 50%, black 12.5%, transparent 12.5%),
    linear-gradient(to right, black 25%, transparent 25%, transparent 75%, black 75%);
  background-size: $size $size;
}

@mixin rays() {
  background-image:
    repeating-conic-gradient(from -3deg, black 0deg, black 6deg, transparent 6deg, transparent 12deg);
}

@mixin checkers-hypno() {
  background-image:
    repeating-radial-gradient(circle at 50% 50%, white, white $size * 0.25, transparent $size * 0.25, transparent $size * 0.5),
    repeating-conic-gradient(from -3deg, black 0deg, black 6deg, transparent 6deg, transparent 12deg);
  background-blend-mode: difference, normal;
}

@mixin dashed-circles() {
  background-image:
    repeating-radial-gradient(circle at 50% 50%, white, white $size * 0.25, transparent $size * 0.25, transparent $size * 0.5),
    repeating-conic-gradient(from -3deg, black 0deg, black 6deg, transparent 6deg, transparent 12deg);
  background-blend-mode: lighten, normal;
}

@mixin hypno-propeller() {
  background-image:
    repeating-radial-gradient(circle at 50% 50%, black, black $size * 0.25, transparent $size * 0.25, transparent $size * 0.5),
    repeating-conic-gradient(from 11.25deg, black 0deg, black 22.5deg, transparent 22.5deg, transparent 45deg);
}

@mixin striped-rays() {
  background-color: black;
  background-image:
    repeating-linear-gradient(to bottom, white, white $size * 0.125, transparent $size * 0.125, transparent $size * 0.25),
    repeating-conic-gradient(from 155deg, white 0deg, white 30deg, transparent 30deg, transparent 60deg);
}

@mixin hypno-diff() {
  background-image:
    repeating-radial-gradient(circle at 50% 50%, white, white $size * 0.5, transparent $size * 0.5, transparent $size),
    repeating-conic-gradient(from 22.5deg, black 0deg, black 45deg, transparent 45deg, transparent 90deg);
  background-blend-mode: difference, normal;
}

@mixin beads-horizontal() {
  background-color: black;
  background-image:
    radial-gradient(circle at 50% 50%, white, white $size * 0.25, transparent $size * 0.25, transparent $size);
  background-size: $size * 0.5 $size;
}

@mixin beads-vertical() {
  background-color: black;
  background-image:
    radial-gradient(circle at 50% 50%, white, white $size * 0.25, transparent $size * 0.25, transparent $size);
  background-size: $size $size * 0.5;
}

@mixin piano() {
  $border-width: 3%;
  $black-key-width: 9%;
  background-image:
    linear-gradient(to bottom, black $border-width * 0.5, transparent $border-width * 0.5, transparent #{100% - $border-width * 0.5}, black #{100% - $border-width * 0.5}),
    linear-gradient(to right, black 0%, black $border-width * 0.5, transparent $border-width * 0.5, transparent #{100% * math.div(1, 7) - $border-width * 0.5}, black #{100% * math.div(1, 7) - $border-width * 0.5}, black #{100% * math.div(1, 7) + $border-width * 0.5}, transparent #{100% * math.div(1, 7) + $border-width * 0.5}, transparent #{100% * math.div(2, 7) - $border-width * 0.5}, black #{100% * math.div(2, 7) - $border-width * 0.5}, black #{100% * math.div(2, 7) + $border-width * 0.5}, transparent #{100% * math.div(2, 7) + $border-width * 0.5}, transparent #{100% * math.div(3, 7) - $border-width * 0.5}, black #{100% * math.div(3, 7) - $border-width * 0.5}, black #{100% * math.div(3, 7) + $border-width * 0.5}, transparent #{100% * math.div(3, 7) + $border-width * 0.5}, transparent #{100% * math.div(4, 7) - $border-width * 0.5}, black #{100% * math.div(4, 7) - $border-width * 0.5}, black #{100% * math.div(4, 7) + $border-width * 0.5}, transparent #{100% * math.div(4, 7) + $border-width * 0.5}, transparent #{100% * math.div(5, 7) - $border-width * 0.5}, black #{100% * math.div(5, 7) - $border-width * 0.5}, black #{100% * math.div(5, 7) + $border-width * 0.5}, transparent #{100% * math.div(5, 7) + $border-width * 0.5}, transparent #{100% * math.div(6, 7) - $border-width * 0.5}, black #{100% * math.div(6, 7) - $border-width * 0.5}, black #{100% * math.div(6, 7) + $border-width * 0.5}, transparent #{100% * math.div(6, 7) + $border-width * 0.5}, transparent #{100% * math.div(7, 7) - $border-width * 0.5}, black #{100% * math.div(7, 7) - $border-width * 0.5}),
    linear-gradient(to bottom, transparent 66.67%, white 66.67%),
    linear-gradient(to right, transparent #{100% * math.div(1, 7) - $black-key-width * 0.5}, black #{100% * math.div(1, 7) - $black-key-width * 0.5}, black #{100% * math.div(1, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(1, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(2, 7) - $black-key-width * 0.5}, black #{100% * math.div(2, 7) - $black-key-width * 0.5}, black #{100% * math.div(2, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(2, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(4, 7) - $black-key-width * 0.5}, black #{100% * math.div(4, 7) - $black-key-width * 0.5}, black #{100% * math.div(4, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(4, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(5, 7) - $black-key-width * 0.5}, black #{100% * math.div(5, 7) - $black-key-width * 0.5}, black #{100% * math.div(5, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(5, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(6, 7) - $black-key-width * 0.5}, black #{100% * math.div(6, 7) - $black-key-width * 0.5}, black #{100% * math.div(6, 7) + $black-key-width * 0.5}, transparent #{100% * math.div(6, 7) + $black-key-width * 0.5});
  background-size: $size * 4 $size * 2;
}

@mixin vases() {
  background-image:
    radial-gradient(circle at 50% 50%, black math.div(66.67%, $sqrt2), transparent math.div(66.67%, $sqrt2)),
    linear-gradient(to top, white 25%, transparent 25%),
    linear-gradient(to right, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%);
  background-size: $size $size;
}

@mixin onigiri() {
  background-image:
    radial-gradient(circle at 50% 50%, transparent math.div(100%, $sqrt2), black math.div(100%, $sqrt2)),
    linear-gradient(to bottom, white 50%, transparent 50%),
    linear-gradient(to right, transparent 37.5%, black 37.5%, black 62.5%, transparent 62.5%);
  background-size: $size $size;
}

@mixin barbell() {
  $bar-width: 12.5%;
  $plate-width: 6.25%;
  $small-plate-height: 50%;
  $big-plate-height: 75%;
  $padding-right: 6.25%;
  $plate-offset-right: 6.25%;
  background-image:
    linear-gradient(to right, white $padding-right, transparent $padding-right, transparent #{100% - $padding-right}, white #{100% - $padding-right}),
      // big plate
    linear-gradient(to bottom, white #{50% - $big-plate-height * 0.5}, transparent #{50% - $big-plate-height * 0.5}, transparent #{50% + $big-plate-height * 0.5}, white #{50% + $big-plate-height * 0.5}),
    linear-gradient(to right, transparent #{$padding-right + $plate-offset-right + $plate-width}, black #{$padding-right + $plate-offset-right + $plate-width}, black #{$padding-right + $plate-offset-right + $plate-width * 2}, transparent #{$padding-right + $plate-offset-right + $plate-width * 2}, transparent #{100% - $padding-right - $plate-offset-right - $plate-width * 2}, black #{100% - $padding-right - $plate-offset-right - $plate-width * 2}, black #{100% - $padding-right - $plate-offset-right - $plate-width}, transparent #{100% - $padding-right - $plate-offset-right - $plate-width}),
      // small plate
    linear-gradient(to bottom, white #{50% - $small-plate-height * 0.5}, transparent #{50% - $small-plate-height * 0.5}, transparent #{50% + $small-plate-height * 0.5}, white #{50% + $small-plate-height * 0.5}),
    linear-gradient(to right, transparent #{$padding-right + $plate-offset-right}, black #{$padding-right + $plate-offset-right}, black #{$padding-right + $plate-offset-right + $plate-width}, transparent #{$padding-right + $plate-offset-right + $plate-width}, transparent #{100% - $padding-right - $plate-offset-right - $plate-width}, black #{100% - $padding-right - $plate-offset-right - $plate-width}, black #{100% - $padding-right - $plate-offset-right}, transparent #{100% - $padding-right - $plate-offset-right}),
      // bar
    linear-gradient(to bottom, transparent #{50% - $bar-width * 0.5}, black #{50% - $bar-width * 0.5}, black #{50% + $bar-width * 0.5}, transparent #{50% + $bar-width * 0.5});
  background-size: 3 * $size $size;
}

.cell:nth-child(1) {
  @include checker();
}

.cell:nth-child(2) {
  @include stripes-and-dots-vertical();
}

.cell:nth-child(3) {
  @include diamond-lattice();
}

.cell:nth-child(5) {
  @include color-dots();
}

.cell:nth-child(7) {
  @include letters-f();
}

.cell:nth-child(8) {
  @include piano();
}

.cell:nth-child(9) {
  @include double-stripes-vertical();
}

.cell:nth-child(10) {
  @include rays();
}

.cell:nth-child(11) {
  @include stripes-and-dots-horizontal();
}

.cell:nth-child(12) {
  @include dots();
}

.cell:nth-child(13) {
  @include beads-horizontal();
}

.cell:nth-child(14) {
  @include padded-bricks-vertical();
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

.cell:nth-child(21) {
  @include bowties-in-leaves();
}

.cell:nth-child(22) {
  @include beads-vertical();
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

.cell:nth-child(26) {
  @include diamond-chain-small-vertical();
}

.cell:nth-child(27) {
  @include rounded-bowties-diagonal();
}

.cell:nth-child(29) {
  @include dashed-double-stripes-vertical();
}

.cell:nth-child(30) {
  @include letters-h();
}

.cell:nth-child(32) {
  @include dot-checkers();
}

.cell:nth-child(33) {
  @include stripes-diagonal-both-sides-diff();
}

.cell:nth-child(34) {
  @include diagonal-triangles-four();
}

.cell:nth-child(35) {
  @include letters-a();
}

.cell:nth-child(38) {
  @include stripes-horizontal();
}

.cell:nth-child(39) {
  @include chains();
}

.cell:nth-child(41) {
  @include letters-x();
}

.cell:nth-child(42) {
  @include strike-through-chains();
}

.cell:nth-child(43) {
  @include diagonal-triangles-pair();
}

.cell:nth-child(44) {
  @include asymmetric-stars();
}

.cell:nth-child(45) {
  @include mickey();
}

.cell:nth-child(46) {
  @include letters-k();
}

.cell:nth-child(49) {
  @include letters-n();
}

.cell:nth-child(51) {
  @include stripes-vertical();
}

.cell:nth-child(52) {
  @include equilateral-triangles();
}

.cell:nth-child(54) {
  @include hypno();
}

.cell:nth-child(55) {
  @include dashed-stripes-horizontal();
}

.cell:nth-child(58) {
  @include letters-e();
}

.cell:nth-child(59) {
  @include lattice();
}

.cell:nth-child(61) {
  @include stars();
}

.cell:nth-child(62) {
  @include triangle-wave();
}

.cell:nth-child(63) {
  @include letters-t();
}

.cell:nth-child(67) {
  @include flowers();
}

.cell:nth-child(68) {
  @include color-stripes-horizontal();
}

.cell:nth-child(69) {
  @include dashed-circles();
}

.cell:nth-child(71) {
  @include padded-bricks-horizontal();
}

.cell:nth-child(72) {
  @include checkers-hypno();
}

.cell:nth-child(73) {
  @include half-dots();
}

.cell:nth-child(77) {
  @include double-stripes-different-widths-horizontal();
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

.cell:nth-child(83) {
  @include onigiri();
}

.cell:nth-child(84) {
  @include empty-dots();
}

.cell:nth-child(85) {
  @include round-corners();
}

.cell:nth-child(86) {
  @include letters-i();
}

.cell:nth-child(87) {
  @include hypno-propeller();
}

.cell:nth-child(88) {
  @include letters-c();
}

.cell:nth-child(89) {
  @include barbell();
}

.cell:nth-child(90) {
  @include letters-g();
}

.cell:nth-child(91) {
  @include striped-rays();
}

.cell:nth-child(92) {
  @include stripes-diagonal-north-east();
}

.cell:nth-child(93) {
  @include hypno-diff();
}

.cell:nth-child(94) {
  @include bowties-diagonal();
}

.cell:nth-child(95) {
  @include diamond-chain-big-horizontal();
}

.cell:nth-child(96) {
  @include padded-bricks-diagonal();
}

.cell:nth-child(97) {
  @include letters-z();
}

.cell:nth-child(99) {
  @include double-stripes-different-widths-vertical();
}

.cell:nth-child(100) {
  @include vases();
}

</style>
