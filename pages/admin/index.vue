<template>
  <div class="admin-page">
    <section class="new-post">
      <nuxt-link to="/admin/new-post">Create Post</nuxt-link>
    </section>

    <section class="existing-posts">
      <h1>Existing Pots</h1>
      <PostsList :postList="loadedPosts" :isAdmin="true" />
    </section>
  </div>
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
          
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  .admin-page {
    padding: 80px 20px 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    a {
      font-size: 1.5rem;
    }
  }

  .existing-posts {
    h1 {
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #35495e;
      font-size: 3rem;
      font-weight: 300;
      letter-spacing: 1px;
      margin-top: 50px;
    }
  }
</style>

