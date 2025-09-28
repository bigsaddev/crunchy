<template>
  <nav class="flex items-center gap-4 px-6 custom-background text-lg">
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
    <router-link
      :to="{ name: 'docs' }"
      class="hover:text-red-400 transition-colors">
      Docs
    </router-link>
  </nav>
</template>
