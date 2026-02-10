<script lang="ts">
  import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
</script>

<svelte:head>
  <title>GreenStay Hub — The Sustainability Hub for Hotels</title>
  <meta
    name="description"
    content="Responsible product rentals and sustainable essentials for hotels. Circular hospitality platform."
  />
</svelte:head>

<!-- HERO -->
<section
  class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-20 relative overflow-hidden"
  style="background: linear-gradient(170deg, #F4F7F5 0%, #e8f0ec 40%, rgba(230,216,162,0.19) 100%)"
>
  <!-- Decorative -->
  <div class="absolute -top-[120px] -right-[120px] w-[400px] h-[400px] rounded-full bg-gsh-green/[0.03]"></div>
  <div class="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gsh-blue/[0.02]"></div>
  <div class="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-gsh-green opacity-15"></div>
  <div class="absolute top-[60%] right-[15%] w-2 h-2 rounded-full bg-gsh-blue opacity-[0.12]"></div>

  <div class="relative z-10 max-w-[800px]">
    <div
      class="inline-block px-4 py-1.5 rounded-full bg-gsh-green/[0.06] text-gsh-green text-[13px] font-semibold font-heading tracking-[0.05em] uppercase mb-6"
    >
      Circular Hospitality Platform
    </div>

    <h1 class="font-heading text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      The sustainability hub<br />
      <span class="text-gsh-green">for hotels.</span>
    </h1>

    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[560px] mx-auto mb-10">
      Responsible product rentals and sustainable essentials, directly in hotel lobbies and common areas.
      Everything tracked, reused, recycled, or donated.
    </p>

    <div class="flex gap-4 justify-center flex-wrap">
      <a
        href="/en/hotels"
        class="px-7 py-3.5 rounded-[10px] bg-gsh-green text-white font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/25"
      >
        For Hotels →
      </a>
      <a
        href="/en/guests"
        class="px-7 py-3.5 rounded-[10px] border-2 border-gsh-blue/15 text-gsh-blue font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-blue/15"
      >
        For Guests →
      </a>
      <a
        href="/en/investors"
        class="px-7 py-3.5 rounded-[10px] border-2 border-gsh-dark/15 text-gsh-dark font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-dark/12"
      >
        For Investors →
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
    <div class="w-6 h-10 rounded-xl border-2 border-gsh-dark flex justify-center pt-2">
      <div class="w-[3px] h-2 rounded-sm bg-gsh-dark animate-bounce"></div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="py-24 px-6 bg-white">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-16">
      <h2 class="font-heading text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
        How it works
      </h2>
      <p class="font-body text-[17px] text-gsh-light">Three steps. Zero complexity.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each [
        {
          num: '01',
          icon: '📦',
          title: 'Rent or Buy',
          desc: 'Guest finds the hub in the lobby or on their floor. Rentals for the stay, essentials to keep.'
        },
        {
          num: '02',
          icon: '☀️',
          title: 'Use & Enjoy',
          desc: 'Quality EU-sourced products. Beach gear, tech, hygiene — everything a guest needs.'
        },
        {
          num: '03',
          icon: '♻️',
          title: 'Return & Circulate',
          desc: 'Rentals returned at checkout. Purchases yours to keep — optionally return packaging for recycling.'
        }
      ] as step}
        <div
          class="p-9 rounded-2xl bg-gsh-off-white border border-gsh-green/[0.03] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gsh-green/[0.06] last:bg-gradient-to-br last:from-gsh-green/[0.03] last:to-gsh-blue/[0.02]"
        >
          <div class="text-4xl mb-4">{step.icon}</div>
          <div class="font-heading text-[13px] font-bold text-gsh-blue tracking-[0.08em] mb-2">
            {step.num}
          </div>
          <h3 class="font-heading text-[22px] font-bold tracking-tight mb-2.5">{step.title}</h3>
          <p class="font-body text-[15px] text-gsh-light leading-relaxed">{step.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CIRCULAR PROMISE -->
<section
  class="py-20 px-6 text-center text-white"
  style="background: linear-gradient(160deg, #1F7A63 0%, #16614e 60%, rgba(46,139,192,0.56) 100%)"
>
  <div class="max-w-[700px] mx-auto">
    <div class="w-14 h-14 rounded-full bg-white/[0.12] mx-auto mb-6 flex items-center justify-center text-2xl">
      🌿
    </div>
    <h2 class="font-heading text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight leading-tight mb-4">
      "What we sell, we take care of."
    </h2>
    <p class="text-lg opacity-80 tracking-[0.15em] uppercase font-medium mb-8">
      Reuse · Recycle · Donate responsibly
    </p>

    <div class="flex justify-center gap-10 flex-wrap">
      {#each [
        { icon: '🔄', title: 'Reuse', desc: 'Products stay in circulation' },
        { icon: '♻️', title: 'Recycle', desc: 'Materials recovered at end-of-life' },
        { icon: '💚', title: 'Donate', desc: '100% of proceeds to NGOs' }
      ] as pillar}
        <div class="text-center min-w-[140px]">
          <div class="text-[28px] mb-2">{pillar.icon}</div>
          <div class="font-heading text-base font-bold mb-1">{pillar.title}</div>
          <div class="text-sm opacity-70">{pillar.desc}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- KEY NUMBERS -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
    {#each [
      { target: 14, suffix: '', label: 'Rental products' },
      { target: 27, suffix: '', label: 'Essential products' },
      { target: 6, suffix: '', label: 'Curated bundles' },
      { target: 100, suffix: '%', label: 'Donation proceeds to NGOs' }
    ] as stat}
      <div class="text-center p-8 rounded-2xl bg-gsh-off-white">
        <div class="font-heading text-5xl font-extrabold text-gsh-green tracking-tight leading-none mb-2">
          <AnimatedNumber target={stat.target} suffix={stat.suffix} />
        </div>
        <div class="font-body text-sm text-gsh-light font-medium">{stat.label}</div>
      </div>
    {/each}
  </div>
</section>

<!-- AUDIENCE CARDS -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight">
        Built for everyone in hospitality
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each [
        {
          title: 'For Hotels',
          subtitle: 'Zero investment. Fully managed.',
          points: ['No upfront cost', 'No staff needed', 'ESG data included', 'Revenue from day one'],
          color: 'gsh-green',
          cta: 'Learn more',
          href: '/en/hotels'
        },
        {
          title: 'For Guests',
          subtitle: 'Everything you need. Nothing wasted.',
          points: ['Quality EU products', 'Rent or buy', 'Rentals returned at checkout', 'Fair prices'],
          color: 'gsh-blue',
          cta: 'See products',
          href: '/en/guests'
        },
        {
          title: 'For Investors',
          subtitle: 'Scalable circular hospitality.',
          points: ['€700/mo net per hotel', '3–5 month payback', 'EU market: 4.5M rooms', 'CSRD-aligned'],
          color: 'gsh-dark',
          cta: 'View financials',
          href: '/en/investors'
        }
      ] as card}
        <a
          href={card.href}
          class="block bg-white rounded-2xl p-9 relative overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-xl no-underline text-gsh-dark group"
        >
          <!-- Top accent -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-{card.color} to-{card.color}/40"></div>

          <h3 class="font-heading text-2xl font-extrabold tracking-tight mt-2 mb-2 text-{card.color}">
            {card.title}
          </h3>
          <p class="font-body text-[15px] text-gsh-light mb-5">{card.subtitle}</p>

          <div class="flex flex-col gap-2.5 mb-6">
            {#each card.points as point}
              <div class="flex items-center gap-2.5 font-body text-sm">
                <div
                  class="w-5 h-5 rounded-md bg-{card.color}/[0.06] flex items-center justify-center text-[11px] text-{card.color} shrink-0"
                >
                  ✓
                </div>
                {point}
              </div>
            {/each}
          </div>

          <div class="font-heading text-sm font-semibold text-{card.color} flex items-center gap-1.5">
            {card.cta} <span class="text-base group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
