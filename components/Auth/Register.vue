<template>
  <b-modal v-model="modalShow" id="registermodal" title="Kayıt Ol" no-stacking>
    <div class="d-flex flex-column">
      <b-alert
        v-model="showAlert"
        variant="danger"
        dismissible
        class="mb-2 mt-1"
      >
        Lütfen Bütün Alanları Doldurduğunuzdan Emin Olun!
      </b-alert>

      <div class="d-flex flex-row ">
        <b-form-select v-model="user.pp" trim class="mr-2 ct" :options="options1"></b-form-select>
        <b-avatar
          class="ml-2 ct"
          :src="user.pp"
          size="3rem"
        ></b-avatar>
      </div>

      <div class="d-flex flex-row mt-2">
        <b-form-input
          placeholder="Adınız"
          v-model="user.name"
          trim
          class="mr-2"
        ></b-form-input>
        <b-form-input
          placeholder="Soyadınız"
          v-model="user.lastName"
          trim
          class="ml-2"
        ></b-form-input>
      </div>

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

      <b-form-input
        v-model="user.date"
        trim
        class="mt-2"
        type="date"
      ></b-form-input>

      <b-form-radio-group
        v-model="user.male"
        :options="options"
        class="mt-2"
        value-field="item"
        text-field="name"
      ></b-form-radio-group>
      <b-form-input
        placeholder="Favori Diziniz"
        v-model="user.favorite"
        trim
        class="mt-2"
      ></b-form-input>

      <b-button
        block
        class="mt-2"
        variant="dark"
        size="md"
        @click="addComment()"
        >Kayıt Ol</b-button
      >
    </div>
    <template #modal-footer>
      <div class="w-100">
        <b-link class="float-right text" v-b-modal.loginmodal
          ><span>Zaten üye misiniz? Giriş yapın.</span></b-link
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
        name: "",
        lastName: "",
        email: "",
        password: "",
        date: "",
        favorite: "",
        male: "",
        pp:""
      },
      options: [
        { item: "Erkek", name: "Erkek" },
        { item: "Kadın", name: "Kadın" }
      ],
      options1: [
        { value: "", text: "Bir profil fotoğrafı seçin" },
        { value: "https://d.wattpad.com/story_parts/299/images/1600911cdedb8d37254714921842.jpg", text: "1" },
        { value: "https://i.pinimg.com/736x/2f/5e/c6/2f5ec676440325f20db8026f65cffc07.jpg", text: "2" },
        { value: "https://lh5.googleusercontent.com/proxy/feHrdA_-5A9NMDJ1ZW0ogNVDQpeFg84rmzdSjc6164lni8-xBHdE0Lh7_MXybf3yfy2YRapvpCRcCh8eSMICFak3EfAcN3IkJTcJrNKEdiFBhQPJYt2f5_bc5A=w1200-h630-p-k-no-nu", text: "3" },
        { value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQ2dLp12OVhiulBvMGWGRAgz11DCcUFsuBA&usqp=CAU", text: "4" },
        { value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MME8W_sTgHFrkmhzCo16Uap1LG_jEKBvXg&usqp=CAU", text: "5" },
        { value: "https://img-s1.onedio.com/id-5ba234b29395e24b107acb74/rev-0/w-500/s-7f7e10e0229a33ea5e213c8846cbf8352f62c5eb.jpg", text: "7" },
        { value: "https://img-s1.onedio.com/id-55a1baedfa8317962e466cb8/rev-0/w-500/s-92a905605734ad4f47250e8fbd6e3e535dc54b6c.jpg", text: "8" },
        { value: "https://telegramturkiye.com/wp-content/uploads/2019/12/see-320x310.jpg", text: "9" },
        { value: "https://eniyioneriler.com/wp-content/uploads/2019/03/sucdizisidexter-768x490.jpeg", text: "10" },
      ]
    };
  },
  methods: {
    addComment() {
      if (
        this.user.name !== "" &&
        this.user.lastName !== "" &&
        this.user.email !== "" &&
        this.user.password !== "" &&
        this.user.date !== "" &&
        this.user.favorite !== ""
      ) {
        this.modalShow = false;
        this.$store.dispatch("addUser", this.user);
      } else {
        this.showAlert = true;
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
.ct {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 17px;
  color: #35495e;
  letter-spacing: 0px;
}
.text {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: #23272b;
  letter-spacing: 0px;
}
</style>
