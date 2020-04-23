<script context="module">
  import IoIosDownload from "svelte-icons/io/IoIosDownload.svelte";
  import IoIosAddCircle from "svelte-icons/io/IoIosAddCircle.svelte";
  import IoIosPlayCircle from "svelte-icons/io/IoIosPlayCircle.svelte";
  import IoIosPause from "svelte-icons/io/IoIosPause.svelte";
  import IoIosVolumeOff from "svelte-icons/io/IoIosVolumeOff.svelte";
  import IoIosVolumeHigh from "svelte-icons/io/IoIosVolumeHigh.svelte";

  const getIconComponent = name => {
    switch (name) {
      case "download":
        return IoIosDownload;
      case "add":
        return IoIosAddCircle;
      case "play":
        return IoIosPlayCircle;
      case "pause":
        return IoIosPause;
      case "mute":
        return IoIosVolumeOff;
      case "unmute":
        return IoIosVolumeHigh;
    }
  };
</script>

<script>
  export let icon;
  export let text;
</script>

<style>
  button {
    display: flex;

    align-items: center;

    padding: 4px 0;
    margin: 0;

    border: 0;

    outline: 0;

    font-family: inherit;
    font-size: var(--font-size-regular);
    font-weight: bold;

    cursor: pointer;
  }

  button:hover,
  button:focus {
    color: var(--color-accent);
    border-bottom: 1px solid var(--color-accent);

    padding-bottom: 3px;
  }

  .icon {
    width: 18px;
    height: 18px;

    margin-right: 10px;
  }

  span {
    display: inline-block;

    text-align: left;
  }
</style>

<button class:hasIcon={!!icon} on:click|preventDefault>
  {#if icon}
    <span class="icon">
      <svelte:component this={getIconComponent(icon)} />
    </span>
  {/if}

  <span class="text">{text}</span>
</button>
