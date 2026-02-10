<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { data, children } = $props();
</script>

<Navbar lang={data.lang} />
{@render children()}
<Footer lang={data.lang} />
