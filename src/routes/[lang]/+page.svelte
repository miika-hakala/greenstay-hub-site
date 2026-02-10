<script lang="ts">
  import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
  import { t, type Locale } from '$lib/i18n';
  import { page } from '$app/stores';

  let lang = $derived(($page.params.lang || 'en') as Locale);
</script>

<svelte:head>
  <title>GreenStay Hub — {t(lang, 'landing.title_1')} {t(lang, 'landing.title_2')}</title>
  <meta
    name="description"
    content={t(lang, 'landing.subtitle')}
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
      {t(lang, 'landing.badge')}
    </div>

    <h1 class="font-heading text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      {t(lang, 'landing.title_1')}<br />
      <span class="text-gsh-green">{t(lang, 'landing.title_2')}</span>
    </h1>

    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[560px] mx-auto mb-10">
      {t(lang, 'landing.subtitle')}
    </p>

    <div class="flex gap-4 justify-center flex-wrap">
      <a
        href="/{lang}/hotels"
        class="px-7 py-3.5 rounded-[10px] bg-gsh-green text-white font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/25"
      >
        {t(lang, 'landing.cta_hotels')} →
      </a>
      <a
        href="/{lang}/guests"
        class="px-7 py-3.5 rounded-[10px] border-2 border-gsh-blue/15 text-gsh-blue font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-blue/15"
      >
        {t(lang, 'landing.cta_guests')} →
      </a>
      <a
        href="/{lang}/investors"
        class="px-7 py-3.5 rounded-[10px] border-2 border-gsh-dark/15 text-gsh-dark font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-dark/12"
      >
        {t(lang, 'landing.cta_investors')} →
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
        {t(lang, 'landing.how_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">{t(lang, 'landing.how_subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each [
        {
          num: '01',
          icon: '📦',
          title: t(lang, 'landing.step1_title'),
          desc: t(lang, 'landing.step1_desc')
        },
        {
          num: '02',
          icon: '☀️',
          title: t(lang, 'landing.step2_title'),
          desc: t(lang, 'landing.step2_desc')
        },
        {
          num: '03',
          icon: '♻️',
          title: t(lang, 'landing.step3_title'),
          desc: t(lang, 'landing.step3_desc')
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
      {t(lang, 'landing.promise_title')}
    </h2>
    <p class="text-lg opacity-80 tracking-[0.15em] uppercase font-medium mb-8">
      {t(lang, 'landing.promise_sub')}
    </p>

    <div class="flex justify-center gap-10 flex-wrap">
      {#each [
        { icon: '🔄', title: t(lang, 'landing.reuse'), desc: t(lang, 'landing.reuse_desc') },
        { icon: '♻️', title: t(lang, 'landing.recycle'), desc: t(lang, 'landing.recycle_desc') },
        { icon: '💚', title: t(lang, 'landing.donate'), desc: t(lang, 'landing.donate_desc') }
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
      { target: 14, suffix: '', label: t(lang, 'landing.stat_rentals') },
      { target: 27, suffix: '', label: t(lang, 'landing.stat_essentials') },
      { target: 6, suffix: '', label: t(lang, 'landing.stat_bundles') },
      { target: 100, suffix: '%', label: t(lang, 'landing.stat_donation') }
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
        {t(lang, 'landing.audience_title')}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each [
        {
          title: t(lang, 'landing.hotels_card_title'),
          subtitle: t(lang, 'landing.hotels_card_sub'),
          points: [t(lang, 'landing.hotels_p1'), t(lang, 'landing.hotels_p2'), t(lang, 'landing.hotels_p3'), t(lang, 'landing.hotels_p4')],
          color: 'gsh-green',
          cta: t(lang, 'landing.hotels_cta'),
          href: `/${lang}/hotels`
        },
        {
          title: t(lang, 'landing.guests_card_title'),
          subtitle: t(lang, 'landing.guests_card_sub'),
          points: [t(lang, 'landing.guests_p1'), t(lang, 'landing.guests_p2'), t(lang, 'landing.guests_p3'), t(lang, 'landing.guests_p4')],
          color: 'gsh-blue',
          cta: t(lang, 'landing.guests_cta'),
          href: `/${lang}/guests`
        },
        {
          title: t(lang, 'landing.investors_card_title'),
          subtitle: t(lang, 'landing.investors_card_sub'),
          points: [t(lang, 'landing.investors_p1'), t(lang, 'landing.investors_p2'), t(lang, 'landing.investors_p3'), t(lang, 'landing.investors_p4')],
          color: 'gsh-dark',
          cta: t(lang, 'landing.investors_cta'),
          href: `/${lang}/investors`
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
