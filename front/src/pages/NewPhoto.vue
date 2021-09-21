<template>
   <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-file
        for="file"
        v-model="file"
        label="Pick one file"
        filled
        style="max-width: 300px"
        @input="filepicked"
        clearable/>
<form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" accept="image/*" name="photo" >
        <input type="submit" value="upload">
</form>
      <q-input
        for="description"
        filled
        v-model="description"
        label="Your description *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>

    </q-form>

  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'NewPhoto',
  setup() {
    const router = useRouter();
    const description = ref(null);

    return {
      description,
      onSubmit() {
        router.push('');
        console.log();
      },
    };
  },
  data() {
    return {
      file: null,
      oldPickedFile: null,
    };
  },
  methods: {
    filepicked(file) {
      if (file !== void 0) {
        this.oldPickedFile = file;
      } else {
        this.file = this.oldPickedFile;
      }
    },
  },
};
</script>
