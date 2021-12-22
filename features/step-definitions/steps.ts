import { Given, When, Then } from '@wdio/cucumber-framework';
import CommonElements from '../../pages/common-elements.page';
import ContactInfo from '../../pages/contact-info.page'
import HomePage from '../../pages/home.page';
import ContactList from '../../pages/contact-list.page';

const fnm = 'Kevin';
const lnm = 'Peterson';
const mobile = 45982309;
const company = 'Eng Pre Legue';

Given('I am on the contacts app', async() => {
    const headerValue = await HomePage.valueOfHeader();
    expect(headerValue).toBe('Contacts');
})

When('I click on + button', async() => {
    await HomePage.clickOnAddButton(); 
})

When ('I add a new contact', async() => {
    await ContactInfo.enterFirstName(fnm);
    await ContactInfo.enterLastName(lnm);
    await ContactInfo.enterCompanyName(company);
    await ContactInfo.enterMobileNumber(mobile);
    await CommonElements.saveContact();
    await CommonElements.goBackOnContactList();
})

Then('I should see a newly added contact info', async() => {
    const headerValue = await HomePage.valueOfHeader();
    expect(headerValue).toBe('Contacts');
    await ContactList.selectContactFromList(fnm, lnm);
    const photoSelector = await $(`~Contact photo for ${fnm} ${lnm}`);
    photoSelector.waitForDisplayed({ timeout: 3000 });
    expect(photoSelector).toBeDisplayed();
})

