<template>
  <div class="w-100 h-auto p-4" style="background-color:  #e0e0eb;">
    <div
      class="w-100 h-auto p-4 d-flex flex-row mb-3"
      style="background-color: #c2d6d6;"
      v-for="serie in user.comments"
      :key="serie._id"
    >
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <div class="d-flex flex-row">
            <span class="seriesname ml-3">{{ serie.name }}</span>
            <span class="seri ml-2">için:</span>
          </div>
          <div class="ml-auto">
            <div class="d-flex flex-row">
              <span class="text mr-1">{{ serie.uploadDate }}</span>
              <fa icon="user-clock" scale="1x" />
            </div>
          </div>
        </div>
        <hr class="ml-3" />

        <div class="text ml-3" style="width: 970px; height: auto; background-color:  #C2D6D6;">
          "{{ serie.comment }}"
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: { width: 200, height: 290, class: "m1" },
      value: 3
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
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
.seriesname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 21px;
  color: #660033;
  letter-spacing: 0px;
  opacity: 1;
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
.seri {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
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
  font-size: 13px;
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
  color: #000000fd;
  letter-spacing: 0px;
  opacity: 1;
}
.textbold {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: #000000fd;
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
