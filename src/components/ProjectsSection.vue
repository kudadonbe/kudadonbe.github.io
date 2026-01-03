<template>
  <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        {{ t.projects.title }}
      </h2>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-lg"
        >
          <!-- Project Image/Icon -->
          <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <component
              :is="project.icon"
              class="w-20 h-20 text-white"
            />
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-4">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                GitHub →
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-12">
        <a
          href="https://github.com/kudadonbe"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
        >
          {{ t.projects.viewMore }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '../stores'
import {
  GlobeAltIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

const languageStore = useLanguageStore()
const { t } = storeToRefs(languageStore)

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Vue, Vite, and Tailwind CSS. Features dark mode, multi-language support, and responsive design.',
    icon: GlobeAltIcon,
    tech: ['Vue', 'Vite', 'Tailwind', 'Pinia'],
    github: 'https://github.com/kudadonbe/kudadonbe.github.io',
    demo: 'https://kudadonbe.dev',
  },
  {
    title: 'Coming Soon',
    description: 'More exciting projects on the way! Stay tuned for updates.',
    icon: RocketLaunchIcon,
    tech: ['React', 'TypeScript', 'Node.js'],
    github: '#',
  },
  {
    title: 'Coming Soon',
    description: 'Another amazing project in development.',
    icon: SparklesIcon,
    tech: ['Vue', 'Python', 'Docker'],
    github: '#',
  },
]
</script>
