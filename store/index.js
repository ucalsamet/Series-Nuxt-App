import Vuex from "vuex";
import user from "./user";
import profile from "./profile";
import addFragman from "./addFragman";
import seriesDetail from "./seriesDetail";
import addSeries from "./addSeries";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      user,
      profile,
      addFragman,
      seriesDetail,
      addSeries
    }
  });
};

export default createStore;
