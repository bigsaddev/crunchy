<template>
  <nav class="flex items-center gap-6 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-gray-100 shadow-lg mb-2 border border-white/20 font-bold">
    <router-link
      :to="{ name: 'home' }"
      class="hover:text-red-400 transition-colors">
      Home
    </router-link>
    <router-link
      :to="{ name: 'about' }"
      class="hover:text-red-400 transition-colors">
      About
    </router-link>
  </nav>
</template>
