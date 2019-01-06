<template>
  <div class="admin-new-post-page">
    <section class="new-post-section">
      <PostForm :post="loadedPost" @submit="updatePost" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import PostForm from '~/components/admin/HandlePostForm';

export default {
  components: {
    PostForm,
  },
  data() {
    return {
      loadedPost: {}
    }
  },
  created() {
    // this.fetchPostData(this.$route.params.postId);
  },
  asyncData(context) {
    return axios.get(`https://nuxt-blog-d7e65.firebaseio.com/posts/${context.params.postId}.json`)
      .then(response => {
        return {
          loadedPost: { ...response.data, id: context.params.postId }
        }
      })
      .catch(err => {
        context.error(err);
      })
  },
  methods: {
    fetchPostData(id) {
      axios.get(`https://nuxt-blog-d7e65.firebaseio.com/posts/${id}.json`)
        .then(response => {
          const post = response.data;
          this.loadedPost = {
            author: post.author,
            title: post.title,
            imageUrl: post.imageUrl,
            content: post.content
          }
        })
        .catch(err => {
          console.log(new Error(err));
          
        })
    },
    updatePost(editedPost) {
      console.log(editedPost);
      
      this.$store.dispatch('editPost', { ...editedPost})
        .then(() => {
          this.$router.push('/admin');
        })
      //  axios.put(`https://nuxt-blog-d7e65.firebaseio.com/posts/${this.$route.params.postId}.json`, editedPost)
      //   .then(response => {
      //     this.$router.push('/admin');
      //   })
      //   .catch(err => {
      //     console.log(new Error(err));
          
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
  .admin-new-post-page {
    width: 100%;
    margin-top: 100px;
    .new-post-section {
      width: 80%;
      margin: 0 auto;
      .new-post-form {

      }
    }
  }
</style>