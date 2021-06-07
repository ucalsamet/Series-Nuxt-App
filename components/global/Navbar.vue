<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="colorbg">
      <b-navbar-brand to="/">Series</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/categories">Kategoriler</b-nav-item>
          <b-nav-item to="/addSeries">Dizi Ekle</b-nav-item>
          <b-nav-item to="/addFragman">Fragman Ekle</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="isAuth === false">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Giriş Yap</em>
            </template>
            <b-dropdown-item v-b-modal.loginmodal>Giriş Yap</b-dropdown-item>
            <b-dropdown-item v-b-modal.registermodal>Kayıt Ol</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Hesabım</em>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item to="/" @click="logOut">Çıkış Yap</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <AuthRegister />
    <AuthLogin />
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
    isAuth(){
      return this.$store.getters.isAuthenticeted
    }
  },
  methods:{
    logOut(){
      this.$store.dispatch("logOut")
    }
  }
};
</script>

<style>
.colorbg {
  background: #660033;
}
</style>
