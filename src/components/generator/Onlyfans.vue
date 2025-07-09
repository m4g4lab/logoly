<template>
  <div class="flex flex-col items-center">
    <v-tooltip text="Edit the text to create your own logo" model-value location="top">
      <template v-slot:activator="{ props }">
        <div v-bind="props" class="border border-solid border-#333
        rounded-lg p-10 my-10 mx-2.5 max-w-full">
          <div class="p-5 text-center text-3xl fw-700" id="logo" :style="{
            'font-size': fontSize + 'px',
            'background-color': transparentBgColor
          }">
            <span @input="updatePrefix" class="text-white py-5px" :style="{ color: prefixColor }"
              :contenteditable="store.editable" spellcheck="false">
              {{ store.prefix }}
            </span>
            <!-- HACK: meaningless text: ".", just to split input area, see: #269 -->
            <span style="font-size: 0">.</span>
            <span class="text-black bg-#f90 py-5px px-10px rounded-7px" :style="{
              color: suffixColor,
              'background-color': postfixBgColor,
              'margin-left': suffixMargin
            }" :contenteditable="store.editable" @input="updateSuffix" spellcheck="false">{{ store.suffix }}</span>
          </div>
        </div>
      </template>
    </v-tooltip>

    <div class="w-1/3 mb-12">
      <div class="flex flex-col">

        <p class="text-#f90">Font Size: {{ fontSize[0] }} px </p>
        <div class="-ml-1">
          <!-- <v-slider hide-details min="30" max="200" step="1" color="#f90" v-model="fontSize"></v-slider> -->
          <SliderRoot v-model="fontSize" class="relative flex items-center select-none touch-none w-[200px] h-5"
            :max="200" :step="1" :min="30">
            <SliderTrack class="bg-stone-500/30 relative grow  rounded-full h-2">
              <SliderRange class="absolute bg-#f90 rounded-full h-full" />
            </SliderTrack>
            <SliderThumb
              class="block w-6 h-6 bg-white rounded-full hover:bg-stone-50 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-#f90"
              aria-label="Volume" />
          </SliderRoot>
        </div>
      </div>
      <div class="flex items-center">
        <!-- Transparent Background: -->
        <!-- <v-checkbox-btn v-model="transparentBg"></v-checkbox-btn> -->
        <div class="flex flex-col gap-2.5">
          <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
            <span class="select-none text-#f90 text-sm dark:text-white">Transparent Background:</span>
            <CheckboxRoot v-model="transparentBg"
              class="hover:bg-#f90 flex h-5 w-5 appearance-none items-center justify-center rounded-md bg-white shadow-sm border outline-none focus-within:shadow-[0_0_0_2px_black]">
              <CheckboxIndicator class="bg-white w-5 h-5 rounded-1px flex items-center justify-center">
                <svg class="i-lucide-check h-5 w-5 color-#f90" ></svg>
              </CheckboxIndicator>
            </CheckboxRoot>
          </label>
        </div>
      </div>
    </div>

    <div class="flex justify-around w-80%">
      <ExportBtn />
      <button @click="twitter" color="#1da1f2">
        <svg class="i-lucide-twitter mr-0.5"></svg>
        Tweet
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useStore } from '@/stores/store';
import ExportBtn from '@/components/ExportBtn.vue';

const prefixColor = ref('#ffffff');
const suffixColor = ref('#00AFF0');
const postfixBgColor = ref('transparent');
const fontSize = ref([60]);
const transparentBg = ref(false);
const suffixMargin = computed(() => {
  return '-' + fontSize.value / 30 + 'rem';
});

const store = useStore();

const updatePrefix = (e) => {
  if (!navigator.userAgent.toLowerCase().includes('firefox')) {
    store.updatePrefix(e.target.childNodes[0].nodeValue);
  }
};

const updateSuffix = (e) => {
  if (!navigator.userAgent.toLowerCase().includes('firefox')) {
    store.updateSuffix(e.target.childNodes[0].nodeValue);
  }
};

const twitter = () => {
  let url = 'https://logoly.pro';
  let text = encodeURIComponent(`Built with #LogolyPro, by @xiqingongzi ${url}`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`);
};

const transparentBgColor = computed(() => {
  if (transparentBg.value) {
    return 'transparent';
  } else {
    return '#000000';
  }
});

onMounted(() => {
  store.updatePrefix('Only');
  store.updateSuffix('Fans');
});

onBeforeUnmount(() => {
  store.updatePrefix('edit');
  store.updateSuffix('me');
});
</script>

<style lang="scss" scoped></style>
