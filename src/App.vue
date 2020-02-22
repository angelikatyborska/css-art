<template>
  <div id="app">
    <nav>
      <header>css art</header>
      <section>
        <header>grids: </header>
        <router-link :key="link" v-for="link in links.grids" :to="link">
          {{ link }}
        </router-link>
      </section>
      <section>
        <header>misc: </header>
        <router-link :key="link" v-for="link in links.misc" :to="link">
          {{ link }}
        </router-link>
      </section>
      <footer>
        <p>use left/right arrows to navigate</p>
        <label for="accent-color">accent:</label>
        <input id="accent-color" type="color" name="accent" value="#e20909"
               v-on:change="onColorChange" />
      </footer>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <strong>source: </strong><a href="https://github.com/angelikatyborska/css-art">github.com/angelikatyborska/css-art</a>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  created() {
    window.addEventListener('keyup', this.onKeyup);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.onKeyup);
  },
  data() {
    return {
      links: {
        grids: [
          'triangles',
          'triangles2',
          'lines',
          'lines2',
          'circles',
          'squares',
          'circles-squares',
          'pattern',
          'pattern2',
          'pattern3',
          'eyes',
        ],
        misc: [
          'flower',
          'hex',
          'sierpinski-triangle',
        ],
      },
    };
  },
  computed: {
    allLinks() {
      return [...this.links.grids, ...this.links.misc];
    },
  },
  methods: {
    onKeyup(event) {
      switch (event.key) {
        case 'ArrowLeft':
          this.prev(event);
          break;
        case 'ArrowRight':
          this.next(event);
          break;
        default:
          break;
      }
    },
    nextLinkIndex(shift) {
      const i = this.allLinks.findIndex(x => this.$router.currentRoute.path === `/${x}`);
      return this.mod((i + shift), this.allLinks.length);
    },
    prev() {
      const i = this.nextLinkIndex(-1);
      this.$router.push({ path: this.allLinks[i] });
    },
    next() {
      const i = this.nextLinkIndex(1);
      this.$router.push({ path: this.allLinks[i] });
    },
    mod(n, m) {
      return ((n % m) + m) % m;
    },
    onColorChange(event) {
      const root = document.querySelector(':root');
      root.style.setProperty('--accent-color', event.target.value);
    },
  },
};
</script>

<style lang="scss">
@import './variables.scss';

:root {
  --accent-color: #e20909;
}

html, body {
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}

#app {
  background-color: white;
  display: grid;
  grid-template-columns: 20vw auto 20vw;
  width: 100vw;
  height: 100vh;
}

nav {
  padding: 1rem;

  > header {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  > section {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    header {
      margin-right: 1rem;
      font-weight: bold;
    }

    a {
      margin-right: 1rem;
    }
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  > footer {
    align-self: unset;
    padding: unset;
  }
}

footer {
  align-self: end;
  padding: 1rem;
}

a {
  color: black;
  word-wrap: break-word;

  &.router-link-exact-active {
    text-decoration: none;
    color: $accent;
  }
}
</style>
