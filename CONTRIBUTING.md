# Contributing

> Help Wanted: Inquire Within

## Main Technologies

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)

## Where to start

- All current UX guidelines and opportunities can be found on our [Design repository](https://github.com/ResistanceCalendar/design/issues)
  - Additional mock-ups can be viewed on our [Trello board](https://trello.com/b/GoYDw1UZ/rc-mvp-ux)
- Dozens of ReactJS components are just waiting to be built by you!
- [Our MVP document](https://docs.google.com/document/d/1XGZmkcMDXteGJqf9dL0KY7_OUEmkIVleN7OAgWDWM2o/edit#heading=h.1p4vckokrgmv)

## Git Workflow

[An explanation for the Git workflow.](https://gist.github.com/celsom3/0168a96128c940a369f41f91f41b92bc)

PRs are welcome.  For anything greater than a minor fix, please communicate first on what you would like to work on.

(This is to help ensure there are no duplicated or wasted efforts).

## Ways to communicate

- [Submit or comment on an issue](https://github.com/ResistanceCalendar/resistance-calendar-frontend/issues), or...
- Submit or comment to on our [Design repository](https://github.com/ResistanceCalendar/design/issues), or...
- Send a message to [Incite Democracy](https://github.com/InciteDemocracy)

[Return to README](README.md)

## Directory Structure

```
resistance-calendar-frontend
├── dist                               # production build
├── src
|	├── api                            # api helper scripts
|	├── components                     # react components (see more below)
|	├── services
|	├── static                         # images + manifest
|	├── style                          # sass stylesheets
|	|	├── base                       # base, reset and vendor overwrites
|	|	├── utils                      # mixins and variables
|	|	└── global.sass                # entry point for style imports
|	├── utils                          # client-side helper scripts
|	├── config.js
|	├── index.html
|	├── index.js
|	└── routes.js                      # react router v4 config
├── webpack
└── package.json
```

### Notable Conventions

#### Components

- Modules that represent React Components are capitalized (e.g. `PrivacyPolicy.js`)
- Test files are placed in the same folder as the React Component (e.g. `PrivacyPolicy.test.js`)
- Component-level styles are also placed in the same folder as the React Component (e.g. `PrivacyPolicy.sass`)
- `components/index.js` is the entry-point that imports all the component files

```
components
├── PrivacyPolicy
|	├── PrivacyPolicy.js
|	├── PrivacyPolicy.sass
|	└── PrivacyPolicy.test.js
├── ResistanceLogo
|	├── ResistanceLogo.js
|	├── ResistanceLogo.sass
|	└── ResistanceLogo.test.js
...
└── index.js
```

#### Styling

Component-level styling uses Sass, SCSS, or CSS with [CSS Modules](https://github.com/css-modules/css-modules).  Global styles are placed in `src/style`'s subdirectories, and component-level styles are placed in the respective component's folder.

Note: the CSS Module property `camelCase` is enabled, meaning styling classes defined as, say, `.test-name` will be referenced inside of a component file as `stylesObj.testName`.  This allows us to follow CSS naming conventions while avoiding bracket notation in Javascript.

#### Build

- Webpack v2
- Babel to compile ES2016+
- (more info needed)

## Dependencies

*Last Updated 05/08/2017*

- **axios** is a promise-based HTTP client

- **babel-polyfill** is a transpilation tool that covers ground that the normal `babel-core` transformations cannot. (E.g. `const` and `let` can be transformed into locally-scoped `var` declarations, but `Promise` cannot be transform into a ES5 equivalent. For Babel to enable `Promise`, it must load the appropriate polyfills into the global scope. To do this, developers should `require` or `import` the `babel-polyfill`  in the `index.js` of their app. This way the polyfills will get loaded as global variables before everything else)

- **enzyme** is a React testing utility

- **lodash** is a Javascript utility library, similar to `underscore` but generally considered to be better than it

- **moment** is a date library for parsing, manipulating, validating, and formatting dates

- **react** is React.

- **react-datepicker** is a simple and reusable datepicker component. It depends on `react` and `moment`

- **react-dom** is the glue that ties together `react` and the `DOM`. `react-dom` was factored out of `react` to allow the `react` library to render to different environments, such as `react-native`, `electron`, and `react-canvas`. In most web apps, `react-dom` is used for exactly one thing: `ReactDOM.render()`

- **react-icons** is a bundle of commonly used icons in the form of components. Typically, you'd do something like `import FaBeer from 'react-icons/fa/beer` and then `return ( <h3> Let's go for a <FaBeer/></h3> )`

- **react-router-dom** is a collection of `DOM` bindings for `react-router`. `react-router-dom` is built on top of `react-router` so this library can do everything that `react-router` can.

- **serve** is a static file serving and directory listing

- **autoprefixer** is a `postcss` plugin that parses and adds vendor prefixes to CSS based on *Can I Use*. It is recommended by Google and used by Twitter. You can drop it into `webpack` or `grunt` or other build tools

- **babel-core** is a transpilation tool. `babel-core` is the transformation part that deals with syntax compilation

- **babel-jest** is a plugin included in `jest`. If you're using `jest-cli`, no configuration is necessary. `jest-cli` will invoke `babel-jest` for you.

- **babel-loader** is a `webpack` loader that invokes `babel-core` for transformations.

- **babel-plugin-lodash** adds more transforms to `babel`. It implements cherry-picking for you. (Cherry-picking is loading only the functions you use, instead of the whole module.) In other words, you can write the shorter, more convenient version of:

  ```javascript
  import _ from 'lodash'

  _.add(1, 2)
  _.map(data, myDataMapper)
  _.filter(persons, { name: 'Joe' })
  ```

  and get the same performance benefits of:

  ```javascript
  import _add from 'lodash/add'
  import _map from 'lodash/map'
  import _filter from 'lodash/filter'

  _add(1, 2)
  _map(data, myDataMapper)
  _filter(persons, { name: 'Joe' })
  ```

  since `babel-plugin-lodash` will transform the top version into the bottom version.

- **babel-preset-env. babel-preset-react, and babel-preset-stage-1** are collections of default transformations developers may need. Typically, you'd use `babel-preset-env` to target specific environments (or specific browsers in web development), and you'd use `babel-preset-react` to load all the appropriate transformers for `react`.

- **copy-webpack-plugin** is a small, unknown module. It does a simple thing, which is to copy designated files to the build folder.

- **css-loader** is a `webpack` module loader that resolves  `@import` and `url()` into `import/require()` calls.

- **eslint** is a linter. It has various configs and plugins associated with it.

- **extract-text-webpack-plugin** extracts the CSS code out of your `webpack` bundle into  separate file. This can increase performance for large bundles as browsers can now request the CSS bundle and the JS bundle in parallel. Note that `ExtractTextPlugin` needs to be used in two places inside the config files: once as a loader, and another time as a plugin

- **file-loader** generates content-based hash names for files. This prevents clients from accidentally using older versions of the file, either due to browser caches or CDN caches. Think of this as like `copy-webpack-plugin` but with hashes.

- **html-webpack-plugin** generates an entry-point HTML file, typically based off a developer-defined tempalte

- **jest** is a test runner

- **jsdom** is a Javascript emulation of the HTML and DOM specifications. It's useful for testing

- **node-sass** is not located inside any of the files besides `package.json` and `yarn.lock`. It's a library to natively compile `.scss` and `.sass` syntax into `.css` syntax

- **onchange** is a CLI tool that uses glob patterns to watch sets of files and trigger specified commands whenever a change happens. (E.g. `"lint:watch": "onchange ./src --initial -- yarn run lint"`)

- **postcss-loader** is a `webpack` loader to automate `postcss` tasks. `postcss` is not useful in and of itself. It has to be combined with a plugin. `postcss` is a program that enables an ecosystem of plugin tools that transform CSS. It can be a pre-processor or a post-processor depending on the plugin. This projects (like many others) uses `postcss` just to enable `autoprefixer`.

- **react-addons-test-utils** is similar to Enzyme. It's a React testing utility. Now you can find it by `import ReactTestUtils from 'react-dom/test-utils` Note that this module is deprecated. It may need upgrading some day.

- **rimraf** is `rm -rf` but with options. It's not used very much here.

- **sass-loader** is how `webpack` transforms `.sass` files into `.css` code

- **sinon** is a test helper library with standalone spies, stubs, and mocks

- **sinon-stub-promise** is a `sinon` helper library that works with promises

- **style-loader** is a `webpack` loader that injects the CSS files as a style tag inside the HTML file. It's usually inefficient to do so. But it's useful as a fallback in case `extract-text-webpack-plugin` doesn't work as a `loader`

- **url-loader** is similar to `file-loader` but returns a Data URL if below a certain size. This is used for performance

- **webpack-merge** is used for advanced production build processes. More info [at the official website](https://webpack.js.org/guides/production-build/).
