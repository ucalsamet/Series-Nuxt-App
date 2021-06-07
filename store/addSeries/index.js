export default {
  state: {
    series: []
  },
  mutations: {
    addSeries(state, serie) {
      state.series.push(serie);
    },
    setSeries(state, serie) {
      serie.reverse()
      state.series = serie
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.$axios.get("/get-series").then(response =>{
        vuexContext.commit("setSeries",response.data.docs)
      })
    },
    addSeries(vuexContext, serie) {
      const monthNames = [
        "Oca",
        "Şub",
        "Mar",
        "Nis",
        "May",
        "Haz",
        "Tem",
        "Ağus",
        "Eyl",
        "Eki",
        "Kas",
        "Arl"
      ];
      const dateObj = new Date();
      const month = monthNames[dateObj.getMonth()];
      const day = String(dateObj.getDate()).padStart(2, "0");
      const output = day + " " + month;

      this.$axios
        .post("/save-series", { ...serie, uploadDate: output })
        .then(response => {
          let newSerie = {
            uploadDate: output,
            _id: response.data.data._id,
            ...serie
          };
          vuexContext.commit("addSeries", newSerie);
        });
    }
  },
  getters: {
    getSeries(state) {
      return state.series;
    },
    getSerie(state) {
      return serieID => {
        return state.series.find(series => {
          return series._id === serieID;
        });
      };
    }
  }
};
