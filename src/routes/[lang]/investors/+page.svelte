<script lang="ts">
  import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
</script>

<svelte:head>
  <title>For Investors — GreenStay Hub</title>
  <meta
    name="description"
    content="Scalable circular hospitality platform targeting Europe's hotel market. Proven unit economics, clear path to scale."
  />
</svelte:head>

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
      Investment Opportunity
    </div>
    <h1 class="font-heading text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      Scalable circular<br />
      <span class="text-gsh-green">hospitality.</span>
    </h1>
    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[540px] mx-auto mb-10">
      A dual-revenue platform embedded in Europe's hotel infrastructure. Zero-capex for hotels removes adoption
      barriers. Circular operations create ESG value and reduce cost of goods.
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <a
        href="#unit-economics"
        class="px-7 py-3.5 rounded-[10px] bg-gsh-dark text-white font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-dark/25"
      >
        View financials →
      </a>
      <a
        href="mailto:hello@greenstayhub.com"
        class="px-7 py-3.5 rounded-[10px] border-2 border-gsh-dark/15 text-gsh-dark font-heading text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-dark/12"
      >
        Contact us →
      </a>
    </div>
  </div>
</section>

<!-- CONCEPT -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        The concept
      </h2>
      <p class="font-body text-[17px] text-gsh-light">A circular hospitality platform, not a vending machine.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each [
        {
          icon: '🏨',
          title: 'What',
          desc: 'Compact sustainability hubs placed in hotel lobbies and floor areas. Rental products (tech, beach gear) and curated essentials (hygiene, sun care) — all EU-sourced.'
        },
        {
          icon: '⚙️',
          title: 'How',
          desc: 'Hotels provide space at zero cost. GreenStay Hub handles installation, stocking, maintenance, and circular operations. Hotels earn 15–25% revenue share.'
        },
        {
          icon: '🌍',
          title: 'Why now',
          desc: 'EU CSRD 2026 requires sustainability reporting from large companies. Hotels need ESG data. Guests expect responsible options. The market is ready.'
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
        Unit economics
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        Single hotel model — mid-sized property (80–150 rooms), Costa del Sol.
      </p>
    </div>

    <!-- Revenue breakdown -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="p-8 rounded-2xl bg-white border border-gsh-green/[0.04]">
        <h3 class="font-heading text-lg font-bold mb-6">Monthly revenue</h3>
        <div class="space-y-4">
          {#each [
            { label: 'Rental revenue', value: '€630', detail: '100 rooms × 70% occ. × 15% conversion × €6 avg.' },
            { label: 'Essentials revenue', value: '€1,120', detail: '100 rooms × 70% occ. × 25% conversion × €8 avg.' },
            { label: 'Total gross revenue', value: '€1,750', detail: '', bold: true }
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
        <h3 class="font-heading text-lg font-bold mb-6">Monthly costs</h3>
        <div class="space-y-4">
          {#each [
            { label: 'Product cost (COGS)', value: '€450' },
            { label: 'Rental depreciation & maintenance', value: '€100' },
            { label: 'Restocking logistics', value: '€150' },
            { label: 'Hotel revenue share (20%)', value: '€350' },
            { label: 'Total costs', value: '€1,050', bold: true }
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
        { target: 700, prefix: '€', suffix: '', label: 'Net contribution / month' },
        { target: 8400, prefix: '€', suffix: '', label: 'Annual per hotel' },
        { target: 3, prefix: '', suffix: '–5 mo', label: 'Payback period' },
        { target: 2000, prefix: '€', suffix: '–3k', label: 'Setup cost per hotel' }
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
      All figures are estimates based on market research. Pilot data will replace these assumptions. Peak season
      (May–Oct) could increase figures 30–50%.
    </p>
  </div>
</section>

<!-- SCALING -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        Scaling projections
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        Linear economics. Each hotel adds €700/month net contribution.
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr class="border-b-2 border-gsh-green/20">
            <th class="font-heading text-sm font-bold text-gsh-dark py-4 pr-4">Hotels</th>
            <th class="font-heading text-sm font-bold text-gsh-dark py-4 pr-4">Monthly net</th>
            <th class="font-heading text-sm font-bold text-gsh-dark py-4">Annual net</th>
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
      Assumes consistent hotel size and performance. Variation across properties and seasonal fluctuations will occur.
    </p>
  </div>
</section>

<!-- REVENUE STREAMS -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        Revenue streams
      </h2>
      <p class="font-body text-[17px] text-gsh-light">Dual revenue model with emerging ESG opportunity.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          title: 'Rentals',
          share: '35–45%',
          desc: 'Guests borrow reusable products (power banks, speakers, beach gear). High margins through multiple rental cycles per product.',
          examples: 'Power bank €2/day · Speaker €3/day · Beach kit €5/day'
        },
        {
          title: 'Essentials',
          share: '40–50%',
          desc: 'Guests purchase everyday items (hygiene, sun care, adapters). Standard retail margin on EU-sourced goods. Fair pricing below hotel markup.',
          examples: 'Sunscreen €8–12 · Charger €8–12 · Toothbrush kit €3–5'
        },
        {
          title: 'Bundles',
          share: '10–15%',
          desc: 'Pre-configured product combinations at a discount. Increase average transaction value and simplify guest decisions.',
          examples: 'Beach Bundle €12 · Tech Bundle €10 · Essentials Bundle €8'
        },
        {
          title: 'ESG partnerships',
          share: 'Emerging',
          desc: 'Hotel chains pay for branded sustainability reporting. Circular economy credits. Co-investment in hub deployment.',
          examples: 'Not active in pilot phase — part of long-term model'
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
      Circular model
    </h2>
    <p class="font-body text-lg opacity-80 mb-10 leading-relaxed">
      Every product has a defined lifecycle. Nothing is wasted.
    </p>

    <!-- Flow -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
      {#each [
        { icon: '📦', label: 'Buy & stock' },
        { icon: '☀️', label: 'Guest uses' },
        { icon: '🔄', label: 'Return' }
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
        { icon: '🔄', title: 'Reuse', desc: 'Clean, check, recirculate' },
        { icon: '♻️', title: 'Recycle', desc: 'Sort by material, WEEE-compliant' },
        { icon: '💚', title: 'Donate', desc: '100% proceeds to NGOs' }
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
        Roadmap
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        Each phase gated by the success of the previous one. Data-driven, not assumption-driven.
      </p>
    </div>

    <div class="space-y-0">
      {#each [
        {
          phase: '1',
          title: 'Pilot',
          scope: '1 hotel',
          location: 'Fuengirola, Costa del Sol',
          detail: 'Validate concept, prove unit economics, refine circular model. 6-month evaluation.',
          status: 'current'
        },
        {
          phase: '2',
          title: 'Local expansion',
          scope: '5–10 hotels',
          location: 'Fuengirola area',
          detail: 'Test logistics efficiency with multiple properties. Build local brand. Repeatable onboarding.',
          status: ''
        },
        {
          phase: '3',
          title: 'Regional rollout',
          scope: '20–50 hotels',
          location: 'Costa del Sol',
          detail: 'Prove model across hotel types and sizes. Regional logistics infrastructure. Hotel association relationships.',
          status: ''
        },
        {
          phase: '4',
          title: 'Chain partnerships',
          scope: '50–100+ hotels',
          location: 'Spain + expanding',
          detail: 'Multi-property agreements with hotel chains. Standardised offering. Central ESG dashboard.',
          status: ''
        },
        {
          phase: '5',
          title: 'European expansion',
          scope: '100+ hotels',
          location: 'Mediterranean markets',
          detail: 'Balearics, Canaries, Algarve, Greek islands, Italian coast, Croatia. Local suppliers and logistics.',
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
                  Current
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
        <strong class="text-gsh-dark">Timeline:</strong> Phase 2 starts 3–6 months after pilot. Phase 3 follows 6–12
        months later. Phase 4 runs in parallel. Phase 5 begins 12–24 months after chain partnerships.
      </p>
    </div>
  </div>
</section>

<!-- KEY LEVERS -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        Key economic levers
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          title: 'Rental cycle count',
          desc: 'More rentals per product before end-of-life = higher margin. A power bank rented 50 times replaces 50 purchases.'
        },
        {
          title: 'Conversion rate',
          desc: 'Small increases in guest adoption significantly impact revenue. 15% → 20% adds ~€200/month per hotel.'
        },
        {
          title: 'Bundle uptake',
          desc: 'Bundles increase average transaction value with minimal additional cost. 10–15% of revenue at steady state.'
        },
        {
          title: 'Logistics efficiency',
          desc: 'As hotel density increases in a region, restocking cost per hotel decreases. Route optimisation at scale.'
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
      Let's talk
    </h2>
    <p class="font-body text-lg opacity-80 mb-8 leading-relaxed">
      We'd welcome the opportunity to share more detail on the model, the market, and the path ahead.
    </p>
    <a
      href="mailto:hello@greenstayhub.com"
      class="inline-block px-8 py-4 rounded-[10px] bg-white text-gsh-dark font-heading text-base font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      Contact us →
    </a>
    <p class="font-body text-sm opacity-60 mt-6">hello@greenstayhub.com · Fuengirola, Costa del Sol</p>
  </div>
</section>
