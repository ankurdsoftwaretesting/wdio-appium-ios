import MobileActions from '../support/utils/mobileActions';
import ElementUtils from '../support/utils/elementUtils';
class HomePage {
  private addButton: string = 'Add';
  private groupsButton: string = 'Groups';
  private contactHeader: string =
    '**/XCUIElementTypeStaticText[`label == "Contacts"`]';

  async clickOnAddButton() {
    await MobileActions.clickOn(this.addButton);
  }

  async clickOnGroupsButton() {
    await MobileActions.clickOn(this.groupsButton);
  }

  async valueOfHeader() {
    return await ElementUtils.getTextOf(this.contactHeader, 'class');
  }
}

export default new HomePage();
