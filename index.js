import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const resolved = new Map();

const useStylesheet = ({ href, media = 'all' }) => {
  if (resolved.has(href)) {
    return document.body.appendChild(resolved.get(href));
  }

  throw new Promise((resolve, reject) => {
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    link.addEventListener('error', reject);
    link.addEventListener('load', () => {
      resolve();
    });

    document.body.appendChild(link);
    resolved.set(href, link);
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

export const useBulmaSwatch = (swatch = 'default') => {
  if (swatch === 'random') {
    swatch = swatches[Math.floor(Math.random() * swatches.length)];
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
  swatch: PropTypes.oneOf(swatches)
};

BulmaApp.defaultProps = {
  random: false,
  swatch: 'default'
};
