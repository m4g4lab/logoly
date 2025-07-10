<template>
  <SelectRoot default-value="Roboto" class="w-full flex flex-row gap-1">
    <SelectTrigger class="border-transparent hover:border hover:border-1 rounded-1 outline-none hover:border-#f90 h-10">
      <SelectValue class="text-#f90 px-1" />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent
        class="min-w-[180px] h-50 bg-black rounded-lg border shadow-sm will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]">
        <SelectViewport>
          <SelectGroup>
            <SelectItem v-for="(option, index) in fonts" :key="index"
              class="text-xs leading-none  rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              :value="option">
              <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <svg class="i-lucide-check"></svg>
              </SelectItemIndicator>
              <SelectItemText class="text-white">
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup>
import { useStore } from '@/stores/store';

const store = useStore();
const fonts = [
  'Roboto',
  'Zilla Slab Highlight',
  'Open Sans',
  'Spectral',
  'Slabo 27px',
  'Lato',
  'Roboto Condensed',
  'Oswald',
  'Source Sans Pro',
  'Raleway',
  'Zilla Slab',
  'Montserrat',
  'PT Sans',
  'Roboto Slab',
  'Merriweather',
  'Saira Condensed',
  'Saira',
  'Open Sans Condensed',
  'Saira Semi Condensed',
  'Saira Extra Condensed',
  'Julee',
  'Archivo',
  'Ubuntu',
  'Lora',
  'Manuale',
  'Asap Condensed',
  'Faustina',
  'Cairo',
  'Playfair Display',
  'Droid',
  'Noto Sans',
  'PT',
  'Droid Sans',
  'Arimo',
  'Poppins',
  'Sedgwick Ave Display',
  'Titillium Web',
  'Muli',
  'Sedgwick Ave',
  'Indie Flower',
  'Mada',
  'PT Sans Narrow',
  'Noto',
  'Bitter',
  'Dosis',
  'Josefin Sans',
  'Inconsolata',
  'Bowlby One SC',
  'Oxygen',
  'Arvo',
  'Hind',
  'Cabin',
  'Fjalla One',
  'Anton',
  'Cairo',
  'Playfair Display',
  'Droid ',
  'Noto Sans',
  'PT',
  'Droid Sans',
  'Arimo',
  'Poppins',
  'Sedgwick Ave Display',
  'Titillium Web',
  'Muli',
  'Sedgwick Ave',
  'Indie Flower',
  'Mada',
  'PT Sans Narrow',
  'Noto',
  'Bitter',
  'Dosis',
  'Josefin Sans',
  'Inconsolata',
  'Bowlby One SC',
  'Oxygen',
  'Arvo',
  'Hind',
  'Cabin',
  'Fjalla One',
  'Anton',
  'Acme',
  'Archivo Narrow',
  'Mukta Vaani',
  'Play',
  'Cuprum',
  'Maven Pro',
  'EB Garamond',
  'Passion One',
  'Ropa Sans',
  'Francois One',
  'Archivo Black',
  'Pathway Gothic One',
  'Exo',
  'Vollkorn',
  'Libre Franklin',
  'Crete Round',
  'Alegreya',
  'PT Sans Caption',
  'Alegreya Sans',
  'Source Code Pro',
];
</script>
