'use strict';

import {browser, expect, $, $$} from '@wdio/globals';

describe('Scroll events', function() {
  let output;

  beforeEach(async function() {
    await browser.url(`${process.cwd()}/test/e2e/scroll.html`);

    output = await $('#output');
  });

  describe('Methods', function() {
    describe('target', function() {
      describe('position', function() {
        it('should target element', async function() {
          await browser.execute(() => {
            window.dispatchEvent(new Event('test1'));
          });

          const result = 'target: 500px';

          await expect(output).toHaveText(result, {
            message: `Output expected is '${result}'`
          });
        });
      });

      describe('element', function() {
        it('should target element', async function() {
          await browser.execute(() => {
            window.dispatchEvent(new Event('test2'));
          });

          const result = 'target: 800px';

          await expect(output).toHaveText(result, {
            message: `Output expected is '${result}'`
          });
        });
      });
    });

    describe('trigger', function() {
      describe('position', function() {
        it('should trigger event', async function() {
          await browser.execute(() => {
            window.dispatchEvent(new Event('test3'));
          });

          await browser.scroll(0, 1201);
          await browser.pause(1000);

          const result = 'trigger: 1200px';

          await expect(output).toHaveText(result, {
            message: `Output expected is '${result}'`
          });
        });
      });

      describe('element', function() {
        it('should trigger event', async function() {
          await browser.execute(() => {
            window.dispatchEvent(new Event('test4'));
          });

          await browser.scroll(0, 1601);
          await browser.pause(1000);

          const result = 'trigger: 1600px';

          await expect(output).toHaveText(result, {
            message: `Output expected is '${result}'`
          });
        });
      });

      describe('threshold', function() {
        it('should trigger event', async function() {
          await browser.execute(() => {
            window.dispatchEvent(new Event('test5'));
          });

          await browser.scroll(0, 1901);
          await browser.pause(1000);

          const result = 'trigger: 2000px';

          await expect(output).toHaveText(result, {
            message: `Output expected is '${result}'`
          });
        });
      });
    });
  });
});
