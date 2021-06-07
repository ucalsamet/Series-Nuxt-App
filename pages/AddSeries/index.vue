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
          <b-form-input
            placeholder="Dizi Adı"
            v-model="series.name"
            trim
            class="mr-2"
          ></b-form-input>

          <div class="d-flex flex-row mt-2">
            <b-form-input
              placeholder="Yapım Yılı"
              v-model="series.year"
              trim
              class="mr-2"
            ></b-form-input>
            <b-form-input
              placeholder="Dizi Yapımı"
              v-model="series.production"
              trim
              class="ml-2"
            ></b-form-input>
          </div>

          <div class="d-flex flex-row mt-2">
            <b-form-select
              v-model="series.type1"
              trim
              class="mr-2"
              :options="options1"
            ></b-form-select>
            <b-form-select
              v-model="series.type2"
              trim
              class="ml-2"
              :options="options2"
            ></b-form-select>
          </div>
          <div class="d-flex flex-row mt-2">
            <b-form-input
              placeholder="Sezon Sayısı"
              v-model="series.season"
              trim
              type="number"
              class="mr-2"
            ></b-form-input>
            <b-form-input
              placeholder="İmdb Puanı"
              v-model="series.imdb"
              trim
              class="ml-2"
            ></b-form-input>
          </div>
          <div class="d-flex flex-row mt-2">
            <b-form-select
              v-model="series.category"
              trim
              class="mr-2"
              :options="options3"
            ></b-form-select>
            <b-form-input
              placeholder="Fragman Key"
              v-model="series.fragman"
              trim
              class="ml-2"
            ></b-form-input>
          </div>
          <b-form-input
            placeholder="Dizi Kapak URL"
            v-model="series.url"
            trim
            class="mt-2"
          ></b-form-input>
          <b-form-textarea
            id="textarea"
            v-model="series.description"
            placeholder="Dizi Konusu..."
            rows="3"
            max-rows="3"
            no-resize
            class="mt-2"
          ></b-form-textarea>
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
  props: {
    commentModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showAlert: false,
      showAlert2: false,
      series: {
        name: "",
        production: "",
        year: "",
        type1: null,
        type2: null,
        season: "",
        imdb: "",
        description: "",
        category: null,
        fragman: "",
        url: ""
      },
      options1: [
        { value: null, text: "Dizinin 1. Türü" },
        { value: "Aksiyon", text: "Aksiyon" },
        { value: "Kurgu", text: "Bilim Kurgu" },
        { value: "Gerilim", text: "Gerilim" },
        { value: "Korku", text: "Korku" },
        { value: "Dram", text: "Dram" },
        { value: "Suç", text: "Suç" },
        { value: "Macera", text: "Macera" },
        { value: "Komedi", text: "Komedi" }
      ],
      options2: [
        { value: null, text: "Dizinin 2. Türü" },
        { value: "Aksiyon", text: "Aksiyon" },
        { value: "Kurgu", text: "Bilim Kurgu" },
        { value: "Gerilim", text: "Gerilim" },
        { value: "Korku", text: "Korku" },
        { value: "Dram", text: "Dram" },
        { value: "Suç", text: "Suç" },
        { value: "Macera", text: "Macera" },
        { value: "Komedi", text: "Komedi" }
      ],
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
        this.series.name !== "" &&
        this.series.production !== "" &&
        this.series.year !== "" &&
        this.series.type1 !== null &&
        this.series.type2 !== null &&
        this.series.season !== "" &&
        this.series.imdb !== "" &&
        this.series.category !== null &&
        this.series.fragman !== "" &&
        this.series.url !== "" &&
        this.series.description !== ""
      ) {
        this.showAlert = false;

        this.showAlert2 = true;

        this.$store.dispatch("addSeries", this.series);
      } else {
        this.showAlert = true;
      }
    }
  },
  computed: {}
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
