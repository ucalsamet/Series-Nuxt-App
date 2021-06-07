export default {
  state: {
    fragman: []
  },
  mutations: {
    addFragman(state, fragman) {
      state.fragman.push(fragman);
    },
    setFragman(state, fragman) {
      fragman.reverse();
      state.fragman = fragman;
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.$axios.get("/get-fragman").then(response => {
        vuexContext.commit("setFragman", response.data.docs);
      });
    },
    addFragman(vuexContext, fragman) {
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
        .post("/save-fragman", { ...fragman, uploadDate: output })
        .then(response => {
          let newFragman = {
            uploadDate: output,
            _id: response.data.data._id,
            ...fragman
          };
          vuexContext.commit("addFragman", newFragman);
        });
    }
  },
  getters: {
    getFragmans(state) {
      return state.fragman;
    },
    getFragman(state) {
      return fragmanID => {
        return state.fragman.find(fragman => {
          return fragman._id === fragmanID;
        });
      };
    }
  }
};
