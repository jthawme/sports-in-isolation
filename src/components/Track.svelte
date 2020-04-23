<script>
  import { trackPlaying } from "../stores/player";
  import TrackInfo from "./TrackInfo.svelte";
  import TrackPlayer from "./TrackPlayer.svelte";

  export let number;
  export let title;
  export let info;
  export let song;
  export let parts = [];

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

    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
  }
</style>

<div class="wrapper">
  <TrackInfo
    {number}
    {title}
    {info}
    {song}
    {onPlayState}
    playing={$trackPlaying === number}
    {parts} />
  <TrackPlayer {parts} playing={$trackPlaying === number} />
</div>
