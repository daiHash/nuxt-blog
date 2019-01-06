<template>
  <section class="post-container">
    <div class="post-image">
      <img :src="post.imageUrl" alt="">
    </div>

    <div class="post-content">
      <div class="post-title">
        <h1>{{ post.title }}</h1>
      </div>

      <div class="post-detail">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  asyncData(context) {
    return axios.get(`https://nuxt-blog-d7e65.firebaseio.com/posts/${context.params.id}.json`)
      .then(response => {
        return {
          post: response.data
        }
      })
      .catch(err => {
        console.log(err);
        context.error(err);
      })
  }
  
}
</script>

<style lang="scss" scoped>
.post-container {
  width: 80%;
  margin: 100px auto;
  text-align: center;
  .post-image {
    img {

    }
  }

  .post-content {
    // text-align: left;
    .post-title {
      margin: 30px 0;
      h1 {

      }
    }

    .post-detail {
      p {

      }
    }
  }
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
</style>
