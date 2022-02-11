<script>
  import { onMount, onDestroy } from "svelte"
  import { fade, scale } from "svelte/transition"
  import FeedbackItem from "./FeedbackItem.svelte"
  import { FeedbackStore } from "../stores"

//   let feedback = []
//   const unsubscribe = FeedbackStore.subscribe((data) => {
//     feedback = data
//   })

//   onMount(() => {
//     console.log("called when mounted")
//   })
//   onDestroy(() => {
//     //disconnect from store
//     unsubscribe()
//     console.log("called when destroyed")
//   })


</script>

<!-- $FeedbackStore is shorthand of what is done above. -->
{#each $FeedbackStore as item (item.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem {item} />
  </div>
{/each}
