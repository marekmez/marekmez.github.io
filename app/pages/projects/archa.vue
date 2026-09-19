<template>
    <article class="space-y-4">
        <p class="font-mono text-sm text-neutral-500">2007 – present</p>
        <div>
            <h2 class="text-xl font-bold">Creator &amp; Sole Software Engineer, Archa</h2>
            <p>
                <a class="underline hover:text-blue-500" href="https://www.archacvut.cz">archacvut.cz</a>
            </p>
        </div>
        <p class="leading-relaxed">
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
</template>
