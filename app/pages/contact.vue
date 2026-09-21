<script setup lang="ts">
const cvHref = `${useRuntimeConfig().app.baseURL}marek-sinagl-cv.pdf`
</script>

<template>
  <div class="container mx-auto">
    <p class="flex flex-col gap-2 font-mono">
      <span>Iowa City, IA</span>
      <span>Open to remote-first permanent roles and contracts, with office visits as required.</span>
      <span><a
        class="underline hover:text-malachite-500"
        href="mailto:marek.sinagl@gmail.com"
      >marek.sinagl@gmail.com</a></span>
      <span>
        <a
          class="underline hover:text-malachite-500"
          href="https://github.com/marekmez"
        >GitHub</a>
        ·
        <a
          class="underline hover:text-malachite-500"
          href="https://linkedin.com/in/marek-sinagl-9677551b0"
        >LinkedIn</a>
        ·
        <a
          class="underline hover:text-malachite-500"
          :href="cvHref"
          download="Marek-Sinagl-CV.pdf"
        >CV</a>
      </span>
    </p>
  </div>
</template>
