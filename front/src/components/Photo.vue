<template>
    <q-card size="sm" class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <q-avatar />
        <div class="text-h6">{{photo.userPseudo}}</div>
        <div class="text-subtitle2 grey">{{photo.description}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ photo.comments }}
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
  setup() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
});
</script>
