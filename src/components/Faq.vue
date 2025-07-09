<template>
  <div class="text-white mt-12">
    <h3 class="text-2xl font-semibold text-custom-primary mb-1"> {{ $t("FAQ") }}</h3>
    <details>
      <summary>
        {{ $t("Q1") }}
      </summary>
      <p class="pl-4">{{ $t("A1") }}</p>
      <li class="pl-4">{{ $t("A1STEP1") }}</li>
      <li class="pl-4"> {{ $t("A1STEP2") }}</li>
      <li class="pl-4"> {{ $t("A1STEP3") }}</li>
      <li class="pl-4">{{ $t("A1STEP4") }}</li>
    </details>
    <details>
      <summary>
        {{ $t("Q2") }}
      </summary>
      <p> {{ $t("A2") }}</p>
    </details>
    <!-- <TooltipProvide class="w-full bg-violet">
      <TooltipRoot>
        <TooltipTrigger />
        <TooltipPortal>
          <TooltipContent>
            <TooltipArrow />
            <button class="w-10 h-10">aaaaaaaaa</button>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvide> -->

    
  </div>
</template>
