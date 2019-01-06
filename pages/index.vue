<template>
  <section>
    <div class="mainvisual"> </div>

    <h2 class="title">
      Recent Posts
    </h2>
    <PostsList :postList="loadedPosts" />
  </section>
</template>

<script>
import axios from 'axios';
import PostsList from '~/components/posts/PostsList';

export default {
  components: {
    PostsList
  },
  created() {
    this.fetchPosts();
    
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {
    fetchPosts() {
      axios.get('https://nuxt-blog-d7e65.firebaseio.com/posts.json')
        .then(response => {
          const postsArray = [];
          for (const key in response.data) {
            postsArray.push({ ...response.data[key], id: key });
          }
          this.$store.dispatch('setPost', postsArray);
        })
        .catch(err => {
          console.log(new Error(err));
          
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .mainvisual {
    background-image: url("~assets/images/top_mainvisual.jpg");
    background-position: 100% 50%;
    background-size: cover;
    width: 100%;
    height: 70vh;
    margin-top: 50px;
  }

  .container {
    /* min-height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #35495e;
    font-size: 3rem;
    letter-spacing: 1px;
    margin-top: 50px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

</style>
