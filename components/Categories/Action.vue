<template>
  <div class="d-flex flex-row">
    <div
      style="width: 200px; height: 290px;"
      class="position-relative ml-2"
      v-for="serie in seriesAksiyon.slice(0,5) || ''"
      :key="serie._id"
    >
      <b-link :to="'/categories/' + serie._id">
        <b-img
          v-bind="mainProps"
          class="position-absolute"
          :src="serie.url"
          alt="Image 1"
        ></b-img>
        <div
          class="position-absolute d-flex flex-column"
          style="background-color:  #000000; width: 200px; height: 60px; top:230px; opacity: 0.7;"
        >
         <div  style="width: 300px;">
            <span class="name ml-3">{{ serie.name }}</span>
          </div>
          <div class="d-flex flex-row ml-3 mt-2">
            <b-icon icon="star-fill" variant="warning"></b-icon>
            <span class="score ml-2 mb-1">{{ serie.imdb }}/10</span>
            <div class="ml-auto d-flex flex-row">
              <span class="year mr-1">{{ serie.year }}</span>
            </div>
            <b-icon
              icon="patch-check-fill"
              class="mr-1"
              variant="light"
            ></b-icon>
          </div>
        </div>
      </b-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    seriesAksiyon:{
      type:Array,
      default: () =>{
        return []
      }
    },
  },
  data() {
    return {
      mainProps: { width: 200, height: 290, class: "m1" }
    };
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
  color: #ffff00;
  letter-spacing: 1px;
  opacity: 1;
}
.score {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0px;
  opacity: 1;
}
.year {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0px;
  opacity: 1;
}
</style>
