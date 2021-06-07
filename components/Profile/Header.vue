<template>
  <div
        class="w-100 h-auto p-4 d-flex flex-row mb-3"
        style="background-color: 	  #e0e0eb;"
      >
    <b-avatar :src="user.pp" size="6rem"></b-avatar>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row">
        <div class="d-flex flex-row">
          <span class="name ml-3">{{user.name}} {{user.lastName}}</span>
        </div>
        <div class="ml-auto">
          <div class="d-flex flex-row">
           
            <span class="text">Favori: {{user.favoriteSeries.length}}</span>

           
            <span class="text">Yorum: {{user.comments.length}}</span>
          </div>
        </div>
      </div>
      <hr class="ml-3" />

      <div class="ml-3" style="width: 930px; height: 50px;">
        <div class="d-flex flex-row">
         
          <div class="text d-flex flex-row">
            Katılım Tarihi:<span class="textbold ml-1"> {{user.uploadDate}}</span>
          </div>

      
          <div class="text d-flex flex-row">
            Cinsiyet: <span class="textbold ml-1">{{user.male}}</span>
          </div>
      
          <div class="text d-flex flex-row">
            Favori Dizi:
            <span class="textbold ml-1">{{user.favorite}}</span>
          </div>

     
          <div class="text d-flex flex-row">
            Doğum Tarihi:<span class="textbold ml-1">  {{user.date}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.getters.getUser
    }
  }
};
</script>

<style></style>
