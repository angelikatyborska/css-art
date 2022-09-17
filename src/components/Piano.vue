<template>
  <div class="grid">
    <div>
      <div class="keyboard">
        <template
          v-for="key in keys"
        >
          <input type="radio"
                 name="note"
                 :value="key.index"
                 :id="key.index"
                 :key="key.index"
                 :class="key.className"
                 :data-note="key.note"
                 :data-index="key.index"
                 :data-octave-index="key.octaveIndex"
          />

          <label
            :value="key.index"
            :key="key.index"
            :for="key.index"
            :data-color="key.color"
            :data-note="key.note"
            :data-index="key.index"
            :data-octave-index="key.octaveIndex"
            :data-staff-position="key.staffPosition"
          >
            <div class="staff-part"></div>

            <div class="note">
              <div class="note-tail"></div>
              <div class="note-body"></div>
            </div>

            <div class="note-name">
              {{ key.note }}{{ key.octaveIndex }}
            </div>
          </label>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Piano',
  props: {
    msg: String,
  },
  data: () => {
    let currentNote = 'C';
    let currentOctave = 1;
    let currentStaffPosition = 0;

    const notes = ['C', 'C-sharp', 'D', 'D-sharp', 'E', 'F', 'F-sharp', 'G', 'G-sharp', 'A', 'A-sharp', 'H'];
    let keys = [];
    const keyCount = 49;
    for (let i = 0; i < keyCount; i += 1) {
      keys.push(currentNote);
      let nextNoteIndex = notes.indexOf(currentNote) + 1;
      if (nextNoteIndex >= notes.length) {
        nextNoteIndex = 0;
      }

      currentNote = notes[nextNoteIndex];
    }

    keys = keys.map((key, index) => {
      if (key === 'C') { currentOctave += 1; }
      const color = key.includes('sharp') ? 'black' : 'white';
      if (color === 'white') { currentStaffPosition += 1; }
      return {
        note: key,
        color,
        index,
        className: `key key--${color}`,
        octaveIndex: currentOctave,
        staffPosition: currentStaffPosition,
      };
    });

    return { keys };
  },
};
</script>

<style scoped lang="scss">
@use "sass:math";
@import "../variables.scss";

$grid-padding: 0;

.keyboard {
  display: flex;
  flex-direction: row;
  position: relative;
  border: 0.02em solid $light-gray;
  border-radius: 0.01em;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 2%;
    background-image: linear-gradient(to bottom, rgba(black, 0.5) 0%, rgba(black, 0) 100%);
  }
}

$key-count: 49;
$white-key-count: 29;
$white-key-width: math.div(100%, $white-key-count);
$white-key-height: $white-key-width * 5;
$black-key-width: $white-key-width * 0.53;
$black-key-height: $white-key-height * 0.66;
$key-border-radius: 4px;
$note-color: $light-gray;
$note-checked-color: black;
$note-tail-height: 0.06em;
$note-tail-width: clamp(1px, 0.5vw, 2px);
$note-body-width: 0.025em;
$note-body-height: 0.015em;

$keyboard-height: $white-key-height;
$keyboard-top-offset: 0.2em;
$staff-top-offset: 0.1em;
$staff-bottom-offset: "(0.4em + #{$note-body-height + $note-tail-height})";

$staff-line-height: $note-tail-width;
$staff-part-width: 1.5 * $note-body-width;

.grid {
  @include square-canvas-child();
  position: relative;
}

.keyboard {
  position: relative;
  top: $keyboard-top-offset;
}

.key {
  @include button-reset();
  position: relative;
  height: 0;
  cursor: pointer;

  &--white {
    color: black;
    background: transparent;
    width: $white-key-width;
    padding-top: $white-key-height;
    z-index: 1;
    box-shadow: 2px 2px 0 1px rgba(black, 0.3), 0 6px 0 0 rgba(black, 0.3);
    border-bottom-right-radius: $key-border-radius;
    border-bottom-left-radius: $key-border-radius;
  }

  &--black {
    color: white;
    background-color: black;
    width: $black-key-width;
    padding-top: $black-key-height;
    margin-left: -0.5 * $black-key-width;
    margin-right: -0.5 * $black-key-width;
    z-index: 2;
    border-bottom-right-radius: $key-border-radius;
    border-bottom-left-radius: $key-border-radius;
  }

  &:checked {
    background: $accent;
  }
}

.note {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  mix-blend-mode: darken;

  .note-body {
    width: $note-body-width;
    height: $note-body-height;
    background-color: $note-color;
    border-radius: 50%;
    $angle: 22deg;
    transform: rotate(-$angle);
    transform-origin: left center;
    //$theoretical-margin-top: (-0.5 * $note-body-height) + $note-body-width * math.sin($angle);
    $theoretical-margin-right: -1 * $note-body-width * (1 - math.cos($angle));
    // I failed at exact math based adjustments so I am adding some arbitrary values to make it look better
    margin-top: 0;
    margin-right: $theoretical-margin-right * 0.8;
    margin-bottom: (-0.5 * $note-body-height) - 0.5 * $note-body-width * math.sin($angle);
  }

  .note-tail {
    height: $note-tail-height;
    width: $note-tail-width;
    background: $note-color;
    border-radius: $note-tail-width;
  }
}

.note-name {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  display: none;
  background: $light-gray;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1rem;
  white-space: nowrap;
}

.staff-part {
  position: absolute;
  top: calc(100% - #{$staff-line-height / 2});
  left: 50%;
  transform: translateX(-50%);
  background-color: $light-gray;
  height: $staff-line-height;
  width: $staff-part-width;
  display: none;
  z-index: -1;
  pointer-events: none;
}

label {
  $base-top-offset: "(100% + #{$staff-top-offset})";

  position: absolute;
  cursor: pointer;

  $min-offset: $base-top-offset;
  $max-offset: "(#{math.div(100%, $white-key-height) * 100%} - #{$staff-bottom-offset})";

  @for $i from 0 through $white-key-count {
    &[data-staff-position="#{$i}"] {
      top: calc(#{$base-top-offset} + ((#{$max-offset} - #{$min-offset}) * (#{$white-key-count - $i} / #{$white-key-count})));
      left: #{math.div(100%, $white-key-count) * ($i - 1)};
    }
  }

  &[data-color="white"] {
    z-index: 2;
  }

  &[data-color="black"] {
    .note {
      opacity: 0;
    }
  }

  input:checked + &[data-color="black"] {
    .note {
      &::after {
        content: '♯';
        display: block;
        font-size: $note-body-height * 3;
        position: absolute;
        right: 100%;
        bottom: 0;
        transform: translateY(50%);
      }
    }
  }

  input:checked + & {
    z-index: 3;
    color: $note-checked-color;

    .staff-part {
      background: $note-checked-color;
    }

    .note {
      opacity: 1;

      .note-body, .note-tail {
        background-color: $note-checked-color;
      }
    }

    .note-name {
      display: block;
    }
  }

  // selector needs adjusting if first note on the keyboard changes
  @for $i from 0 through math.ceil(math.div($white-key-count, 2)) {
    $staff-position: $i * 2 + 1;

    &[data-staff-position="#{$staff-position}"] {
      .staff-part {
        display: block;
      }
    }

    @if (
      ($staff-position >= 17) and ($staff-position <= 26) // treble key
      or
      ($staff-position >= 5) and ($staff-position <= 13) // bass key
    ) {
      &[data-staff-position="#{$staff-position}"] {
        .staff-part {
          content: "#{math.div($staff-position - 1, $white-key-count)}";
          width: 1em;
          left: calc(-1em * #{math.div($staff-position - 0.5, $white-key-count + 1 )});
          transform: none;
          background: $note-checked-color;
        }
      }
    }
  }
}

</style>
