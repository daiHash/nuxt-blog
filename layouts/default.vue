<template>
  <div>
    <Header />
    <main>
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>


<style>

</style>
