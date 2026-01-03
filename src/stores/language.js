import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // State
  const currentLang = ref('en')

  // Supported languages
  const languages = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'dv', label: 'ދިވެހި', dir: 'rtl' }
  ]

  // Translations
  const translations = {
    en: {
      nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      hero: {
        greeting: 'Hi, I\'m',
        name: 'kudadonbe',
        tagline: 'Software Engineer • Full Stack Developer • Open Source Enthusiast',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me',
      },
      about: {
        title: 'About Me',
        content: 'Passionate software engineer with expertise in full-stack development, specializing in modern web technologies and cloud architecture.',
      },
      skills: {
        title: 'Skills & Technologies',
      },
      projects: {
        title: 'Featured Projects',
        viewMore: 'View More',
      },
      footer: {
        rights: '© 2025 kudadonbe. All rights reserved.',
      },
    },
    ar: {
      nav: {
        about: 'نبذة',
        skills: 'مهارات',
        projects: 'مشاريع',
        github: 'جيت هب',
        linkedin: 'لينكد إن',
      },
      hero: {
        greeting: 'مرحباً، أنا',
        name: 'kudadonbe',
        tagline: 'مهندس برمجيات • مطور متكامل • متحمس للمصادر المفتوحة',
        viewProjects: 'عرض المشاريع',
        contactMe: 'تواصل معي',
      },
      about: {
        title: 'نبذة عني',
        content: 'مهندس برمجيات شغوف بخبرة في التطوير الشامل، متخصص في تقنيات الويب الحديثة والبنية السحابية.',
      },
      skills: {
        title: 'المهارات والتقنيات',
      },
      projects: {
        title: 'مشاريع مميزة',
        viewMore: 'عرض المزيد',
      },
      footer: {
        rights: '© 2025 kudadonbe. جميع الحقوق محفوظة.',
      },
    },
    dv: {
      nav: {
        about: 'ތަޢާރަފް',
        skills: 'ހުނަރު',
        projects: 'މަޝްރޫއު',
        github: 'ގިޓްހަބް',
        linkedin: 'ލިންކްޑްއިން',
      },
      hero: {
        greeting: 'މަރުހަބާ، އަހަރެން',
        name: 'kudadonbe',
        tagline: 'ސޮފްޓްވެއަރ އިންޖިނިއަރ • ފުލް ސްޓޭކް ޑިވެލޮޕަރ • އޯޕަން ސޯސް އެންތުޒިއަސްޓް',
        viewProjects: 'މަޝްރޫއުތައް ބައްލަވާ',
        contactMe: 'ތަޢާރަފްވުން',
      },
      about: {
        title: 'އަޅުގަނޑުގެ ތަޢާރަފް',
        content: 'ފުލް-ސްޓޭކް ޑިވެލޮޕްމަންޓުގައި މާހިރުކަން ލިބިފައިވާ ސޮފްޓްވެއަރ އިންޖިނިއަރެކެވެ. އަޅުގަނޑު މަސައްކަތް ކުރަނީ ހަމަޖެހޭ ވެބް ޓެކްނޮލޮޖީއާއި ކްލައުޑް އާކިޓެކްޗަރގައެވެ.',
      },
      skills: {
        title: 'ހުނަރާއި ޓެކްނޮލޮޖީ',
      },
      projects: {
        title: 'މަޝްހޫރު މަޝްރޫއުތައް',
        viewMore: 'އިތުރަށް ބައްލަވާ',
      },
      footer: {
        rights: '© 2025 kudadonbe. ހުރިހާ ހައްގުތަކެއް ޙިމާޔަތްކުރެވިފައި.',
      },
    },
  }

  // Getters
  const isRTL = computed(() => ['ar', 'dv'].includes(currentLang.value))
  const currentLanguage = computed(() =>
    languages.find(lang => lang.code === currentLang.value) || languages[0]
  )
  const t = computed(() => translations[currentLang.value])

  // Actions
  function setLanguage(langCode) {
    if (translations[langCode]) {
      currentLang.value = langCode
      localStorage.setItem('kudadonbe_lang', langCode)

      // Update document direction
      document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr'
      document.documentElement.lang = langCode
    }
  }

  function initLanguage() {
    const savedLang = localStorage.getItem('kudadonbe_lang')
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (translations[browserLang]) {
        setLanguage(browserLang)
      } else {
        setLanguage('en')
      }
    }
  }

  return {
    // State
    currentLang,
    languages,

    // Getters
    isRTL,
    currentLanguage,
    t,

    // Actions
    setLanguage,
    initLanguage,
  }
})
