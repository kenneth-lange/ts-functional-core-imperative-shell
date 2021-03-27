# Functional Core, Imperative Shell in TypeScript
A simple demo example of the **Functional Core, Imperative Shell** pattern in TypeScript. For more details about this pattern, please check out my blog post, [The Functional Core, Imperative Shell Pattern](https://www.kennethlange.com/functional-core-imperative-shell/).

## Functional Core
The Functional Core (`core.ts`) implements the **Blog Post Workflow shown** in my blog post, [How to Model Workflows in REST APIs](https://www.kennethlange.com/how-to-model-workflows-in-rest-apis/), in a functional way using immutable values and pure functions.

Each state in the workflow is implemented as an immutable type and uses the tagged union pattern (with the `status` property) to easily differentiate between the different states. 

The reason for representing each state in the workflow as a type (rather than having one type with a status property) is to make illegal workflow transition impossible and to spot them at compile time rather than at runtime.

Each workflow transition is implemented as a pure function.
 
## Imperative Shell
The Imperative Shell (`shell.ts`) do the side-effectful stuff like writing to the console. In a more realistic implementation, this would also be where web services call, database interactions, and UI interactions would happen, as those are all non-functional activities by their very nature.

To run the example, just type `npm run dev`.