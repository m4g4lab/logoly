<template>
  <div class="text-white mt-12">
    <h3 class="text-2xl font-semibold text-#ff9900 mb-1"> {{ $t("FAQ") }}</h3>
    <details class="mb-4">
      <summary class="mb-2">
        {{ $t("Q1") }}
      </summary>
      <p class="pl-4 mb-2">{{ $t("A1") }}</p>
      <ul class="flex flex-col gap-1 list-none">
        <li class="pl-8 ">1. {{ $t("A1STEP1") }}</li>
        <li class="pl-8">2. {{ $t("A1STEP2") }}</li>
        <li class="pl-8">3. {{ $t("A1STEP3") }}</li>
        <li class="pl-8">4. {{ $t("A1STEP4") }}</li>
      </ul>
    </details>
    <details class="mb-4">
      <summary class="mb-2">
        {{ $t("Q2") }}
      </summary>
      <p class="pl-4 mb-2"> {{ $t("A2") }}</p>
    </details>
  </div>
</template>
