<template>
  <header class="bg-white">
    <UiContainer>
      <div class="flex flex-row justify-start">
        <a href="/" class="py-6 inline-flex items-center gap-x-4">
          <img class="h-8 w-auto" src="@/assets/logo.svg" alt="" />
          <span data-test="title" class="text-sm/6 font-semibold text-gray-900">Report Abuse Helper</span>
        </a>
      </div>
    </UiContainer>
  </header>
</template>

<script setup>
import UiContainer from '@/components/UiContainer.vue'
</script>
