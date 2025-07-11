<template>
  <div class="flex flex-col items-center">
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger class="bg-black border-none border border-solid border-#333
        rounded-lg p-10 my-10 mx-2.5 max-w-full">
          <div class="p-5 text-center fw-700" id="logo" :style="{
            'font-size': fontSize + 'px',
            'background-color': transparentBgColor
          }">
            <span @input="updatePrefix" class="text-white py-5px min-w-10" :style="{ color: prefixColor }"
              :contenteditable="store.editable" spellcheck="false" placeholder="Only">
              {{ store.prefix }}
            </span>
            <!-- HACK: meaningless text: ".", just to split input area, see: #269 -->
            <span style="font-size: 0">.</span>
            <span class="text-black bg-#f90 py-5px px-10px rounded-7px" :style="{
              color: suffixColor,
              'background-color': postfixBgColor,
              'margin-left': suffixMargin
            }" :contenteditable="store.editable" @input="updateSuffix" spellcheck="false" placeholder="fans">{{
              store.suffix }}</span>
          </div>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-md bg-white px-[15px] py-[10px] text-sm leading-none shadow-sm border will-change-[transform,opacity]"
            :side-offset="5">
            <TooltipArrow class="fill-white stroke-gray-200" :width="12" :height="6" />
            {{ $t("Edit the text to create your own logo") }}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
    <div class="w-1/3 mb-12">
      <div class="flex flex-row justify-between items-center">
        <span class="text-#f90 leading-none text-sm">
          {{ $t("Font Size:") }}
          <span class="text-white"> {{ fontSize[0] }}</span>
          {{ $t("PX") }}
        </span>
        <div class="-ml-1">
          <SliderRoot v-model="fontSize" class="relative flex items-center select-none touch-none w-[120px] h-5"
            :max="100" :step="1" :min="30">
            <SliderTrack class="bg-stone-500/30 relative grow  rounded-full h-2">
              <SliderRange class="absolute bg-#ff9900 rounded-full h-full" />
            </SliderTrack>
            <SliderThumb
              class="block w-3 h-3 bg-white rounded-full hover:bg-stone-50 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-#ff9900"
              aria-label="Volume" />
          </SliderRoot>
        </div>
      </div>
      <div class="flex items-center py-2 justify-between">
        <span class="select-none text-#f90 text-sm dark:text-white"> {{ $t("Reverse Highlight:") }} </span>
        <CheckboxRoot v-model="reverseHighlight"
          class="flex h-6 w-6 appearance-none items-center justify-center rounded-md shadow-sm border-2 border-solid border-#f90 outline-none focus-within:shadow-[0_0_0_2px_black]">
          <CheckboxIndicator class="w-5 h-5 rounded-1px flex items-center justify-center bg-#f90!">
            <svg class="i-lucide-check h-5 w-5"></svg>
          </CheckboxIndicator>
        </CheckboxRoot>
      </div>
    </div>

    <!-- download and share -->
    <div class="flex justify-around w-80%">
      <ExportBtn />
      <button @click="twitter" class="flex flex-row items-center text-white bg-#1da1f2 px-4 border-none">
        <svg class="i-lucide-twitter mr-0.5"></svg>
        <span>{{ $t("Tweet") }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store'

const prefixColor = ref('#ffffff')
const suffixColor = ref('#00AFF0')
const postfixBgColor = ref('transparent')
const fontSize = ref([60])
const transparentBg = ref(false)
const suffixMargin = computed(() => {
  return '-' + fontSize.value / 30 + 'rem'
})

const store = useStore()

const updatePrefix = (e) => {
  if (!navigator.userAgent.toLowerCase().includes('firefox')) {
    store.updatePrefix(e.target.childNodes[0].nodeValue)
  }
}

const updateSuffix = (e) => {
  if (!navigator.userAgent.toLowerCase().includes('firefox')) {
    store.updateSuffix(e.target.childNodes[0].nodeValue)
  }
}

const twitter = () => {
  let url = 'https://logoly.pro'
  let text = encodeURIComponent(`Built with #LogolyPro, by @xiqingongzi ${url}`)
  window.open(`https://twitter.com/intent/tweet?text=${text}`)
}

const transparentBgColor = computed(() => {
  if (transparentBg.value) {
    return 'transparent'
  } else {
    return '#000000'
  }
})

onMounted(() => {
  store.updatePrefix('Only')
  store.updateSuffix('Fans')
})

onBeforeUnmount(() => {
  store.updatePrefix('edit')
  store.updateSuffix('me')
})
</script>

<style lang="scss" scoped></style>
