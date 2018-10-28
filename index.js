import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const resolved = new Map();

const useStylesheet = ({ href, media = 'all' }) => {
  const sheets = document.getElementsByClassName('bulma-swatch');
  const currentSheet = sheets[sheets.length - 1];

  // Target styleSheet is the last on so it has loaded.
  if (currentSheet && currentSheet.href === href) {
    return;
  }

  // Style has already loaded so we can just add it to the end
  if (resolved.has(href)) {
    const link = resolved.get(href);
    return document.body.appendChild(link);
  }

  throw new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    link.className = 'bulma-swatch';
    resolved.set(href, link);

    const removeListeners = () => {
      link.removeEventListener('load', load);
      link.removeEventListener('error', error);
    };
    const error = () => {
      removeListeners();
      reject();
    };
    const load = () => {
      removeListeners();
      resolve();
    };

    link.addEventListener('error', error);
    link.addEventListener('load', load);
    document.body.appendChild(link);
  });
};

const swatches = [
  'default',
  'cerulean',
  'cosmo',
  'cyborg',
  'darkly',
  'flatly',
  'journal',
  'litera',
  'lumen',
  'lux',
  'materia',
  'minty',
  'nuclear',
  'pulse',
  'sandstone',
  'simplex',
  'slate',
  'solar',
  'spacelab',
  'superhero',
  'united',
  'yeti'
];

export const getRandomSwatch = () =>
  swatches[Math.floor(Math.random() * swatches.length)];

export const useBulmaSwatch = (swatch = 'default') => {
  if (swatch === 'random') {
    swatch = getRandomSwatch();
  }

  useStylesheet({
    href: `https://jenil.github.io/bulmaswatch/${swatch}/bulmaswatch.min.css`
  });
};

export const BulmaApp = ({ swatch, random, children }) => {
  if (random) {
    useBulmaSwatch();
  } else {
    useBulmaSwatch(swatch);
  }

  return <Fragment>{children}</Fragment>;
};

BulmaApp.propTypes = {
  children: PropTypes.node.isRequired,
  random: PropTypes.bool,
  swatch: PropTypes.oneOf([...swatches, 'random'])
};

BulmaApp.defaultProps = {
  random: false,
  swatch: 'default'
};
