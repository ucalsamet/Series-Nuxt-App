<template>
  <div>
    <b-modal id="modal1" hide-footer size="lg">
      <template #modal-header>
        <div class="w-100">
          <span class="float-left subname">Stranger Things</span>
          <b-button  variant="danger" size="sm" to="/categories/60bd3b7b9541d10db8ab93ed" class="float-right">
            Dizi Sayfası
          </b-button>
        </div>
      </template>
      <div>
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="'https://www.youtube.com/embed/' + modal1"
          allowfullscreen
        ></b-embed>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    modal1: {
      type: String,
      default: ""
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
