import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line unicorn/import-index
import { useBulmaSwatch, BulmaApp } from '../index';

const render = element => renderer.create(element).toJSON();
let shouldError = false;

document.getElementsByClassName = jest.fn();
document.body.appendChild = jest.fn();
document.createElement = () => ({
  removeEventListener: () => {},
  addEventListener: (type, end) =>
    (type === 'load' && end()) || (shouldError && end())
});

beforeEach(() => {
  document.body.appendChild.mockClear();
  document.getElementsByClassName.mockClear();
  document.getElementsByClassName.mockReturnValue([]);
  shouldError = false;
});

describe('useBulmaSwatch', () => {
  test('handles rejections', async () => {
    shouldError = true;
    try {
      await useBulmaSwatch('default');
    } catch (error) {
      expect(error).rejects.toBe(undefined);
    }
  });

  test('default', async () => {
    try {
      await useBulmaSwatch();
    } catch (error) {
      await error;
      expect(document.body.appendChild).toHaveBeenCalledWith(
        expect.objectContaining({
          href:
            'https://jenil.github.io/bulmaswatch/default/bulmaswatch.min.css',
          media: 'all',
          rel: 'stylesheet',
          className: 'bulma-swatch'
        })
      );
    }
  });

  test('user supplied swatch', async () => {
    try {
      await useBulmaSwatch('nuclear');
    } catch (error) {
      await error;
      expect(document.body.appendChild).toHaveBeenCalledWith(
        expect.objectContaining({
          href:
            'https://jenil.github.io/bulmaswatch/nuclear/bulmaswatch.min.css'
        })
      );
    }
  });

  test('random swatch', async () => {
    try {
      await useBulmaSwatch('random');
    } catch (error) {
      await error;
      expect(document.body.appendChild).toHaveBeenCalledWith(
        expect.objectContaining({
          href: expect.stringMatching(
            /https:\/\/jenil\.github\.io\/bulmaswatch\/\S+\/bulmaswatch\.min\.css/
          )
        })
      );
    }
  });

  test('random swatch', () => {
    document.getElementsByClassName.mockReturnValueOnce([
      {
        href: 'https://jenil.github.io/bulmaswatch/default/bulmaswatch.min.css'
      }
    ]);
    expect(useBulmaSwatch('default')).toBeUndefined();
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
