<template>
  <div>
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguageStore } from '../stores'
import Navigation from '../components/Navigation.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const languageStore = useLanguageStore()

// Sync language with route
watch(
  () => route.params.lang,
  (lang) => {
    if (lang && lang !== languageStore.currentLang) {
      languageStore.setLanguage(lang)
    }
  },
  { immediate: true }
)
</script>
