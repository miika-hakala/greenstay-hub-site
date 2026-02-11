<script lang="ts">
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';

  let lang: string;
  $: lang = $page.params.lang || 'en';
</script>

<svelte:head>
  <title>{t(lang, 'about.meta_title')}</title>
  <meta name="description" content={t(lang, 'about.meta_description')} />
  <meta property="og:title" content={t(lang, 'about.meta_title')} />
  <meta property="og:description" content={t(lang, 'about.meta_og_description')} />
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
      {t(lang, 'about.hero_title_1')}<br />
      <span class="text-gsh-green">{t(lang, 'about.hero_title_2')}</span>
    </h1>
    <p class="font-body text-[clamp(17px,2vw,20px)] text-gsh-light leading-relaxed max-w-[500px] mx-auto">
      {t(lang, 'about.hero_subtitle')}
    </p>
  </div>
</section>

<!-- STORY -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[700px] mx-auto">
    <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-6">
      {t(lang, 'about.story_title')}
    </h2>
    <div class="space-y-5 font-body text-[16px] text-gsh-light leading-relaxed">
      <p>
        {t(lang, 'about.story_p1')}
      </p>
      <p>
        {t(lang, 'about.story_p2')}
      </p>
      <p>
        {t(lang, 'about.story_p3')}
      </p>
      <p>
        {t(lang, 'about.story_p4')}
      </p>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[900px] mx-auto">
    <div class="text-center mb-14">
      <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-3">
        {t(lang, 'about.values_title')}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        {
          icon: '🔄',
          title: t(lang, 'about.values_circularity_title'),
          desc: t(lang, 'about.values_circularity_desc')
        },
        {
          icon: '🚫',
          title: t(lang, 'about.values_greenwashing_title'),
          desc: t(lang, 'about.values_greenwashing_desc')
        },
        {
          icon: '🤝',
          title: t(lang, 'about.values_choice_title'),
          desc: t(lang, 'about.values_choice_desc')
        },
        {
          icon: '🇪🇺',
          title: t(lang, 'about.values_sourcing_title'),
          desc: t(lang, 'about.values_sourcing_desc')
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
      {t(lang, 'about.promise_title')}
    </h2>
    <p class="text-base opacity-80 tracking-[0.12em] uppercase font-medium mb-6">
      {t(lang, 'about.promise_subtitle')}
    </p>
    <p class="font-body text-[15px] opacity-70 leading-relaxed max-w-[480px] mx-auto">
      {t(lang, 'about.promise_desc')}
    </p>
  </div>
</section>

<!-- LOCATION -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-[700px] mx-auto text-center">
    <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-3">
      {t(lang, 'about.location_title')}
    </h2>
    <p class="font-body text-[17px] text-gsh-light mb-8 leading-relaxed">
      {t(lang, 'about.location_subtitle')}
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
        title={t(lang, 'about.location_map_title')}
      ></iframe>
    </div>

    <p class="font-body text-sm text-gsh-light">
      {t(lang, 'about.location_name')}
    </p>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-20 px-6 bg-gsh-off-white">
  <div class="max-w-[600px] mx-auto text-center">
    <h2 class="font-heading text-[clamp(28px,4vw,36px)] font-extrabold tracking-tight mb-4">
      {t(lang, 'about.contact_title')}
    </h2>
    <p class="font-body text-[17px] text-gsh-light mb-10 leading-relaxed">
      {t(lang, 'about.contact_subtitle')}
    </p>

    <div class="space-y-4 mb-10">
      <a
        href="mailto:hello@greenstayhub.com"
        class="block p-5 rounded-2xl bg-white border border-gsh-green/[0.06] no-underline text-gsh-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/[0.06]"
      >
        <div class="font-heading text-base font-bold mb-1">{t(lang, 'about.contact_email_label')}</div>
        <div class="font-body text-[15px] text-gsh-green">{t(lang, 'about.contact_email_value')}</div>
      </a>

      <a
        href="https://linkedin.com/company/greenstayhub"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-5 rounded-2xl bg-white border border-gsh-green/[0.06] no-underline text-gsh-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gsh-green/[0.06]"
      >
        <div class="font-heading text-base font-bold mb-1">{t(lang, 'about.contact_linkedin_label')}</div>
        <div class="font-body text-[15px] text-gsh-blue">{t(lang, 'about.contact_linkedin_value')}</div>
      </a>
    </div>

    <p class="font-body text-sm text-gsh-light">
      {t(lang, 'about.contact_location')}
    </p>
  </div>
</section>
