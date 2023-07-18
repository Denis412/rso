<template>
  <q-list class="list">
    <RSOMessageItem
      v-for="message in messages"
      :key="message.text"
      :message="message"
    />
  </q-list>
</template>

<script setup>
import { ref } from "vue";
import RSOMessageItem from "./RSOMessageItem.vue";
import socket from "src/lib/socketIO";

const messages = ref([]);

socket.on("sendMessage", (data) => {
  messages.value.push(data);
});
</script>

<style scoped lang="scss">
.list {
  position: relative;
}
</style>
