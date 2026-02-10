<script lang="ts">
  import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>For Hotels — GreenStay Hub</title>
  <meta name="description" content="Zero-investment sustainability hub for your hotel. No upfront cost, no staff needed. ESG data included." />
  <meta property="og:title" content="For Hotels — GreenStay Hub" />
  <meta property="og:description" content="Zero-investment sustainability amenity. We install, stock, maintain everything. You earn revenue from day one." />
  <meta property="og:url" content="https://greenstayhub.com/{$page.params.lang}/hotels" />
  <link rel="canonical" href="https://greenstayhub.com/{$page.params.lang}/hotels" />
</svelte:head>

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
      For Hotel Partners
    </div>
    <h1 class="font-heading text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      Zero investment.<br />
      <span class="text-gsh-green">Zero staff. Real ESG.</span>
    </h1>
    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[520px] mx-auto mb-10">
      GreenStay Hub is a fully managed sustainability amenity. We install, stock, maintain, and operate everything.
      You provide space — and earn revenue from day one.
    </p>
    <a
      href="#contact"
      class="inline-block px-8 py-4 rounded-[10px] bg-gsh-green text-white font-heading text-base font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/25"
    >
      Get in touch →
    </a>
  </div>
</section>

<!-- FOUR PILLARS -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        Why hotels say yes
      </h2>
      <p class="font-body text-[17px] text-gsh-light">Four pillars. Zero barriers.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          icon: '💰',
          title: 'Zero investment',
          desc: 'No upfront cost. No hardware purchase. No inventory investment. GreenStay Hub covers installation, stocking, and all equipment.',
          highlight: "You provide space. That's it."
        },
        {
          icon: '👥',
          title: 'Zero staff burden',
          desc: 'We handle all restocking and maintenance. Product selection, pricing, and lifecycle management are fully managed.',
          highlight: "You don't need to hire, train, or redirect anyone."
        },
        {
          icon: '📊',
          title: 'ESG & sustainability data',
          desc: 'Every product is tracked through its lifecycle. You receive regular reports: products reused, kilograms recycled, donations generated.',
          highlight: 'Ready for Green Key, EU Ecolabel, and CSRD reporting.'
        },
        {
          icon: '⭐',
          title: 'Better guest experience',
          desc: 'Guests get quality EU-sourced products they actually need. Rentals mean they don’t buy things they’ll only use once.',
          highlight: 'A thoughtful amenity, not a commercial add-on.'
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
        From agreement to live in 1–2 weeks
      </h2>
      <p class="font-body text-[17px] text-gsh-light">We handle the work. You enjoy the results.</p>
    </div>

    <div class="space-y-0">
      {#each [
        {
          step: '1',
          title: 'Site assessment',
          duration: '1–2 hours',
          desc: 'We visit your property to assess placement (lobby, floor areas), logistics access, and unit count.'
        },
        {
          step: '2',
          title: 'Agreement',
          duration: '1–5 business days',
          desc: 'We agree on placement, revenue model, restocking schedule, and terms.'
        },
        {
          step: '3',
          title: 'Delivery & installation',
          duration: '1–3 days',
          desc: 'Hub hardware delivered and installed. Initial stock loaded. 2–4 hours per hub unit.'
        },
        {
          step: '4',
          title: 'Staff briefing',
          duration: '30–60 minutes',
          desc: 'Short session for your team: what the hub is, how guests use it, and who to call if needed.'
        },
        {
          step: '5',
          title: 'Go live',
          duration: 'Immediate',
          desc: 'The hub is operational. Guests can rent and buy from day one.'
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
        Revenue without risk
      </h2>
      <p class="font-body text-[17px] text-gsh-light">You earn from a service you don't manage.</p>
    </div>

    <!-- Two models -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div class="p-8 rounded-2xl bg-gsh-off-white border border-gsh-green/[0.04]">
        <h3 class="font-heading text-lg font-bold mb-3">Revenue share</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">
          You receive 15–25% of all hub revenue generated at your property. Aligns your incentive with hub
          performance.
        </p>
        <p class="font-body text-sm text-gsh-green font-semibold">Best for: hotels that want upside potential.</p>
      </div>
      <div class="p-8 rounded-2xl bg-gsh-off-white border border-gsh-green/[0.04]">
        <h3 class="font-heading text-lg font-bold mb-3">Fixed monthly fee</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">
          Predictable monthly payment regardless of performance. GreenStay Hub absorbs the volume risk.
        </p>
        <p class="font-body text-sm text-gsh-green font-semibold">Best for: hotels that prefer budget certainty.</p>
      </div>
    </div>

    <!-- Key numbers -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each [
        { target: 1750, prefix: '€', suffix: '', label: 'Gross revenue / month' },
        { target: 700, prefix: '€', suffix: '', label: 'Net contribution / month' },
        { target: 0, prefix: '€', suffix: '', label: 'Hotel investment', display: '€0' },
        { target: 3, prefix: '', suffix: '–5 mo', label: 'Payback period' }
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
      Based on a mid-sized hotel (80–150 rooms) on Costa del Sol. Figures are estimates — pilot data will replace
      assumptions.
    </p>
  </div>
</section>

<!-- ESG REPORTING -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
        ESG reporting, ready to use
      </h2>
      <p class="font-body text-[17px] text-gsh-light">
        Measurable sustainability credentials without building your own programme.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {#each [
        {
          icon: '🔄',
          title: 'Product reuse',
          metrics: ['Products returned', 'Return rate', 'Rental cycles per product', 'Products in circulation']
        },
        {
          icon: '♻️',
          title: 'Material recycled',
          metrics: ['Total material recycled (kg)', 'Electronics (WEEE-compliant)', 'Plastics recycled', 'Textiles recycled']
        },
        {
          icon: '💚',
          title: 'Donations',
          metrics: ['Products donated', 'Proceeds generated (€)', '100% transferred to NGOs', 'Partner organisations supported']
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
        Reports are formatted for <strong class="text-gsh-dark">Green Key</strong>,
        <strong class="text-gsh-dark">EU Ecolabel</strong>, and <strong class="text-gsh-dark">CSRD</strong> compliance.
        Include them in your annual sustainability report, share with guests, or submit to certification bodies.
      </p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[700px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight">
        Common questions
      </h2>
    </div>

    <div class="space-y-4">
      {#each [
        {
          q: 'What does it cost the hotel?',
          a: "Nothing. GreenStay Hub covers all hardware, installation, stock, and operations. The hotel provides space — that's all."
        },
        {
          q: 'Do we need to assign staff?',
          a: 'No. We handle restocking, maintenance, returns, and guest support. Your staff receive a brief 30–60 minute orientation, but have no ongoing responsibilities.'
        },
        {
          q: 'Where is the hub placed?',
          a: 'In the lobby and/or on each floor (max one unit per floor). Never in guest rooms. Exact placement is decided during the site assessment.'
        },
        {
          q: 'How does the revenue share work?',
          a: 'You earn 15–25% of all hub revenue at your property, or a fixed monthly fee — whichever you prefer. Both models mean zero financial risk for the hotel.'
        },
        {
          q: "What happens if a guest doesn't return a rental?",
          a: "The pre-agreed replacement cost is charged to the guest's room bill. The guest keeps the product. No follow-up, no friction."
        },
        {
          q: 'How does this help our ESG reporting?',
          a: 'We track every product through its lifecycle and deliver periodic reports with reuse, recycling, and donation metrics — formatted for Green Key, EU Ecolabel, and CSRD submissions.'
        },
        {
          q: 'How long does installation take?',
          a: 'From agreement to live in approximately 1–2 weeks. Physical installation takes 2–4 hours per hub unit.'
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
      Ready to add GreenStay Hub?
    </h2>
    <p class="font-body text-lg opacity-80 mb-8 leading-relaxed">
      No investment. No risk. We'd love to show you how it works for your property.
    </p>
    <a
      href="mailto:hello@greenstayhub.com"
      class="inline-block px-8 py-4 rounded-[10px] bg-white text-gsh-green font-heading text-base font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      Contact us →
    </a>
    <p class="font-body text-sm opacity-60 mt-6">hello@greenstayhub.com · Fuengirola, Costa del Sol</p>
  </div>
</section>
