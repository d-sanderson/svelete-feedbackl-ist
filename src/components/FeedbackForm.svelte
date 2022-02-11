<script>
  import { v4 as uuidv4 } from "uuid"
  import Card from "./Card.svelte"
  import Button from "./Button.svelte"
  import RatingSelect from "./RatingSelect.svelte"
  import { FeedbackStore } from "../stores"
  let text = ""
  let btnDisabled = false
  let min = 10
  let message
  let rating = 10

  const handleSubmit = () => {
    console.log(rating, text)
    if (text.trim().length > min) {
      const newFeedBack = {
        id: uuidv4(),
        text,
        rating: +rating,
      }
      FeedbackStore.update((currentFb) => [...currentFb, newFeedBack])
      // text = ''
    }
  }

  const handleSelect = (e) => (rating = e.detail)

  const handleInput = (e) => {
    text += e.detail
    if (text.trim().length <= min) {
      message = `text must be at least ${min} characters.`
    } else {
      message = null
      btnDisabled = false
    }
  }
  console.log(message)
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <!-- Rating Select -->
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <!-- TextInput, Button -->
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Tell us something that keeps you coming back"
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
