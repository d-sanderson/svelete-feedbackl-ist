<script>
  import { FeedbackStore } from "../stores"

  $: count = $FeedbackStore.length
  $: avg = $FeedbackStore.reduce((a, { rating }) => a + rating, 0) / count || 0

</script>

<div class="feedback-stats">
  <h4>{count === 0 ? 'No' : count} Reviews</h4>
  <h4>Ratings Average: {avg}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
