<template>
  <section class="container">
    <div>
      <h1 class="title">
        first-nuxt-app
      </h1>
      <h2 class="subtitle">
        My neat Nuxt.js project posts page
      </h2>
      <div class="links">
        <nuxt-link to="/">Back to home 😀</nuxt-link>
        <nuxt-link to="/posts/1">Post #1 😀</nuxt-link>
        <nuxt-link to="/posts/2">Post #2 😀</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
// function roll() {
//   console.log(123)
  
// }

// if (process.client) {
//   window.addEventListener('scroll', () => {
//     roll();
//   })
// }

export default {
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
