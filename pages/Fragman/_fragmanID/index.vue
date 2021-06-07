<template>
  <b-container>
    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <span class="title">{{ series.name }}</span>
        <span class="text ml-2">{{ getFragman.season }}</span>
        <div class="ml-auto">
          <b-button
            pill
            variant="dark"
            :to="'/categories/' + getFragman.serieID"
          >
            <fa icon="film" size="1x" />
            <span class="ml-1">Dizinin Sayfasına Gidin</span></b-button
          >
        </div>
      </div>
      <hr />
      <div class="w-100 h-auto p-4" style="background-color: #f2e6ff;">
        <div>
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="'https://www.youtube.com/embed/' + getFragman.fragman"
            allowfullscreen
          ></b-embed>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      mainProps: { width: 200, height: 290, class: "m1" }
    };
  },
  computed: {
    getFragman() {
      return this.$store.getters.getFragman(this.$route.params.fragmanID);
    },
    series() {
      let series = this.$store.getters.getSeries;
      let addFragman = {};
      series.forEach(i => {
        if (i._id === this.getFragman.serieID) {
          addFragman = {
            name: i.name
          };
        }
      });

      return addFragman;
    }
  }
};
</script>
<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
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
  font-size: 25px;
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
