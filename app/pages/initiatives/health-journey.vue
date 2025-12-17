<script setup lang="ts">
useSeoMeta({
  title: 'Health Journey - For The People',
  description:
    'You are not alone on this journey. A platform for real health transformations with honest community support, personal tracking, and accountability buddies.',
});

const features = [
  {
    icon: 'pi-heart',
    title: 'Honesty First',
    description:
      'Real journeys, real struggles—not filtered highlight reels. We celebrate the hard days alongside the victories because setbacks are part of the story, not failures.',
  },
  {
    icon: 'pi-user',
    title: 'You Stay in Control',
    description:
      'You drive your journey. Set your own pace, define your own goals, choose what to share. The app suggests—you decide. Every choice is yours.',
  },
  {
    icon: 'pi-users',
    title: 'Buddy Matching',
    description:
      'Find accountability partners who truly understand. Our matching connects you with people on similar paths—someone to check in with, celebrate with, and lean on.',
  },
  {
    icon: 'pi-chart-line',
    title: 'Track What Matters to You',
    description:
      'Weight, mood, energy, habits—track any metric that matters. Structured goals with numbers or unstructured reflections. Daily logging takes under 2 minutes.',
  },
  {
    icon: 'pi-flag',
    title: 'Celebrate Every Milestone',
    description:
      'Automatic milestones for consistency plus custom ones you define. First post, 7-day streak, achieved a goal—every step forward deserves recognition.',
  },
  {
    icon: 'pi-shield',
    title: 'Privacy You Control',
    description:
      'Share publicly, with your community, with connections only, or keep it private. Granular controls for every piece of information. Your data, your rules.',
  },
];

const benefits = [
  {
    stat: '65%',
    label: 'Quit in Weeks 2-4',
    description: 'Most health journeys fail during the motivation dip. We help you push through with community and strategies.',
  },
  {
    stat: '200+',
    label: 'Motivation Strategies',
    description: 'From fighting the dip to handling setbacks—practical tips for every phase of your journey.',
  },
  {
    stat: '100%',
    label: 'Free, Always',
    description: 'No premium tiers, no paywalls. Every feature available to everyone, forever.',
  },
];

const journeyTypes = [
  { icon: 'pi-heart', label: 'Weight Management' },
  { icon: 'pi-bolt', label: 'Fitness & Strength' },
  { icon: 'pi-sun', label: 'Mental Wellness' },
  { icon: 'pi-shield', label: 'Chronic Conditions' },
  { icon: 'pi-refresh', label: 'Recovery' },
  { icon: 'pi-star', label: 'General Wellness' },
];

const faqs = [
  {
    question: 'What makes this different from other health apps?',
    answer:
      'Most apps show you filtered success stories and push products. We built Health Journey on radical honesty—real struggles get celebrated, not hidden. There\'s no competition, no comparison culture, no shame. Just real people supporting each other through real transformations.',
  },
  {
    question: 'How does buddy matching work?',
    answer:
      'Write a brief bio about yourself and your journey. Our system finds people with similar goals, life situations, or challenges. You can connect as accountability partners—checking in regularly, sharing progress, and supporting each other through the hard days.',
  },
  {
    question: 'What if I fall off track?',
    answer:
      'That\'s part of the journey, and we planned for it. No guilt-inducing "we miss you" messages. Instead, you\'ll find comeback strategies, supportive community members who\'ve been there, and a fresh start whenever you\'re ready. Setbacks are data, not disasters.',
  },
  {
    question: 'How much time does daily logging take?',
    answer:
      'Under 2 minutes. We designed it for real life—quick check-ins that capture what matters without becoming another chore. Track structured metrics or just write a quick reflection. Whatever works for you.',
  },
  {
    question: 'Can I keep my journey private?',
    answer:
      'Absolutely. Every piece of information has privacy controls: public, community-only, connections-only, or completely private. Use it as a personal journal or share your story with the world—you decide.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. Health Journey is for motivation, tracking, and community support—not medical treatment. Always work with healthcare professionals for medical decisions. We help you stay motivated and documented, not diagnose or prescribe.',
  },
];

const expandedFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index;
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div class="section-container py-16 md:py-24">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
            <i class="pi pi-angle-right text-xs"></i>
            <NuxtLink to="/initiatives" class="hover:text-primary-600">Initiatives</NuxtLink>
            <i class="pi pi-angle-right text-xs"></i>
            <span class="text-gray-900 dark:text-gray-100">Health Journey</span>
          </div>

          <div class="flex flex-col lg:flex-row items-center gap-12">
            <!-- Content -->
            <div class="lg:w-1/2">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4"
              >
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Active Initiative
              </div>

              <h1 class="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
                You Are Not <span class="gradient-text">Alone</span>
              </h1>

              <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Real health transformations. Honest struggles. A community that gets it.
              </p>

              <p class="text-gray-600 dark:text-gray-400 mb-8">
                Most health journeys fail in weeks 2-4 when motivation fades and you're
                left alone with your goals. Health Journey changes that—combining personal
                tracking with accountability buddies and a community that celebrates
                the hard days alongside the victories.
              </p>

              <div class="flex flex-col sm:flex-row gap-4">
                <Button
                  label="Start Your Journey"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  severity="primary"
                  size="large"
                />
                <Button
                  label="View on GitHub"
                  icon="pi pi-github"
                  severity="secondary"
                  size="large"
                  outlined
                />
              </div>
            </div>

            <!-- Visual -->
            <div class="lg:w-1/2">
              <div
                class="relative bg-gradient-to-br from-primary-500 to-emerald-500 rounded-3xl p-8 text-white"
              >
                <div class="absolute inset-0 bg-black/10 rounded-3xl"></div>
                <div class="relative">
                  <i class="pi pi-heart text-8xl opacity-20 absolute top-0 right-0"></i>
                  <div class="space-y-6">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <i class="pi pi-heart text-2xl"></i>
                      </div>
                      <div>
                        <div class="font-semibold">Honesty First</div>
                        <div class="text-sm text-white/80">Real stories, real struggles</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <i class="pi pi-users text-2xl"></i>
                      </div>
                      <div>
                        <div class="font-semibold">Find Your Buddy</div>
                        <div class="text-sm text-white/80">Matched accountability partner</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <i class="pi pi-user text-2xl"></i>
                      </div>
                      <div>
                        <div class="font-semibold">You're in Control</div>
                        <div class="text-sm text-white/80">Your pace, your goals, your choice</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"
      ></div>
    </section>

    <!-- The Problem -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            The Motivation Dip Is Real
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Week 1 is exciting. Week 4? That's where most journeys quietly end. We built Health Journey to change that.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Problem -->
          <div class="p-8 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
            <h3 class="font-heading text-xl font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
              <i class="pi pi-times-circle"></i>
              Why Most Health Apps Fail You
            </h3>
            <ul class="space-y-3 text-red-800 dark:text-red-300">
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Filtered success stories that make you feel inadequate</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>No one there when motivation fades in weeks 2-4</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Guilt-inducing "we miss you!" notifications</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Comparison culture that damages mental health</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Sponsored content disguised as health advice</span>
              </li>
            </ul>
          </div>

          <!-- Solution -->
          <div class="p-8 rounded-2xl bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-900/50">
            <h3 class="font-heading text-xl font-semibold mb-4 text-primary-900 dark:text-primary-200 flex items-center gap-2">
              <i class="pi pi-check-circle"></i>
              How Health Journey Is Different
            </h3>
            <ul class="space-y-3 text-primary-800 dark:text-primary-300">
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Real stories—struggles get celebrated, not hidden</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Accountability buddies matched to your journey</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Comeback strategies instead of shame tactics</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>No competition—just encouragement and support</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-angle-right mt-1 flex-shrink-0"></i>
                <span>Community advice, not sponsored products</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            Built on Two Core Beliefs
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Honesty first. You stay in control. Every feature follows from these principles.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
          >
            <div
              class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4"
            >
              <i :class="`pi ${feature.icon} text-primary-600 dark:text-primary-400 text-xl`"></i>
            </div>
            <h3 class="font-heading font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-emerald-600">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            We Know Why Journeys Fail
          </h2>
          <p class="text-primary-100">
            Motivation gets you started. Community keeps you going.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center text-white">
          <div v-for="benefit in benefits" :key="benefit.label">
            <div class="text-5xl font-bold mb-2">{{ benefit.stat }}</div>
            <div class="font-semibold mb-2">{{ benefit.label }}</div>
            <p class="text-sm text-primary-100">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Types -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            Whatever Your Journey
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Health means something different to everyone. We support all types of transformations.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <div
            v-for="journey in journeyTypes"
            :key="journey.label"
            class="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <i :class="`pi ${journey.icon} text-primary-600 dark:text-primary-400`"></i>
            <span class="font-medium">{{ journey.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
            Start in Under 5 Minutes
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            No jargon, no complicated setup. Just you and your goals.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600"
              >
                1
              </div>
              <h3 class="font-semibold mb-2">Quick Sign Up</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Just an email. No lengthy forms, no personal details required.
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600"
              >
                2
              </div>
              <h3 class="font-semibold mb-2">Define Your Why</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Set goals your way—with numbers, or just intentions. You decide.
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600"
              >
                3
              </div>
              <h3 class="font-semibold mb-2">Find Your Buddy</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Get matched with someone who understands your specific journey.
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600"
              >
                4
              </div>
              <h3 class="font-semibold mb-2">Walk Together</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Log progress, support each other, celebrate every step forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div class="section-container">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
              Questions You Might Have
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              We've heard them all. Here are honest answers.
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <button
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                @click="toggleFaq(index)"
              >
                <span class="font-medium">{{ faq.question }}</span>
                <i
                  :class="[
                    'pi transition-transform',
                    expandedFaq === index ? 'pi-minus rotate-0' : 'pi-plus',
                  ]"
                ></i>
              </button>
              <div
                v-show="expandedFaq === index"
                class="px-6 pb-4 text-gray-600 dark:text-gray-400"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="section-container">
        <div
          class="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary-50 to-emerald-50 dark:from-gray-900 dark:to-gray-900 border border-primary-200 dark:border-gray-800"
        >
          <h2 class="font-heading text-3xl font-bold mb-4">
            Your Journey Starts Here
          </h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-2">
            Progress, not perfection.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-8">
            You don't need to feel motivated to take the first step. Action creates motivation.
            And this time, you won't be walking alone.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              label="Start Your Journey"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="primary"
              size="large"
            />
            <NuxtLink to="/initiatives">
              <Button
                label="Explore Other Initiatives"
                severity="secondary"
                size="large"
                outlined
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
