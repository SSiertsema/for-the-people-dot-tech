<script setup lang="ts">
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header
      class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div class="section-container">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="text-2xl">
              <i class="pi pi-users text-primary-600"></i>
            </span>
            <span class="font-heading font-bold text-xl">For The People</span>
          </NuxtLink>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink
              to="/initiatives"
              class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              Initiatives
            </NuxtLink>
            <a
              href="/#about"
              class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              About
            </a>
            <a
              href="/#contribute"
              class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              Contribute
            </a>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-4">
            <Button
              :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
              severity="secondary"
              text
              rounded
              aria-label="Toggle theme"
              @click="toggleTheme"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="section-container py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <i class="pi pi-users text-primary-600 text-xl"></i>
              <span class="font-heading font-bold text-lg">For The People</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Technology for citizens, by the community. Empowering people
              through accessible digital tools.
            </p>
          </div>

          <!-- Links -->
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <NuxtLink to="/initiatives" class="hover:text-primary-600">Our Initiatives</NuxtLink>
              </li>
              <li>
                <a href="/#about" class="hover:text-primary-600">About Us</a>
              </li>
              <li>
                <a href="/#contribute" class="hover:text-primary-600">Get Involved</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-semibold mb-4">Connect</h4>
            <div class="flex gap-4">
              <a
                href="#"
                class="text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="GitHub"
              >
                <i class="pi pi-github text-xl"></i>
              </a>
              <a
                href="#"
                class="text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="Email"
              >
                <i class="pi pi-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500"
        >
          <p>&copy; {{ new Date().getFullYear() }} For The People. Open source and community-driven.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
