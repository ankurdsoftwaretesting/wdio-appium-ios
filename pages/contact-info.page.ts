import ElementUtils from '../support/utils/elementUtils';
import MobileActions from '../support/utils/mobileActions';
class ContactInfo{
    private firstName: string = 'First name';
    private lastName: string = 'Last name';
    private company: string = 'Company';
    private mobileNo: string = `name == "mobile" AND value == "Phone"`;
    private addContactButton: string = 'label == "Insert add phone"'
    private office: string;
    private address: string;

    async enterFirstName(fnm: string){
        // await $(`~${this.firstName}`).addValue(fnm);
        // await (await ElementUtils.getElementByAccessibilityId(this.firstName)).addValue(fnm);
        await MobileActions.enterValueInto(this.firstName, fnm);
    }

    async enterLastName(lnm: string){
        // await $(`~${this.lastName}`).addValue(lnm);
        // await (await ElementUtils.getElementByAccessibilityId(this.lastName)).addValue(lnm);
        await MobileActions.enterValueInto(this.lastName, lnm);
    }

    async enterCompanyName(company: string){
        // await $(`~${this.company}`).addValue(company);
        // await (await ElementUtils.getElementByAccessibilityId(this.company)).addValue(company);
        await MobileActions.enterValueInto(this.company, company);
    }

    async enterMobileNumber(cNum: number){
        // await $(this.addContactButton).click();
        // await $(this.mobileNo).addValue(cNum);
        // await (await ElementUtils.getElementByPredicate(this.addContactButton)).click();
        // await (await ElementUtils.getElementByPredicate(this.mobileNo)).addValue(cNum);
        await MobileActions.clickOn(this.addContactButton, 'predicate');
        await MobileActions.enterValueInto(this.mobileNo, cNum, 'predicate')
    }
}

export default new ContactInfo();