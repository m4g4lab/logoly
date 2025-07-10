<template>
  <div>
    <DropdownMenuRoot>
      <DropdownMenuTrigger class="border-none outline-none">
        <TooltipProvider>
          <TooltipRoot>
            <TooltipTrigger
              class="h-10 w-25 bg-#ff9900 px-2 inline-flex items-center justify-center shadow-sm border-none outline-none focus:shadow-[0_0_0_2px]"
              >
              <svg class="i-lucide-download mr-1"></svg>
              <span>{{ $t("EXPORT") }}</span>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent
                class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-md bg-white px-[15px] py-[10px] text-sm leading-none shadow-sm border will-change-[transform,opacity]"
                :side-offset="5">
                <TooltipArrow class="fill-white stroke-gray-200" :width="12" :height="6" />
                {{ $t("Export your own logo") }}
              </TooltipContent>
            </TooltipPortal>
          </TooltipRoot>
        </TooltipProvider>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          class="w-25 outline-none bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          :side-offset="0">
          <DropdownMenuLabel />
          <DropdownMenuRadioGroup>
            <DropdownMenuItem value="PNG" @select="download('png')"
              class="group text-xs leading-none flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green">
              PNG
            </DropdownMenuItem>
            <DropdownMenuSeparator class="h-0.5px bg-green6 m-[0.5px]" />
            <DropdownMenuItem value="SVG" @select="download('svg')"
              class="group text-xs leading-none flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green">
              SVG
            </DropdownMenuItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import domtoimage from 'dom-to-image'
import { event } from 'vue-gtag'
// import { onClickOutside } from '@vueuse/core'

const store = useStore()
// const showMenu = ref(false)
// const btnRef = ref(null)

// onClickOutside(btnRef, () => (showMenu.value = false))

const downloadImage = (imgSrc: string, name: string) => {
  //下载图片地址和图片名
  let image = new Image()
  // 解决跨域 Canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous')
  image.onload = function () {
    let canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    let context = canvas.getContext('2d')
    context!.drawImage(image, 0, 0, image.width, image.height)
    let url = canvas.toDataURL('image/png')
    let a = document.createElement('a')
    let event = new MouseEvent('click')
    a.download = name || 'photo'
    a.href = url
    a.dispatchEvent(event)
  }
  image.src = imgSrc
}

const download = (imgType: string) => {
  store.editable = false
  event('download')
  const node = document.getElementById('logo')!
  if (imgType === 'png') {
    domtoimage.toPng(node).then(( res: any) => {
      downloadImage(res, store.prefix + '-' + store.suffix + '.png')
    })
  } else if (imgType === 'svg') {
    domtoimage.toSvg(node).then((res: any) => {
      var link = document.createElement('a')
      link.download = store.prefix + '-' + store.suffix + '.svg'
      link.href = res
      link.click()
    })
  }
  store.editable = true
}
</script>
