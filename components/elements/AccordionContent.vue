<template>
  <transition-group name="smooth" tag="p">
    <slot name="content" />
  </transition-group>
</template>

<style lang="scss">
.smooth-move,
.smooth-enter-active,
.smooth-leave-active {
  transition: all 0.3s ease;
}

.smooth-enter-from,
.smooth-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.smooth-leave-active {
  position: absolute;
}
</style>
