<template>
  <div id="app">
    <nav>
      <section>
        <header>10x10 grids</header>
        <router-link to="/triangles1">1</router-link>
        <router-link to="/triangles2">2</router-link>
        <router-link to="/circles1">3</router-link>
        <router-link to="/squares1">4</router-link>
        <router-link to="/circlessquares1">5</router-link>
        <router-link to="/pattern1">6</router-link>
        <router-link to="/pattern2">7</router-link>
      </section>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
};
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}

#app {
  background-color: white;
  display: grid;
  grid-template-columns: 10vw auto 10vw;
}
nav {
  padding: 1rem;

  section {
    a {
      margin-right: 1rem;
    }
  }
}
</style>
