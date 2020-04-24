<script>
  import IoIosVolumeHigh from "svelte-icons/io/IoIosVolumeHigh.svelte";
  import IoIosVolumeOff from "svelte-icons/io/IoIosVolumeOff.svelte";

  export let playing = false;
  export let parts = [];

  let isPlaying = false;
  let isLoaded = false;

  $: leadPart = parts.length ? parts[0] : false;
  $: playPercent = 0;

  $: {
    if (playing && !isPlaying) {
      playAll();
    } else if (!playing && isPlaying) {
      pauseAll();
    }
  }

  function allEvents(els, event, transform = v => v, timeout = false) {
    return new Promise((resolve, reject) => {
      const data = [];
      const indices = [];
      const callback = (value, index) => {
        if (!indices.includes(index)) {
          data.push(value);
          if (data.length === els.length) {
            resolve(data);
          }
        }
      };

      [...els].forEach((element, index) => {
        element.addEventListener(event, e => {
          callback(transform(e), index);
        });
      });

      if (timeout) {
        setTimeout(() => {
          reject("Timeout");
        }, timeout);
      }
    });
  }

  // function start() {
  //   const els = parts.map(p => p.element);

  //   allEvents(els, "canplaythrough", () => true).then(() => {

  //   });
  // }

  function loadAll() {
    if (isLoaded) {
      return Promise.resolve();
    }

    return Promise.all(parts.map(p => fetch(p.element.src))).then(() => {
      isLoaded = true;
    });
  }

  function playAll() {
    loadAll().then(() =>
      Promise.all(parts.map(p => p.element.play())).then(() => {
        isPlaying = true;

        setEvents();
      })
    );
  }

  function pauseAll() {
    Promise.all(parts.map(p => p.element.pause())).then(() => {
      isPlaying = false;

      unsetEvents();
    });
  }

  function setEvents() {
    leadPart.element.addEventListener("timeupdate", e => {
      playPercent = e.target.currentTime / e.target.duration;
    });
  }

  function unsetEvents() {}
</script>

<style>
  section {
    position: relative;

    grid-column: 1 / span 4;
    border-radius: var(--size-radii);
    background-color: var(--color-bg-grey);

    align-self: flex-start;
  }

  @media screen and (min-width: 768px) {
    section {
      grid-column: 5 / span 8;
    }
  }

  .track {
    position: relative;

    height: 80px;
  }

  .track img {
    width: 100%;
    height: 100%;

    /* object-fit: contain;
    object-position: center left; */
  }

  .label {
    position: absolute;

    display: flex;

    align-items: center;

    top: 50%;
    left: 20px;

    z-index: 2;

    padding: 4px;
    background-color: white;
    color: var(--color-accent);

    transform: translate3d(0, -50%, 0);

    cursor: pointer;
  }

  .label span {
    display: inline-block;
    width: 16px;
    height: 16px;

    margin-left: 5px;
  }

  .label:after {
    position: absolute;

    content: attr(data-text);

    top: 50%;
    left: 100%;

    color: var(--color-text);
    font-weight: bold;
    font-family: sans-serif;

    padding: 0 10px;

    transform: translate3d(0, -50%, 0);

    opacity: 0;

    transition: opacity 150ms;
  }

  .label:hover:after,
  .label:focus:after {
    opacity: 1;
  }

  .track.muted:before,
  .track.muted .label {
    opacity: 0.5;
  }

  .track.muted .label:after {
    opacity: 1;
  }

  .playhead {
    position: absolute;

    top: 0;

    background-color: var(--color-accent);

    width: 1px;
    height: 100%;
  }

  .empty {
    padding: 10px;
  }
</style>

<section>
  {#if parts.length !== 0}
    <div class="playhead" style={`left: ${playPercent * 100}%`} />
  {/if}

  {#each parts as part}
    <div class="track" class:muted={part.muted}>
      <audio
        src={part.file.audio}
        bind:this={part.element}
        muted={part.muted} />

      <img src={part.file.idle} alt="" />

      <span
        class="label"
        role="button"
        on:click={() => (part.muted = !part.muted)}
        data-text={part.muted ? 'Unmute' : 'Mute'}>
        {part.title}
        {#if part.muted}
          <span>
            <IoIosVolumeHigh />
          </span>
        {:else}
          <span>
            <IoIosVolumeOff />
          </span>
        {/if}
      </span>
    </div>
  {/each}

  {#if parts.length === 0}
    <div class="empty">No parts recorded yet</div>
  {/if}
</section>
