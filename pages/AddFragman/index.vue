<template>
  <b-container>
    <div class="d-flex flex-column mt-4">
      <span class="title1">Yeni Dizi Ekle</span>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <div class="d-flex flex-column">
          <b-alert
            v-model="showAlert"
            variant="danger"
            dismissible
            class="mb-2 mt-1"
          >
            Lütfen Bütün Alanları Doldurduğunuzdan Emin Olun!
          </b-alert>
          <b-alert
            v-model="showAlert2"
            variant="success"
            dismissible
            class="mb-2 mt-1"
          >
            Dizi Eklendi!
          </b-alert>

          <div class="d-flex flex-row mt-2">
            <b-form-select
              v-model="fragman.serieID"
              trim
              class="mr-2"
              :options="options1"
            ></b-form-select>
            <b-form-input
              placeholder="Sezon/Bölüm"
              v-model="fragman.season"
              trim
              class="ml-2"
            ></b-form-input>
          </div>

          <div class="d-flex flex-row mt-2">
            <b-form-select
              v-model="fragman.category"
              trim
              class="mr-2"
              :options="options3"
            ></b-form-select>
            <b-form-input
              placeholder="Fragman Key"
              v-model="fragman.fragman"
              trim
              class="ml-2"
            ></b-form-input>
          </div>
          <b-button
            block
            class="mt-2"
            variant="dark"
            size="md"
            @click="addComment()"
            >Kaydet</b-button
          >
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false,
      showAlert2: false,
      fragman: {
        serieID: null,
        season: "",
        category: null,
        fragman: ""
      },
      abc: this.series,
      options1: [{ value: null, text: "Dizi Seçin" }],
      options3: [
        { value: null, text: "Kategori" },
        { value: "1", text: "Popüler" },
        { value: "2", text: "Normal" },
        { value: "3", text: "Yakında" },
        { value: "4", text: "Dikkat Çeken" }
      ]
    };
  },
  methods: {
    addComment() {
      if (
        this.fragman.serieID !== "" &&
        this.fragman.season !== "" &&
        this.fragman.category !== null &&
        this.fragman.fragman !== ""
      ) {
        this.showAlert2 = true;

        this.$store.dispatch("addFragman", this.fragman);
      } else {
        this.showAlert = true;
      }
    }
  },
  computed: {},
  mounted() {
    let series = this.$store.getters.getSeries;
    series.reverse();
    series.forEach(i => {
      this.options1.push({
        value: i._id,
        text: i.name
      });
    });
    return this.options1;
  }
};
</script>

<style scoped>
.title1 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 0.5px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 17px;
  color: #35495e;
  letter-spacing: 0px;
}
.text {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: #23272b;
  letter-spacing: 0px;
}
</style>
