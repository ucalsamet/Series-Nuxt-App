<template>
  <div>
    <b-modal id="fragmanmodal" hide-footer hide-header size="lg">
      <div>
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="'https://www.youtube.com/embed/' + serie.fragman"
          allowfullscreen
        ></b-embed>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
     serie: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style></style>
