export default {
  state: {
    comments: []
  },
  mutations: {
    addComment(state, comment) {
      state.comments.push(comment);
    },
    setComment(state, comment) {
      state.comments = comment;
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.$axios.get("/get-comment").then(response => {
        vuexContext.commit("setComment", response.data.docs);
      });
    },
    addComment(vuexContext, comment) {
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
        .post("/save-comment", { ...comment, uploadDate: output })
        .then(response => {
          let newComment = {
            uploadDate: output,
            _id: response.data.data._id,
            ...comment
          };
          vuexContext.commit("addComment", newComment);
        });
    }
  },
  getters: {
    getComments(state) {
      return state.comments;
    },
    getComment(state) {
      return commentID => {
        return state.comments.find(comments => {
          return comments.commentID === commentID;
        });
      };
    }
  }
};
