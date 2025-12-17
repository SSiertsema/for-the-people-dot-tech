<script setup lang="ts">
useSeoMeta({
  title: 'Our Initiatives - For The People',
  description:
    'Discover our community-driven initiatives that put powerful technology directly in your hands.',
});

const initiatives = [
  {
    slug: 'health-journey',
    title: 'Health Journey',
    tagline: 'Your path to better health, supported by community',
    description:
      'A personal health tracking platform with community support. Set goals, share experiences, and stay motivated together with peers on similar journeys.',
    icon: 'pi-heart',
    status: 'Active',
    features: [
      'Personal health tracking',
      'Community support',
      'Progress visualization',
      'Peer accountability',
    ],
  },
  {
    slug: null,
    title: 'Community Ideas',
    tagline: 'Help shape the future',
    description:
      'Have an idea for an initiative that could help people? We want to hear from you. Join our community and help build the next solution.',
    icon: 'pi-lightbulb',
    status: 'Open for Ideas',
    features: [
      'Submit your ideas',
      'Vote on proposals',
      'Collaborate with others',
      'See ideas come to life',
    ],
  },
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div class="section-container py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 mb-6"
          >
            <i class="pi pi-arrow-left"></i>
            Back to Home
          </NuxtLink>

          <h1 class="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our <span class="gradient-text">Initiatives</span>
          </h1>

          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each initiative is a community-driven project designed to solve real
            problems. No corporate interests. No hidden agendas. Just tools that
            serve you.
          </p>
        </div>
      </div>

      <!-- Decorative elements -->
      <div
        class="absolute top-10 left-10 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"
      ></div>
    </section>

    <!-- Initiatives List -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div class="section-container">
        <div class="space-y-8">
          <div
            v-for="initiative in initiatives"
            :key="initiative.title"
            class="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Icon/Visual Section -->
              <div
                class="lg:w-1/3 bg-gradient-to-br from-primary-500 to-emerald-500 p-8 lg:p-12 flex items-center justify-center"
              >
                <div class="text-center text-white">
                  <i :class="`pi ${initiative.icon} text-6xl lg:text-7xl mb-4`"></i>
                  <span
                    :class="[
                      'inline-block px-3 py-1 rounded-full text-sm font-medium',
                      initiative.status === 'Active'
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white/80',
                    ]"
                  >
                    {{ initiative.status }}
                  </span>
                </div>
              </div>

              <!-- Content Section -->
              <div class="lg:w-2/3 p-8 lg:p-12">
                <h2 class="font-heading text-2xl lg:text-3xl font-bold mb-2">
                  {{ initiative.title }}
                </h2>
                <p class="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {{ initiative.tagline }}
                </p>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  {{ initiative.description }}
                </p>

                <!-- Features -->
                <div class="grid grid-cols-2 gap-3 mb-8">
                  <div
                    v-for="feature in initiative.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <i class="pi pi-check-circle text-primary-500"></i>
                    <span>{{ feature }}</span>
                  </div>
                </div>

                <!-- CTA -->
                <NuxtLink
                  v-if="initiative.slug"
                  :to="`/initiatives/${initiative.slug}`"
                >
                  <Button
                    label="Learn More"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    severity="primary"
                  />
                </NuxtLink>
                <Button
                  v-else
                  label="Share Your Idea"
                  icon="pi pi-send"
                  iconPos="right"
                  severity="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl font-bold mb-4">
            How We Build Initiatives
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Every initiative follows our core principles of community-first development.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div
              class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4"
            >
              <i class="pi pi-users text-primary-600 dark:text-primary-400 text-2xl"></i>
            </div>
            <h3 class="font-heading font-semibold mb-2">Community Driven</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Ideas come from real people with real needs. The community decides
              what gets built.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4"
            >
              <i class="pi pi-code text-primary-600 dark:text-primary-400 text-2xl"></i>
            </div>
            <h3 class="font-heading font-semibold mb-2">Open Development</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Transparent development process. Open source where possible.
              Everyone can contribute.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4"
            >
              <i class="pi pi-heart text-primary-600 dark:text-primary-400 text-2xl"></i>
            </div>
            <h3 class="font-heading font-semibold mb-2">User First</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              No profit motives. No data harvesting. Every feature exists to
              benefit the user.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
