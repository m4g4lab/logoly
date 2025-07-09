<template>
  <div class="w-full">
    
    <h3 class="text-xl font-semibold mb-1">Logoly</h3>
    <p class="text-white">
      {{ $t('About') }}
      <a href="https://github.com/m4g4lab/logoly" target="_blank"> GitHub</a>

    </p>
  </div>
  <!-- <template> -->
     <SliderRoot
    v-model="sliderValue"
    class="relative flex items-center select-none touch-none w-[200px] h-5"
    :max="100"
    :step="1"
    :inverted="true"
  >
    <SliderTrack class="bg-stone-500/30 relative grow rounded-full h-2">
      <SliderRange class="absolute bg-grass8 rounded-full h-full" />
    </SliderTrack>
    <SliderThumb
      class="block w-6 h-6 bg-white rounded-full hover:bg-stone-50 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-grass9"
      aria-label="Volume"
    />
  </SliderRoot>
  <!-- </template> -->
  <template>
  <Slider.Root class="w-120 h-20 color-white">
    <Slider.Label class="w-full h-full">Label</Slider.Label>
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb :index="0">
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
  </Slider.Root>
</template>

  <!-- <template>
    <ListboxRoot v-model="selectedPeople">
    <ListboxContent>
      <ListboxItem
        v-for="person in people"
        :key="person.id"
        :value="person"
        :disabled="person.unavailable"
      >
        {{ person.name }}
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
  </template> -->
  <!-- <template> -->
    <Checkbox.Group v-model="value" @valueChange="console.log" class="w-120 h-20 color-white">
    <Checkbox.Root v-for="item in items" :value="item.value" :key="item.value" class="flex flex-row">
      <Checkbox.Label>{{ item.label }}</Checkbox.Label>
      <Checkbox.Control >
        <Checkbox.Indicator>
          <svg class="i-lucide-check"></svg>
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  </Checkbox.Group>
  <div>asd12dd</div>
  <!-- </template> -->

</template>

<script setup lang="ts">
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
import { Slider } from '@ark-ui/vue/slider'
// import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot } from 'reka-ui'
import { ref } from 'vue'

import { Checkbox } from '@ark-ui/vue/checkbox'
// import { CheckIcon } from 'lucide-vue-next'

const sliderValue = ref([50])

const items = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
]

const value = ref(['react'])
</script>
<style lang="scss" scoped>
// .SliderRoot[data-orientation="vertical"] {
//   flex-direction: column;
//   width: 20px;
//   height: 100px;
//   background-color: white;
// }

// .SliderTrack[data-orientation="vertical"] {
//   width: 3px;
// }

// .SliderRange[data-orientation="vertical"] {
//   width: 100%;
// }

// .SliderThumb {
//   width: 20px;
//   height: 20px;
//   background-color: black;
// }
</style>
