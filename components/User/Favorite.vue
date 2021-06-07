<template>
  <div>
    <div v-for="item in user" :key="item._id">
      <b-row>
        <b-col
          md="3"
          v-for="serie in item.favoriteSeries.slice(0, 4)|| ''"
          :key="serie._id"
        >
          <div
            style="width: 270px; height: 120px; background-color:  #000000;"
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
                :to="'/categories/' + serie.serieID"
                :src="serie.url"
                size="5rem"
                rounded="lg"
              ></b-avatar>
              <div class="d-flex flex-column">
                <span class="name ml-3">{{ serie.name }}</span>
                <span class="subname mt-2 ml-3"
                  >{{ serie.type1 }}, {{ serie.type2 }}</span
                >
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col
          md="3"
          v-for="serie in item.favoriteSeries.slice(4, 8)|| ''"
          :key="serie._id"
        >
          <div
            style="width: 270px; height: 120px; background-color:  #000000;"
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
                :to="'/categories/' + serie.serieID"
                :src="serie.url"
                size="5rem"
                rounded="lg"
              ></b-avatar>
              <div class="d-flex flex-column">
                <span class="name ml-3">{{ serie.name }}</span>
                <span class="subname mt-2 ml-3"
                  >{{ serie.type1 }}, {{ serie.type2 }}</span
                >
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: { width: 255, height: 120, class: "m1" }
    };
  },
  props: {
    user: {
      type: Array,
      default: () => {
        return [];
      }
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
  color: #fff;
  letter-spacing: 1px;
  opacity: 1;
}
.cover {
  object-fit: cover;
}
</style>
