<template>
  <div class="chat-wrapper">
    <div class="chat-header q-pa-sm">
      <h4 class="q-ma-none">Чатик</h4>
    </div>

    <div class="chat-messages-area">
      <div class="chat-messages-area-inner q-px-md q-py-sm">
        <RSOMessagesList />
      </div>
    </div>
  </div>
</template>

<script setup>
import RSOMessagesList from "./RSOMessagesList.vue";
</script>

<style scoped lang="scss">
.chat-wrapper {
  display: flex;
  flex-direction: column;
  min-height: inherit;
}

.chat-header {
  background-color: lightgray;
}

.chat-messages-area {
  position: relative;
  flex: 1;

  &-inner {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    overflow-y: auto;
  }
}
</style>
