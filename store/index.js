import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      setPost(state, post) {
        state.posts = post;
      },
      addPost(state, post) {
        state.posts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.posts.findIndex(post => {
          post.id === editedPost.id
        })
        state.posts[postIndex] = editedPost;
      }
    },
    actions: {
      async nuxtServerInit({commit}, context) {
        try {
          const response = await axios.get('https://nuxt-blog-d7e65.firebaseio.com/posts.json');
          const postsArray = [];
          for (const key in response.data) {
            postsArray.push({ ...response.data[key], id: key });
          }
          commit('setPost', postsArray);
        }
        catch (err) {
          console.log(new Error(err));
        }
      },
      setPost({commit}, post) {
        commit('setPost', post);
      },
      addPost({commit}, postData) {
        const createdPost = {
          ...postData
        }

        return axios.post('https://nuxt-blog-d7e65.firebaseio.com/posts.json', createdPost)
          .then(response => {
            commit('addPost', { ...createdPost, id: response.data.name })
          })
          .catch(err => {
            console.log(new Error(err));
          })
      },
      editPost({commit}, post) {
        return axios.put(`https://nuxt-blog-d7e65.firebaseio.com/posts/${post.id}.json`, post)
          .then(response => {
            commit('editPost', post);
          })
          .catch(err => {
            console.log(new Error(err));
            
          })
      }
    },
    getters: {
      loadedPosts(state) {
        return state.posts;
      }
    }
  })
}

export default createStore;