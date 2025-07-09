<template>
  <div class="flex flex-col items-center">
    <v-tooltip text="Edit the text to create your own logo" location="top" model-value>
      <template v-slot:activator="{ props }">
        <div v-bind="props" class="border border-solid border-#333
        rounded-lg p-10 my-10 mx-2.5 max-w-full">
          <div class="p-5 text-center text-3xl fw-700" id="logo" :style="{
            'font-size': fontSize + 'px',
            'background-color': transparentBgColor,
            'font-family': store.font
          }">
            <template v-if="!reverseHighlight">
              <span @input="updatePrefix" class="text-white p-5px" :style="{ color: prefixColor }"
                :contenteditable="store.editable" spellcheck="false">
                {{ store.prefix }}
              </span>
              <!-- HACK: meaningless text: ".", just to split input area, see: #269 -->
              <span style="font-size: 0">.</span>
              <span class="text-black bg-#f90 py-5px px-10px rounded-7px" :style="{ color: suffixColor, 'background-color': postfixBgColor }"
                :contenteditable="store.editable" @input="updateSuffix" spellcheck="false">{{ store.suffix }}</span>
            </template>
            <template v-else>
              <span class="text-black bg-#f90 py-5px px-10px rounded-7px" :style="{ color: suffixColor, 'background-color': postfixBgColor }"
                :contenteditable="store.editable" @input="updatePrefix" spellcheck="false">{{ store.prefix }}</span>
              <span class="text-white p-5px" @input="updateSuffix" :style="{ color: prefixColor }"
                :contenteditable="store.editable" spellcheck="false">
                {{ store.suffix }}
              </span>
            </template>
          </div>
        </div>
      </template>
    </v-tooltip>
    <div class="flex justify-around w-full mb-50px mt-3">
      <v-tooltip text="Pick a color you like" location="top" model-value>
        <template v-slot:activator="{ props }">
          <div v-bind="props" id="prefixColor">
            <div class="py-2">
              Prefix Text Color:
              <v-menu :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                  <button v-bind="props" class="w-12 h-6 rounded ml-1 border-2 border-solid border-white"
                    :style="{ 'background-color': prefixColor }"></button>
                </template>
                <v-color-picker mode="hex" hide-inputs v-model="prefixColor"></v-color-picker>
              </v-menu>
            </div>
            <div class="py-2">
              Suffix Text Color:
              <v-menu :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                  <button v-bind="props" class="w-12 h-6 rounded ml-1 border-2 border-solid border-white"
                    :style="{ 'background-color': suffixColor }"></button>
                </template>
                <v-color-picker mode="hex" hide-inputs v-model="suffixColor"></v-color-picker>
              </v-menu>
            </div>
            <div class="py-2">
              Suffix Background Color:
              <v-menu :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                  <button v-bind="props" class="w-12 h-6 rounded ml-1 border-2 border-solid border-white"
                    :style="{ 'background-color': postfixBgColor }"></button>
                </template>
                <v-color-picker mode="hex" hide-inputs v-model="postfixBgColor"></v-color-picker>
              </v-menu>
            </div>
            <div class="flex items-center py-2">
              Transparent Background: <v-checkbox-btn v-model="transparentBg"></v-checkbox-btn>
            </div>
          </div>
        </template>
      </v-tooltip>

      <div class="customize-misc">
        <div class="flex flex-col py-2">
          Font Size: {{ fontSize }}px
          <div class="-ml-1">
            <v-slider hide-details min="30" max="200" step="1" color="#f90" v-model="fontSize"></v-slider>
          </div>
        </div>
        <FontSelector />
        <div class="flex items-center py-2">
          Reverse Highlight: <v-checkbox-btn v-model="reverseHighlight"></v-checkbox-btn>
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
import FontSelector from '@/components/FontSelector.vue';
import { computed, ref } from 'vue';
import { useStore } from '@/stores/store';
import ExportBtn from '@/components/ExportBtn.vue';

const prefixColor = ref('#ffffff');
const suffixColor = ref('#000000');
const postfixBgColor = ref('#ff9900');
const fontSize = ref(60);
const transparentBg = ref(false);
const reverseHighlight = ref(false);

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
</script>

<style lang="scss" scoped>
</style>
