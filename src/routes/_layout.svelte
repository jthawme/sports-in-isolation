<script>
  import Modal from "svelte-simple-modal/src/Modal.svelte";
</script>

<style>
  header {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    padding: 50px 0;
  }

  h1 {
    display: flex;

    justify-content: space-between;
    font-weight: normal;

    grid-column: 1 / span 4;

    color: var(--color-accent);
    line-height: 0;

    font-size: 8vw;
  }

  .content {
    grid-column: 2 / span 3;
  }

  .content a {
    font-weight: bold;

    color: var(--color-text);
  }

  .content a:hover,
  .content a:focus {
    color: var(--color-accent);
  }

  footer {
    padding: 20px 0 50px;

    color: var(--color-light-text);
  }

  footer a {
    color: var(--color-accent);
  }

  @media screen and (min-width: 768px) {
    header {
      grid-template-columns: repeat(12, 1fr);
    }

    h1 {
      grid-column: 1 / span 7;
      font-size: 5vw;
    }

    .content {
      grid-column: 9 / span 4;
    }
  }
</style>

<Modal>
  <header>

    <h1>
      <span>S</span>
      <span>P</span>
      <span>O</span>
      <span>R</span>
      <span>T</span>
      <span>S</span>
    </h1>

    <section class="content">
      <p>
        An ode to one of my favourite bands of all time & an exercise for these
        weird isolation times. Trying to re-record the entire
        <a
          href="https://modernbaseballpa.bandcamp.com/album/sports"
          target="_blank"
          rel="noreferrer noopener">
          Sports
        </a>
        album by
        <a
          href="https://www.modernbaseballpa.com/"
          target="_blank"
          rel="noreferrer noopener">
          Modern Baseball
        </a>
        .
      </p>

      <p>
        Please feel free to help me, if you also want an activity to do while we
        wait for the world to heal itself. We can collectively recreate an
        amazing album. I am working through the guitar parts, but please any
        bassists / singers / drummers / better guitarists, reach out to add your
        parts. Don't worry about quality, its the doing thats important.
      </p>

      <p>
        Find me
        <a
          href="https://www.twitter.com/jthawme"
          target="_blank"
          rel="noreferrer noopener">
          @jthawme
        </a>
        or
        <a
          href="mailto:hi@jthaw.me?subject=Mobo"
          target="_blank"
          rel="noreferrer noopener">
          hi@jthaw.me
        </a>
      </p>
    </section>
  </header>

  <slot />

  <footer>
    <p>
      This by-no-means-flawless site was made by
      <a href="https://jthaw.me" target="_blank" rel="noreferrer noopener">
        jthaw.me.
      </a>
      Its about the music ya dingus
    </p>
  </footer>
</Modal>
