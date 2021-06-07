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
            ><fa icon="location-arrow" scale="1x"></fa>
            <span class="ml-1">Aksiyon</span></b-button
          >
          <b-button pill block variant="dark"
            ><fa icon="user-astronaut" scale="1x"></fa>
            <span class="ml-1">Bilim Kurgu</span></b-button
          >
          <b-button pill block variant="danger"
            ><fa icon="house-damage" scale="1x"></fa>
            <span class="ml-1">Dram</span></b-button
          >
          <b-button pill block variant="dark"
            ><fa icon="heartbeat" scale="1x"></fa>
            <span class="ml-1">Gerilim</span></b-button
          >
          <b-button pill block variant="danger"
            ><fa icon="pastafarianism" scale="1x"></fa>
            <span class="ml-1">Korku</span></b-button
          >
          <b-button pill block variant="dark"
            ><fa icon="running" scale="1x"></fa>
            <span class="ml-1">Macera</span></b-button
          >
          <b-button pill block variant="danger"
            ><fa icon="laugh-beam" scale="1x"></fa>
            <span class="ml-1">Komedi</span></b-button
          >
          <b-button pill block variant="dark"
            ><fa icon="skull-crossbones" scale="1x"></fa>
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
