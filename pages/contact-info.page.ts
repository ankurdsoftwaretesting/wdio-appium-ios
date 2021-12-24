import ElementUtils from '../support/utils/elementUtils';
import MobileActions from '../support/utils/mobileActions';
class ContactInfo {
  private firstName: string = 'First name';
  private lastName: string = 'Last name';
  private company: string = 'Company';
  private mobileNo: string = `name == "mobile" AND value == "Phone"`;
  private addContactButton: string = 'label == "Insert add phone"';

  async enterFirstName(fnm: string) {
    await MobileActions.enterValueInto(this.firstName, fnm);
  }

  async enterLastName(lnm: string) {
    await MobileActions.enterValueInto(this.lastName, lnm);
  }

  async enterCompanyName(company: string) {
    await MobileActions.enterValueInto(this.company, company);
  }

  async enterMobileNumber(cNum: number) {
    await MobileActions.clickOn(this.addContactButton, 'predicate');
    await MobileActions.enterValueInto(this.mobileNo, cNum, 'predicate');
  }

  async photoLocator(firstName: string, lastName: string) {
    return await $(`~Contact photo for ${firstName} ${lastName}`);
  }
}

export default new ContactInfo();
