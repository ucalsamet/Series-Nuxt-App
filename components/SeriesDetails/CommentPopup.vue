<template>
  <b-modal v-model="modalShow" id="commentmodal" title="Yorum Yap">
    <div class="d-flex flex-column">
      <div class="d-flex flex-column mt-4">
        <span class="title">Puan Ver</span>
        <hr />
        <div class="w-100 h-auto p-2">
          <b-form-rating
            id="rating-sm"
            v-model="comments.value"
            size="lg"
            no-border
            style="background-color: #f2e6ff;"
            variant="warning"
          ></b-form-rating>
        </div>
      </div>
      <div class="d-flex flex-column mt-4">
        <span class="title">Yorum Yap</span>
        <hr />
        <div class="w-100 h-auto p-2">
          <b-form-textarea
            id="textarea"
            v-model="comments.comment"
            placeholder="Yorumunuz..."
            rows="3"
            max-rows="3"
            no-resize
          ></b-form-textarea>
        </div>
      </div>
    </div>
    <template #modal-footer>
      <div class="w-100">
        <b-button
          class="float-right"
          variant="dark"
          size="md"
          @click="addComment()"
          >Yorum Yap</b-button
        >
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    commentModal: {
      type: Boolean,
      default: false
    },
    serie: {
      type: Object,
      default: {}
    },
    isAuth: {
      true: Boolean,
      default: false
    }
  },
  data() {
    return {
      comments: {
        comment: "",
        value: null
      },
      modalShow: this.commentModal
    };
  },
  methods: {
    addComment() {
      if (this.isAuth) {
        this.modalShow = false;
        this.$store.dispatch("addComment", {
          ...this.comments,
          serieID: this.serie._id,
          name: this.serie.name,
          userId: this.user._id,
          userName: this.user.name,
          userLastName: this.user.lastName,
          userpp: this.user.pp
        });
        this.$store.dispatch("addUserComment", {
          ...this.comments,
          serieUrl: this.serie.url,
          name: this.serie.name,
          userId: this.user._id
        });
      }else{
        alert("Bu özelliği kullanabilmek için giriş yapmalısınız!");
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 17px;
  color: #35495e;
  letter-spacing: 0px;
}
</style>
