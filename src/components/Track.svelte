<script>
  import { trackPlaying } from "../stores/player";
  import TrackInfo from "./TrackInfo.svelte";
  import TrackPlayer from "./TrackPlayer.svelte";

  export let number;
  export let title;
  export let info;
  export let song;
  export let download;
  export let parts = [];
  export let collaborators = [];

  function onPlayState(state) {
    if (state) {
      trackPlaying.set(number);
    } else {
      trackPlaying.set(false);
    }
  }
</script>

<style>
  .wrapper {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      grid-template-columns: repeat(12, 1fr);
    }
  }
</style>

<div class="wrapper">
  <TrackInfo
    {number}
    {title}
    {info}
    {song}
    {onPlayState}
    {download}
    playing={$trackPlaying === number}
    {parts}
    {collaborators} />
  <TrackPlayer {parts} playing={$trackPlaying === number} />
</div>
