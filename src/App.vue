<template>
  <div :dir="isRTL ? 'rtl' : 'ltr'">
    <router-view />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLanguageStore } from './stores'

const languageStore = useLanguageStore()
const { isRTL } = storeToRefs(languageStore)
</script>
