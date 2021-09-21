<template>
  <q-page padding class="column justify-center items-center">
      <Photo v-for="photo in value" :key="photo.photoId" :photo="photo"/>
  </q-page>
</template>

<script>
import Photo from 'src/components/Photo';
import axios from 'axios';

export default {
  name: 'Gallery',
  components: {
    Photo,
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/photos');
      this.value = res.data;
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    }
  },
  data() {
    return {
      value: [],
    };
  },
};
</script>
