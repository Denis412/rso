<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Чат РСО </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list> </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <main-footer />
  </q-layout>
</template>

<script setup>
import { provide, ref } from "vue";

import MainFooter from "src/components/MainFooter.vue";
import { v4 as uuidv4 } from "uuid";

const leftDrawerOpen = ref(false);

const currentUserId = uuidv4();
provide("currentUserId", currentUserId);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
