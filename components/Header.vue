<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <!-- Flex container -->
    <div class="container flex h-16 items-center justify-between">
      <!-- logo & page title -->
      <div class="flex items-center gap-3">
        <!-- Logo -->
        <img src="/icon.svg" alt="Analytics Logo" class="h-7 w-7 object-contain" />
        <!-- Page title -->
        <NuxtLink class="text-xl font-bold" to="/">Analytics</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
