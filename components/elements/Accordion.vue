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
    <elements-accordion-header :handleIsOpen="handleIsOpen">
      <template #header>
        <h2
          :class="{
            [$style['accordion__title']]: true,
            [$style['active']]: isOpen,
          }"
        >
          {{ item.title }}
        </h2>
        <elements-accordion-icon
          :class="{
            [$style['accordion__trigger']]: true,
            [$style['rotate']]: isOpen,
          }"
        />
      </template>
    </elements-accordion-header>

    <elements-accordion-content v-if="isOpen">
      <template #content>
        <p :class="$style['accordion__text']">
          {{ item.text }}
        </p>
        <nuxt-img
          v-if="index === 0"
          src="/image.png"
          :class="$style['accordion__image']"
          width="126"
          height="101"
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

  &__title {
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }

  &__title.active {
    color: #4461d7;
  }

  &__trigger {
    @include rotate-triangle(-180deg);

    &.rotate {
      @include rotate-triangle(0deg, 0.3s);
    }
  }
  &__text {
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

  &__image {
    margin: 0 auto;
    display: none;

    @include responsive(mobile) {
      display: block;
      padding-block-end: 38px;
    }
  }
}
</style>
