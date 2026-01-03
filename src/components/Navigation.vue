<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <router-link :to="'/' + currentLang" class="text-xl font-bold text-gray-900 dark:text-white">
            kudadonbe
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            {{ t.nav[link.key] || link.label }}
          </a>

          <div class="flex items-center gap-3 ms-4 ps-4 border-s border-gray-300 dark:border-gray-700">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <!-- Mobile: Language + Theme -->
        <div class="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ms-2"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileMenuOpen"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ t.nav[link.key] || link.label }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '../stores'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const languageStore = useLanguageStore()
const { t, currentLang } = storeToRefs(languageStore)

const mobileMenuOpen = ref(false)

const navLinks = [
  { href: '#about', key: 'about', label: 'About' },
  { href: '#skills', key: 'skills', label: 'Skills' },
  { href: '#projects', key: 'projects', label: 'Projects' },
  { href: 'https://github.com/kudadonbe', key: 'github', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/kudadonbe', key: 'linkedin', label: 'LinkedIn', external: true },
]
</script>
