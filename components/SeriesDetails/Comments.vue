<template>
  <div>
    <div
      class="w-100 h-auto p-4 d-flex flex-row mb-3"
      style="background-color: #c2d6d6;"
      v-for="comment in getComments"
      :key="comment._id"
    >
      <b-avatar
        :src="comment.userpp"
        :to="'/profile/' + comment.userId"
        size="3.5rem"
      ></b-avatar>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <div class="d-flex flex-row">
            <span class="name ml-3"
              >{{ comment.userName }} {{ comment.userLastName }}</span
            >
            <b-form-rating
              v-model="comment.value"
              inline
              no-border
              size="sm"
              variant="primary"
              style="background-color: #c2d6d6;"
              class="ml-2"
              readonly
            ></b-form-rating>
          </div>
          <div class="ml-auto">
            <div class="d-flex flex-row">
              <span class="text mr-1">{{ comment.uploadDate }}</span>
              <b-icon
                icon="calendar2-check"
                variant="dark"
                scale="1"
                class="ct"
              ></b-icon>
            </div>
          </div>
        </div>
        <hr class="ml-3" />

        <div
          class="text ml-3"
          style="width: 930px; height: auto; background-color:  #C2D6D6;"
        >
          {{ comment.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serie: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      mainProps: { width: 200, height: 290, class: "m1" },
      value: 3
    };
  },
  computed: {
    getComments() {
      let comments = this.$store.getters.getComments;

      let addComment = [];
      comments.forEach(i => {
        if (i.serieID === this.serie._id) {
          addComment.push({
            uploadDate: i.uploadDate,
            comment: i.comment,
            userId: i.userId,
            userName: i.userName,
            userLastName: i.userLastName,
            value: i.value,
            userpp: i.userpp
          });
        }
      });
      addComment.reverse();

      return addComment;
    }
  }
};
</script>
<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 0.5px;
}
.name {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 17px;
  color: #35495e;
  letter-spacing: 0px;
  opacity: 1;
}
.subname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 13px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
.text {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #000000fd;
  letter-spacing: 0px;
  opacity: 1;
}
.imdb {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #322708;
  letter-spacing: 0px;
  opacity: 1;
}
.score {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0px;
  opacity: 1;
}

.border {
  border-radius: 0.25em;
}
</style>
