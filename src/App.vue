<template>
  <div :dir="isRTL ? 'rtl' : 'ltr'">
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
import { storeToRefs } from 'pinia'
import { useLanguageStore } from './stores'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'

const languageStore = useLanguageStore()
const { isRTL } = storeToRefs(languageStore)
</script>
