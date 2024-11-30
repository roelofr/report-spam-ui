<template>
  <footer class="relative mx-auto mt-32">
    <UiContainer>
      <div class="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8 items-start">
          <div>
            <div class="flex items-center gap-x-4">
              <img class="h-8 w-auto" src="@/assets/logo.svg" alt="" />
              <span data-test="title" class="text-sm/6 font-semibold text-gray-900"
                >Report Abuse Helper</span
              >
            </div>
          </div>

          <div class="xl:col-start-3 xl:text-right">
            <p class="text-sm">
              Don't just ignore spam, report it.<br />
              This tool can find the "Report-Abuse" headers in your EML files, and help you make a
              proper report.
            </p>
          </div>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

<script setup>
import UiContainer from '@/components/UiContainer.vue'
</script>
