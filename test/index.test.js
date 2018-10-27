import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line unicorn/import-index
import { useBulmaSwatch, BulmaApp } from '../index';

const render = element => renderer.create(element).toJSON();

document.body.appendChild = jest.fn();
document.createElement = () => ({
  addEventListener: (type, end) =>
    type === 'load' ? new Promise(resolve => resolve(end())) : Promise.resolve()
});

beforeEach(() => {
  document.body.appendChild.mockClear();
});

describe('useBulmaSwatch', () => {
  test('default', async () => {
    await useBulmaSwatch();
    expect(document.body.appendChild).toHaveBeenCalledWith({
      href: 'https://jenil.github.io/bulmaswatch/default/bulmaswatch.min.css',
      media: 'all',
      rel: 'stylesheet',
      addEventListener: expect.anything()
    });
  });

  test('user supplied swatch', async () => {
    await useBulmaSwatch('nuclear');
    expect(document.body.appendChild).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'https://jenil.github.io/bulmaswatch/nuclear/bulmaswatch.min.css'
      })
    );
  });

  test('random swatch', async () => {
    await useBulmaSwatch('random');

    expect(document.body.appendChild).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringMatching(
          /https:\/\/jenil\.github\.io\/bulmaswatch\/\S+\/bulmaswatch\.min\.css/
        )
      })
    );
  });
});

describe('BulmaApp', () => {
  test('uses default', () => {
    expect(render(<BulmaApp>My Content</BulmaApp>)).toMatchSnapshot();
    expect(document.body.appendChild).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'https://jenil.github.io/bulmaswatch/default/bulmaswatch.min.css'
      })
    );
  });

  test('uses default', () => {
    expect(render(<BulmaApp random>My Content</BulmaApp>)).toMatchSnapshot();
    expect(document.body.appendChild).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringMatching(
          /https:\/\/jenil\.github\.io\/bulmaswatch\/\S+\/bulmaswatch\.min\.css/
        )
      })
    );
  });
});
