import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
      id: 1,
      rating: 10,
      text: 'svelte has less boilerplate than react.',
    },
    {
      id: 2,
      rating: 9,
      text: 'svelte is cool',
    },
    {
      id: 3,
      rating: 2,
      text: 'animations are easy to add and don\'t bloat the application.',
    },
  ])