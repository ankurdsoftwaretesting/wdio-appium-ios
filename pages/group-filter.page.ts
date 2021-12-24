import elementUtils from '../support/utils/elementUtils';
import mobileActions from '../support/utils/mobileActions';

class GroupFilter {
  private groupHeader: string =
    '**/XCUIElementTypeStaticText[`label == "Groups"`]';
  private iPhoneSubHeader: string =
    '**/XCUIElementTypeStaticText[`label == "IPHONE"`]';

  private hideAllContactsLink: string =
    '**/XCUIElementTypeStaticText[`label == "Hide All Contacts"`]';
  private showAllContactsLink: string =
    '**/XCUIElementTypeStaticText[`label == "Show All Contacts"`]';
  private allContactsFooterLink: string =
    '**/XCUIElementTypeButton[`name ENDSWITH "All Contacts"`]'; //'//XCUIElementTypeButton[contains(@name, "All Contacts")]';

  private allIPhoneText: string =
    '**/XCUIElementTypeStaticText[`label == "All iPhone"`]';
  private workText: string = '**/XCUIElementTypeStaticText[`label == "Work"`]';
  private friendsText: string =
    '**/XCUIElementTypeStaticText[`label == "Friends"`]';

  private allIPhoneChecked: string =
    '**/XCUIElementTypeImage[`label == "selected"`][1]';

  async clickOnAllIPhone() {
    await mobileActions.clickOn(this.allIPhoneText, 'class');
  }

  async clickOnWork() {
    await mobileActions.clickOn(this.workText, 'class');
  }

  async clickOnFriends() {
    await mobileActions.clickOn(this.friendsText, 'class');
  }

  async selectDefaultFilterOption() {
    const footerLinkText = (
      await elementUtils.getElementByClassChain(this.allContactsFooterLink)
    ).getText(); ////   await elementUtils.getElementByXPath(this.allContactsFooterLink)
    if ((await footerLinkText).includes('Show')) {
      await this.clickOnShowAllContacts();
    }
  }

  async selectOnlyOption(option: string) {
    await this.clickOnAllIPhone();
    switch (option) {
      case 'Friends': {
        await this.clickOnFriends();
        break;
      }
      case 'Work': {
        await this.clickOnWork();
        break;
      }
    }
  }

  async clickOnHideAllContacts() {
    await mobileActions.clickOn(this.hideAllContactsLink, 'class');
  }

  async clickOnShowAllContacts() {
    await mobileActions.clickOn(this.showAllContactsLink, 'class');
  }
}

export default new GroupFilter();
