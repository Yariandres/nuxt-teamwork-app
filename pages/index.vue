<script setup lang="ts">
import { ref } from 'vue';

const errMsg = ref<string | null>(null);

onErrorCaptured(() => {
  errMsg.value = 'Something went wrong';
});

const { data: content } = await useApi().getAllData();
</script>

<template>
  <p aria-hidden="true" v-if="errMsg">{{ errMsg }}</p>
  <Suspense>
    <template #default>
      <section :class="$style['section']">
        <div :class="$style['section__placeholder']">
          <img
            src="~/assets/img/image.png"
            alt="mockup"
            width="650px"
            height="540"
          />
        </div>

        <div :class="$style['section__box']">
          <div :class="$style['section__description']">
            <h3 :class="$style['section__name']">{{ content?.tag }}</h3>
            <h1 :class="$style['section__title']">
              {{ content?.title }}
            </h1>
          </div>

          <div :class="$style['accordion-container']">
            <elements-accordion
              v-for="(item, index) in content?.items"
              :key="index"
              :item="item"
              :index="index"
            />
          </div>
        </div>
      </section>
    </template>
    <template #fallback>Loading... </template>
  </Suspense>
</template>

<style lang="scss" module>
@import '~/assets/scss/mixins';
.section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-block-start: 81px;

  @include responsive(desktop) {
    flex-direction: column;
  }

  &__placeholder {
    margin-inline-start: 91px;

    @include responsive(mobile) {
      display: none;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 34px;
    width: 400px;
    margin: 0 auto;

    @include responsive(mobile) {
      padding-inline: 0;
      margin: 0 auto;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  &__name {
    color: #ff22b1;
    background-color: transparent;
    font-family: Work Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  &__title {
    color: #1d1c39;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 41px;
  }

  .accordion-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
