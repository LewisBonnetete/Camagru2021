<template>
  <q-page padding>

  <div class="column justify-center items-center">
    <Photo v-for="photo in photos" :key="photo.photoId" :photo="photo"/>
  </div>
  </q-page>
</template>

<script>
import Photo from 'src/components/Photo';
import data from '../../data/photos.json';

export default {
  name: 'Gallery',
  components: {
    Photo,
  },
  data() {
    return {
      photos: data.photos,
    };
  },
};
</script>
