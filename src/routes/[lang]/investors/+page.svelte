<script lang="ts">
  import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';

  let lang = $derived($page.params.lang || 'en');
</script>

<svelte:head>
  <title>{t(lang, 'investors.meta_title')}</title>
  <meta name="description" content={t(lang, 'investors.meta_description')} />
  <meta property="og:title" content={t(lang, 'investors.meta_title')} />
  <meta property="og:description" content={t(lang, 'investors.meta_og_description')} />
  <meta property="og:url" content="https://greenstayhub.com/{$page.params.lang}/investors" />
  <link rel="canonical" href="https://greenstayhub.com/{$page.params.lang}/investors" />
</svelte:head>
<main>

<!-- HERO -->
<section
  class="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-16 relative overflow-hidden"
  style="background: linear-gradient(170deg, #F4F7F5 0%, #e8f0ec 50%, rgba(26,46,40,0.06) 100%)"
>
  <div class="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-gsh-dark/[0.03]"></div>
  <div class="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-gsh-green/[0.03]"></div>

  <div class="relative z-10 max-w-[720px]">
    <div
      class="inline-block px-4 py-1.5 rounded-full bg-gsh-dark/[0.06] text-gsh-dark text-[13px] font-semibold font-heading tracking-[0.05em] uppercase mb-6"
    >
      {t(lang, 'investors.hero_badge')}
    </div>
    <h1 class="font-heading text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      {t(lang, 'investors.hero_title_1')}<br />
      <span class="text-gsh-green">{t(lang, 'investors.hero_title_2')}</span>
    </h1>
    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[540px] mx-auto mb-10">
      {t(lang, 'investors.hero_subtitle')}
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <a
        href="#unit-economics"
        class="px-7 py-3.5 rounded-[10px] bg-gsh-dark text-white font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-dark/25"
      >
        {t(lang, 'investors.hero_cta_financials')}
      </a>
      <a
        href="mailto:hello@greenstayhub.com"
        class="px-7 py-3.5 rounded-[10px] border-2 border-gsh-dark/15 text-gsh-dark font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-dark/12"
      >
        {t(lang, 'investors.hero_cta_contact')}
      </a>
    </div>
  </div>
</section>

<!-- CONCEPT -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'investors.concept_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">{t(lang, 'investors.concept_subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each [
        {
          icon: '🏨',
          title: t(lang, 'investors.concept_what_title'),
          desc: t(lang, 'investors.concept_what_desc')
        },
        {
          icon: '⚙️',
          title: t(lang, 'investors.concept_how_title'),
          desc: t(lang, 'investors.concept_how_desc')
        },
        {
          icon: '🌍',
          title: t(lang, 'investors.concept_why_title'),
          desc: t(lang, 'investors.concept_why_desc')
        }
      ] as item}
        <div class="p-8 rounded-2xl bg-gsh-off-white border border-gsh-green/[0.04]">
          <div class="text-3xl mb-4">{item.icon}</div>
          <h3 class="font-heading text-lg font-bold tracking-tight mb-3">{item.title}</h3>
          <p class="font-body text-[15px] text-gsh-light leading-relaxed">{item.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- UNIT ECONOMICS -->
<section id="unit-economics" class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'investors.economics_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        {t(lang, 'investors.economics_subtitle')}
      </p>
    </div>

    <!-- Revenue breakdown -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="p-8 rounded-2xl bg-white border border-gsh-green/[0.04]">
        <h3 class="font-heading text-lg font-bold mb-6">{t(lang, 'investors.economics_revenue_title')}</h3>
        <div class="space-y-4">
          {#each [
            { 
              label: t(lang, 'investors.economics_revenue_rentals'), 
              value: t(lang, 'investors.economics_revenue_rentals_value'), 
              detail: t(lang, 'investors.economics_revenue_rentals_detail')
            },
            { 
              label: t(lang, 'investors.economics_revenue_essentials'), 
              value: t(lang, 'investors.economics_revenue_essentials_value'), 
              detail: t(lang, 'investors.economics_revenue_essentials_detail')
            },
            { 
              label: t(lang, 'investors.economics_revenue_total'), 
              value: t(lang, 'investors.economics_revenue_total_value'), 
              detail: '', 
              bold: true 
            }
          ] as row}
            <div class="flex justify-between items-start {row.bold ? 'pt-3 border-t border-gsh-green/10' : ''}">
              <div>
                <div class="font-body text-[15px] {row.bold ? 'font-bold text-gsh-dark' : 'text-gsh-dark'}">
                  {row.label}
                </div>
                {#if row.detail}
                  <div class="font-body text-xs text-gsh-light mt-0.5">{row.detail}</div>
                {/if}
              </div>
              <div class="font-heading text-lg font-bold {row.bold ? 'text-gsh-green' : 'text-gsh-dark'}">
                {row.value}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="p-8 rounded-2xl bg-white border border-gsh-green/[0.04]">
        <h3 class="font-heading text-lg font-bold mb-6">{t(lang, 'investors.economics_costs_title')}</h3>
        <div class="space-y-4">
          {#each [
            { 
              label: t(lang, 'investors.economics_costs_cogs'), 
              value: t(lang, 'investors.economics_costs_cogs_value')
            },
            { 
              label: t(lang, 'investors.economics_costs_depreciation'), 
              value: t(lang, 'investors.economics_costs_depreciation_value')
            },
            { 
              label: t(lang, 'investors.economics_costs_logistics'), 
              value: t(lang, 'investors.economics_costs_logistics_value')
            },
            { 
              label: t(lang, 'investors.economics_costs_share'), 
              value: t(lang, 'investors.economics_costs_share_value')
            },
            { 
              label: t(lang, 'investors.economics_costs_total'), 
              value: t(lang, 'investors.economics_costs_total_value'), 
              bold: true 
            }
          ] as row}
            <div class="flex justify-between items-center {row.bold ? 'pt-3 border-t border-gsh-green/10' : ''}">
              <div class="font-body text-[15px] {row.bold ? 'font-bold text-gsh-dark' : 'text-gsh-dark'}">
                {row.label}
              </div>
              <div class="font-heading text-lg font-bold {row.bold ? 'text-gsh-green' : 'text-gsh-dark'}">
                {row.value}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Key metrics -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {#each [
        { target: 700, prefix: '€', suffix: '', label: t(lang, 'investors.economics_metric_net') },
        { target: 8400, prefix: '€', suffix: '', label: t(lang, 'investors.economics_metric_annual') },
        { target: 3, prefix: '', suffix: '–5 mo', label: t(lang, 'investors.economics_metric_payback') },
        { target: 2000, prefix: '€', suffix: '–3k', label: t(lang, 'investors.economics_metric_setup') }
      ] as stat}
        <div class="text-center p-6 rounded-2xl bg-white border border-gsh-green/[0.04]">
          <div class="font-heading text-3xl md:text-4xl font-extrabold text-gsh-green tracking-tight leading-none mb-2">
            {stat.prefix}<AnimatedNumber target={stat.target} suffix={stat.suffix} />
          </div>
          <div class="font-body text-xs md:text-sm text-gsh-light font-medium">{stat.label}</div>
        </div>
      {/each}
    </div>

    <p class="text-center font-body text-sm text-gsh-light">
      {t(lang, 'investors.economics_disclaimer')}
    </p>
  </div>
</section>

<!-- SCALING -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'investors.scaling_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        {t(lang, 'investors.scaling_subtitle')}
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr class="border-b-2 border-gsh-green/20">
            <th class="font-heading text-sm font-bold text-gsh-dark py-4 pr-4">{t(lang, 'investors.scaling_table_hotels')}</th>
            <th class="font-heading text-sm font-bold text-gsh-dark py-4 pr-4">{t(lang, 'investors.scaling_table_monthly')}</th>
            <th class="font-heading text-sm font-bold text-gsh-dark py-4">{t(lang, 'investors.scaling_table_annual')}</th>
          </tr>
        </thead>
        <tbody>
          {#each [
            { hotels: '1', monthly: '€700', annual: '€8,400' },
            { hotels: '10', monthly: '€7,000', annual: '€84,000' },
            { hotels: '50', monthly: '€35,000', annual: '€420,000' },
            { hotels: '100', monthly: '€70,000', annual: '€840,000' }
          ] as row, i}
            <tr class="border-b border-gsh-green/[0.06] {i === 3 ? 'bg-gsh-green/[0.03]' : ''}">
              <td class="font-body text-[15px] py-4 pr-4 {i === 3 ? 'font-bold text-gsh-green' : 'text-gsh-dark'}">
                {row.hotels}
              </td>
              <td class="font-body text-[15px] py-4 pr-4 {i === 3 ? 'font-bold text-gsh-green' : 'text-gsh-dark'}">
                {row.monthly}
              </td>
              <td class="font-body text-[15px] py-4 {i === 3 ? 'font-bold text-gsh-green' : 'text-gsh-dark'}">
                {row.annual}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <p class="font-body text-sm text-gsh-light mt-6 text-center">
      {t(lang, 'investors.scaling_disclaimer')}
    </p>
  </div>
</section>

<!-- REVENUE STREAMS -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'investors.revenue_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">{t(lang, 'investors.revenue_subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          title: t(lang, 'investors.revenue_rentals_title'),
          share: t(lang, 'investors.revenue_rentals_share'),
          desc: t(lang, 'investors.revenue_rentals_desc'),
          examples: t(lang, 'investors.revenue_rentals_examples')
        },
        {
          title: t(lang, 'investors.revenue_essentials_title'),
          share: t(lang, 'investors.revenue_essentials_share'),
          desc: t(lang, 'investors.revenue_essentials_desc'),
          examples: t(lang, 'investors.revenue_essentials_examples')
        },
        {
          title: t(lang, 'investors.revenue_bundles_title'),
          share: t(lang, 'investors.revenue_bundles_share'),
          desc: t(lang, 'investors.revenue_bundles_desc'),
          examples: t(lang, 'investors.revenue_bundles_examples')
        },
        {
          title: t(lang, 'investors.revenue_esg_title'),
          share: t(lang, 'investors.revenue_esg_share'),
          desc: t(lang, 'investors.revenue_esg_desc'),
          examples: t(lang, 'investors.revenue_esg_examples')
        }
      ] as stream}
        <div class="p-8 rounded-2xl bg-white border border-gsh-green/[0.04]">
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-heading text-lg font-bold">{stream.title}</h3>
            <span class="font-heading text-sm font-bold text-gsh-green bg-gsh-green/[0.06] px-3 py-1 rounded-full">
              {stream.share}
            </span>
          </div>
          <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">{stream.desc}</p>
          <p class="font-body text-xs text-gsh-blue">{stream.examples}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CIRCULAR MODEL -->
<section
  class="py-20 px-6 text-center text-white"
  style="background: linear-gradient(160deg, #1a2e28 0%, #1F7A63 60%, rgba(46,139,192,0.56) 100%)"
>
  <div class="max-w-[700px] mx-auto">
    <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-4">
      {t(lang, 'investors.circular_title')}
    </h2>
    <p class="font-body text-lg opacity-80 mb-10 leading-relaxed">
      {t(lang, 'investors.circular_subtitle')}
    </p>

    <!-- Flow -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
      {#each [
        { icon: '📦', label: t(lang, 'investors.circular_step_buy') },
        { icon: '☀️', label: t(lang, 'investors.circular_step_use') },
        { icon: '🔄', label: t(lang, 'investors.circular_step_return') }
      ] as step, i}
        <div class="flex items-center gap-4 md:gap-6">
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-white/[0.12] flex items-center justify-center text-2xl mx-auto mb-2">
              {step.icon}
            </div>
            <div class="font-heading text-sm font-bold">{step.label}</div>
          </div>
          {#if i < 2}
            <div class="hidden md:block text-white/40 text-2xl">→</div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Three streams -->
    <div class="flex justify-center gap-8 flex-wrap">
      {#each [
        { 
          icon: '🔄', 
          title: t(lang, 'investors.circular_reuse_title'), 
          desc: t(lang, 'investors.circular_reuse_desc')
        },
        { 
          icon: '♻️', 
          title: t(lang, 'investors.circular_recycle_title'), 
          desc: t(lang, 'investors.circular_recycle_desc')
        },
        { 
          icon: '💚', 
          title: t(lang, 'investors.circular_donate_title'), 
          desc: t(lang, 'investors.circular_donate_desc')
        }
      ] as stream}
        <div class="text-center min-w-[130px]">
          <div class="text-[28px] mb-2">{stream.icon}</div>
          <div class="font-heading text-base font-bold mb-1">{stream.title}</div>
          <div class="text-sm opacity-70">{stream.desc}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ROADMAP -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'investors.roadmap_title')}
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        {t(lang, 'investors.roadmap_subtitle')}
      </p>
    </div>

    <div class="space-y-0">
      {#each [
        {
          phase: '1',
          title: t(lang, 'investors.roadmap_phase1_title'),
          scope: t(lang, 'investors.roadmap_phase1_scope'),
          location: t(lang, 'investors.roadmap_phase1_location'),
          detail: t(lang, 'investors.roadmap_phase1_detail'),
          status: 'current'
        },
        {
          phase: '2',
          title: t(lang, 'investors.roadmap_phase2_title'),
          scope: t(lang, 'investors.roadmap_phase2_scope'),
          location: t(lang, 'investors.roadmap_phase2_location'),
          detail: t(lang, 'investors.roadmap_phase2_detail'),
          status: ''
        },
        {
          phase: '3',
          title: t(lang, 'investors.roadmap_phase3_title'),
          scope: t(lang, 'investors.roadmap_phase3_scope'),
          location: t(lang, 'investors.roadmap_phase3_location'),
          detail: t(lang, 'investors.roadmap_phase3_detail'),
          status: ''
        },
        {
          phase: '4',
          title: t(lang, 'investors.roadmap_phase4_title'),
          scope: t(lang, 'investors.roadmap_phase4_scope'),
          location: t(lang, 'investors.roadmap_phase4_location'),
          detail: t(lang, 'investors.roadmap_phase4_detail'),
          status: ''
        },
        {
          phase: '5',
          title: t(lang, 'investors.roadmap_phase5_title'),
          scope: t(lang, 'investors.roadmap_phase5_scope'),
          location: t(lang, 'investors.roadmap_phase5_location'),
          detail: t(lang, 'investors.roadmap_phase5_detail'),
          status: ''
        }
      ] as item, i}
        <div class="flex gap-6 items-start">
          <!-- Timeline -->
          <div class="flex flex-col items-center">
            <div
              class="w-10 h-10 rounded-full {item.status === 'current' ? 'bg-gsh-green' : 'bg-gsh-dark/20'} text-white font-heading font-bold text-sm flex items-center justify-center shrink-0"
            >
              {item.phase}
            </div>
            {#if i < 4}
              <div
                class="w-0.5 h-20 {item.status === 'current' ? 'bg-gsh-green/30' : 'bg-gsh-dark/10'}"
              ></div>
            {/if}
          </div>
          <!-- Content -->
          <div class="pb-8">
            <div class="flex flex-wrap items-baseline gap-3 mb-1">
              <h3 class="font-heading text-lg font-bold">{item.title}</h3>
              <span class="font-heading text-sm font-bold text-gsh-green">{item.scope}</span>
              {#if item.status === 'current'}
                <span
                  class="font-heading text-[11px] font-bold text-white bg-gsh-green px-2 py-0.5 rounded-full uppercase tracking-wider"
                >
                  {t(lang, 'investors.roadmap_phase1_status')}
                </span>
              {/if}
            </div>
            <div class="font-body text-sm text-gsh-blue mb-1">{item.location}</div>
            <p class="font-body text-[15px] text-gsh-light leading-relaxed">{item.detail}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-8 p-6 rounded-2xl bg-gsh-off-white text-center">
      <p class="font-body text-sm text-gsh-light">
        <strong class="text-gsh-dark">{t(lang, 'investors.roadmap_timeline_label')}</strong> {t(lang, 'investors.roadmap_timeline_text')}
      </p>
    </div>
  </div>
</section>

<!-- KEY LEVERS -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'investors.levers_title')}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          title: t(lang, 'investors.levers_rental_title'),
          desc: t(lang, 'investors.levers_rental_desc')
        },
        {
          title: t(lang, 'investors.levers_conversion_title'),
          desc: t(lang, 'investors.levers_conversion_desc')
        },
        {
          title: t(lang, 'investors.levers_bundle_title'),
          desc: t(lang, 'investors.levers_bundle_desc')
        },
        {
          title: t(lang, 'investors.levers_logistics_title'),
          desc: t(lang, 'investors.levers_logistics_desc')
        }
      ] as lever}
        <div class="p-6 rounded-2xl bg-white border border-gsh-green/[0.04]">
          <h3 class="font-heading text-base font-bold mb-2">{lever.title}</h3>
          <p class="font-body text-[15px] text-gsh-light leading-relaxed">{lever.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section
  class="py-20 px-6 text-center text-white"
  style="background: linear-gradient(160deg, #1a2e28 0%, #1F7A63 70%, rgba(46,139,192,0.4) 100%)"
>
  <div class="max-w-[600px] mx-auto">
    <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-4">
      {t(lang, 'investors.cta_title')}
    </h2>
    <p class="font-body text-lg opacity-80 mb-8 leading-relaxed">
      {t(lang, 'investors.cta_subtitle')}
    </p>
    <a
      href="mailto:hello@greenstayhub.com"
      class="inline-block px-8 py-4 rounded-[10px] bg-white text-gsh-dark font-heading text-base font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      {t(lang, 'investors.cta_button')}
    </a>
    <p class="font-body text-sm opacity-60 mt-6">{t(lang, 'investors.cta_contact')}</p>
  </div>
</section>
</main>
