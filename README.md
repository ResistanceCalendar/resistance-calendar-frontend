# [Resistance Calendar](#resistance-calendar)
[![Build Status](https://travis-ci.org/ResistanceCalendar/resistance-calendar-frontend.svg?branch=master)](https://travis-ci.org/ResistanceCalendar/resistance-calendar-frontend) [![Code Climate](https://codeclimate.com/github/ResistanceCalendar/resistance-calendar-frontend/badges/gpa.svg)](https://codeclimate.com/github/ResistanceCalendar/resistance-calendar-frontend) [![Test Coverage](https://codeclimate.com/github/ResistanceCalendar/resistance-calendar-frontend/badges/coverage.svg)](https://codeclimate.com/github/ResistanceCalendar/resistance-calendar-frontend/coverage)

See our [contributing guide](CONTRIBUTING.md) for more information.

*The Resistance Calendar* aims to empower progressive activists by providing a massive central listing of upcoming events. Crowdsourced event submissions are curated by a team of volunteers, while events from allied organizations will be included automatically. Event filters make it easy for people to find events near them. Filtered notifications help people discover new events immediately.

This is a rebuild of the live website currently found [here](https://www.resistancecalendar.org/).

## [Table of Contents](#contents-anchor)

* [About the stack](#about-the-stack)
* [Getting Started](#getting-started)
* [Contributing Guide](#contributing-guide)
* [Project License](#project-license)

## [About the stack](#about-the-stack)

This repository covers the ReactJS front-end.  The API can be found at [ResistanceCalendar/resistance-calendar-api](https://github.com/ResistanceCalendar/resistance-calendar-api).

## [Getting Started](#getting-started)

### Setup

- [Fork the repository](https://help.github.com/articles/fork-a-repo/)
- Clone the project: `git clone git@github.com:ResistanceCalendar/resistance-calendar-frontend.git`
- Change into the directory: `cd resistance-calendar-frontend`

### Install the dependencies

```sh
yarn
```
Note: Can also use `npm` instead of `yarn` for these commands.  Here's [an article](https://medium.com/@nikjohn/facebooks-yarn-vs-npm-is-yarn-really-better-1890b3ea6515#.mh12h39zm) comparing the two package managers.

### Run the test suite

Uses [Jest](https://facebook.github.io/jest/)/[Enzyme](http://airbnb.io/enzyme/)

```sh
yarn run test
```
```sh
yarn run test:watch
```

### Run the linter

Uses [Airbnb's eslint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with some modifications

```sh
yarn run lint
```
```sh
yarn run lint:watch
```
```sh
yarn run lint:watch-npm
```

### Run the dev server

```sh
yarn run dev
```

This project will run on [http://localhost:5050/](http://localhost:5050/)

### Build the project

```sh
yarn run build
```

## [Contributing Guide](#contributing-guide)

See our [contributing guide](CONTRIBUTING.md) for more information.

## [Project License](#project-license)

[MIT](LICENSE)

---

[Return to top](#resistance-calendar)
