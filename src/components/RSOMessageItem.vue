<template>
  <div
    class="message-item"
    :class="{ 'message-item-left': !isSent, 'message-item-right': isSent }"
  >
    <q-chat-message
      :name="isSent ? 'me' : 'Denis'"
      :avatar="isSent ? '/avatar.jpeg' : '/test.jpg'"
      :text="[message.text]"
      :sent="isSent"
    />
  </div>
</template>

<script setup>
import { computed, inject } from "vue";

const { message } = defineProps({
  message: Object,
});

const currentUserId = inject("currentUserId");

const isSent = computed(() => message.userId === currentUserId);
</script>

<style scoped lang="scss">
.message-item-left {
  padding-right: 50%;
}

.message-item-right {
  padding-left: 50%;
}
</style>
