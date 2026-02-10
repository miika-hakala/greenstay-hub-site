<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<div class="min-h-screen bg-gsh-off-white font-body text-gsh-dark antialiased">
  {@render children()}
</div>
