<template>
    <q-card size="sm" class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section class="">

        <q-card-section class="row">
          <q-card-section class="col">
            <div class="text-h6">{{photo.userPseudo}}</div>
            <div class="text-subtitle2 grey">{{photo.description}}</div>
          </q-card-section>

          <q-card-section class="">
              <q-btn v-if="isLiked"
                @click="isLiked = !isLiked"
                icon="favorite_border"
                :ripple="{ color: 'primary'}"
                round flat />
              <q-btn v-if="!isLiked"
                @click="isLiked = !isLiked"
                icon="favorite"
                color="primary"
                :ripple="{ color: 'dark'}"
                round flat />
          </q-card-section>
        </q-card-section>

        <q-card class="q-pt-none">
          {{ photo.comments }}
        </q-card>

      </q-card-section>
    </q-card>
</template>

<style lang="sass" scoped>
.my-card
  width: 70%
  margin: 2%
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Photo',
  props: {
    photo: Object,
  },
  data() {
    return {
      isLiked: Boolean,
      default: false,
    };
  },
});
</script>
