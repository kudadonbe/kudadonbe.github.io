<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-4xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {{ t.about.title }}
      </h2>

      <!-- Content -->
      <div class="prose prose-lg dark:prose-invert mx-auto">
        <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {{ t.about.content }}
        </p>
      </div>

      <!-- Stats (Optional) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">5+</div>
          <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">20+</div>
          <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">10+</div>
          <div class="text-gray-600 dark:text-gray-400">Technologies</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '../stores'

const languageStore = useLanguageStore()
const { t } = storeToRefs(languageStore)
</script>
