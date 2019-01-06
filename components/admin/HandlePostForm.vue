<template>
  <form class="new-post-form" @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
            
    <AppControlInput v-model="editedPost.imageUrl">Thumbnail Link</AppControlInput>
            
    <AppControlInput
              control-type="textarea"
              v-model="editedPost.content">Content</AppControlInput>

            
    <AppButton type="submit">Save</AppButton>
            
    <AppButton
              type="button"
              style="margin-left: 10px"
              btn-style="cancel"
              @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import marked from 'marked';
import AppControlInput from '~/components/ui/AppControlInput';
import AppButton from '~/components/ui/AppButton';

export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  // data() {
  //   return {
  //     editedPost: this.post 
  //       ? { ...this.post } 
  //       : {
  //           author: '',
  //           title: '',
  //           imageUrl: '',
  //           content: ''
  //         },
  //   }
  // },
  computed: {
    editedPost() {
      return this.post 
        ? { ...this.post } 
        : {
            author: '',
            title: '',
            imageUrl: '',
            content: ''
        }
    },
    // compiledMarkdown: function () {
    //   return marked(this.editedPost.content, { sanitize: true })
    // }
  },
  methods: {
    onCancel() {
      this.$router.push('/admin');
    },
    onSave() {
      this.$emit('submit', this.editedPost);
      
    }
  }
}
</script>
