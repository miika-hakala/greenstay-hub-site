<script lang="ts">
  import { rentalCategories, essentialCategories, bundles } from '$lib/data/products';

  let activeTab = $state<'rentals' | 'essentials'>('rentals');
</script>

<svelte:head>
  <title>For Guests — GreenStay Hub</title>
  <meta
    name="description"
    content="Quality EU-sourced products for your hotel stay. Rent what you need, buy essentials to keep. Fair prices, responsible model."
  />
</svelte:head>

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
      For Hotel Guests
    </div>
    <h1 class="font-heading text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-5">
      Everything you need<br />
      <span class="text-gsh-blue">for your stay.</span>
    </h1>
    <p class="font-body text-[clamp(16px,2vw,19px)] text-gsh-light leading-relaxed max-w-[480px] mx-auto">
      Rent gear for your trip. Buy essentials to keep. Find us in the lobby or on your floor. Quality EU-sourced
      products at fair prices.
    </p>
  </div>
</section>

<!-- HOW IT WORKS (compact) -->
<section class="py-12 px-6 bg-white border-b border-gsh-green/[0.06]">
  <div class="max-w-[800px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 rounded-2xl bg-gsh-green/[0.04] border border-gsh-green/[0.06]">
        <h3 class="font-heading text-base font-bold text-gsh-green mb-2">🔄 Rentals</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed">
          Borrow for the duration of your stay. <strong class="text-gsh-dark">Return at checkout</strong> — via the
          return slot or front desk. If you prefer to keep it, a replacement fee is charged to your room. No questions
          asked.
        </p>
      </div>
      <div class="p-6 rounded-2xl bg-gsh-blue/[0.04] border border-gsh-blue/[0.06]">
        <h3 class="font-heading text-base font-bold text-gsh-blue mb-2">🛍️ Essentials</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed">
          Purchase and <strong class="text-gsh-dark">keep</strong>. Yours to take home. If you'd like, drop the product
          or packaging in the return slot — we'll recycle it responsibly. Completely optional.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- PRODUCTS -->
<section class="py-16 px-6 bg-white">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center mb-10">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">Products</h2>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center gap-2 mb-10">
      <button
        class="px-6 py-2.5 rounded-full font-heading text-sm font-semibold transition-all {activeTab === 'rentals'
          ? 'bg-gsh-green text-white'
          : 'bg-gsh-off-white text-gsh-dark hover:bg-gsh-green/10'}"
        on:click={() => (activeTab = 'rentals')}
      >
        🔄 Rentals ({rentalCategories.reduce((sum, c) => sum + c.products.length, 0)})
      </button>
      <button
        class="px-6 py-2.5 rounded-full font-heading text-sm font-semibold transition-all {activeTab === 'essentials'
          ? 'bg-gsh-blue text-white'
          : 'bg-gsh-off-white text-gsh-dark hover:bg-gsh-blue/10'}"
        on:click={() => (activeTab = 'essentials')}
      >
        🛍️ Essentials ({essentialCategories.reduce((sum, c) => sum + c.products.length, 0)})
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
                    <div class="font-body text-xs text-gsh-light mt-1">EU-sourced · Rental</div>
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
                    <div class="font-body text-xs text-gsh-light mt-1">{product.origin} · Yours to keep</div>
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
      All prices are indicative. Product availability may vary by season.
    </p>
  </div>
</section>

<!-- BUNDLES -->
<section class="py-16 px-6 bg-gsh-off-white">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-10">
      <h2 class="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3">Bundles</h2>
      <p class="font-body text-[17px] text-gsh-light">Save money with pre-configured combinations.</p>
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
                <span class="text-xs text-gsh-light">({item.type === 'rental' ? 'rental' : 'keep'})</span>
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
      Returns made simple
    </h2>
    <p class="font-body text-[17px] text-gsh-light mb-10">
      Find the return slot next to the hub in the lobby or on your floor, or drop items at the front desk.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
      <div class="p-6 rounded-2xl bg-gsh-green/[0.04] border border-gsh-green/[0.06]">
        <h3 class="font-heading text-base font-bold text-gsh-green mb-3">Rented something?</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">
          Return it at checkout via the return slot or front desk. That's all — no deposit needed.
        </p>
        <p class="font-body text-sm text-gsh-dark">
          Prefer to keep it? A replacement fee is charged to your room. You keep the product, no follow-up.
        </p>
      </div>
      <div class="p-6 rounded-2xl bg-gsh-blue/[0.04] border border-gsh-blue/[0.06]">
        <h3 class="font-heading text-base font-bold text-gsh-blue mb-3">Bought something?</h3>
        <p class="font-body text-[15px] text-gsh-light leading-relaxed mb-3">It's yours. Take it home, enjoy it.</p>
        <p class="font-body text-sm text-gsh-dark">
          If you'd like, drop the product or packaging in the return slot. We'll recycle or donate it responsibly.
          Completely optional, completely appreciated.
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
      "What we sell, we take care of."
    </h2>
    <p class="text-sm opacity-70 tracking-[0.12em] uppercase font-medium">
      Reuse · Recycle · Donate responsibly
    </p>
  </div>
</section>
