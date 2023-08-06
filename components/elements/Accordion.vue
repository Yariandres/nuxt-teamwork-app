<script setup lang="ts">
const props = defineProps<{
  item: { title: string; text: string };
  index: number;
}>();

const isOpen = ref<boolean>(false);

onMounted(() => {
  if (props.index === 0) {
    isOpen.value = true;
  }
});

const handleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div :class="$style['accordion']">
    <div :class="$style['accordion__top']" @click="handleIsOpen">
      <h3
        :class="{
          [$style['accordion__top--title']]: true,
          [$style['active']]: isOpen,
        }"
      >
        {{ item.title }}
      </h3>
      <img
        :class="{
          [$style['accordion__top--trigger']]: true,
          [$style['rotate']]: isOpen,
        }"
        src="~/assets/svg/icon.svg"
        alt="Accordion triangle icon"
        loading="lazy"
      />
    </div>

    <elements-accordion-content v-if="isOpen">
      <template #content>
        <p :class="$style['accordion-text']">
          {{ item.text }}
        </p>

        <img
          :class="$style['accordion-image']"
          v-if="index === 0"
          src="~/assets/img/imagesm.png"
          alt="Accordion plan"
        />
      </template>
    </elements-accordion-content>
  </div>
</template>

<style lang="scss" module>
@import '~/assets/scss/mixins';

.accordion {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 4px;
  background: #eaeef4;
  padding-inline: 18px;
  max-width: 400px;

  &__top {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding-inline: 18px;
    padding-block-start: 18px;
    padding-block-end: 18px;

    &--title {
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
    }

    &--title.active {
      color: #4461d7;
    }

    &--trigger {
      @include rotate-triangle(-180deg);

      &.rotate {
        @include rotate-triangle(0deg, 0.3s);
      }
    }
  }

  .accordion-text {
    color: #494e6a;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    padding-block-start: 15px;
    padding-block-end: 38px;
    max-width: 400px;

    @include responsive(mobile) {
      padding-block-end: 15px;
    }
  }

  .accordion-image {
    display: none;

    @include responsive(mobile) {
      display: block;
      padding-block-end: 38px;
    }
  }
}
</style>
