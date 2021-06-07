<template>
  <div>
    <b-row>
      <b-col v-for="serie in series.slice(0, 4) || ''" :key="serie.serieID" md="3">
        <div style="width: 250; height: 150px;" class="position-relative">
          <b-link :to="'/fragman/' + serie.fragmanID">
            <b-img
              v-bind="mainProps"
              class="position-absolute cover"
              :src="serie.url"
              alt="Image 1"
            ></b-img>
            <div
              class="position-absolute d-flex flex-column"
              style="background-color:  #000000; width: 250px; height: 60px; top:90px; opacity: 0.7;"
            >
              <span class="name ml-3">{{ serie.name }}</span>
              <div class="d-flex flex-row ml-1 mt-1">
                <span class="season ml-3 mt-2">{{serie.season}}</span>
                <div
                  class="ml-auto mr-2 text-center"
                  style="width: 50px; height: 25px; background-color:  #990000;"
                >
                  <span class="date mt-1">{{ serie.uploadDate }}</span>
                </div>
              </div>
            </div>
          </b-link>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col v-for="serie in series.slice(4, 8) || ''" :key="serie._id" md="3">
        <div style="width: 250; height: 150px;" class="position-relative">
          <b-link :to="'/fragman/' + serie.fragmanID">
            <b-img
              v-bind="mainProps"
              class="position-absolute cover"
              :src="serie.url"
              alt="Image 1"
            ></b-img>
            <div
              class="position-absolute d-flex flex-column"
              style="background-color:  #000000; width: 250px; height: 60px; top:90px; opacity: 0.7;"
            >
              <span class="name ml-3">{{ serie.name }}</span>
              <div class="d-flex flex-row ml-1 mt-1">
                <span class="season ml-3 mt-2">{{ serie.season }}</span>
                <div
                  class="ml-auto mr-2 text-center"
                  style="width: 50px; height: 25px; background-color:  #990000;"
                >
                  <span class="date mt-1">{{ serie.uploadDate }}</span>
                </div>
              </div>
            </div>
          </b-link>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="serie in series.slice(8, 12)|| ''" :key="serie.serieID" md="3">
        <div style="width: 250; height: 150px;" class="position-relative">
          <b-link :to="'/fragman/' + serie.fragmanID">
            <b-img
              v-bind="mainProps"
              class="position-absolute cover"
              :src="serie.url"
              alt="Image 1"
            ></b-img>
            <div
              class="position-absolute d-flex flex-column"
              style="background-color:  #000000; width: 250px; height: 60px; top:90px; opacity: 0.7;"
            >
              <span class="name ml-3">{{ serie.name }}</span>
              <div class="d-flex flex-row ml-1 mt-1">
                <span class="season ml-3 mt-2">{{ serie.season }}</span>
                <div
                  class="ml-auto mr-2 text-center"
                  style="width: 50px; height: 25px; background-color:  #990000;"
                >
                  <span class="date mt-1">{{ serie.uploadDate }}</span>
                </div>
              </div>
            </div>
          </b-link>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: { width: 250, height: 150, class: "m1" }
    };
  },
  computed: {
    series() {
      let fragman = this.$store.getters.getFragmans;
      let series = this.$store.getters.getSeries;
      let normalSeries = [];
      let addFragman = {};
      fragman.forEach(i => {
        if (i.category === "1" || i.category === "2") {
          series.forEach(j => {
            if (i.serieID === j._id) {
              addFragman = {
                name: j.name,
                url:j.url
              };
              normalSeries.push({
                fragmanID: i._id,
                serieID: i.serieID,
                uploadDate: i.uploadDate,
                season: i.season,
                ...addFragman
              });
            }
          });
        }
      });
      return normalSeries;
    }
  }
};
</script>
<style scoped>
.name {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  letter-spacing: 1px;
  opacity: 1;
}
.season {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 13px;
  color: #fff;
  letter-spacing: 1px;
  opacity: 1;
}

.date {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 11px;
  color: #fff;
  letter-spacing: 1px;
  opacity: 1;
}
.cover {
  object-fit: cover;
}
</style>
