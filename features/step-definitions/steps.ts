import { Given, When, Then } from '@wdio/cucumber-framework';
import CommonElements from '../../pages/common-elements.page';
import ContactInfo from '../../pages/contact-info.page';
import HomePage from '../../pages/home.page';
import ContactList from '../../pages/contact-list.page';
import ContactData from '../../support/data/contact-data.json';

const fnm = ContactData.FirstName;
const lnm = ContactData.LastName;
const mobile = ContactData.MobileNumber;
const company = ContactData.Company;

Given('I am on the contacts app', async () => {
  const headerValue = await HomePage.valueOfHeader();
  expect(headerValue).toBe('Contacts');
});

When('I click on + button', async () => {
  await HomePage.clickOnAddButton();
});

When('I add a new contact', async () => {
  await ContactInfo.enterFirstName(fnm);
  await ContactInfo.enterLastName(lnm);
  await ContactInfo.enterCompanyName(company);
  await ContactInfo.enterMobileNumber(mobile);
  await CommonElements.saveContact();
  await CommonElements.goBackOnContactList();
});

When('I add a new contact as', async (dataTable) => {
  const contactInfo = dataTable.raw();
  const firstName = contactInfo[0][0];
  const lastName = contactInfo[0][1];
  const companyName = contactInfo[0][2];
  const mob = contactInfo[0][3];
  await ContactInfo.enterFirstName(firstName);
  await ContactInfo.enterLastName(lastName);
  await ContactInfo.enterCompanyName(companyName);
  await ContactInfo.enterMobileNumber(mob);
  await CommonElements.saveContact();
  await CommonElements.goBackOnContactList();
});

When(
  'I save contact as {string} {string} {string} {string}',
  async (firstName, lastName, teamName, mobileNo) => {
    await ContactInfo.enterFirstName(firstName);
    await ContactInfo.enterLastName(lastName);
    await ContactInfo.enterCompanyName(teamName);
    await ContactInfo.enterMobileNumber(mobileNo);
    await CommonElements.saveContact();
    await CommonElements.goBackOnContactList();
  }
);

Then('I should see a newly added contact info', async () => {
  const headerValue = await HomePage.valueOfHeader();
  expect(headerValue).toBe('Contacts');
  await ContactList.selectContactFromList(fnm, lnm);
  const photoElement = await ContactInfo.photoLocator(fnm, lnm);
  photoElement.waitForDisplayed({ timeout: 3000 });
  expect(photoElement).toBeDisplayed();
  await CommonElements.goBackOnContactList();
});

Then(
  'I should see a newly added contact info for {string} {string}',
  async (firstName, lastName) => {
    const headerValue = await HomePage.valueOfHeader();
    expect(headerValue).toBe('Contacts');
    await ContactList.selectContactFromList(firstName, lastName);
    const photoElement = await ContactInfo.photoLocator(firstName, lastName);
    photoElement.waitForDisplayed({ timeout: 3000 });
    expect(photoElement).toBeDisplayed();
    await CommonElements.goBackOnContactList();
  }
);

Then('I should see a newly added contact info as', async (dataTable) => {
  const contactInfo = dataTable.raw();
  const firstName = contactInfo[0][0];
  const lastName = contactInfo[0][1];
  const headerValue = await HomePage.valueOfHeader();
  expect(headerValue).toBe('Contacts');
  await ContactList.selectContactFromList(firstName, lastName);
  const photoElement = await ContactInfo.photoLocator(firstName, lastName);
  photoElement.waitForDisplayed({ timeout: 3000 });
  expect(photoElement).toBeDisplayed();
  await CommonElements.goBackOnContactList();
});
