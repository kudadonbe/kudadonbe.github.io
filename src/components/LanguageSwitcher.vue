<template>
  <!-- Click outside to close -->
  <div
    v-if="isOpen"
    class="fixed inset-0 z-40"
    @click="isOpen = false"
  ></div>

  <div class="relative z-50">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors"
      :aria-label="'Current language: ' + currentLanguage.label"
      :aria-expanded="isOpen"
    >
      <span>{{ currentLanguage.code.toUpperCase() }}</span>
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-show="isOpen"
      class="absolute top-full mt-1 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 min-w-[120px]"
    >
      <router-link
        v-for="lang in languages"
        :key="lang.code"
        :to="'/' + lang.code"
        @click="isOpen = false"
        :class="[
          'block w-full px-4 py-2 text-sm text-left transition-colors',
          currentLang === lang.code
            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        ]"
      >
        {{ lang.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '../stores'

const languageStore = useLanguageStore()
const { currentLang, languages, currentLanguage } = storeToRefs(languageStore)

const isOpen = ref(false)
</script>
