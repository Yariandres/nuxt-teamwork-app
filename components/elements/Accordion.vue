<script setup lang="ts">
defineProps<{
  item: string[];
}>();
</script>

<template>
  <div :class="$style['accordion']">
    <div :class="$style['accordion-top']">
      <h3 :class="[$style['accordion-title'], $style['active']]">
        {{ item.title }}
      </h3>
      <img src="~/assets/svg/icon.svg" alt="accordion triangle" />
    </div>
    <p :class="$style['accordion-text']">{{ item.text }}</p>
  </div>
</template>

<style lang="scss" module>
.accordion {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-inline: 18px;
  padding-block-start: 18px;
  padding-block-end: 38px;
  align-self: stretch;
  border-radius: 4px;
  background: #eaeef4;

  .accordion-top {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .accordion-text {
    color: #494e6a;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
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
