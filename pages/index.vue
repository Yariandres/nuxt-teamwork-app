<script setup lang="ts">
import { ref } from 'vue';

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
</script>

<template>
  <section :class="$style['section']">
    <div>
      <img src="~/assets/img/image.png" alt="mockup" />
    </div>
    <div :class="$style['wrapper']">
      <div :class="$style['section-description']">
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
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
.section {
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
  .section-description {
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
