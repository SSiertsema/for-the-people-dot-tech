<script setup lang="ts">
useSeoMeta({
  title: 'For The People - Technology for Citizens',
  description:
    'A non-profit tech hub empowering citizens through accessible digital tools and community-driven solutions.',
});

const initiatives = [
  {
    slug: 'health-journey',
    title: 'Health Journey',
    description:
      'Personal health tracking with community support. Set goals, share experiences, and stay motivated together.',
    icon: 'pi-heart',
    status: 'Active',
  },
  {
    slug: null,
    title: 'Coming Soon',
    description:
      'More initiatives are being developed. Have an idea? Get involved and help shape the future.',
    icon: 'pi-lightbulb',
    status: 'Planning',
  },
];

const values = [
  {
    icon: 'pi-users',
    title: 'Community First',
    description:
      'Solutions built by and for the community. Every feature is driven by real needs, not profit motives.',
  },
  {
    icon: 'pi-lock-open',
    title: 'Open & Transparent',
    description:
      'Open source development where possible. No hidden agendas, no data exploitation.',
  },
  {
    icon: 'pi-arrows-alt',
    title: 'Bottom-Up Approach',
    description:
      'Instead of top-down policies, we empower individuals to solve their own problems with the right tools.',
  },
  {
    icon: 'pi-dollar',
    title: 'Forever Free',
    description:
      'No subscriptions, no premium tiers, no ads. Our tools are funded by the community, for the community.',
  },
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div class="section-container py-20 md:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
          >
            <i class="pi pi-sparkles"></i>
            <span>Non-profit Technology Hub</span>
          </div>

          <h1
            class="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Technology
            <span class="gradient-text">For The People</span>
          </h1>

          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We build accessible digital tools that empower citizens to solve
            their own problems. No corporate agendas. No profit motives. Just
            technology that truly serves you.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#initiatives" class="btn-primary">
              <i class="pi pi-arrow-down mr-2"></i>
              Explore Our Initiatives
            </a>
            <a href="#contribute" class="btn-secondary">
              <i class="pi pi-heart mr-2"></i>
              Get Involved
            </a>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"
      ></div>
    </section>

    <!-- Problem Statement -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why We Exist
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Traditional solutions often fail the people they're meant to serve.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Problem -->
          <div
            class="p-8 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50"
          >
            <div
              class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4"
            >
              <i class="pi pi-times text-red-600 dark:text-red-400 text-xl"></i>
            </div>
            <h3 class="font-heading text-xl font-semibold mb-3 text-red-900 dark:text-red-200">
              Top-Down Approaches Fail
            </h3>
            <ul class="space-y-2 text-red-800 dark:text-red-300 text-sm">
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Government policies are slow and disconnected</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Corporate solutions prioritize profit over people</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Users are passive recipients, not active participants</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Your data becomes the product</span>
              </li>
            </ul>
          </div>

          <!-- Solution -->
          <div
            class="p-8 rounded-2xl bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-900/50"
          >
            <div
              class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4"
            >
              <i class="pi pi-check text-primary-600 dark:text-primary-400 text-xl"></i>
            </div>
            <h3 class="font-heading text-xl font-semibold mb-3 text-primary-900 dark:text-primary-200">
              Bottom-Up Solutions Work
            </h3>
            <ul class="space-y-2 text-primary-800 dark:text-primary-300 text-sm">
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Community-driven features that address real needs</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Non-profit model ensures user interests come first</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Users are empowered to help themselves and others</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="pi pi-angle-right mt-0.5"></i>
                <span>Your data stays yours, period</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Initiatives Section -->
    <section
      id="initiatives"
      class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Initiatives
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Practical tools that put powerful technology directly in your hands.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card
            v-for="initiative in initiatives"
            :key="initiative.title"
            class="overflow-hidden"
          >
            <template #header>
              <div
                class="h-32 bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center"
              >
                <i :class="`pi ${initiative.icon} text-white text-5xl`"></i>
              </div>
            </template>
            <template #title>
              <div class="flex items-center justify-between">
                <span>{{ initiative.title }}</span>
                <span
                  :class="[
                    'text-xs px-2 py-1 rounded-full',
                    initiative.status === 'Active'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
                  ]"
                >
                  {{ initiative.status }}
                </span>
              </div>
            </template>
            <template #content>
              <p class="text-gray-600 dark:text-gray-400">
                {{ initiative.description }}
              </p>
            </template>
            <template #footer>
              <NuxtLink
                v-if="initiative.slug"
                :to="`/initiatives/${initiative.slug}`"
                class="block"
              >
                <Button
                  label="Learn More"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  severity="primary"
                  class="w-full"
                />
              </NuxtLink>
              <NuxtLink v-else to="/initiatives" class="block">
                <Button
                  label="View All Initiatives"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  severity="secondary"
                  class="w-full"
                />
              </NuxtLink>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="about" class="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Values
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            The principles that guide everything we build.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="value in values"
            :key="value.title"
            class="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
          >
            <div
              class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4"
            >
              <i
                :class="`pi ${value.icon} text-primary-600 dark:text-primary-400 text-xl`"
              ></i>
            </div>
            <h3 class="font-heading font-semibold mb-2">{{ value.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      id="contribute"
      class="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-emerald-600"
    >
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            Join The Movement
          </h2>
          <p class="text-primary-100 mb-8 text-lg">
            Whether you're a developer, designer, or just someone who believes
            in technology that serves people - there's a place for you here.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              label="Contribute on GitHub"
              icon="pi pi-github"
              severity="contrast"
              size="large"
            />
            <Button
              label="Join Our Community"
              icon="pi pi-users"
              outlined
              severity="contrast"
              size="large"
            />
          </div>

          <p class="mt-8 text-sm text-primary-200">
            No experience required. Every contribution matters.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
