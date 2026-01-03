import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import { useThemeStore, usePreferencesStore } from './stores'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize stores (language is now synced via router)
const themeStore = useThemeStore()
const preferencesStore = usePreferencesStore()

themeStore.initTheme()
preferencesStore.initPreferences()

app.mount('#app')
