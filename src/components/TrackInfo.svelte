<script>
  import IoIosMusicalNotes from "svelte-icons/io/IoIosMusicalNotes.svelte";
  // import JSZip from "jszip";
  // import saveAs from "file-saver";

  import Button from "./Button.svelte";

  export let number;
  export let title;
  export let info;
  export let song;
  export let onPlayState = () => {};
  export let playing;
  export let parts = [];

  function onTogglePlay() {
    onPlayState(!playing);
  }

  function download() {
    // const zip = new JSZip();
    // const sounds = zip.folder("sounds");
    // Promise.all(
    //   parts
    //     .map(p => fetch(p.file.audio).then(r => r.blob()))
    //     .then(blobs => {
    //       blobs.forEach((blob, index) => {
    //         sounds.file(`${parts[index].title}.mp3`, blob);
    //         zip.generateAsync({ type: "blob" }).then(function(content) {
    //           // see FileSaver.js
    //           saveAs(content, `${number}-${title}.zip`);
    //         });
    //       });
    //     })
    // );
  }
</script>

<style>
  section {
    grid-column: 1 / span 4;
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
      <Button
        text="Play"
        icon={playing ? 'pause' : 'play'}
        on:click={onTogglePlay} />
    </div>
    <div class="right">
      {#if parts.length}
        <Button text="Download" icon="download" on:click={download} />
      {/if}
      <Button text="Add instrument" icon="add" />
    </div>
  </div>
  <footer>
    <p>{info}</p>
  </footer>
</section>
