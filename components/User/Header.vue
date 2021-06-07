<template>
  <div>
    <div
      class="w-100 h-auto p-4 d-flex flex-row mb-3"
      style="background-color: 	  #e0e0eb;"
      v-for="item in user"
      :key="item._id"
    >
      <b-avatar :src="item.pp" size="6rem"></b-avatar>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <div class="d-flex flex-row">
            <span class="name ml-3">{{ item.name }} {{ item.lastName }}</span>
          </div>
          <div class="ml-auto">
            <div class="d-flex flex-row">
              <fa icon="heart" class="mr-2 mt-1" scale="1x" />
              <span class="text">Favori: {{item.favoriteSeries.length}}</span>

              <fa icon="comments" class="mr-2 mt-1 ml-3" scale="1x" />
              <span class="text">Yorum: {{item.comments.length}}</span>
            </div>
          </div>
        </div>
        <hr class="ml-3" />

        <div class="ml-3" style="width: 930px; height: 50px;">
          <div class="d-flex flex-row">
            <fa icon="calendar-alt" class="mr-2 mt-1" scale="1x" />
            <div class="text d-flex flex-row">
              Katılım Tarihi:<span class="textbold ml-1">
                {{ item.uploadDate }}</span
              >
            </div>

            <fa icon="venus-mars" class="mr-2 mt-1 ml-3" scale="1x" />
            <div class="text d-flex flex-row">
              Cinsiyet: <span class="textbold ml-1">{{ item.male }}</span>
            </div>
            <fa icon="film" class="mr-2 mt-1 ml-3" scale="1x" />
            <div class="text d-flex flex-row">
              Favori Dizi:
              <span class="textbold ml-1">{{ item.favorite }}</span>
            </div>

            <fa icon="birthday-cake" class="mr-2 mt-1 ml-3" scale="1x" />
            <div class="text d-flex flex-row">
              Doğum Tarihi:<span class="textbold ml-1"> {{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style></style>
