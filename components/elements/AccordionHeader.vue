<script setup lang="ts">
defineProps<{
  handleIsOpen: any;
}>();
</script>

<template>
  <div :class="$style['header']" @click="handleIsOpen" role="button">
    <slot name="header" />
  </div>
</template>

<style lang="scss" module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-inline: 18px;
  padding-block-start: 18px;
  padding-block-end: 18px;
}
</style>
