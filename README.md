# Demo Widget Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b247a02-11ea-476f-b9d9-f32588db1d5d/deploy-status)](https://app.netlify.com/sites/demo-widget2/deploys)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. `git clone` the repo
2. Ensure you have the prerequisites installed (see below)
3. Run `npm install`
4. Run `npm run build` to build/rebuild the `widget.js` file
5. Run the demo site with `npm run start`
6. Run [Storybook](https://storybook.js.org/) for local development with `npm run storybook`

Note: There isn't currently a local development dev environment outside of storybook for hot-reloading changes etc. This would be a high priority next step to add.

### Prerequisites

You need to have these things installed:

- [NodeJS](https://nodejs.org/en/)

## Running the tests

- TBC

## Built With

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/en/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## CI/CD

No CI/CD pipeline for testing has been implemented yet and there is no process for branching etc outside of pushing directly to `main`.

## Deployment

This repo deploys to [Netlify](https://www.netlify.com/) automatically on pushes to `main`.
The hosted production version of this repo can be found at [https://demo-widget2.netlify.app/](https://demo-widget2.netlify.app/).

## Demo

There are a number of live demo sites to see how the widget runs in different contexts:

- [https://demo-widget2.netlify.app/](https://demo-widget2.netlify.app/) is the most simple form adds the widget using the local `widget.js` file to a plain HTML page.
- [https://demo-widget2.netlify.app/hosted](https://demo-widget2.netlify.app/hosted) uses a link to the hosted js file rather than the local one (in production this points to the same file).
- [https://demo-widget2.netlify.app/demo1/](https://demo-widget2.netlify.app/demo1/) scroll down to the blogs section to see the widget being loaded in a plain HTML page with content.
- [https://demo-skeleton-ui.netlify.app/](https://demo-skeleton-ui.netlify.app/) to see the widget hosted on a fake blog site. Click on each of the two blogs posts to see that they pass the widget a topic id to load different topics.

## Versioning

There is no versioning in place at the moment.

# Client Integration Docs

Integrating as a client site (news site, blog etc) can be as simple as adding these two lines of code to your website:

```
<div id="widget" data-topic-id="0001"></div>
<script src="https://demo-widget2.netlify.app/widget.js"></script>
```

**Note:** For React etc the script tag will need to be added to the `<body>` of the base HTML document.

See here for instructions for [Next](https://nextjs.org/docs/advanced-features/custom-document).

## Params

There are two options for passing the reference to a specific topic:

- `data-topic-id`: The id of the topic to be loaded in the card.
- `data-topic-name`: The name of the topic to be loaded in the card.

**Note:** One of either of these is required - if both name and id are provided id is used

There is also a language property (yet to be implemented):

- `data-language`: The language to be used for returning the text in (see list of languages and format), this is optional and the default is English.

# Task Notes

## Different Options Considered

**Note:** For ease I've referred to the websites the widget would appear on as "clients"

### 1. Creating and exporting a component in various frameworks (React, Angular, Plain HTML) which could be downloaded from npm and a package and installed into the clients codebase

#### Pros

- More flexible to client needs/styles
- Could still be used and paired with another solution if required

#### Cons

- More effort for the client
- More effort on our side - we would need different exports or packages for different frameworks (react/angular) and to manage versions etc

### 2. Effectively creating a webpage (dynamically) for each topic with the component in and loading it through an iframe onto the clients site

- I did also have a play around building this option
  Here are the links to the unfinished repo [https://github.com/elliehamilton3/demo-widget](https://github.com/elliehamilton3/demo-widget) and hosted [https://demo-widget.netlify.app/](https://demo-widget.netlify.app/).

#### Pros

- Fast and easy to add for the client
- Very similar to the option below in a lot of ways
- Could fit better into an existing tech stack on our side possibly but personally I prefer having a specific webpack build which could run just as a script when needed/on changes
- Potentially faster at scale as you could cache the pages for each of the topics (even with the dynamic data) - not sure if the client would be able to preload that if its in an iframe

#### Cons

- Less flexible/a bit more complex in terms of configuration - could take a topic id or name fairly easily but more complex config (language etc) was a bit tricker and visual config would probably be best done through soem sort of dashboard
- Seemed a bit messier having it in an iframe and styling the iframe was particularly messy (there might be a cleaner way to do it than how I did it)
- No option for the client to override the styles themselves would have to be done in advance with config

### 3. Export the component as a single js script which can be imported onto the client site and then target a specific id on the page [This is the one I opted for]

#### Pros

- Highly flexible could be used in any tech stack
- Super quick and easy for the client
- Simple and a pretty clean solution overall
- We could even intentionally allow the clients tl override the styles if they want (that way they take on the workload not us)

#### Cons

- Could have some style leakage but could be fixed with an iframe (see below)
- Possibly less performant than option 2 as the topics are fetched on each component render (not sure if there is a way around this although the api could be cached) and I'm not sure what the prerending options are for the client might depend on what their tech stack is.

## Configuration Parameters

- Given the solution/design I went with I optimised highly for speed and ease of integration into other websites and flexibility across different platforms/frameworks.
- We might want to add other ways to source particular topics - keywords etc.
- In terms of visual configuration by clients I considered two main options for how we could approach this:

  1. Not allow clients to brand/customise it and add more branding to make it clear where it comes from, add a logo etc and make it clear that it is from a different website - really lean into this - almost more like ads.

  2. Allow some options for client optimisation (either though the properties in the snippet or through some sort of dashboard - if there is need/appetite for this). This is likely the option to be preferred by the websites it goes on as people are understandably protective of their brand and ensuring a more seamless customer experience. Having multiple brands appear on a website can be quite disruptive to the user experience (widgets in general can be quite problematic in that way if not carefully considered). However, that being said having a significant context change of going from one website to the next without clear signalling to the user can also be disruptive to the user experience (in the case where its branded to look like the clients website). I would want more data and insights ideally to make this decision - I think some conversations with those websites and some pretty lightweight user testing would really help with this.
     In the case where we did decide to brand it we would want to set a fairly fixed list of customisation options (inspired by someone like Intercom) and limit it to font, colours and icons ideally. This would also be formed in conversation with the clients requirements.

## Widget Evolution

- Improve the client documentation with demos/snippets for all of the main frameworks and test across these frameworks.
- It could be possible if there was demand/preference for it to also export the card component to be imported directly by clients - this could involve a fair amount of maintainence for the different import options so would need to be decided if it was worth it (this would enable high levels of customisation but could be manageable as the responsibility for that work wouldn't sit with us),
- Versioning to ensure no breaking changes.
- If we are concerned or have issues with styles leaking (this shouldn't happen from our side to the clients side because of css modules auto generating classnames but could happen the other way) then we or the client could load the component in an iframe - often considered bad but actually quite useful in this case.
- Do some research into popular widgets and see if there are any ideas etc that inspire the project
- Could explore other options depending on user needs which could be even more "in-context" to the task/goal that the user is completing (and user research from our side or the clients would be very helpful in this regard). Initially (when I was first reading the task and misinterpreted it) I had a mind-grape (slightly off-piste idea) of something more like grammarly which could scan the copy on the page and highlight any keywords/topics would could be expored by the user. E.g. For a blog post tagged as in the COVID-19 topic - it could scan the text of the blog post looking for key phrases such as "workforce impact" (from the subtopics) and highlight them to look like links/tooltips so that the user can explore the related topics in context.

## General App/Codebase Extensions

- Increase test coverage
- Build out storybook component config
- Move API fetch to a higher-order component and pass props in to Card component so that can be tested easier etc
- Add snapshot/visual regression testing in chromatic or similar (uses stories for this)
- Optimise `widget.js` bundle
- Break down Card component - move SVGs and interface etc out
- Tidy up card styles and responsiveness (some of this is handled by the client but we could handle some - font sizes for example)
- Possibly add loading state for component or add demos examples for while card contents is loading
- Fix code linting with prettier

## Assumptions

- I have overall adopted the approach of more of a proof of concept and trying a few different options rather than perfect production ready code
- I interpreted the task as emphasising architecture, design and thinking patterns and therefore I haven't prioritised making the widget pixel perfect and perfectly responsive etc (I didn't have the font so just replaced it with Roboto which is similar)
- On a similar note I haven't prioritised a seamless dev experience for the project which would need doing as the current flow isn't particularly efficient as there is no hot-reloading (noted above) although storybook meets most of what is needed.
- I also didn't prioritise optimising the bundle and components etc using things such as lazy loading images instead emphasising the overall design of the concept as these could easily be added/fixed later
- The size of the widget and most of how it is responsive is delagated to the parent container (the one created by the client) - this allows the client to lay it out/size as they see fit and the card just fills the space it is given
