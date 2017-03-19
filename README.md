# [Resistance Calendar](#resistance-calendar)

> PRs welcome; seeking all roles

See our [contributing guide](CONTRIBUTING.md) for more information.

*The Resistance Calendar* aims to empower progressive activists by providing a massive central listing of upcoming events. Crowdsourced event submissions are curated by a team of volunteers, while events from allied organizations will be included automatically. Event filters make it easy for people to find events near them. Filtered notifications help people discover new events immediately.

This is a rebuild of the live website currently found [here](https://www.resistancecalendar.org/).

## [Table of Contents](#contens-anchor)

* [About the Resistance Calendar](#resistance-calendar)
* [Contributing Guide](CONTRIBUTING.md)
* [About the stack](#about-the-stack)
* [Getting Started](#getting-started)
  * Setup
  * Install
  * Test
  * Run
* [Deployment](#deploy-the-project)
* [Project hierarchy](#project-hierarchy)
  * Next.js (framework)
  * Features
  * CSS
  * `./pages`
  * `./static/`
  * `<head>`
  * Fetching data
* [License](#project-license)

## [About the stack](#about-the-stack)

This repository covers the ReactJS front-end.  The API can be found [here](https://github.com/ResistanceCalendar/resistance-calendar-api).

## [Getting Started](#getting-started)

### Setup

- [Fork the repository](https://help.github.com/articles/fork-a-repo/)
- Clone the project: `git clone git@github.com:ResistanceCalendar/resistance-calendar-frontend.git`
- Change into the directory: `cd resistance-calendar-frontend`

### Install the dependencies

```sh
npm install
```

### Run the test suite with linting

Uses [Jest](https://facebook.github.io/jest/)/[Enzyme](http://airbnb.io/enzyme/) and [semi-standard](https://github.com/Flet/semistandard)

```sh
npm run test
```

Note: If the following test files are passing, then Jest and Enzyme are working as intended:

- `\__tests__\TestComponent.js`

### Run the dev server

```sh
npm run dev
```

This project will run on [http://localhost:3000/](http://localhost:3000/).

## [Deploy the project](#deploy-the-project)
Make sure you are Login with [now](zeit.co/now) first

```sh
npm run build && now
```

## [Project hierarchy](#project-hierarchy)

This project utilizes Next.js for server-side rendering.  Additional documentation on Next.js can be found [here](https://zeit.co/blog/next).

>"Next.js gives you a server that extracts the state into an object and then injects the state back in the client. Beyond that it provides a method for 'smart containers', what they call pages that is called getInitialProps which is run both on server and client."

React + Redux works as traditionally expected.

### Features

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Code splitting; every `import` gets bundled and served with every page

### CSS

Next.js is opinionated towards utilizing the [`styled-jsx`](https://github.com/zeit/styled-jsx) library.

The module [`/css/Global`](css/Global.js) contains the global styling.

### `./pages`

Next.js provides server rendering and indexing of `./pages`

The file-system is the main API. Every .js file becomes a route that gets automatically processed and rendered.

### `./static/`

Used for static file serving (e.g.: images).

Next.js maps this folder to `/static/`.

### `<head>`

Exists as a built-in component from Next.js.  Located at [`/components/Head`](components/Head.js).

### Fetching data

`getInitialProps` is an `async` method that fetches anything that resolves to a plain Javascript object.  It then populates `props`.

This method is limited only to `pages`.  It cannot be used in child components.

## [License](#project-license)

[MIT](LICENSE)

---

[Return to top](#resistance-calendar)
