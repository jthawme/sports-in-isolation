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
  export let to;
</script>

<style>
  button,
  a {
    display: inline-flex;

    align-items: center;

    padding: 4px 0;
    margin: 0;

    border: 0;

    outline: 0;

    font-family: inherit;
    font-size: var(--font-size-regular);
    font-weight: bold;

    background-color: transparent;

    cursor: pointer;

    text-decoration: none;

    color: var(--color-text);
  }

  button:hover,
  button:focus,
  a:hover,
  a:focus {
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

{#if to}
  <a href={to} target="_blank" class:hasIcon={!!icon}>
    {#if icon}
      <span class="icon">
        <svelte:component this={getIconComponent(icon)} />
      </span>
    {/if}

    <span class="text">{text}</span>
  </a>
{:else}
  <button class:hasIcon={!!icon} on:click|preventDefault>
    {#if icon}
      <span class="icon">
        <svelte:component this={getIconComponent(icon)} />
      </span>
    {/if}

    <span class="text">{text}</span>
  </button>
{/if}
