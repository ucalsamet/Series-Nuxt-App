<template>
  <b-container>
    <div class="d-flex flex-column">
      <div>
        <SeriesDetailsHeader :serie="getSerie" />
      </div>
      <div class="d-flex flex-column mt-4">
        <span class="title">Bölümler</span>
        <hr />
        <div class="w-100 h-100 p-4" style="background-color: #f2e6ff;">
          <SeriesDetailsChapters :serie="getSerie" />
        </div>
      </div>
      <div class="d-flex flex-column mt-4">
        <span class="title">Yorumlar</span>
        <hr />
        <div class="w-100 h-100 p-4" style="background-color: #f2e6ff;">
          <SeriesDetailsComments :serie="getSerie" />
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getSerie() {
      return this.$store.getters.getSerie(this.$route.params.serieID);
    }
  }
};
</script>
<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 0.5px;
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
