<div align="center">
  <img height="200"
    src="https://raw.githubusercontent.com/jgthms/bulma/master/docs/images/bulma-banner.png">
  <h1>bulma-swatch-hook</h1>
</div>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier) [![CircleCI](https://img.shields.io/circleci/project/github/hipstersmoothie/bulma-swatch-hook/master.svg?style=for-the-badge)](https://circleci.com/gh/hipstersmoothie/bulma-swatch-hook) [![npm](https://img.shields.io/npm/v/bulma-swatch-hook.svg?style=for-the-badge)](https://www.npmjs.com/package/bulma-swatch-hook) [![npm](https://img.shields.io/npm/dt/bulma-swatch-hook.svg?style=for-the-badge)](https://www.npmjs.com/package/bulma-swatch-hook)

[Bulma swatches](https://jenil.github.io/bulmaswatch/) as a [react hook](https://reactjs.org/) and a component.

## Installation

```sh
yarn add bulma-swatch-hook
```

## Usage

You can either load the bulma swatches by directly using the hook or use the `BulmaApp` component.

### Hook

Arguments:

- swatch: any bulma swatch or 'random'. If nothing is provided `default` swatch used.

```js
import React from 'react';
import { useBulmaSwatch } from 'bulma-swatch-hook';

const MyApp = () => {
  useBulmaSwatch('nuclear');

  return (
    <article className="message is-link">
      <div className="message-header">
        <p>Link</p>
        <button className="delete" aria-label="delete" />
      </div>
    </article>
  );
};

const App = () => (
  <div className="App">
    <React.Suspense maxDuration={300} fallback={'loading...'}>
      <MyApp />
    </React.Suspense>
  </div>
);

export default App;
```

### Component

Props:

- random: boolean - use a random swatch
- swatch: any bulma swatch. If nothing is provided and not random `default` swatch used.

```js
import React from 'react';
import { BulmaApp } from 'bulma-swatch-hook';

const MyApp = () => (
  <BulmaApp>
    <article className="message is-link">
      <div className="message-header">
        <p>Link</p>
        <button className="delete" aria-label="delete" />
      </div>
    </article>
  </BulmaApp>
);

const App = () => (
  <div className="App">
    <React.Suspense maxDuration={300} fallback={'loading...'}>
      <MyApp />
    </React.Suspense>
  </div>
);

export default App;
```

## [Supported Swatches](https://jenil.github.io/bulmaswatch/)

- default
- cerulean
- cosmo
- cyborg
- darkly
- flatly
- journal
- litera
- lumen
- lux
- materia
- minty
- nuclear
- pulse
- random
- sandstone
- simplex
- slate
- solar
- spacelab
- superhero
- united
- yeti
