<template>
  <div class="w-100 h-auto p-4 mt-4" style="background-color: #f2e6ff;">
    <div class="d-flex flex-row">
      <div class="d-flex flex-column">
        <div style="width: 200px; height: 290px;" class="position-relative">
          <b-img
            v-bind="mainProps"
            class="position-absolute"
            :src="serie.url"
          ></b-img>
        </div>
        <div class="mt-2">
          <b-button v-b-modal.fragmanmodal pill block variant="secondary"
            ><b-icon icon="tv" scale=".8"></b-icon>
            <span class="ml-1">Fragman</span></b-button
          >
        </div>
        <div class="mt-1">
          <b-button
            pill
            block
            variant="secondary"
            v-b-modal.commentmodal
            @click="commentModal = true"
            ><b-icon icon="chat-dots" scale=".8"></b-icon>
            <span class="ml-1">Yorum Yap</span></b-button
          >
        </div>
      </div>
      <SeriesDetailsFragmanPopup :serie="serie" />
      <SeriesDetailsCommentPopup
        :isAuth="isAuth"
        :commentModal="commentModal"
        :serie="serie"
      />
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <span class="name ml-3">{{ serie.name }}</span>
          <div
            class="ml-2 border d-flex flex-row text-center mt-2"
            style="width: 62px; height: 20px; background-color:  #dead28;"
          >
            <span class="imdb ml-1">imdb:</span>
            <span class="score ml-1">{{ serie.imdb }}</span>
          </div>
          <div
            class="ml-2 border d-flex flex-row text-center mt-2"
            style="width: 72px; height: 20px; background-color:  #660033;"
          >
            <b-icon icon="star-fill" variant="warning" class="ml-1"></b-icon>
            <span class="score ml-2 mb-1">{{ getValue }} / 5</span>
          </div>
          <div class="ml-auto text-center">
            <b-button pill :variant="btnColor"
              ><b-icon
                icon="heart-fill"
                scale=".8"
                :variant="icnColor"
              ></b-icon>
              <span class="ml-1" @click="addFavorite"
                >Favorilere Ekle</span
              ></b-button
            >
          </div>
        </div>
        <div class="d-flex flex-row mt-2">
          <div class="ml-3">
            <b-icon
              icon="globe"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1">{{ serie.production }}</span>
          <span class="subname ml-1 mb-1">|</span>

          <div class="ml-2">
            <b-icon
              icon="calendar2-check"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1">{{ serie.year }}</span>
          <span class="subname ml-1 mb-1">|</span>

          <div class="ml-2">
            <b-icon
              icon="film"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1">{{ serie.type1 }}, {{ serie.type2 }}</span>

          <span class="subname ml-1 mb-1">|</span>

          <div class="ml-2">
            <b-icon
              icon="camera-reels"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1">Sezon Sayısı: {{ serie.season }}</span>
        </div>
        <hr class="ml-3" />
        <div
          class="ml-3"
          style="width: 800px; height: 160px; background-color:  #f2e6ff;"
        >
          <span class="text">
            {{ serie.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serie: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
    if (this.isAuth === true) {
      this.user;
    }
  },
  data() {
    return {
      mainProps: { width: 200, height: 290, class: "m1" },
      commentModal: false,
      btnColor: "dark",
      icnColor: "danger",
      click: false
    };
  },
  methods: {
    addFavorite() {
      if (this.isAuth === true) {
        if (this.user === false && this.click === false) {
          this.click = true;
          this.btnColor = "danger";
          this.icnColor = "dark";
          this.$store.dispatch("addFavorite", {
            name: this.serie.name,
            url: this.serie.url,
            serieID: this.serie._id,
            type1: this.serie.type1,
            type2: this.serie.type2,
            userId: this.userId._id
          });
        } else {
          this.click = false;
          this.btnColor = "dark";
          this.icnColor = "danger";
          this.$store.dispatch("removeFavorite", {
            serieID: this.serie._id,
            userId: this.userId._id
          });
        }
      } else {
        alert("Bu özelliği kullanabilmek için giriş yapmalısınız!");
      }
    }
  },
  computed: {
    user() {
      let favoriteSeries = this.$store.getters.getUser.favoriteSeries;
      let isFavorite = false;
      favoriteSeries.forEach(item => {
        if (item.name === this.serie.name) {
          isFavorite = true;
        }
      });
      if (isFavorite) {
        this.btnColor = "danger";
        this.icnColor = "dark";
      }
      return isFavorite;
    },
    isAuth() {
      return this.$store.getters.isAuthenticeted;
    },
    userId() {
      return this.$store.getters.getUser;
    },
    getValue() {
      let comments = this.$store.getters.getComments;
      let toplam = 0;
      let toplamYorum = 0;
      comments.forEach(i => {
        if (i.serieID === this.serie._id) {
          toplam += i.value;
          toplamYorum++;
        }
      });
      if (toplamYorum > 0) {
        let value = toplam / toplamYorum;
        return value.toFixed(1);
      } else {
        return 0;
      }
    }
  }
};
</script>
<style scoped>
.ct {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.name {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 21px;
  color: #000000;
  letter-spacing: 0px;
  opacity: 1;
}
.subname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
.text {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
.imdb {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #322708;
  letter-spacing: 0px;
  opacity: 1;
}
.score {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0px;
  opacity: 1;
}

.border {
  border-radius: 0.25em;
}
</style>
