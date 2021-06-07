<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Kategoriler"
      backdrop-variant="dark"
      backdrop
      shadow
    >
      <div class="px-3 py-2 d-flex flex-column">
          <b-button pill block variant="danger"
            >
            <span class="ml-1">Aksiyon</span></b-button
          >
          <b-button pill block variant="dark"
            >
            <span class="ml-1">Bilim Kurgu</span></b-button
          >
          <b-button pill block variant="danger"
            >
            <span class="ml-1">Dram</span></b-button
          >
          <b-button pill block variant="dark"
            >
            <span class="ml-1">Gerilim</span></b-button
          >
          <b-button pill block variant="danger"
            >
            <span class="ml-1">Korku</span></b-button
          >
          <b-button pill block variant="dark"
            >
            <span class="ml-1">Macera</span></b-button
          >
          <b-button pill block variant="danger"
            >
            <span class="ml-1">Komedi</span></b-button
          >
          <b-button pill block variant="dark"
            >
            <span class="ml-1">Suç</span></b-button
          >
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
