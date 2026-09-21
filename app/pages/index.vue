<script setup lang="ts">
const cvHref = `${useRuntimeConfig().app.baseURL}marek-sinagl-cv.pdf`
</script>

<template>
  <div>
    <PageSectionNav />
    <div>
      <section
        id="bio"
        class="min-h-screen flex items-center"
      >
        <div>
          <PageHeader />

          <p class="text-xl/relaxed mb-16">
            <span class="break-keep">Full-stack</span> product engineer who builds and operates software end to end.
            Created
            <a
              href="#project-archa"
              class="underline hover:text-malachite-500"
            >Archa</a>, a non-profit
            student
            <span class="break-keep">knowledge-sharing</span> platform, at university in 2007 and continue to
            maintain
            it as sole developer: ~20k registered users, ~6k logged-in users last semester, and ~3.8M page views.
            One of
            two primary developers <span class="break-keep">co-leading</span> <a
              href="#project-mingly"
              class="underline hover:text-malachite-500"
            >Mingly</a>, an early-stage
            spatial <span class="break-keep">video-collaboration</span> startup beginning a fall 2026 pilot at BI
            Norwegian Business School. Also a registered architect, with more than ten years of practice turning
            ambiguous client needs into buildable solutions through design, computational workflows, and
            multidisciplinary coordination.
          </p>
          <p class="font-mono text-sm text-neutral-500">
            <a
              class="underline hover:text-malachite-500"
              :href="cvHref"
              download="Marek-Sinagl-CV.pdf"
            >Download CV</a>
          </p>
        </div>
      </section>

      <section
        id="projects"
        class="min-h-screen scroll-mt-20"
      >
        <SectionHeader class="mb-12">
          Selected projects
        </SectionHeader>

        <article
          id="project-mingly"
          class="mb-12 space-y-2 scroll-mt-8"
        >
          <h2
            class="font-bold"
          >
            Mingly
          </h2>
          <div class="flex justify-between text-sm">
            <p class="font-mono text-neutral-500">
              2023 — present
            </p>
            <a
              class="underline hover:text-malachite-500"
              href="https://www.mingly.com"
            >mingly.com</a>
          </div>
          <p class="text-malachite-600/75 italic leading-relaxed">
            Early-stage spatial video collaboration startup: WebRTC conferencing on an interactive shared
            canvas.
          </p>
          <p class="leading-relaxed">
            Spatial video collaboration: WebRTC conferencing on an interactive shared canvas.
          </p>
          <p class="leading-relaxed">
            It exists because remote work still happens in a grid of talking heads, not in a shared space
            where
            people can present, mark up, and actually work together.
          </p>
          <p class="leading-relaxed">
            I am one of two primary developers co-leading engineering from early development through alpha.
          </p>
          <p class="leading-relaxed">
            Fall 2026 pilot at BI Norwegian Business School.
          </p>
          <p class="leading-relaxed">
            The hard problem is making presence feel spatial — real-time audio, video, and collaboration —
            across a distributed system with a two-person team owning the whole product.
          </p>
          <p class="font-mono text-sm text-neutral-500">
            Go · Node.js · WebRTC · Nuxt
          </p>
        </article>

        <article
          id="project-archa"
          class="my-8 space-y-2 scroll-mt-8"
        >
          <h2
            class="font-bold"
          >
            Archa
          </h2>
          <div class="flex justify-between text-sm">
            <p class="font-mono text-neutral-500">
              2007 — present
            </p>
            <a
              class="underline hover:text-malachite-500"
              href="https://www.archacvut.cz"
            >archacvut.cz</a>
          </div>
          <p class="text-malachite-600/75 italic leading-relaxed">
            Non-profit <span class="break-keep">study-materials</span> and
            <span class="break-keep">knowledge-sharing</span> platform for university students.
          </p>
          <ul class="list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              Founded Archa at university in 2007 and grew it into a production platform with ~20k registered users;
              ~6k logged-in users in the most recent semester and ~3.8M page views.
            </li>
            <li>
              Currently maintain the platform as sole developer, owning architecture, security, database, deployment,
              <span class="break-keep">CI/CD</span>, features, and <span class="break-keep">long-term</span>
              operations.
            </li>
            <li>
              Shipped <span class="break-keep">LLM-based</span> document classification and summarization into the
              production pipeline.
            </li>
            <li>
              Designed a separate <span class="break-keep">Python/FastAPI</span> service with background workers for
              document extraction, previews, file processing, and asynchronous workflows.
            </li>
            <li>
              Evolved the platform from an early PHP application to Laravel (PHP 8.5) and Vue while maintaining
              continuous production service and preserving years of accumulated data.
            </li>
          </ul>
        </article>
      </section>

      <section
        id="how-i-work"
        class="min-h-screen scroll-mt-20"
      >
        <SectionHeader class="mb-12">
          How I work
        </SectionHeader>

        <div class="space-y-2 mb-6">
          <h3 class="font-bold">
            Start with the real problem
          </h3>
          <p class="leading-relaxed">
            Understand users and workflows before choosing tools. The stack is a consequence of the problem,
            not
            the starting point.
          </p>
        </div>

        <div class="space-y-2 mb-6">
          <h3 class="font-bold">
            Own the whole lifecycle
          </h3>
          <p class="leading-relaxed">
            Design, build, ship, operate, and improve. Software that lasts is software someone still owns
            after
            launch.
          </p>
        </div>

        <div class="space-y-2 mb-6">
          <h3 class="font-bold">
            Work across disciplines
          </h3>
          <p class="leading-relaxed">
            Translate between clients, product, design, engineering, and real-world constraints. That is the
            job
            of both an architect and a product engineer.
          </p>
        </div>

        <p class="leading-relaxed">
          Architecture is an advantage here, not a previous career. It is practice with ambiguous
          requirements,
          multidisciplinary coordination, and computational design — Grasshopper, Python in Rhino, Dynamo for
          Revit — to automate the parts that should not be manual.
        </p>
      </section>

      <section
        id="experience"
        class="min-h-screen scroll-mt-20"
      >
        <SectionHeader class="mb-12">
          Experience
        </SectionHeader>

        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2022 — present · Iowa City
          </p>
          <h3 class="font-bold">
            Architectural Designer, Neumann Monson Architects
          </h3>
          <p class="leading-relaxed">
            Commercial and multifamily projects; computational design and BIM across consultant teams.
          </p>
        </article>

        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2020 — 2022 · Newburyport, MA
          </p>
          <h3 class="font-bold">
            Software Engineer, Elyxor
          </h3>
          <p class="leading-relaxed">
            Production full-stack work: a warehouse logistics app I owned, and a cloud dashboard for VM
            spend
            across AWS and Azure.
          </p>
        </article>

        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2015 — 2019 · Sydney
          </p>
          <h3 class="font-bold">
            Associate Architect, Silvester Fuller
          </h3>
          <p class="leading-relaxed">
            Project architect, designer, and BIM coordinator on residential, mixed-use, and commercial work.
          </p>
        </article>

        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2011 — 2014 · Prague
          </p>
          <h3 class="font-bold">
            Director &amp; Founding Partner, Mio architects
          </h3>
          <p class="leading-relaxed">
            Led projects from concept through construction while running the studio.
          </p>
        </article>
      </section>

      <section
        id="education"
        class="min-h-screen scroll-mt-20"
      >
        <SectionHeader class="mb-12">
          Education
        </SectionHeader>
        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2015
          </p>
          <p>
            <b>Registered Architect</b>, Czech Chamber of Architects
          </p>
        </article>
        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2011
          </p>
          <p>
            <b>Master of Architecture &amp; Building Engineering</b>, Czech Technical University in Prague
          </p>
        </article>
        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2009
          </p>
          <p>
            <b>Bachelor of Architecture &amp; Building Engineering</b>, Czech Technical University in Prague
          </p>
        </article>
      </section>

      <section
        id="contact"
        class="min-h-screen scroll-mt-20"
      >
        <SectionHeader class="mb-12">
          Contact
        </SectionHeader>
        <p class="text-lg/relaxed mb-4">
          Open to remote-first permanent roles, with office visits as required. Located in Iowa City, IA.
        </p>
        <div class="flex justify-between leading-relaxed">
          <a
            class="underline hover:text-malachite-500"
            href="mailto:marek.sinagl@gmail.com"
          >marek.sinagl@gmail.com</a>
          <a
            class="underline hover:text-malachite-500"
            href="https://github.com/marekmez"
          >GitHub</a>
          <a
            class="underline hover:text-malachite-500"
            href="https://linkedin.com/in/marek-sinagl-9677551b0"
          >LinkedIn</a>
          <a
            class="underline hover:text-malachite-500"
            :href="cvHref"
            download="Marek-Sinagl-CV.pdf"
          >CV</a>
        </div>
      </section>
    </div>
  </div>
</template>
