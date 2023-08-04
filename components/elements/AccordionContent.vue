<template>
  <transition-group name="smooth">
    <slot name="content" />
  </transition-group>
</template>

<style lang="scss">
.smooth-move,
.smooth-enter-active,
.smooth-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.smooth-enter-from,
.smooth-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
