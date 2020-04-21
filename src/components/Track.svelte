<script>
  import TrackInfo from "./TrackInfo.svelte";

  export let number;
  export let title;
  export let info;
  export let song;
</script>

<style>
  .wrapper {
    display: grid;

    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
  }

  .track {
    grid-column: 5 / span 8;
    border-radius: var(--size-radii);
    background-color: var(--color-bg-grey);

    align-self: flex-start;
  }
</style>

<div class="wrapper">
  <TrackInfo {number} {title} {info} {song} />
  <div class="track">hey</div>
</div>
