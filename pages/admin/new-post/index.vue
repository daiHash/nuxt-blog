<template>
  <div class="admin-new-post-page">
    <section class="new-post-section">
      <PostForm @submit="onSubmitted" />
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
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData)
        .then(() => {
          this.$router.push('/admin');
        })
    }
  },
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


