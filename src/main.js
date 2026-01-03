import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import { useLanguageStore, useThemeStore, usePreferencesStore } from './stores'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Initialize stores
const languageStore = useLanguageStore()
const themeStore = useThemeStore()
const preferencesStore = usePreferencesStore()

languageStore.initLanguage()
themeStore.initTheme()
preferencesStore.initPreferences()

app.mount('#app')
