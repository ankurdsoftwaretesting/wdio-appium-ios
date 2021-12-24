import MobileActions from '../support/utils/mobileActions';
class CommonElements {
  private doneButton: string = 'Done';
  private contactLink: string = `label == "Contacts" AND name == "Contacts" AND type == "XCUIElementTypeButton"`;

  async saveContact() {
    await MobileActions.clickOn(this.doneButton);
  }

  async clickOnDoneButton() {
    await MobileActions.clickOn(this.doneButton);
  }

  async goBackOnContactList() {
    await MobileActions.clickOn(this.contactLink, 'predicate');
  }
}

export default new CommonElements();
