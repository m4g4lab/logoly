<template>
  <div id="app" class="mx-auto py-12 px-6 max-w-[893px]">
    <div class="text-4xl font-black p-5 my-6 text-center">
      <logo></logo>
    </div>
    <div class="text-2xl mb-6 text-center font-extrabold">
      <Description></Description>
    </div>
    <div id="nav">
      <div class="flex flex-col md:flex-row gap-2 md:gap-16 text-xl font-semibold items-center mb-12 justify-center">
        <router-link to="/about">{{ $t("About") }}</router-link>
        <router-link to="/">
          <span class="text-white p-0.5">Porn</span>
          <span class="text-black bg-#ff9900 p-0.5 rounded-md">hub</span>
        </router-link>
        <router-link to="/vertical-ph">
          <p class="text-white p-0.5">Porn</p>
          <p class="text-black bg-#ff9900 p-0.5 rounded-md">hub</p>
        </router-link>
        <router-link to="/onlyfans">
          <span class="text-white">Only</span>
          <span class="text-[#00AFF0]">Fans</span>
        </router-link>
        <span class="text-[#777] font-light">More coming soon...</span>
      </div>
    </div>

    <router-view />
    <Slogan />
    <Faq />
    <Author />
    <Copyright class="pb-4" />
  </div>
</template>
