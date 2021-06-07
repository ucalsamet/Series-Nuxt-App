<template>
  <div
      class="w-100 h-auto p-4 d-flex flex-row mb-3"
      style="background-color: #d9d9d9;"
    >
      <b-avatar :src="user.pp" size="6rem"></b-avatar>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <div class="d-flex flex-row">
            <span class="username ml-3"
              >{{ user.name }} {{ user.lastName }}</span
            >
          </div>
          <div class="ml-auto">
            <div class="d-flex flex-row ct">
              <b-icon
                icon="heart-fill"
                variant="danger"
                scale="0.9"
                class="mr-1"
              ></b-icon>
              <span class="subname"
                >Favori: {{ user.favoriteSeries.length }}</span
              >

              <b-icon
                icon="chat-quote-fill"
                variant="success"
                scale="0.9"
                class="ml-2 mr-1"
              ></b-icon>

              <span class="subname">Yorum: {{ user.comments.length }}</span>
            </div>
          </div>
        </div>
        <hr class="ml-3" />

        <div class="ml-3" style="width: 930px; height: 50px;">
          <div class="d-flex flex-row">
            <div class="subname d-flex flex-row ct">
              <b-icon
                icon="door-open"
                variant="primary"
                scale="0.9"
                class="mr-1"
              ></b-icon>
              Katılım Tarihi:<span class="textbold ml-1">
                {{ user.uploadDate }}</span
              >
            </div>

            <div class="subname d-flex flex-row ct">
              <b-icon
                icon="person-circle"
                variant="primary"
                scale="0.9"
                class="mr-1"
              ></b-icon>

              Cinsiyet: <span class="textbold ml-1">{{ user.male }}</span>
            </div>
            <div class="subname d-flex flex-row ct">
              <b-icon
                icon="patch-check-fill"
                variant="primary"
                scale="0.9"
                class="mr-1"
              ></b-icon>
              Favori Dizi:
              <span class="textbold ml-1">{{ user.favorite }}</span>
            </div>

            <div class="subname d-flex flex-row ct">
              <b-icon
                icon="bookmark-heart-fill"
                variant="primary"
                scale="0.9"
                class="mr-1"
              ></b-icon>
              Doğum Tarihi:<span class="textbold ml-1"> {{ user.date }}</span>
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

<style>
.ct {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.username {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 21px;
  color: #ca2333;
  letter-spacing: 0px;
  opacity: 1;
}
.subname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 17px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
.textbold{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 17px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
</style>

