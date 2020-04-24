<script>
  import { getContext } from "svelte";
  import IoIosMusicalNotes from "svelte-icons/io/IoIosMusicalNotes.svelte";
  import TrackAdd from "./TrackAdd.svelte";
  import Button from "./Button.svelte";

  const { open } = getContext("simple-modal");

  export let number;
  export let title;
  export let info;
  export let song;
  export let onPlayState = () => {};
  export let playing;
  export let parts = [];
  export let download;
  export let collaborators = [];

  function onTogglePlay() {
    onPlayState(!playing);
  }

  function addTrack() {
    open(TrackAdd, { title });
  }
</script>

<style>
  section {
    grid-column: 1 / span 4;
  }

  @media screen and (min-width: 768px) {
    section {
      grid-column: 1 / span 4;
    }
  }

  header {
    display: grid;

    grid-template-areas:
      "subtitle external"
      "title external";
    grid-template-columns: 1fr min-content;
    grid-auto-rows: min-content;
    grid-column-gap: 20px;

    border-bottom: 1px solid var(--color-accent);

    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .subtitle {
    grid-area: subtitle;

    font-size: var(--font-size-small);
    color: var(--color-accent);

    line-height: 1;
  }

  .title {
    grid-area: title;

    font-size: var(--font-size-large);
    font-weight: bold;

    line-height: 1.2;
  }

  .external {
    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    grid-area: external;

    background-color: var(--color-accent);

    border-radius: var(--size-radii);

    overflow: hidden;
  }

  .external:before {
    position: absolute;

    top: 0;
    left: 0;

    content: "";

    width: 100%;
    height: 100%;

    background-image: var(--background-image);
    background-size: cover;

    transition-property: opacity;
    transition-duration: 0.5s;
  }

  .external span {
    position: relative;

    z-index: 2;

    display: block;

    width: 24px;
    height: 24px;

    color: white;

    opacity: 0;

    transition-property: opacity;
    transition-duration: 0.5s;
  }

  .external:hover:before,
  .external:focus:before {
    opacity: 0.25;
  }

  .external:hover span,
  .external:focus span {
    opacity: 1;
  }

  .actions {
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .right,
  .left {
    display: flex;

    flex-direction: column;
    align-items: flex-start;
  }

  .left :global(button),
  .right :global(button) {
    margin-bottom: 5px;
  }

  .right {
    text-align: right;
    align-items: flex-end;
  }

  footer {
    text-align: right;

    color: var(--color-light-text);
    font-size: var(--font-size-small);

    margin-top: 20px;
  }

  footer p {
    margin: 0;
  }

  h3 {
    font-size: var(--font-size-small);
    font-weight: normal;

    margin: 30px 0 0;
  }

  .collaborators {
    display: flex;

    flex-direction: column;

    align-items: flex-end;

    list-style: none;

    padding: 0;
    margin: 0;
  }

  .collaborators li {
    margin-bottom: 5px;
  }
</style>

<section>
  <header>
    <span class="subtitle">Track {number}</span>
    <span class="title">{title}</span>

    {#if song}
      <a
        class="external"
        href={song.link}
        target="_blank"
        rel="norefferer noopener"
        style={`--background-image: url('/thumbnails/${song.image}')`}>
        <span class="external-icon">
          <IoIosMusicalNotes />
        </span>
      </a>
    {/if}
  </header>
  <div class="actions">
    <div class="left">
      {#if parts.length}
        <Button
          text="Play"
          icon={playing ? 'pause' : 'play'}
          on:click={onTogglePlay} />
      {/if}
    </div>
    <div class="right">
      {#if parts.length}
        <Button text="Download" icon="download" to={download} />
      {/if}
      <Button text="Add instrument" icon="add" on:click={addTrack} />
    </div>
  </div>
  <footer>
    <p>{info}</p>

    {#if collaborators.length}
      <h3>Collaborators</h3>
      <ul class="collaborators">
        {#each collaborators as person}
          <li>
            <Button text={person.name} small to={person.link} />
          </li>
        {/each}
      </ul>
    {/if}
  </footer>
</section>
