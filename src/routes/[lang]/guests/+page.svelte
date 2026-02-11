<script lang="ts">
  import { rentalCategories, essentialCategories, bundles } from '$lib/data/products';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';

  let activeTab = $state<'rentals' | 'essentials'>('rentals');
  let lang = $derived($page.params.lang || 'en');
</script>

<svelte:head>
  <title>{t(lang, 'guests.meta_title')}</title>
  <meta name="description" content={t(lang, 'guests.meta_description')} />
  <meta property="og:title" content={t(lang, 'guests.meta_title')} />
  <meta property="og:description" content={t(lang, 'guests.meta_description')} />
  <meta property="og:url" content="https://greenstayhub.com/{$page.params.lang}/guests" />
  <link rel="canonical" href="https://greenstayhub.com/{$page.params.lang}/guests" />
</svelte:head>

<main>
<!-- HERO -->
<section
  class="flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-12 relative overflow-hidden"
  style="background: linear-gradient(170deg, #F4F7F5 0%, #e8f0ec 50%, rgba(46,139,192,0.06) 100%)"
>
  <div class="absolute -top-16 -right-16 w-[250px] h-[250px] rounded-full bg-gsh-blue/[0.04]"></div>

  <div class="relative z-10 max-w-[600px]">
    <div
      class="inline-block px-4 py-1.5 rounded-full bg-gsh-blue/[0.06] text-gsh-blue text-[13px] font-semibold font-heading tracking-[0.05em] uppercase mb-6"
    >
      {t(lang, 'guests.hero_badge')}
    </div>
    <h1 class="font-heading text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      {t(lang, 'guests.hero_title_1')}<br />
      <span class="text-gsh-blue">{t(lang, 'guests.hero_title_2')}</span>
    </h1>
    <p class="font-body text-[clamp(16px,2vw,19px)] text-gsh-light leading-relaxed max-w-[480px] mx-auto">
      {t(lang, 'guests.hero_desc')}
    </p>
  </div>
</section>

<!-- HOW IT WORKS (compact) -->
<section class="py-12 px-6 bg-white border-b border-gsh-green/[0.06]">
  <div class="max-w-[800px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 rounded-2xl bg-gsh-green/[0.04] border border-gsh-green/[0.06]">
        <h2 class="font-heading text-base font-bold text-gsh-green mb-2">🔄 {t(lang, 'guests.rentals_badge')}</h2>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed">
          {t(lang, 'guests.rentals_desc')}
        </p>
      </div>
      <div class="p-6 rounded-2xl bg-gsh-blue/[0.04] border border-gsh-blue/[0.06]">
        <h2 class="font-heading text-base font-bold text-gsh-blue mb-2">🛍️ {t(lang, 'guests.essentials_badge')}</h2>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed">
          {t(lang, 'guests.essentials_desc')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- PRODUCTS -->
<section class="py-16 px-6 bg-white">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center mb-10">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">{t(lang, 'guests.products_title')}</h2>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center gap-2 mb-10">
      <button
        class="px-6 py-2.5 rounded-full font-heading text-sm font-semibold transition-all {activeTab === 'rentals'
          ? 'bg-gsh-green text-white'
          : 'bg-gsh-off-white text-gsh-dark hover:bg-gsh-green/10'}"
        onclick={() => (activeTab = 'rentals')}
      >
        🔄 {t(lang, 'guests.tab_rentals')} ({rentalCategories.reduce((sum, c) => sum + c.products.length, 0)})
      </button>
      <button
        class="px-6 py-2.5 rounded-full font-heading text-sm font-semibold transition-all {activeTab === 'essentials'
          ? 'bg-gsh-blue text-white'
          : 'bg-gsh-off-white text-gsh-dark hover:bg-gsh-blue/10'}"
        onclick={() => (activeTab = 'essentials')}
      >
        🛍️ {t(lang, 'guests.tab_essentials')} ({essentialCategories.reduce((sum, c) => sum + c.products.length, 0)})
      </button>
    </div>

    <!-- Rental products -->
    {#if activeTab === 'rentals'}
      <div class="space-y-8">
        {#each rentalCategories as category}
          <div>
            <h3 class="font-heading text-lg font-bold mb-4">
              <span class="mr-2">{category.icon}</span>{category.name}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {#each category.products as product}
                <div
                  class="p-4 rounded-xl bg-gsh-off-white border border-gsh-green/[0.04] flex justify-between items-start gap-3"
                >
                  <div>
                    <div class="font-body text-[15px] font-medium text-gsh-dark">{product.name}</div>
                    <div class="font-body text-xs text-gsh-light mt-1">{t(lang, 'guests.label_eu_sourced')} · {t(lang, 'guests.label_rental')}</div>
                  </div>
                  <div class="font-heading text-sm font-bold text-gsh-green whitespace-nowrap">{product.price}</div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/if}

    <!-- Essential products -->
    {#if activeTab === 'essentials'}
      <div class="space-y-8">
        {#each essentialCategories as category}
          <div>
            <h3 class="font-heading text-lg font-bold mb-4">
              <span class="mr-2">{category.icon}</span>{category.name}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {#each category.products as product}
                <div
                  class="p-4 rounded-xl bg-gsh-off-white border border-gsh-blue/[0.04] flex justify-between items-start gap-3"
                >
                  <div>
                    <div class="font-body text-[15px] font-medium text-gsh-dark">{product.name}</div>
                    <div class="font-body text-xs text-gsh-light mt-1">{product.origin} · {t(lang, 'guests.label_yours_to_keep')}</div>
                  </div>
                  <div class="font-heading text-sm font-bold text-gsh-blue whitespace-nowrap">{product.price}</div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/if}

    <p class="text-center font-body text-sm text-gsh-light mt-8">
      {t(lang, 'guests.products_note')}
    </p>
  </div>
</section>

<!-- BUNDLES -->
<section class="py-16 px-6 bg-gsh-off-white">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-10">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">{t(lang, 'guests.bundles_title')}</h2>
      <p class="font-body text-[17px] text-gsh-light">{t(lang, 'guests.bundles_subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each bundles as bundle}
        <div
          class="p-6 rounded-2xl bg-white border border-gsh-green/[0.04] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gsh-green/[0.06]"
        >
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-heading text-lg font-bold">{bundle.name}</h3>
            <div class="flex flex-col items-end">
              <span class="font-heading text-xl font-extrabold text-gsh-green">{bundle.price}</span>
              <span class="font-body text-xs text-gsh-blue font-medium">{bundle.saving}</span>
            </div>
          </div>
          <p class="font-body text-sm text-gsh-light mb-4">{bundle.description}</p>
          <div class="flex flex-col gap-1.5">
            {#each bundle.items as item}
              <div class="flex items-center gap-2 font-body text-sm">
                <span class="text-xs {item.type === 'rental' ? 'text-gsh-green' : 'text-gsh-blue'}">
                  {item.type === 'rental' ? '🔄' : '🛍️'}
                </span>
                <span class="text-gsh-dark">{item.name}</span>
                <span class="text-xs text-gsh-light">({item.type === 'rental' ? t(lang, 'guests.label_rental_bundle') : t(lang, 'guests.label_keep_bundle')})</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- RETURN INFO -->
<section class="py-16 px-6 bg-white">
  <div class="max-w-[700px] mx-auto text-center">
    <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">
      {t(lang, 'guests.returns_title')}
    </h2>
    <p class="font-body text-[17px] text-gsh-light mb-10">
      {t(lang, 'guests.returns_desc')}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
      <div class="p-6 rounded-2xl bg-gsh-green/[0.04] border border-gsh-green/[0.06]">
        <h3 class="font-heading text-base font-bold text-gsh-green mb-3">{t(lang, 'guests.returns_rentals_title')}</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed">
          {t(lang, 'guests.returns_rentals_desc')}
        </p>
      </div>
      <div class="p-6 rounded-2xl bg-gsh-blue/[0.04] border border-gsh-blue/[0.06]">
        <h3 class="font-heading text-base font-bold text-gsh-blue mb-3">{t(lang, 'guests.returns_essentials_title')}</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed">
          {t(lang, 'guests.returns_essentials_desc')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CIRCULAR PROMISE (compact) -->
<section
  class="py-14 px-6 text-center text-white"
  style="background: linear-gradient(160deg, #1F7A63 0%, #16614e 60%, rgba(46,139,192,0.56) 100%)"
>
  <div class="max-w-[500px] mx-auto">
    <h2 class="font-heading text-2xl font-extrabold tracking-tight mb-2">
      "{t(lang, 'guests.promise_title')}"
    </h2>
    <p class="text-sm opacity-70 tracking-[0.12em] uppercase font-medium">
      {t(lang, 'landing.promise_sub')}
    </p>
  </div>
</section>
</main>
