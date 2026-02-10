<script lang="ts">
  import { t, locales, type Locale } from '$lib/i18n';

  let { lang = 'en' }: { lang?: string } = $props();

  const langLabels: Record<string, string> = { en: 'English', es: 'Español', fi: 'Suomi' };
</script>

<footer class="pt-16 pb-8 px-6 bg-gsh-dark text-white">
  <div class="max-w-[1100px] mx-auto">
    <div class="flex flex-col md:flex-row justify-between flex-wrap gap-10 mb-12">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2.5 mb-3">
          <div
            class="w-8 h-8 rounded-lg bg-gradient-to-br from-gsh-green to-gsh-blue flex items-center justify-center text-white font-extrabold text-sm font-heading"
          >
            G
          </div>
          <span class="font-heading font-bold text-base">GreenStay Hub</span>
        </div>
        <p class="font-body text-sm opacity-50 max-w-[280px] leading-relaxed">
          {t(lang as Locale, 'footer.tagline')}<br />{t(lang as Locale, 'footer.location')}
        </p>
      </div>

      <!-- Columns -->
      <div>
        <div class="font-heading text-[13px] font-bold uppercase tracking-widest opacity-40 mb-4">{t(lang as Locale, 'footer.platform')}</div>
        <a
          href="/{lang}/hotels"
          class="block font-body text-sm opacity-70 hover:opacity-100 mb-2.5 no-underline text-white"
        >
          {t(lang as Locale, 'nav.hotels')}
        </a>
        <a
          href="/{lang}/guests"
          class="block font-body text-sm opacity-70 hover:opacity-100 mb-2.5 no-underline text-white"
        >
          {t(lang as Locale, 'nav.guests')}
        </a>
        <a
          href="/{lang}/investors"
          class="block font-body text-sm opacity-70 hover:opacity-100 mb-2.5 no-underline text-white"
        >
          {t(lang as Locale, 'nav.investors')}
        </a>
      </div>

      <div>
        <div class="font-heading text-[13px] font-bold uppercase tracking-widest opacity-40 mb-4">{t(lang as Locale, 'footer.company')}</div>
        <a
          href="/{lang}/about"
          class="block font-body text-sm opacity-70 hover:opacity-100 mb-2.5 no-underline text-white"
        >
          {t(lang as Locale, 'nav.about')}
        </a>
        <span class="block font-body text-sm opacity-70 mb-2.5 cursor-pointer">{t(lang as Locale, 'footer.contact')}</span>
        <span class="block font-body text-sm opacity-70 mb-2.5 cursor-pointer">{t(lang as Locale, 'footer.circular_promise')}</span>
      </div>

      <div>
        <div class="font-heading text-[13px] font-bold uppercase tracking-widest opacity-40 mb-4">{t(lang as Locale, 'footer.language')}</div>
        {#each locales as loc}
          <a
            href="/{loc}/"
            class="block font-body text-sm opacity-70 hover:opacity-100 mb-2.5 no-underline text-white"
          >
            {langLabels[loc]}
          </a>
        {/each}
      </div>
    </div>

    <div
      class="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 font-body text-[13px] opacity-40"
    >
      <span>{t(lang as Locale, 'footer.copyright')}</span>
      <em>{t(lang as Locale, 'footer.promise')}</em>
    </div>
  </div>
</footer>
