<template>
  <b-container>
    <div class="d-flex flex-column mt-4">
      <span class="title">Beklenen Diziler</span>
      <hr>
      <div class="w-100 h-auto p-4 border bgColor"><HomeSoon /></div>
    </div>

    <div class="d-flex flex-column mt-4">
      <span class="title">Dikkat Çeken Yeni Diziler</span>
      <hr>
      <div class="w-100 h-auto p-4 border2 bgColor"><HomeRemarkableSeries /></div>
    </div>

     <div class="d-flex flex-column mt-4">
      <span class="title">Popüler Dizilerden Son Fragmanları</span>
      <hr>
      <div class="w-100 h-auto p-4 border2 bgColor"><HomePopularSeries /></div>
    </div>

    <div class="d-flex flex-column mt-4">
      <span class="title">Yeni Eklenen Bölümler</span>
      <hr>
      <div class="w-100 h-auto p-4 border2 bgColor"><HomeNewSeries /></div>
    </div>

    <div class="d-flex flex-column mt-4 mb-2">
      <span class="title">Önerilen Diziler</span>
      <hr>
      <div class="w-100 h-auto p-4 border2 bgColor"><HomeSuggestedSeries /></div>
    </div>
  </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 700;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 0.5px;
}

.border {
  border-radius: 1em;
}

.border2 {
  border-radius: .5em;
}
.bgColor {
  background-color: #23272b11;
}
</style>