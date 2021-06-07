<template>
  <div class="d-flex flex-row ml-5">
    <div class="d-flex flex-column">
      <div v-b-hover="handleHover1" style="width: 6rem" class="ml-4">
        <b-avatar
          v-if="isHovered1"
          v-b-modal.modal1
          src="https://www.dizibox.vip/wp-content/uploads/afisler/stranger-things-200x290.jpg"
          size="7rem"
          rounded="lg"
        ></b-avatar>
        <b-avatar
          src="https://www.dizibox.vip/wp-content/uploads/afisler/stranger-things-200x290.jpg"
          size="6rem"
          v-else
          class="border border-secondary"
        ></b-avatar>
      </div>
      <div class="mt-2 ct">
        <span class="subtitle">Stranger Things</span>
      </div>
    </div>
    <HomeModalsModal1 :modal1="modal1" />
    <div class="d-flex flex-column ml-5">
      <div v-b-hover="handleHover2" style="width: 6rem" class="ml-2 overlay">
        <b-avatar
          v-b-modal.modal2
          v-if="isHovered2"
          src="https://www.dizibox.vip/wp-content/uploads/afisler/loki-200x290.jpg"
          size="7rem"
          rounded="lg"
        ></b-avatar>
        <b-avatar
          src="https://www.dizibox.vip/wp-content/uploads/afisler/loki-200x290.jpg"
          size="6rem"
          v-else
          class="border border-secondary"
        ></b-avatar>
      </div>
      <div class="mt-2 ct">
        <span class="subtitle">Loki</span>
      </div>
    </div>
    <HomeModalsModal2 :modal2="modal2" />
    <div class="d-flex flex-column ml-5">
      <div v-b-hover="handleHover3" style="width: 6rem" class="ml-2 overlay">
        <b-avatar
          v-b-modal.modal3
          v-if="isHovered3"
          src="https://www.dizibox.vip/wp-content/uploads/afisler/atiye-200x290.jpg"
          size="7rem"
          rounded="lg"
        ></b-avatar>
        <b-avatar
          src="https://www.dizibox.vip/wp-content/uploads/afisler/atiye-200x290.jpg"
          size="6rem"
          v-else
          class="border border-secondary"
        ></b-avatar>
      </div>
      <div class="mt-2 ct">
        <span class="subtitle">Atiye</span>
      </div>
    </div>
    <HomeModalsModal3 :modal3="modal3" />

    <div class="d-flex flex-column ml-5">
      <div v-b-hover="handleHover4" style="width: 6rem" class="ml-2 overlay">
        <b-avatar
          v-b-modal.modal4
          v-if="isHovered4"
          src="https://www.dizibox.vip/wp-content/uploads/afisler/lupin-200x290.jpg"
          size="7rem"
          rounded="lg"
        ></b-avatar>
        <b-avatar
          src="https://www.dizibox.vip/wp-content/uploads/afisler/lupin-200x290.jpg"
          size="6rem"
          v-else
          class="border border-secondary"
        ></b-avatar>
      </div>
      <div class="mt-2 ct">
        <span class="subtitle">Lupin</span>
      </div>
    </div>
    <HomeModalsModal4 :modal4="modal4" />

    <div class="d-flex flex-column ml-5">
      <div v-b-hover="handleHover5" style="width: 6rem" class="ml-2 overlay">
        <b-avatar
          v-b-modal.modal5
          v-if="isHovered5"
          src="https://www.dizibox.vip/wp-content/uploads/afisler/la-casa-de-papel-200x290.jpg"
          size="7rem"
          rounded="lg"
        ></b-avatar>
        <b-avatar
          src="https://www.dizibox.vip/wp-content/uploads/afisler/la-casa-de-papel-200x290.jpg"
          size="6rem"
          v-else
          class="border border-secondary"
        ></b-avatar>
      </div>
      <div class="mt-2 ct">
        <span class="subtitle">La casa de papel</span>
      </div>
    </div>
    <HomeModalsModal5 :modal5="modal5" />

    <div class="d-flex flex-column ml-5">
      <div v-b-hover="handleHover6" style="width: 6rem" class="ml-2 overlay">
        <b-avatar
          v-b-modal.modal6
          v-if="isHovered6"
          src="https://www.dizibox.vip/wp-content/uploads/afisler/rick-and-morty-200x290.jpg"
          size="7rem"
          rounded="lg"
        ></b-avatar>
        <b-avatar
          src="https://www.dizibox.vip/wp-content/uploads/afisler/rick-and-morty-200x290.jpg"
          size="6rem"
          v-else
          class="border border-secondary"
        ></b-avatar>
      </div>
      <div class="mt-2 ct">
        <span class="subtitle">Rick and Morty</span>
      </div>
    </div>
    <HomeModalsModal6 :modal6="modal6" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      isHovered5: false,
      isHovered6: false,
      modal1: "1HJ5xYU-BGo",
      modal2: "G4JuopziR3Q",
      modal3: "ok3csGIWmjM",
      modal4: "ga0iTWXCGa0",
      modal5: "X22akcw6FU4",
      modal6: "_JqTvuVoI1A"
    };
  },
  methods: {
    handleHover1(hovered) {
      this.isHovered1 = hovered;
    },
    handleHover2(hovered) {
      this.isHovered2 = hovered;
    },
    handleHover3(hovered) {
      this.isHovered3 = hovered;
    },
    handleHover4(hovered) {
      this.isHovered4 = hovered;
    },
    handleHover5(hovered) {
      this.isHovered5 = hovered;
    },
    handleHover6(hovered) {
      this.isHovered6 = hovered;
    }
  }
};
</script>

<style scoped>
.ct {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.subtitle {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 13px;
  color: #c82333;
  letter-spacing: 1px;
}
</style>
