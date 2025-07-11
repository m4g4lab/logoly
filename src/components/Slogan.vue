<template>
  <div class="mt-12">
    <h3 class="text-xl font-semibold mb-2">
      <span class="text-white">Logo</span>
      <span class="text-black bg-#ff9900 p-1 rounded-md">Art</span>
    </h3>
    <p class="text-white">
      {{ $t("LongDesc") }} 
      <strong class="text-custom-primary flex gap-2 mt-2 items-center">
           {{ $t("If you think this project is funny, please")}}
        <a href="https://github.com/m4g4lab/logoly" class="flex items-center">
          <img :src=url />
        </a>
      </strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const url = computed(() => {
  const text = t('Give me a star')
  console.log(`https://img.shields.io/badge/${encodeURIComponent(text)}-green.svg`, 1231)
  return `https://img.shields.io/badge/${encodeURIComponent(text)}-green.svg`
})
</script>
