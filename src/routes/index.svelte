<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`tracks.json`);
    const tracks = await res.json();

    return { tracks };
  }
</script>

<script>
  import Track from "../components/Track.svelte";

  export let tracks;
</script>

<style>
  main > :global(div) {
    margin-bottom: 96px;
  }

  @media screen and (min-width: 768px) {
    main > :global(div) {
      margin-bottom: 64px;
    }
  }
</style>

<svelte:head>
  <title>Sports. in Isolation</title>
</svelte:head>

<main>
  {#each tracks as track}
    <Track {...track} />
  {/each}
</main>
