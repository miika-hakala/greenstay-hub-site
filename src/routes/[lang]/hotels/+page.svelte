<script lang="ts">
  import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';

  let lang = $derived($page.params.lang || 'en');
</script>

<svelte:head>
  <title>{t(lang, 'hotels.meta_title')}</title>
  <meta name="description" content={t(lang, 'hotels.meta_description')} />
  <meta property="og:title" content={t(lang, 'hotels.meta_title')} />
  <meta property="og:description" content={t(lang, 'hotels.meta_description')} />
  <meta property="og:url" content="https://greenstayhub.com/{$page.params.lang}/hotels" />
  <link rel="canonical" href="https://greenstayhub.com/{$page.params.lang}/hotels" />
</svelte:head>
<main>

<!-- HERO -->
<section
  class="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-16 relative overflow-hidden"
  style="background: linear-gradient(170deg, #F4F7F5 0%, #e8f0ec 50%, rgba(31,122,99,0.06) 100%)"
>
  <div class="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-gsh-green/[0.04]"></div>
  <div class="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-gsh-blue/[0.03]"></div>

  <div class="relative z-10 max-w-[700px]">
    <div
      class="inline-block px-4 py-1.5 rounded-full bg-gsh-green/[0.06] text-gsh-green text-[13px] font-semibold font-heading tracking-[0.05em] uppercase mb-6"
    >
      {t(lang, 'hotels.hero_badge')}
    </div>
    <h1 class="font-heading text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      {t(lang, 'hotels.hero_title_1')}<br />
      <span class="text-gsh-green">{t(lang, 'hotels.hero_title_2')}</span>
    </h1>
    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[520px] mx-auto mb-10">
      {t(lang, 'hotels.hero_desc')}
    </p>
    <a
      href="#contact"
      class="inline-block px-8 py-4 rounded-[10px] bg-gsh-green text-white font-heading text-base font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/25"
    >
      {t(lang, 'hotels.hero_cta')} →
    </a>
  </div>
</section>

<!-- FOUR PILLARS -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'hotels.pillars_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">{t(lang, 'hotels.pillars_subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          icon: '💰',
          title: t(lang, 'hotels.pillar1_title'),
          desc: t(lang, 'hotels.pillar1_desc'),
          highlight: t(lang, 'hotels.pillar1_highlight')
        },
        {
          icon: '👥',
          title: t(lang, 'hotels.pillar2_title'),
          desc: t(lang, 'hotels.pillar2_desc'),
          highlight: t(lang, 'hotels.pillar2_highlight')
        },
        {
          icon: '📊',
          title: t(lang, 'hotels.pillar3_title'),
          desc: t(lang, 'hotels.pillar3_desc'),
          highlight: t(lang, 'hotels.pillar3_highlight')
        },
        {
          icon: '⭐',
          title: t(lang, 'hotels.pillar4_title'),
          desc: t(lang, 'hotels.pillar4_desc'),
          highlight: t(lang, 'hotels.pillar4_highlight')
        }
      ] as pillar}
        <div
          class="p-8 rounded-2xl bg-gsh-off-white border border-gsh-green/[0.04] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gsh-green/[0.06]"
        >
          <div class="text-3xl mb-4">{pillar.icon}</div>
          <h3 class="font-heading text-xl font-bold tracking-tight mb-3">{pillar.title}</h3>
          <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">{pillar.desc}</p>
          <p class="font-body text-[15px] text-gsh-green font-semibold">{pillar.highlight}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- HOW IT WORKS (hotel perspective) -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'hotels.timeline_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">{t(lang, 'hotels.timeline_subtitle')}</p>
    </div>

    <div class="space-y-0">
      {#each [
        {
          step: '1',
          title: t(lang, 'hotels.step1_title'),
          duration: t(lang, 'hotels.step1_duration'),
          desc: t(lang, 'hotels.step1_desc')
        },
        {
          step: '2',
          title: t(lang, 'hotels.step2_title'),
          duration: t(lang, 'hotels.step2_duration'),
          desc: t(lang, 'hotels.step2_desc')
        },
        {
          step: '3',
          title: t(lang, 'hotels.step3_title'),
          duration: t(lang, 'hotels.step3_duration'),
          desc: t(lang, 'hotels.step3_desc')
        },
        {
          step: '4',
          title: t(lang, 'hotels.step4_title'),
          duration: t(lang, 'hotels.step4_duration'),
          desc: t(lang, 'hotels.step4_desc')
        },
        {
          step: '5',
          title: t(lang, 'hotels.step5_title'),
          duration: t(lang, 'hotels.step5_duration'),
          desc: t(lang, 'hotels.step5_desc')
        }
      ] as item, i}
        <div class="flex gap-6 items-start">
          <!-- Timeline line -->
          <div class="flex flex-col items-center">
            <div
              class="w-10 h-10 rounded-full bg-gsh-green text-white font-heading font-bold text-sm flex items-center justify-center shrink-0"
            >
              {item.step}
            </div>
            {#if i < 4}
              <div class="w-0.5 h-16 bg-gsh-green/20"></div>
            {/if}
          </div>
          <!-- Content -->
          <div class="pb-8">
            <div class="flex items-baseline gap-3 mb-1">
              <h3 class="font-heading text-lg font-bold">{item.title}</h3>
              <span class="font-body text-sm text-gsh-blue font-medium">{item.duration}</span>
            </div>
            <p class="font-body text-[15px] text-gsh-light leading-relaxed">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- REVENUE MODEL -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'hotels.revenue_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">{t(lang, 'hotels.revenue_subtitle')}</p>
    </div>

    <!-- Two models -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div class="p-8 rounded-2xl bg-gsh-off-white border border-gsh-green/[0.04]">
        <h3 class="font-heading text-lg font-bold mb-3">{t(lang, 'hotels.revenue_share_title')}</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">
          {t(lang, 'hotels.revenue_share_desc')}
        </p>
        <p class="font-body text-sm text-gsh-green font-semibold">{t(lang, 'hotels.revenue_share_best')}</p>
      </div>
      <div class="p-8 rounded-2xl bg-gsh-off-white border border-gsh-green/[0.04]">
        <h3 class="font-heading text-lg font-bold mb-3">{t(lang, 'hotels.fixed_fee_title')}</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">
          {t(lang, 'hotels.fixed_fee_desc')}
        </p>
        <p class="font-body text-sm text-gsh-green font-semibold">{t(lang, 'hotels.fixed_fee_best')}</p>
      </div>
    </div>

    <!-- Key numbers -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each [
        { target: 1750, prefix: '€', suffix: '', label: t(lang, 'hotels.stat_gross') },
        { target: 700, prefix: '€', suffix: '', label: t(lang, 'hotels.stat_net') },
        { target: 0, prefix: '€', suffix: '', label: t(lang, 'hotels.stat_investment'), display: '€0' },
        { target: 3, prefix: '', suffix: '–5 mo', label: t(lang, 'hotels.stat_payback') }
      ] as stat}
        <div class="text-center p-6 rounded-2xl bg-gsh-off-white">
          <div class="font-heading text-3xl md:text-4xl font-extrabold text-gsh-green tracking-tight leading-none mb-2">
            {#if stat.display}
              {stat.display}
            {:else}
              {stat.prefix}<AnimatedNumber target={stat.target} suffix={stat.suffix} />
            {/if}
          </div>
          <div class="font-body text-xs md:text-sm text-gsh-light font-medium">{stat.label}</div>
        </div>
      {/each}
    </div>

    <p class="text-center font-body text-sm text-gsh-light mt-6">
      {t(lang, 'hotels.revenue_note')}
    </p>
  </div>
</section>

<!-- ESG REPORTING -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'hotels.esg_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        {t(lang, 'hotels.esg_subtitle')}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {#each [
        {
          icon: '🔄',
          title: t(lang, 'hotels.esg_reuse_title'),
          metrics: [t(lang, 'hotels.esg_reuse_m1'), t(lang, 'hotels.esg_reuse_m2'), t(lang, 'hotels.esg_reuse_m3'), t(lang, 'hotels.esg_reuse_m4')]
        },
        {
          icon: '♻️',
          title: t(lang, 'hotels.esg_recycle_title'),
          metrics: [t(lang, 'hotels.esg_recycle_m1'), t(lang, 'hotels.esg_recycle_m2'), t(lang, 'hotels.esg_recycle_m3'), t(lang, 'hotels.esg_recycle_m4')]
        },
        {
          icon: '💚',
          title: t(lang, 'hotels.esg_donate_title'),
          metrics: [t(lang, 'hotels.esg_donate_m1'), t(lang, 'hotels.esg_donate_m2'), t(lang, 'hotels.esg_donate_m3'), t(lang, 'hotels.esg_donate_m4')]
        }
      ] as category}
        <div class="p-6 rounded-2xl bg-white border border-gsh-green/[0.04]">
          <div class="text-2xl mb-3">{category.icon}</div>
          <h3 class="font-heading text-lg font-bold mb-4">{category.title}</h3>
          <div class="flex flex-col gap-2">
            {#each category.metrics as metric}
              <div class="flex items-center gap-2 font-body text-sm text-gsh-light">
                <div class="w-1.5 h-1.5 rounded-full bg-gsh-green/40 shrink-0"></div>
                {metric}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center p-6 rounded-2xl bg-white border border-gsh-green/[0.04]">
      <p class="font-body text-[15px] text-gsh-light leading-relaxed">
        {t(lang, 'hotels.esg_note')}
      </p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[700px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight">
        {t(lang, 'hotels.faq_title')}
      </h2>
    </div>

    <div class="space-y-4">
      {#each [
        {
          q: t(lang, 'hotels.faq1_q'),
          a: t(lang, 'hotels.faq1_a')
        },
        {
          q: t(lang, 'hotels.faq2_q'),
          a: t(lang, 'hotels.faq2_a')
        },
        {
          q: t(lang, 'hotels.faq3_q'),
          a: t(lang, 'hotels.faq3_a')
        },
        {
          q: t(lang, 'hotels.faq4_q'),
          a: t(lang, 'hotels.faq4_a')
        },
        {
          q: t(lang, 'hotels.faq5_q'),
          a: t(lang, 'hotels.faq5_a')
        },
        {
          q: t(lang, 'hotels.faq6_q'),
          a: t(lang, 'hotels.faq6_a')
        },
        {
          q: t(lang, 'hotels.faq7_q'),
          a: t(lang, 'hotels.faq7_a')
        }
      ] as faq}
        <details class="group rounded-2xl bg-gsh-off-white border border-gsh-green/[0.04] overflow-hidden">
          <summary class="flex justify-between items-center cursor-pointer p-6 font-heading text-base font-bold list-none">
            {faq.q}
            <span class="text-gsh-green text-xl transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
          </summary>
          <div class="px-6 pb-6 font-body text-[15px] text-gsh-light leading-relaxed">
            {faq.a}
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section
  id="contact"
  class="py-20 px-6 text-center text-white"
  style="background: linear-gradient(160deg, #1F7A63 0%, #16614e 60%, rgba(46,139,192,0.56) 100%)"
>
  <div class="max-w-[600px] mx-auto">
    <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-4">
      {t(lang, 'hotels.cta_title')}
    </h2>
    <p class="font-body text-lg opacity-80 mb-8 leading-relaxed">
      {t(lang, 'hotels.cta_desc')}
    </p>
    <a
      href="mailto:hello@greenstayhub.com"
      class="inline-block px-8 py-4 rounded-[10px] bg-white text-gsh-green font-heading text-base font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      {t(lang, 'hotels.cta_button')} →
    </a>
    <p class="font-body text-sm opacity-60 mt-6">{t(lang, 'hotels.cta_footer')}</p>
  </div>
</section>
</main>
