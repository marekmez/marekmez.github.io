<template>
  <nav class="flex justify-center">
    <ul class="flex flex-wrap justify-center gap-4 font-mono">
      <li>
        <NuxtLink
          class="underline hover:text-malachite-500 dark:hover:text-malachite-400"
          to="/"
        >Bio</NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="underline hover:text-malachite-500 dark:hover:text-malachite-400"
          to="/projects"
        >Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="underline hover:text-malachite-500 dark:hover:text-malachite-400"
          to="/employment"
        >Employment</NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="underline hover:text-malachite-500 dark:hover:text-malachite-400"
          to="/contact"
        >Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
