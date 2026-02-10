<script lang="ts">
  import { onMount } from 'svelte';

  let { target, suffix = '' }: { target: number; suffix?: string } = $props();
  let count = $state(0);
  let el: HTMLSpanElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            count = Math.floor(progress * target);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<span bind:this={el}>{count}{suffix}</span>
