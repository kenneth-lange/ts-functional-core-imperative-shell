import { createDraft, sendToReview } from './core';

// Assuming we receive some data from a UI, or another side-effectful device,
// we can call the functional core to execute domain logic in a functional way.
const draft = createDraft({
    title: "7 Things You Didn't Know about Star Wars",
    body: "George Lucas accidentally revealed that..."
});

// draft.status = 'published'; <-- Can't do that as the draft value is immutable.

// After we got the response from the functional core, we can do imperative,
// side-effectful stuff, like displaying the results from the functional core.
console.log("Draft: ", draft);

// We can use the functional core to execute more domain logic, such as making 
// a workflow transition.

// const publishedArticle = approveArticle(draft); <-- Illegal state transition! 
const articleInReview = sendToReview(draft);

// Perform more imperative actions with the value returned by the functional core.
console.log("Review: ", articleInReview);