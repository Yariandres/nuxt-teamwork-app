<script setup lang="ts">
defineProps<{
  item: { title: string; text: string };
}>();

const isOpen = ref<boolean>(false);
</script>

<template>
  <div :class="$style['accordion']">
    <div :class="$style['accordion-top']" @click="isOpen = !isOpen">
      <h3
        :class="{
          [$style['accordion-title']]: true,
          [$style['active']]: isOpen,
        }"
      >
        {{ item.title }}
      </h3>
      <img
        src="~/assets/svg/icon.svg"
        alt="accordion triangle"
        loading="lazy"
      />
    </div>

    <elements-accordion-content>
      <template #content>
        <p v-if="isOpen" :class="$style['accordion-text']">{{ item.text }}</p>
      </template>
    </elements-accordion-content>
  </div>
</template>

<style lang="scss" module>
.accordion {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 4px;

  .accordion-top {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background: #eaeef4;
    padding-inline: 18px;
    padding-block-start: 18px;
    padding-block-end: 18px;
    min-width: 400px;
  }

  .accordion-text {
    color: #494e6a;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    padding-block-start: 15px;
    background: #eaeef4;
    padding-inline: 18px;
    padding-block-end: 38px;
    width: 400px;
  }

  .accordion-title {
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .accordion-title.active {
    color: #4461d7;
  }
}
</style>
