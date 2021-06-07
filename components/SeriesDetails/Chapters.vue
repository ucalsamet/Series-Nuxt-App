<template>
  <div>
    <b-row>
      <b-col md="3" v-for="serie in series.slice(0, 4)|| ''" :key="serie.serieID">
        <div
          style="width: 260px; height: 120px; background-color:  #000000;"
          class="position-relative"
        >
          <b-img
            v-bind="mainProps"
            class="position-absolute cover"
             :src="serie.url"
            alt="Image 1"
            style="opacity: 0.3;"
          ></b-img>
          <div
            class="position-absolute d-flex flex-row"
            style="width: 240px; top:20px; left:15px;"
          >
            <b-avatar
              :to="'/fragman/' + serie.fragmanID"
              :src="serie.url"
              size="5rem"
              rounded="lg"
            ></b-avatar>
            <div class="d-flex flex-column">
              <b-link :to="'/fragman/' + serie.fragmanID">
                <span class="name ml-3">{{ serie.season }}</span>
              </b-link>
              <span class="subname mt-2 ml-3">{{ serie.uploadDate }}</span>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col md="3" v-for="serie in series.slice(4, 8)|| ''" :key="serie.serieID">
        <div
          style="width: 260px; height: 120px; background-color:  #000000;"
          class="position-relative"
        >
          <b-img
            v-bind="mainProps"
            class="position-absolute cover"
             :src="serie.url"
            alt="Image 1"
            style="opacity: 0.3;"
          ></b-img>
          <div
            class="position-absolute d-flex flex-row"
            style="width: 240px; top:20px; left:15px;"
          >
            <b-avatar
              :to="'/fragman/' + serie.fragmanID"
               :src="serie.url"
              size="5rem"
              rounded="lg"
            ></b-avatar>
            <div class="d-flex flex-column">
              <b-link :to="'/fragman/' + serie.fragmanID">
                <span class="name ml-3">{{ serie.name }}</span>
              </b-link>
              <span class="subname mt-2 ml-3"
                >{{ serie.uploadDate }}</span
              >
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
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
  data() {
    return {
      mainProps: { width: 245, height: 120, class: "m1" }
    };
  },
  computed: {
    series() {
      let fragman = this.$store.getters.getFragmans;
      let chapters = [];
      let addFragman = {};
      fragman.forEach(i => {
          if (i.serieID === this.serie._id) {
            addFragman = {
              name: this.serie.name,
              url: this.serie.url
            };
            chapters.push({
              fragmanID: i._id,
              serieID: i.serieID,
              uploadDate: i.uploadDate,
              season: i.season,
              ...addFragman
            });
          }
      });
      chapters.reverse();

      return chapters;
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
.subname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 13px;
  color: rgb(172, 172, 172);
  letter-spacing: 1px;
  opacity: 1;
}
.cover {
  object-fit: cover;
}
</style>
