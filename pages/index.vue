<script setup lang="ts">
import { ref } from 'vue';

// TODO: to be removed and fetched
interface AccordionItems {
  text: string;
  image: string;
  title: string;
}

interface Data {
  tag: string;
  title: string;
  items: AccordionItems[];
}
// TODO: to be removed and fetched
const data = ref<Data[]>([
  {
    tag: 'PLAN',
    title: 'See challenges before they arise',
    items: [
      {
        text: 'Get a clearer understanding of team resources with Workload and assign projects to team members with the capacity to deliver.',
        image:
          'https://a.storyblok.com/f/99519/1300x1140/343f380282/workload-2x.webp',
        title: 'Capacity planning',
      },
      {
        text: 'Determine the phases and goals of your project to accurately estimate how long it will take and break into manageable chunks for delivery with Milestones.',
        image:
          'https://a.storyblok.com/f/99519/1300x1140/c5003a597e/milestones-2x.webp',
        title: 'Schedule your goals',
      },
      {
        text: 'Use estimated time to plan how long each task in a project will take to send more realistic quotes to clients and set expectations on delivery from the start.',
        image:
          'https://a.storyblok.com/f/99519/1300x1140/d8d5fbe19e/estimated-time-2x.webp',
        title: 'Estimated time',
      },
      {
        text: 'Group all your team or company projects into one Kanban view and easily spot the bottlenecks that put your plan at risk with Portfolio.',
        image:
          'https://a.storyblok.com/f/99519/1300x1140/f8ce3583e9/portfolio-2x.webp',
        title: 'Remove bottlenecks',
      },
    ],
  },
]);

const errMsg = ref<string | null>(null);

onErrorCaptured(() => {
  errMsg.value = 'Something went wrong';
});
</script>

<template>
  <div v-if="errMsg">{{ errMsg }}</div>
  <Suspense>
    <template #default>
      <section :class="$style['section']">
        <div :class="$style['section__placeholder']">
          <!-- TODO: use nuxt-image for optimazation? -->
          <img src="~/assets/img/image.png" alt="mockup" loading="lazy" />
        </div>

        <div :class="$style['section__box']">
          <div :class="$style['section__description']">
            <h3 :class="$style['section__name']">{{ data[0].tag }}</h3>
            <h1 :class="$style['section__title']">
              {{ data[0].title }}
            </h1>
          </div>

          <div :class="$style['accordion-container']">
            <elements-accordion
              v-for="(item, index) in data[0].items"
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
.section {
  display: flex;
  gap: 150px;
  margin-block-start: 81px;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  &__placeholder {
    margin-inline-start: 91px;

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      display: none;
    }

    img {
      @media only screen and (min-width: 1024px) {
        width: 100%;
        height: auto;
      }
    }

    @media only screen and (max-width: 767px) {
      display: none;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 34px;
    padding-inline-end: 116px;
    width: 400px;

    @media only screen and (max-width: 767px) {
      padding-inline: 28px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      padding-inline: 28px;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  &__name {
    color: #ff22b1;
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
