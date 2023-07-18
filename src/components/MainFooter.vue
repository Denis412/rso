<template>
  <q-footer class="main-footer">
    <q-form class="flex no-wrap" @submit.prevent="sendMessage">
      <q-input
        ref="input"
        class="main-input"
        v-model="message"
        outlined
        placeholder="Введите сообщение..."
      />

      <q-btn type="submit" flat class="text-grey" icon-right="send" />
    </q-form>
  </q-footer>
</template>

<script setup>
import socket from "src/lib/socketIO";
import { inject, ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const input = ref(null);
const message = ref("");

const currentUserId = inject("currentUserId");

const sendMessage = () => {
  input.value.focus();

  if (!message.value) return;

  socket.emit("message", {
    userId: currentUserId,
    text: message.value,
  });

  message.value = "";

  $q.notify({
    type: "positive",
    message: "Сообщение отправлено!",
    position: "top",
  });
};
</script>

<style scoped lang="scss">
.main-footer {
  background-color: #fff;
}

.main-input {
  width: 100%;
}
</style>
