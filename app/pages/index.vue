<script setup lang="ts">
const cvHref = `${useRuntimeConfig().app.baseURL}marek-sinagl-cv.pdf`
</script>

<template>
  <div>
    <PageSectionNav />
    <div>
      <section
        id="bio"
        class="md:min-h-screen flex items-center my-12"
      >
        <div>
          <PageHeader />

          <p class="text-xl/relaxed mb-16">
            I’m an architect and product engineer who builds things from ambiguous ideas into
            working, durable systems. My work spans architecture, computational design, and
            full-stack software, with a focus on understanding real workflows, shaping the right
            solution, and carrying it through design, implementation, and long-term operation.
            Alongside more than a decade in architectural practice, I created and continue to
            operate <a
              href="#project-archa"
              class="underline hover:text-malachite-500"
            >Archa</a>, a
            long-running education platform, and co-lead engineering for
            <a
              href="#project-mingly"
              class="underline hover:text-malachite-500"
            >Mingly</a>, a
            spatial collaboration product entering an institutional pilot in 2026.
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
        class="md:min-h-screen scroll-mt-20 my-12 md:mb-40"
      >
        <SectionHeader class="mb-12">
          Selected projects
        </SectionHeader>

        <article
          id="project-mingly"
          class="mb-12 space-y-2 scroll-mt-8"
        >
          <h2 class="font-bold tracking-wider text-xl">
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
          <p class="text-malachite-600/75 italic leading-relaxed font-bold">
            Mingly is a spatial collaboration platform designed for online education and teams
            working across disciplines and organizations. Rather than treating an online meeting as
            a temporary grid of video calls, Mingly creates persistent digital rooms that behave
            more like physical classrooms, studios, and meeting spaces.
          </p>
          <p class="leading-relaxed">
            Participants move through the room as avatars and work together on a shared canvas
            containing documents, notes, whiteboards, presentations, and other material. Spatial
            audio makes proximity meaningful: people can form groups naturally within the same room,
            while conversations farther away fade out. The same environment can therefore support a
            lecture, workshop, breakout session, or multidisciplinary project meeting without
            continuously moving participants between separate calls.
          </p>
          <p class="leading-relaxed">
            Rooms persist beyond the meeting itself. Conversations and shared working material
            become part of the room's ongoing history, allowing teams and students to return to the
            context of earlier sessions instead of starting from an empty meeting every time.
          </p>
          <p class="leading-relaxed">
            I am one of two primary developers co-leading product and engineering, taking Mingly
            from early development through alpha and toward a fall 2026 pilot at
            <b>BI Norwegian Business School</b>. My work spans the Go backend, Node.js real-time and
            media services, and Nuxt/Vue/TypeScript frontend, with a particular focus on keeping
            participant presence, spatial audio/video, and shared workspace state synchronized as
            one coherent experience.
          </p>
          <div
            class="flex flex-wrap gap-2 text-xs/relaxed text-neutral-500 font-mono [&_span]:whitespace-nowrap"
          >
            <BadgeItem>2 primary developers</BadgeItem>
            <BadgeItem>Alpha stage</BadgeItem>
            <BadgeItem>2026 institutional pilot</BadgeItem>
            <BadgeItem>Persistent spatial collaboration</BadgeItem>
          </div>
        </article>

        <article
          id="project-archa"
          class="my-8 space-y-2 scroll-mt-8"
        >
          <h2 class="font-bold tracking-wider text-xl">
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
          <p class="text-malachite-600/75 italic leading-relaxed font-bold">
            Archa is a non-profit knowledge-sharing platform for university students that I started
            in 2007. It grew from a simple problem I experienced as a student: there was no
            organized place where knowledge, study materials, and experience could be shared across
            classes, groups, and academic years.
          </p>
          <p class="leading-relaxed">
            I designed Archa as a structured repository where students can upload and download
            materials, rate courses and teachers, and share what was difficult or useful. A
            credit-based internal currency encourages contribution: students earn credits by sharing
            useful material and spend them to access material contributed by others. Over time, this
            created a self-sustaining collection that now contains more than
            <b>345,000 files and 551 GB of student-contributed data</b>.
          </p>
          <p class="leading-relaxed">
            I remain the sole developer and administrator. The platform has gradually become largely
            autonomous, using statistics, automated rules, background processing, and internal
            workflows instead of requiring continuous manual moderation. Files are categorized and
            processed automatically, and LLM-based summaries and classification are increasingly
            used to make the growing collection easier to understand and discover.
          </p>
          <p class="leading-relaxed">
            I have continuously modernized the system while keeping it in production—from the
            original PHP application to today's Laravel backend, Vue/TypeScript frontend, and
            separate Python/FastAPI processing services. The platform now serves nearly
            <b>20,000 registered users</b>, with approximately <b>6,000</b> users logging in during
            the most recent semester and <b>3.8 million</b> page views over that period.
          </p>
          <div
            class="flex flex-wrap gap-2 text-xs/relaxed text-neutral-500 font-mono [&_span]:whitespace-nowrap"
          >
            <BadgeItem>345k+ files</BadgeItem>
            <BadgeItem>550+ GB of shared data</BadgeItem>
            <BadgeItem>6k semester users</BadgeItem>
            <BadgeItem>3.8M page views</BadgeItem>
          </div>
        </article>
      </section>

      <section
        id="how-i-work"
        class="md:min-h-screen scroll-mt-20 my-12 md:mb-40"
      >
        <SectionHeader class="mb-12">
          How I work
        </SectionHeader>

        <div class="space-y-2 mb-6">
          <h3 class="font-bold">
            Start with the real problem
          </h3>
          <p class="leading-relaxed">
            I try to understand the people, workflow, constraints, and failure points before
            deciding what to build. Technology is a tool for shaping the solution, not the starting
            point.
          </p>
        </div>

        <div class="space-y-2 mb-6">
          <h3 class="font-bold">
            Own the whole lifecycle
          </h3>
          <p class="leading-relaxed">
            I like to stay close to a product from the first idea through architecture,
            implementation, deployment, operation, and iteration. Software that lasts is software
            someone still owns after launch.
          </p>
        </div>

        <div class="space-y-2 mb-6">
          <h3 class="font-bold">
            Work across disciplines
          </h3>
          <p class="leading-relaxed">
            The most interesting problems rarely belong to one discipline. I am comfortable moving
            between users, clients, design, engineering, and real-world constraints, translating
            between them until the pieces work together.
          </p>
        </div>

        <div class="space-y-2 mb-6">
          <h3 class="font-bold">
            Design for leverage
          </h3>
          <p class="leading-relaxed">
            I look for ways to make the system do the repetitive work. Good automation is not about
            adding complexity—it is about removing manual decisions, reducing maintenance, and
            making a product easier to operate as it grows.
          </p>
        </div>

        <p class="leading-relaxed">
          My engineering mindset grew out of both software and architecture. Architectural practice
          taught me to work with ambiguity, coordinate specialists, test ideas against real
          constraints, and carry a concept through to something that can actually be built.
          Computational design—Grasshopper, Python in Rhino, and Dynamo for Revit—made automation
          and software a natural extension of that way of thinking.
        </p>
      </section>

      <section
        id="experience"
        class="md:min-h-screen scroll-mt-20 my-12 md:mb-40"
      >
        <SectionHeader class="mb-12">
          Experience
        </SectionHeader>

        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2022 — present · Iowa City, IA
          </p>
          <h3 class="font-bold">
            Architectural Designer, Neumann Monson Architects
          </h3>
          <p class="leading-relaxed">
            Architectural design across commercial and multifamily projects, combining
            multidisciplinary coordination with BIM, computational design, and scripting to solve
            technical problems and improve workflows.
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
            Built production software across two client products: a warehouse logistics application
            I owned as the sole full-stack developer, and a cloud-management platform for
            controlling virtual machines and monitoring infrastructure spend across AWS and Azure.
          </p>
        </article>

        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2015 — 2019 · Sydney, Australia
          </p>
          <h3 class="font-bold">
            Associate Architect, Silvester Fuller
          </h3>
          <p class="leading-relaxed">
            Led design and technical coordination as project architect, designer, and BIM
            coordinator across residential, mixed-use, and commercial projects.
          </p>
        </article>

        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2011 — 2014 · Prague, Czech Republic
          </p>
          <h3 class="font-bold">
            Director &amp; Founding Partner, Mio architects
          </h3>
          <p class="leading-relaxed">
            Co-founded and ran the studio, leading projects from concept through construction while
            managing clients, consultants, and day-to-day practice.
          </p>
        </article>
      </section>

      <section
        id="education"
        class="md:min-h-screen scroll-mt-20 my-12"
      >
        <SectionHeader class="mb-12">
          Education
        </SectionHeader>
        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2015
          </p>
          <p><b>Registered Architect</b>, Czech Chamber of Architects</p>
        </article>
        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2011
          </p>
          <p>
            <b>Master of Architecture &amp; Building Engineering</b>, Czech Technical University in
            Prague
          </p>
        </article>
        <article class="space-y-2 mb-6">
          <p class="font-mono text-sm text-neutral-500">
            2009
          </p>
          <p>
            <b>Bachelor of Architecture &amp; Building Engineering</b>, Czech Technical University
            in Prague
          </p>
        </article>
      </section>

      <section
        id="contact"
        class="md:min-h-screen scroll-mt-20 my-12"
      >
        <SectionHeader> Contact </SectionHeader>
        <div>
          <img
            src="/ms-portret.jpg"
            alt="Marek Sinagl"
            class="w-full p-10"
          >
        </div>
        <p class="text-lg/relaxed mb-4 text-malachite-600/75 font-bold">
          Based in Iowa City, Iowa. Open to remote-first permanent roles with occasional travel or
          in-person collaboration. Authorized to work in the U.S. without sponsorship.
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
