<script setup lang="ts">
type SectionId = 'bio' | 'projects' | 'how-i-work' | 'experience' | 'education' | 'contact'

const sections: { id: SectionId, label: string }[] = [
  { id: 'bio', label: 'Bio' },
  { id: 'projects', label: 'Projects' },
  { id: 'how-i-work', label: 'How I work' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const activeId = ref<SectionId>('projects')
let ignoreScroll = false
let ignoreTimer: ReturnType<typeof setTimeout> | undefined

function scrollToSection(id: SectionId) {
  const el = document.getElementById(id)
  if (!el) return

  activeId.value = id
  ignoreScroll = true
  clearTimeout(ignoreTimer)

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })

  ignoreTimer = setTimeout(() => {
    ignoreScroll = false
  }, prefersReduced ? 50 : 700)
}

function updateActive() {
  if (ignoreScroll) return

  const marker = window.innerHeight * 0.3
  let current: SectionId = 'projects'

  for (const section of sections) {
    const el = document.getElementById(section.id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= marker) current = section.id
  }

  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
  if (atBottom) current = 'contact'

  activeId.value = current
}

onMounted(() => {
  updateActive()
  window.addEventListener('scroll', updateActive, { passive: true })
  window.addEventListener('resize', updateActive)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive)
  window.removeEventListener('resize', updateActive)
  clearTimeout(ignoreTimer)
})
</script>

<template>
  <nav
    class="fixed left-3 top-1/2 z-20 hidden -translate-y-1/2 md:block lg:left-6"
    aria-label="Page sections"
  >
    <ul class="flex flex-col items-end gap-6">
      <li
        v-for="section in sections"
        :key="section.id"
      >
        <button
          type="button"
          class="group flex items-center justify-end gap-2"
          :aria-label="section.label"
          :aria-current="activeId === section.id ? 'true' : undefined"
          @click="scrollToSection(section.id)"
        >
          <span
            class="pointer-events-none hidden font-mono text-[10px] tracking-wide text-neutral-400 dark:text-neutral-500 opacity-0 transition-opacity duration-150 group-hover:opacity-100 xl:inline"
          >
            {{ section.label }}
          </span>
          <span
            class="block h-0.5 w-3 bg-neutral-300 dark:bg-neutral-600 transition-all duration-200"
            :class="activeId === section.id ? 'w-5 bg-neutral-900 dark:bg-neutral-100' : 'group-hover:bg-neutral-500 dark:group-hover:bg-neutral-400'"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
