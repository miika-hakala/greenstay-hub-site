<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>About — GreenStay Hub</title>
  <meta name="description" content="GreenStay Hub makes sustainability the default in hospitality. Based in Fuengirola, Costa del Sol." />
  <meta property="og:title" content="About — GreenStay Hub" />
  <meta property="og:description" content="Making sustainability the default in hospitality. Based in Fuengirola, Costa del Sol, Spain." />
  <meta property="og:url" content="https://greenstayhub.com/{$page.params.lang}/about" />
  <link rel="canonical" href="https://greenstayhub.com/{$page.params.lang}/about" />
</svelte:head>

<!-- HERO -->
<section
  class="flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-16 relative overflow-hidden"
  style="background: linear-gradient(170deg, #F4F7F5 0%, #e8f0ec 50%, rgba(230,216,162,0.12) 100%)"
>
  <div class="absolute -top-16 -right-16 w-[200px] h-[200px] rounded-full bg-gsh-beige/[0.15]"></div>

  <div class="relative z-10 max-w-[640px]">
    <h1 class="font-heading text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      Same comfort.<br />
      <span class="text-gsh-green">Less waste.</span>
    </h1>
    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[500px] mx-auto">
      GreenStay Hub exists to make sustainability the default in hospitality — not an upgrade, not a premium option, but the standard way hotels serve their guests.
    </p>
  </div>
</section>

<!-- STORY -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[700px] mx-auto">
    <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-6">
      The idea
    </h2>
    <div class="space-y-5 font-body text-[16px] text-gsh-light leading-relaxed">
      <p>
        Hotels generate enormous amounts of waste from single-use products that guests buy, use once, and leave behind. At the same time, guests increasingly want responsible options — but not at the expense of convenience.
      </p>
      <p>
        GreenStay Hub bridges this gap. We place compact hubs in hotel lobbies and common areas, offering high-quality rental products and curated essentials from European manufacturers. Guests get what they need. Hotels get a zero-investment amenity with real sustainability data. Products stay in circulation as long as possible.
      </p>
      <p>
        When a product reaches end-of-life, it's recycled through appropriate channels. When it's still functional but no longer rental-grade, it enters our donation stream — sold second-hand with 100% of proceeds going to environmental NGOs.
      </p>
      <p>
        Nothing is wasted. Nothing is forgotten.
      </p>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-3">
        What we stand for
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          icon: '🔄',
          title: 'Circularity over disposal',
          desc: 'Every product has a defined path: reuse, recycle, or donate. We follow the waste hierarchy — reuse first, dispose only as last resort.'
        },
        {
          icon: '🚫',
          title: 'No greenwashing',
          desc: 'We don\'t claim 100% circularity. We track what we can measure and report honestly. No vague terms, no empty promises.'
        },
        {
          icon: '🤝',
          title: 'Guest choice, not guilt',
          desc: 'Returns are convenient, never compulsory. Rentals are returned at checkout. Purchased items are yours — optional return for recycling only.'
        },
        {
          icon: '🇪🇺',
          title: 'European sourcing',
          desc: 'All products come from Spanish or EU manufacturers. Shorter supply chains, higher standards, support for local economies.'
        },
      ] as value}
        <div class="p-8 rounded-2xl bg-white border border-gsh-green/[0.04]">
          <div class="text-3xl mb-4">{value.icon}</div>
          <h3 class="font-heading text-lg font-bold tracking-tight mb-3">{value.title}</h3>
          <p class="font-body text-[15px] text-gsh-light leading-relaxed">{value.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CIRCULAR PROMISE -->
<section
  class="py-16 px-6 text-center text-white"
  style="background: linear-gradient(160deg, #1F7A63 0%, #16614e 60%, rgba(46,139,192,0.56) 100%)"
>
  <div class="max-w-[600px] mx-auto">
    <div class="w-14 h-14 rounded-full bg-white/[0.12] mx-auto mb-6 flex items-center justify-center text-2xl">
      🌿
    </div>
    <h2 class="font-heading text-[clamp(26px,4vw,36px)] font-extrabold tracking-tight leading-tight mb-4">
      "What we sell, we take care of."
    </h2>
    <p class="text-base opacity-80 tracking-[0.12em] uppercase font-medium mb-6">
      Reuse · Recycle · Donate responsibly
    </p>
    <p class="font-body text-[15px] opacity-70 leading-relaxed max-w-[480px] mx-auto">
      This is our operational commitment. Every product that passes through GreenStay Hub has a defined lifecycle.
      We track it, we report it, and we take responsibility for it.
    </p>
  </div>
</section>

<!-- LOCATION -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[700px] mx-auto text-center">
    <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-3">
      Based in Costa del Sol
    </h2>
    <p class="font-body text-[17px] text-gsh-light mb-8 leading-relaxed">
      Our pilot launches in Fuengirola, on Spain's Costa del Sol — one of Europe's most popular tourist destinations with over 300 days of sunshine per year.
    </p>

    <!-- Map placeholder -->
    <div class="rounded-2xl overflow-hidden border border-gsh-green/[0.06] mb-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d-4.65!3d36.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f71c6f3e0f01%3A0x404f38a22fda2d0!2sFuengirola%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Fuengirola, Costa del Sol"
      ></iframe>
    </div>

    <p class="font-body text-sm text-gsh-light">
      Fuengirola, Málaga, Andalusia, Spain
    </p>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[600px] mx-auto text-center">
    <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-4">
      Get in touch
    </h2>
    <p class="font-body text-[17px] text-gsh-light mb-10 leading-relaxed">
      Whether you're a hotel, an investor, a potential partner, or simply curious — we'd love to hear from you.
    </p>

    <div class="space-y-4 mb-10">
      <a
        href="mailto:hello@greenstayhub.com"
        class="block p-5 rounded-2xl bg-white border border-gsh-green/[0.06] no-underline text-gsh-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/[0.06]"
      >
        <div class="font-heading text-base font-bold mb-1">📧 Email</div>
        <div class="font-body text-[15px] text-gsh-green">hello@greenstayhub.com</div>
      </a>

      <a
        href="https://linkedin.com/company/greenstayhub"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-5 rounded-2xl bg-white border border-gsh-green/[0.06] no-underline text-gsh-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/[0.06]"
      >
        <div class="font-heading text-base font-bold mb-1">💼 LinkedIn</div>
        <div class="font-body text-[15px] text-gsh-blue">GreenStay Hub</div>
      </a>
    </div>

    <p class="font-body text-sm text-gsh-light">
      Fuengirola, Costa del Sol, Spain
    </p>
  </div>
</section>
