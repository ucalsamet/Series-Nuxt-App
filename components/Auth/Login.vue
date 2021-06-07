<template>
  <b-modal v-model="modalShow" id="loginmodal" title="Giriş Yap">
    <div class="d-flex flex-column">
      <b-alert
        v-model="showAlert"
        variant="danger"
        dismissible
        class="mb-2 mt-1"
      >
        Lütfen Bütün Alanları Doldurduğunuzdan Emin Olun!
      </b-alert>

      <b-form-input
        placeholder="E-posta"
        v-model="user.email"
        trim
        class="mt-2"
      ></b-form-input>

      <b-form-input
        placeholder="Parola"
        v-model="user.password"
        trim
        class="mt-2"
        type="password"
      ></b-form-input>
    </div>
    <template #modal-footer>
      <div class="w-100">
        <b-button
          class="float-right"
          variant="danger"
          size="md"
          @click="loginUser()"
          >Giriş Yap</b-button
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
    }
  },
  data() {
    return {
      showAlert: false,
      comment: "",
      modalShow: this.commentModal,
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    loginUser() {
      if (
        this.user.email !== "" &&
        this.user.password !== ""
      ) {
        this.modalShow = false;
        this.$store.dispatch("loginUser",this.user).then(response => {
          if(response === "true"){
            this.$router.push("/")
          }else{
            this.showAlert = true;
          }
        })
      } else {
        this.showAlert = true;
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
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
