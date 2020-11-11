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

