<template>
  <div class="flex gap-2 flex-wrap">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="setLanguage(lang.code)"
      :class="[
        'px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm',
        currentLang === lang.code
          ? 'bg-primary-500 text-white ring-2 ring-primary-400 ring-offset-2'
          : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
      ]"
      :aria-label="`Switch to ${lang.label}`"
      :aria-current="currentLang === lang.code ? 'true' : undefined"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '../stores'

const languageStore = useLanguageStore()
const { currentLang, languages } = storeToRefs(languageStore)
const { setLanguage } = languageStore
</script>
