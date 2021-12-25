class ElementUtils {
  async getElementByAccessibilityId(elm: string) {
    return await $(`~${elm}`);
  }

  async getElementByClassChain(elm: string) {
    return await $(`-ios class chain:${elm}`);
  }

  async getElementByPredicate(elm: string) {
    return await $(`-ios predicate string:${elm}`);
  }

  async getElementByXPath(elm: string) {
    return await $(`${elm}`);
  }

  async getTextOf(elm: string, locator?: string) {
    if (locator === 'predicate') {
      return await (await this.getElementByPredicate(elm)).getText();
    } else if (locator === 'class') {
      return await (await this.getElementByClassChain(elm)).getText();
    } else {
      return await (await this.getElementByAccessibilityId(elm)).getText();
    }
  }

  async getValueOf(elm: string, attr: string) {
    const el = await this.getElementByXPath(elm);
    return el.getAttribute(attr);
  }
}

export default new ElementUtils();
