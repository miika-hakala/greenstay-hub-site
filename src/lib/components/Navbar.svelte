<script lang="ts">
  import { onMount } from 'svelte';
  import { t, locales, type Locale } from '$lib/i18n';
  import { page } from '$app/stores';

  let { lang = 'en' }: { lang?: string } = $props();

  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let langMenuOpen = $state(false);

  const langLabels: Record<string, string> = { en: 'EN', es: 'ES', fi: 'FI' };

  $effect(() => {
    // Close mobile menu on navigation
    mobileOpen = false;
    langMenuOpen = false;
  });

  onMount(() => {
    const handler = () => (scrolled = window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });

  function getCurrentPath(): string {
    const path = $page.url.pathname;
    // Remove /en/, /es/, /fi/ prefix to get the page path
    return path.replace(/^\/(en|es|fi)/, '') || '/';
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out {scrolled
    ? 'bg-gsh-off-white/95 backdrop-blur-xl border-b border-gsh-green/10 py-3 px-6'
    : 'bg-transparent py-5 px-6'}"
>
  <div class="max-w-[1200px] mx-auto flex justify-between items-center">
    <a href="/{lang}/" class="flex items-center gap-2.5 no-underline">
      <div class="w-9 h-9 rounded-[10px] bg-gradient-to-br from-gsh-green to-gsh-blue flex items-center justify-center text-white font-extrabold text-base font-heading">
        G
      </div>
      <span class="font-heading font-bold text-lg text-gsh-green tracking-tight">GreenStay Hub</span>
    </a>

    <div class="hidden md:flex gap-8 items-center">
      {#each ['hotels', 'guests', 'investors', 'about'] as section}
        <a
          href="/{lang}/{section}"
          class="no-underline text-gsh-dark font-body text-[15px] font-medium opacity-80 hover:opacity-100 transition-opacity"
        >
          {t(lang as any, `nav.${section}`)}
        </a>
      {/each}

      <!-- Language switcher -->
      <div class="relative">
        <button
          class="px-3 py-1.5 rounded-md border border-gsh-green/10 text-[13px] text-gsh-light cursor-pointer font-body bg-transparent"
          onclick={() => (langMenuOpen = !langMenuOpen)}
        >
          {langLabels[lang] || 'EN'} 🌐
        </button>
        {#if langMenuOpen}
          <div class="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gsh-green/10 overflow-hidden min-w-[80px]">
            {#each locales as loc}
              <a
                href="/{loc}{getCurrentPath()}"
                class="block px-4 py-2 text-sm font-body no-underline {loc === lang ? 'text-gsh-green font-bold bg-gsh-green/5' : 'text-gsh-dark hover:bg-gsh-off-white'}"
                onclick={() => (langMenuOpen = false)}
              >
                {langLabels[loc]}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <button
      class="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Menu"
    >
      <span class="block w-6 h-0.5 bg-gsh-dark rounded transition-transform {mobileOpen ? 'rotate-45 translate-y-2' : ''}"></span>
      <span class="block w-6 h-0.5 bg-gsh-dark rounded transition-opacity {mobileOpen ? 'opacity-0' : ''}"></span>
      <span class="block w-6 h-0.5 bg-gsh-dark rounded transition-transform {mobileOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
    </button>
  </div>

  {#if mobileOpen}
    <div class="md:hidden mt-4 pb-4 flex flex-col gap-4 items-center">
      {#each ['hotels', 'guests', 'investors', 'about'] as section}
        <a
          href="/{lang}/{section}"
          class="no-underline text-gsh-dark font-body text-base font-medium"
          onclick={() => (mobileOpen = false)}
        >
          {t(lang as any, `nav.${section}`)}
        </a>
      {/each}
      <div class="flex gap-3 mt-2">
        {#each locales as loc}
          <a
            href="/{loc}{getCurrentPath()}"
            class="px-3 py-1 rounded-md text-sm font-body no-underline {loc === lang ? 'bg-gsh-green text-white' : 'bg-gsh-off-white text-gsh-dark'}"
          >
            {langLabels[loc]}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
