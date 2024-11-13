<template>
  <div @click="toggleTheme" class="themeToggler">
    {{ themeIcon }}
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const themeIcon = ref('')

  function toggleTheme() {
    const isDark = theme.global.current.value.dark
    theme.global.name.value = isDark ? 'light' : 'dark'
    themeIcon.value = isDark ? '🌚' : '🌞'
  }

  onMounted(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDarkMode) toggleTheme()
  });
</script>

<style>
.themeToggler {
  position: absolute;
  top: calc(96dvh - 5rem);
  right: calc(50% - 2rem);
  font-size: 4rem;
  line-height: 4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 768px), (max-height: 1080px) {
  .themeToggler {
    top: calc(96dvh - 2rem);
    right: calc(50% - 1rem);
    font-size: 2rem;
    line-height: 2rem;
    width: 2rem;
    height: 2rem;
  }
}
</style>
