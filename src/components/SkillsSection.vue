<template>
  <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        {{ t.skills.title }}
      </h2>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
        >
          <component
            :is="skill.icon"
            class="w-12 h-12 mb-3 text-primary-500"
          />
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ skill.name }}</h3>
        </div>
      </div>

      <!-- Categories -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
          <ul class="space-y-2">
            <li class="text-gray-700 dark:text-gray-300">Vue.js / React</li>
            <li class="text-gray-700 dark:text-gray-300">Tailwind CSS</li>
            <li class="text-gray-700 dark:text-gray-300">TypeScript</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
          <ul class="space-y-2">
            <li class="text-gray-700 dark:text-gray-300">Node.js / Python</li>
            <li class="text-gray-700 dark:text-gray-300">REST APIs</li>
            <li class="text-gray-700 dark:text-gray-300">Databases</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tools & DevOps</h3>
          <ul class="space-y-2">
            <li class="text-gray-700 dark:text-gray-300">Git / GitHub</li>
            <li class="text-gray-700 dark:text-gray-300">Docker</li>
            <li class="text-gray-700 dark:text-gray-300">CI/CD</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '../stores'
import {
  BoltIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ServerIcon,
  CommandLineIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  CubeIcon
} from '@heroicons/vue/24/outline'

const languageStore = useLanguageStore()
const { t } = storeToRefs(languageStore)

const skills = [
  { name: 'Vue.js', icon: BoltIcon },
  { name: 'React', icon: CodeBracketIcon },
  { name: 'TypeScript', icon: DocumentTextIcon },
  { name: 'Node.js', icon: ServerIcon },
  { name: 'Python', icon: CommandLineIcon },
  { name: 'Tailwind', icon: PaintBrushIcon },
  { name: 'Git', icon: WrenchScrewdriverIcon },
  { name: 'Docker', icon: CubeIcon },
]
</script>
