<template>
  <div class="landing-page" :dir="currentLang === 'ar' || currentLang === 'dv' ? 'rtl' : 'ltr'">
    <header class="header">
      <nav class="nav">
        <div class="lang-switcher">
          <button 
            v-for="lang in languages" 
            :key="lang.code"
            @click="switchLanguage(lang.code)"
            :class="['lang-btn', { active: currentLang === lang.code }]"
          >
            {{ lang.label }}
          </button>
        </div>
        <a href="https://github.com/kudadonbe" target="_blank" class="nav-link">GitHub</a>
        <a href="https://linkedin.com/in/kudadonbe" target="_blank" class="nav-link">LinkedIn</a>
      </nav>
    </header>

    <main class="main">
      <div class="logo-container">
        <h1 class="logo">
          <span class="logo-k">k</span>
          <span class="logo-u">u</span>
          <span class="logo-d">d</span>
          <span class="logo-a">a</span>
          <span class="logo-d2">d</span>
          <span class="logo-o">o</span>
          <span class="logo-n">n</span>
          <span class="logo-b">b</span>
          <span class="logo-e">e</span>
          <span class="logo-dev">.dev</span>
        </h1>
      </div>

      <div class="search-container">
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            type="text" 
            class="search-input" 
            :placeholder="t.searchPlaceholder"
            v-model="searchQuery"
            @keyup.enter="handleSearch"
          />
        </div>
        
        <div class="button-container">
          <button class="search-button" @click="handleSearch">{{ t.googleSearch }}</button>
          <button class="lucky-button" @click="handleLucky">{{ t.feelingLucky }}</button>
        </div>
      </div>

      <div class="quick-links">
        <a href="mailto:contact@kudadonbe.dev" class="quick-link">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          {{ t.email }}
        </a>
        <a href="https://github.com/kudadonbe" target="_blank" class="quick-link">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/kudadonbe" target="_blank" class="quick-link">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </main>

    <footer class="footer">
      <p>{{ t.tagline }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentLang = ref('en')
const searchQuery = ref('')

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'dv', label: 'ދިވެހި' }
]

const translations = {
  en: {
    searchPlaceholder: 'Search my work, skills, or projects...',
    googleSearch: 'Google Search',
    feelingLucky: "I'm Feeling Lucky",
    email: 'Email',
    tagline: 'Software Engineer • Full Stack Developer • Open Source Enthusiast'
  },
  ar: {
    searchPlaceholder: 'ابحث في أعمالي ومهاراتي ومشاريعي...',
    googleSearch: 'بحث جوجل',
    feelingLucky: 'أشعر بأنني محظوظ',
    email: 'البريد الإلكتروني',
    tagline: 'مهندس برمجيات • مطور متكامل • متحمس للمصادر المفتوحة'
  },
  dv: {
    searchPlaceholder: 'މަސައްކަތް، ހުނަރު، ނުވަތަ މަޝްރޫއު ހޯދާ...',
    googleSearch: 'ގޫގުލް ސާރޗް',
    feelingLucky: 'ލަކީ ފީލިންގް',
    email: 'އީމެއިލް',
    tagline: 'ސޮފްޓްވެއަރ އިންޖިނިއަރ • ފުލް ސްޓޭކް ޑިވެލޮޕަރ • އޯޕަން ސޯސް އެންތުޒިއަސްޓް'
  }
}

const t = computed(() => translations[currentLang.value])

const switchLanguage = (lang) => {
  currentLang.value = lang
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    window.open(`https://www.google.com/search?q=site:kudadonbe.dev ${searchQuery.value}`, '_blank')
  }
}

const handleLucky = () => {
  const luckyLinks = [
    'https://github.com/kudadonbe',
    'https://linkedin.com/in/kudadonbe',
    'mailto:contact@kudadonbe.dev'
  ]
  const randomLink = luckyLinks[Math.floor(Math.random() * luckyLinks.length)]
  window.open(randomLink, '_blank')
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 1.5rem 2rem;
}

.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
}

.lang-switcher {
  display: flex;
  gap: 0.5rem;
  margin-inline-end: auto;
}

.lang-btn {
  padding: 0.375rem 0.75rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  background: transparent;
  color: #5f6368;
  font-size: 0.813rem;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: #f8f9fa;
  border-color: #dadce0;
}

.lang-btn.active {
  background: #4285f4;
  color: white;
  border-color: #4285f4;
}

.nav-link {
  color: #202124;
  text-decoration: none;
  font-size: 0.875rem;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.7;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: -5rem;
}

.logo-container {
  margin-bottom: 2rem;
}

.logo {
  font-size: 5.5rem;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.logo-k { color: #4285f4; }
.logo-u { color: #ea4335; }
.logo-d { color: #fbbc04; }
.logo-a { color: #4285f4; }
.logo-d2 { color: #34a853; }
.logo-o { color: #ea4335; }
.logo-n { color: #4285f4; }
.logo-b { color: #fbbc04; }
.logo-e { color: #34a853; }
.logo-dev { color: #5f6368; }

.search-container {
  width: 100%;
  max-width: 584px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem 1rem;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  background: white;
  transition: box-shadow 0.2s;
}

.search-box:hover {
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

.search-box:focus-within {
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

.search-icon {
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #202124;
  background: transparent;
}

.search-input::placeholder {
  color: #9aa0a6;
}

.button-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.search-button,
.lucky-button {
  padding: 0.625rem 1.5rem;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  background: #f8f9fa;
  color: #3c4043;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s;
}

.search-button:hover,
.lucky-button:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #f8f9fa;
  border: 1px solid #dadce0;
  color: #202124;
}

.quick-links {
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #5f6368;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.quick-link:hover {
  color: #202124;
}

.footer {
  padding: 2rem;
  text-align: center;
  color: #5f6368;
  font-size: 0.875rem;
  border-top: 1px solid #f1f3f4;
}

@media (max-width: 768px) {
  .logo {
    font-size: 3.5rem;
  }
  
  .main {
    margin-top: -3rem;
    padding: 1rem;
  }
  
  .search-container {
    max-width: 90%;
  }
  
  .button-container {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .search-button,
  .lucky-button {
    width: 100%;
  }

  .nav {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .lang-switcher {
    margin-inline-end: 0;
    width: 100%;
    justify-content: center;
  }
}
</style>
