<script>
  import FeedbackForm from "./components/FeedbackForm.svelte"
  import FeedbackList from "./components/FeedbackList.svelte"
  import FeedbackStats from "./components/FeedbackStats.svelte"


const addFeedback = (e) => {
	console.log(e)
  let newFeedBack = e.detail
	feedback = [...feedback, newFeedBack]
}
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>
