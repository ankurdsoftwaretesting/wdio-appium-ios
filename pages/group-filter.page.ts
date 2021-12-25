import elementUtils from '../support/utils/elementUtils';
import mobileActions from '../support/utils/mobileActions';

class GroupFilter {
  private groupHeader: string =
    '**/XCUIElementTypeStaticText[`label == "Groups"`]';
  private iPhoneSubHeader: string =
    '**/XCUIElementTypeStaticText[`label == "IPHONE"`]';

  private hideAllContactsLink: string =
    '**/XCUIElementTypeButton[`name BEGINSWITH "Hide All Contacts"`]';
  //   '**/XCUIElementTypeStaticText[`label == "Hide All Contacts"`]';
  private showAllContactsLink: string =
    '**/XCUIElementTypeButton[`name BEGINSWITH "Show All Contacts"`]';
  //   '**/XCUIElementTypeStaticText[`label == "Show All Contacts"`]';
  private allContactsFooterLink: string =
    '**/XCUIElementTypeButton[`name ENDSWITH "All Contacts"`]';
  // '**/XCUIElementTypeButton[`name CONTAINS "All Contacts"`]';
  //'//XCUIElementTypeButton[contains(@name, "All Contacts")]';

  private allIPhoneText: string =
    '**/XCUIElementTypeStaticText[`label == "All iPhone"`]';
  private workText: string = '**/XCUIElementTypeStaticText[`label == "Work"`]';
  private friendsText: string =
    '**/XCUIElementTypeStaticText[`label == "Friends"`]';

  private allIPhoneCheckBox =
    '//XCUIElementTypeCell[@name="All iPhone"]//XCUIElementTypeImage';
  private friendsCheckBox =
    '//XCUIElementTypeCell[@name="Friends"]//XCUIElementTypeImage';
  private workCheckBox =
    '//XCUIElementTypeCell[@name="Work"]//XCUIElementTypeImage';

  async clickOnAllIPhone() {
    await mobileActions.clickOn(this.allIPhoneText, 'class');
  }

  async clickOnWork() {
    await mobileActions.clickOn(this.workText, 'class');
  }

  async clickOnFriends() {
    await mobileActions.clickOn(this.friendsText, 'class');
  }

  async clickOnHideAllContacts() {
    await mobileActions.clickOn(this.hideAllContactsLink, 'class');
  }

  async clickOnShowAllContacts() {
    await mobileActions.clickOn(this.showAllContactsLink, 'class');
  }

  async showAllContactsButton() {
    const footerLinkText = await elementUtils.getTextOf(
      this.allContactsFooterLink,
      'class'
    ); //   await elementUtils.getElementByXPath(this.allContactsFooterLink)
    if (footerLinkText.includes('Show')) {
      await this.clickOnShowAllContacts();
    }
  }

  async hideAllContactsButton() {
    const footerLinkText = await elementUtils.getTextOf(
      this.allContactsFooterLink,
      'class'
    ); //   await elementUtils.getElementByXPath(this.allContactsFooterLink)
    if (footerLinkText.includes('Hide')) {
      await this.clickOnHideAllContacts();
    }
  }

  async unselectFilterOption(option: string) {
    if ((await this.getStateValueOfFilter(option)) === 'selected') {
      await this.clickOnCheckbox(option);
    }
  }

  async selectFilterOption(option: string) {
    if ((await this.getStateValueOfFilter(option)) === 'circle') {
      await this.clickOnCheckbox(option);
    }
  }

  async clickOnCheckbox(option: string) {
    await mobileActions.clickOn(
      `//XCUIElementTypeCell[@name="${option}"]//XCUIElementTypeImage`,
      'xpath'
    );
  }

  // The following two functions are same, just finding element by XPATH and CLASS CHAIN respectively.
  async getStateValueOfFilter(groupName: string) {
    const elm = await elementUtils.getElementByXPath(
      `//XCUIElementTypeCell[@name="${groupName}"]//XCUIElementTypeImage`
    );
    return await elm.getAttribute('name');
  }

  async getStateValueOfGroup(groupName: string) {
    const elm = await elementUtils.getElementByClassChain(
      `**/XCUIElementTypeCell[\`label == "${groupName}"\`]/XCUIElementTypeOther[2]/XCUIElementTypeImage`
    );
    const actualState = await elm.getAttribute('label');
    return actualState === 'selected' ? 'selected' : 'unSelected';
  }
}

export default new GroupFilter();
