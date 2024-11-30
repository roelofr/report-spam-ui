<script setup>
import { RouterView } from 'vue-router'
import UiFooter from '@/components/UiFooter.vue'
import UiNav from '@/components/UiNav.vue'
</script>

<template>
  <UiNav />

  <RouterView />

  <UiFooter />
</template>
