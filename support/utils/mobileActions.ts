import ElementUtils from './elementUtils';
class MobileActions {
  async tapOnPosition(xCor: number, yCor: number) {
    await browser.touchAction({
      action: 'tap',
      x: xCor,
      y: yCor,
    });
  }

  async tapOn(el) {
    await browser.touchAction({
      action: 'tap',
      element: el,
    });
  }

  async enterValueInto(elm: string, value: string | number, locator?: string) {
    if (locator === 'class') {
      await (await ElementUtils.getElementByClassChain(elm)).addValue(value);
    } else if (locator === 'predicate') {
      await (await ElementUtils.getElementByPredicate(elm)).addValue(value);
    } else {
      await (
        await ElementUtils.getElementByAccessibilityId(elm)
      ).addValue(value);
    }
  }

  async clickOn(elm: string, locator?: string) {
    if (locator === 'class') {
      await (await ElementUtils.getElementByClassChain(elm)).click();
    } else if (locator === 'predicate') {
      await (await ElementUtils.getElementByPredicate(elm)).click();
    } else if (locator === 'xpath') {
      await (await ElementUtils.getElementByXPath(elm)).click();
    } else {
      await (await ElementUtils.getElementByAccessibilityId(elm)).click();
    }
  }
}
export default new MobileActions();
