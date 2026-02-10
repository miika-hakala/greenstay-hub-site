<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { data, children } = $props();
</script>

<svelte:head>
  {@html `<script>document.documentElement.lang = "${data.lang}";</script>`}
</svelte:head>

<Navbar lang={data.lang} />
{@render children()}
<Footer lang={data.lang} />
