import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePreferencesStore = defineStore('preferences', () => {
  // State
  const reducedMotion = ref(false)
  const animations = ref(true)
  const soundEffects = ref(false)

  // Actions
  function updatePreference(key, value) {
    if (key in { reducedMotion, animations, soundEffects }) {
      switch (key) {
        case 'reducedMotion':
          reducedMotion.value = value
          break
        case 'animations':
          animations.value = value
          break
        case 'soundEffects':
          soundEffects.value = value
          break
      }
      savePreferences()
      applyPreferences()
    }
  }

  function savePreferences() {
    const prefs = {
      reducedMotion: reducedMotion.value,
      animations: animations.value,
      soundEffects: soundEffects.value,
    }
    localStorage.setItem('kudadonbe_preferences', JSON.stringify(prefs))
  }

  function loadPreferences() {
    const saved = localStorage.getItem('kudadonbe_preferences')
    if (saved) {
      try {
        const prefs = JSON.parse(saved)
        reducedMotion.value = prefs.reducedMotion ?? reducedMotion.value
        animations.value = prefs.animations ?? animations.value
        soundEffects.value = prefs.soundEffects ?? soundEffects.value
      } catch (e) {
        console.error('Failed to load preferences:', e)
      }
    }
  }

  function applyPreferences() {
    const root = document.documentElement

    // Apply reduced motion preference
    if (reducedMotion.value || !animations.value) {
      root.style.setProperty('--animation-duration', '0s')
      root.style.setProperty('--transition-duration', '0s')
    } else {
      root.style.removeProperty('--animation-duration')
      root.style.removeProperty('--transition-duration')
    }
  }

  function resetPreferences() {
    reducedMotion.value = false
    animations.value = true
    soundEffects.value = false
    savePreferences()
    applyPreferences()
  }

  function initPreferences() {
    // Detect system reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      reducedMotion.value = true
      animations.value = false
    }

    // Load saved preferences (overrides system defaults)
    loadPreferences()
    applyPreferences()

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        updatePreference('reducedMotion', true)
        updatePreference('animations', false)
      }
    })
  }

  return {
    // State
    reducedMotion,
    animations,
    soundEffects,

    // Actions
    updatePreference,
    resetPreferences,
    initPreferences,
  }
})
