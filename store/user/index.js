export default {
  state: {
    users: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.$axios.get("/get-users").then(response => {
        vuexContext.commit("setUsers", response.data.docs);
      });
    }
  },
  getters: {
    getUsers(state) {
      return userID => {
        return state.users.find(user => {
          return user._id === userID;
        });
      };
    }
  }
};
