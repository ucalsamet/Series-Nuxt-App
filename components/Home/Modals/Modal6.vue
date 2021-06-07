<template>
  <div>
    <b-modal id="modal6" hide-footer size="lg">
        <template #modal-header>
        <div class="w-100">
          <span class="float-left subname">Rick and Morty</span>
          <b-button variant="danger" to="/categories/60bd349e9541d10db8ab93e9" size="sm" class="float-right">
            Dizi Sayfası
          </b-button>
        </div>
      </template>
      <div>
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="'https://www.youtube.com/embed/'+modal6"
          allowfullscreen
        ></b-embed>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props:{
    modal6:{
      type: String,
      default:''
    }
  }
};
</script>
<style>
.subname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 17px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
</style>