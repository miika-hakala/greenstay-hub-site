<script lang="ts">
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  const links = [
    { label: 'Hotels', href: '/en/hotels' },
    { label: 'Guests', href: '/en/guests' },
    { label: 'Investors', href: '/en/investors' },
    { label: 'About', href: '/en/about' }
  ];

  onMount(() => {
    const handler = () => (scrolled = window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out {scrolled
    ? 'bg-gsh-off-white/95 backdrop-blur-xl border-b border-gsh-green/10 py-3 px-6'
    : 'bg-transparent py-5 px-6'}"
>
  <div class="max-w-[1200px] mx-auto flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2.5 no-underline">
      <div
        class="w-9 h-9 rounded-[10px] bg-gradient-to-br from-gsh-green to-gsh-blue flex items-center justify-center text-white font-extrabold text-base font-heading"
      >
        G
      </div>
      <span class="font-heading font-bold text-lg text-gsh-green tracking-tight">GreenStay Hub</span>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex gap-8 items-center">
      {#each links as link}
        <a
          href={link.href}
          class="no-underline text-gsh-dark font-body text-[15px] font-medium opacity-80 hover:opacity-100 transition-opacity"
        >
          {link.label}
        </a>
      {/each}
      <div
        class="px-3 py-1.5 rounded-md border border-gsh-green/10 text-[13px] text-gsh-light cursor-pointer font-body"
      >
        EN 🌐
      </div>
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
      on:click={() => (mobileOpen = !mobileOpen)}
      aria-label="Menu"
    >
      <span
        class="block w-6 h-0.5 bg-gsh-dark rounded transition-transform {mobileOpen
          ? 'rotate-45 translate-y-2'
          : ''}"
      ></span>
      <span
        class="block w-6 h-0.5 bg-gsh-dark rounded transition-opacity {mobileOpen ? 'opacity-0' : ''}"
      ></span>
      <span
        class="block w-6 h-0.5 bg-gsh-dark rounded transition-transform {mobileOpen
          ? '-rotate-45 -translate-y-2'
          : ''}"
      ></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div class="md:hidden mt-4 pb-4 flex flex-col gap-4 items-center">
      {#each links as link}
        <a
          href={link.href}
          class="no-underline text-gsh-dark font-body text-base font-medium"
          on:click={() => (mobileOpen = false)}
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
