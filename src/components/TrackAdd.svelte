<script>
  import Button from "./Button.svelte";

  export let title;
</script>

<style>
  div {
    padding: 20px;
  }
</style>

<div>
  <h2>Adding a track</h2>
  <p>
    Please send me an email with your track attached to it. Give it this title
    if you can too
    <b>'Mobo part – {title}'</b>
  </p>
  <p>Thanks a lot for your help!</p>
  <p>
    <Button
      text="Open Email"
      to={`mailto:hi@jthaw.me?subject=Mobo part – ${title}&body=Yo I've got a track to add`} />
  </p>
</div>
