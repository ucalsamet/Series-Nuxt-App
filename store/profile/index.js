import Cookie from "js-cookie";
export default {
  state: {
    authKey: null,
    userId: null,
    user: {},
  },
  mutations: {
    setAuthKey(state, payload) {
      state.authKey = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    clearAuthKey(state) {
      Cookie.remove("authKey");
      Cookie.remove("localId");
      if (process.client) {
        localStorage.removeItem("authKey");
        localStorage.removeItem("localId");
      }
      state.authKey = null;
      state.userId = null;
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      let token;
      let userId;
      if (!context.req.headers.cookie) {
        return;
      }
      token = context.req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("authKey="));
      if (token) {
        token = token.split("=")[1];
      }

      userId = context.req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("localId="));
      if (userId) {
        userId = userId.split("=")[1];
      }
      return this.$axios
        .post("/get-userid", { userid: userId })
        .then(response => {
          vuexContext.commit("setUser", response.data.docs[0]);
        });
    },
    addUser(vuexContext, user) {
      function makeid(length) {
        var result = [];
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result.push(
            characters.charAt(Math.floor(Math.random() * charactersLength))
          );
        }
        return result.join("");
      }

      let authKey = makeid(10);
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
      const year = dateObj.getFullYear();
      const output = day + "." + month + "." + year;
      this.$axios
        .post("/save-user", { ...user, authKey: authKey, uploadDate: output })
        .then(response => {
          Cookie.set("authKey", authKey);
          Cookie.set("localId", response.data.data._id);
          localStorage.setItem("authKey", authKey);
          localStorage.setItem("localId", response.data.data._id);
          vuexContext.commit("setAuthKey", authKey);
          vuexContext.commit("setUserId", response.data.localId);
          let newUser = {
            _id: response.data.data._id,
            ...user
          };
          vuexContext.commit("addSeries", newUser);
        });
    },
    addUserComment(vuexContext, comment) {
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
      const year = dateObj.getFullYear();
      const output = day + "." + month + "." + year;
      this.$axios.post("/save-userComment", { ...comment, uploadDate: output });
    },
    loginUser(vuexContext, user) {
      return this.$axios.post("/get-user", { ...user }).then(response => {
        if (response.data.docs.length > 0) {
          Cookie.set("localId", response.data.docs[0]._id);
          Cookie.set("authKey", response.data.docs[0].authKey);
          localStorage.setItem("authKey", response.data.docs[0].authKey);
          localStorage.setItem("localId", response.data.docs[0]._id);
          vuexContext.commit("setAuthKey", response.data.docs[0].authKey);
        } else {
          return "false";
        }
      });
    },
    logOut(vuexContext) {
      return vuexContext.commit("clearAuthKey");
    },
    initAuth(vuexContext, payload) {
      let token;
      let userId;
      if (payload) {
        if (!payload.headers.cookie) {
          return;
        }
        token = payload.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("authKey="));
        if (token) {
          token = token.split("=")[1];
        }

        userId = payload.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("localId="));
        if (userId) {
          userId = userId.split("=")[1];
        }
      } else {
        token = localStorage.getItem("authKey");
        userId = localStorage.getItem("localId");
      }
      vuexContext.commit("setAuthKey", token);
      vuexContext.commit("setUserId", userId);
      return this.$axios
        .post("/get-userid", { userid: userId })
        .then(response => {
          vuexContext.commit("setUser", response.data.docs[0]);
        });
    },
    addFavorite(vuexContext, favorite){
      this.$axios.post("/save-userFavorite", { ...favorite });
    },
    removeFavorite(vuexContext, favorite){
      this.$axios.post("/delete-userFavorite", { ...favorite });
    }
  },
  getters: {
    isAuthenticeted(state) {
      return state.authKey != null;
    },
    getUser(state) {
      return state.user;
    }
  }
};
