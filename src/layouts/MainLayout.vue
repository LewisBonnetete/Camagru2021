<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="row bg-white">
      <q-toolbar class="col">
        <q-btn :ripple="false" color="dark" to="/" flat size="xl" label="Camagru"/>
      </q-toolbar>
      <q-tabs>
        <q-btn
        size="md"
        unelevated
        to="newphoto"
        color="primary"
        icon="add"
        no-caps
        label="New Photo" />
        <q-btn unelevated round flat to="profile" color="dark" icon="person" />
        <q-btn unelevated round flat to="settings" color="dark" icon="settings" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="scss">
.q-btn {
  .q-focus-helper {
    visibility: hidden;
  }
}
</style>
