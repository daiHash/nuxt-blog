<template>
  <section class="post-section">
    <ul class="post-list">
      <li class="post-item" v-for="(post, index) in postList" :key="index">
        <nuxt-link :to="isAdmin ? `/admin/${post.id}` : `/posts/${post.id}`">
          <div class="post-image">
            <img :src="post.imageUrl" :alt="`${post.title} image`">
          </div>

          <div class="post-content">
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-detail">
              {{ post.content }}
            </p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    postList: {
      type: Array,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
  .post-section {
    width: 100%;
    margin: 0 auto;
    .post-list {
      display: flex;
      // justify-content: space-between;
      flex-flow: row wrap;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
      margin: 30px 0 100px;
      .post-item {
        background-color: #fff;
        // width: calc(100% / 3.5);
        width: 370px;
        margin: 0 20px 50px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.35);
        transition: transform .2s;
        &:hover {
          transform: scale(1.1);
          z-index: 5;
          a {
            .post-image {
              img {
                transform: scale(1.05);
              }
            }
          }
        }
        a {
          .post-image {
            min-width: 250px;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            img {
              transform: scale(1.2);
              width: 100%;
              height: auto;
              transition: transform .2s;
            }
          }

          .post-content {
            padding: 20px;
            box-sizing: border-box;
            // border: .5px solid rgba(0, 0, 0, 0.15);
            .post-title {
              margin: 0 0 10px;
              h3 {

              }
            }

            .post-detail {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 75ch;
            }
          }
        }
      }
    }
  }
</style>

