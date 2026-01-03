import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // State
  const theme = ref('system') // 'light' | 'dark' | 'system'
  const isDark = ref(false)

  // Getters
  const currentTheme = computed(() => theme.value)
  const effectiveTheme = computed(() => isDark.value ? 'dark' : 'light')

  // Actions
  function setTheme(newTheme) {
    if (!['light', 'dark', 'system'].includes(newTheme)) return

    theme.value = newTheme
    localStorage.setItem('kudadonbe_theme', newTheme)
    applyTheme()
  }

  function toggleTheme() {
    if (theme.value === 'system') {
      // When toggling from system, switch to opposite of current effective theme
      setTheme(isDark.value ? 'light' : 'dark')
    } else if (theme.value === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  function applyTheme() {
    const root = document.documentElement

    if (theme.value === 'system') {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    } else {
      isDark.value = theme.value === 'dark'
    }

    // Apply dark class to root element
    if (isDark.value) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  function initTheme() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('kudadonbe_theme')
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme.value = savedTheme
    }

    applyTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      if (theme.value === 'system') {
        isDark.value = e.matches
        applyTheme()
      }
    })
  }

  // Watch for theme changes and apply
  watch(theme, applyTheme)

  return {
    // State
    theme,
    isDark,

    // Getters
    currentTheme,
    effectiveTheme,

    // Actions
    setTheme,
    toggleTheme,
    initTheme,
    applyTheme,
  }
})
