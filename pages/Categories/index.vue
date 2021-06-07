<template>
  <b-container>
    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="user-astronaut" size="2x" class="bgColorfa"></fa>
        <span class="title ml-2">Bilim Kurgu</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesSciencefiction :seriesBilim="seriesBilim" />
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="location-arrow" size="2x" class="bgColorfa2"></fa>
        <span class="title2 ml-2">Aksiyon</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesAction :seriesAksiyon="seriesAksiyon" />
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="house-damage" size="2x" class="bgColorfa"></fa>
        <span class="title ml-2">Dram</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesDrama :seriesDrama="seriesDrama" />
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="heartbeat" size="2x" class="bgColorfa2"></fa>
        <span class="title2 ml-2">Gerilim</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesTension :seriesTension="seriesTension" />
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="pastafarianism" size="2x" class="bgColorfa"></fa>
        <span class="title ml-2">Korku</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesFear :seriesFear="seriesFear" />
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="running" size="2x" class="bgColorfa2"></fa>
        <span class="title2 ml-2">Macera</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesAdventure :seriesAdventure="seriesAdventure" />
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="laugh-beam" size="2x" class="bgColorfa"></fa>
        <span class="title ml-2">Komedi</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesComedy :seriesComedy="seriesComedy" />
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <div class="d-flex flex-row">
        <fa icon="skull-crossbones" size="2x" class="bgColorfa2"> </fa>
        <span class="title2 ml-2">Suç</span>
      </div>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <CategoriesCrime :seriesCrime="seriesCrime" />
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    seriesAksiyon() {
      let series = this.$store.getters.getSeries;
      let seriesAksiyon = [];
      series.forEach(i => {
        if (i.type1 === "Aksiyon" || i.type2 === "Aksiyon") {
          seriesAksiyon.push(i);
        }
      });
      seriesAksiyon.reverse();

      return seriesAksiyon;
    },
    seriesBilim() {
      let series = this.$store.getters.getSeries;
      let seriesBilim = [];
      series.forEach(i => {
        if (i.type1 === "Kurgu" || i.type2 === "Kurgu") {
          seriesBilim.push(i);
        }
      });
      seriesBilim.reverse();

      return seriesBilim;
    },
    seriesDrama() {
      let series = this.$store.getters.getSeries;
      let seriesDrama = [];
      series.forEach(i => {
        if (i.type1 === "Dram" || i.type2 === "Dram") {
          seriesDrama.push(i);
        }
      });
      seriesDrama.reverse();

      return seriesDrama;
    },
    seriesTension() {
      let series = this.$store.getters.getSeries;
      let seriesTension = [];
      series.forEach(i => {
        if (i.type1 === "Gerilim" || i.type2 === "Gerilim") {
          seriesTension.push(i);
        }
      });
      seriesTension.reverse();

      return seriesTension;
    },
    seriesFear() {
      let series = this.$store.getters.getSeries;
      let seriesFear = [];
      series.forEach(i => {
        if (i.type1 === "Korku" || i.type2 === "Korku") {
          seriesFear.push(i);
        }
      });
      seriesFear.reverse();

      return seriesFear;
    },
    seriesAdventure() {
      let series = this.$store.getters.getSeries;
      let seriesAdventure = [];
      series.forEach(i => {
        if (i.type1 === "Macera" || i.type2 === "Macera") {
          seriesAdventure.push(i);
        }
      });
      seriesAdventure.reverse();

      return seriesAdventure;
    },
    seriesComedy() {
      let series = this.$store.getters.getSeries;
      let seriesComedy = [];
      series.forEach(i => {
        if (i.type1 === "Komedi" || i.type2 === "Komedi") {
          seriesComedy.push(i);
        }
      });
      seriesComedy.reverse();

      return seriesComedy;
    },
    seriesCrime() {
      let series = this.$store.getters.getSeries;
      let seriesCrime = [];
      series.forEach(i => {
        if (i.type1 === "Suç" || i.type2 === "Suç") {
          seriesCrime.push(i);
        }
      });
      seriesCrime.reverse();

      return seriesCrime;
    }
  }
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 25px;
  color: #23272b;
  letter-spacing: 0.5px;
}
.title2 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 25px;
  color: #c82333;
  letter-spacing: 0.5px;
}
.border {
  border-radius: 1em;
}

.border2 {
  border-radius: 0.5em;
}
.bgColor {
  background-color: #23272b11;
}

.bgColorfa {
  color: #23272b;
}

.bgColorfa2 {
  color: #c82333;
}
</style>
