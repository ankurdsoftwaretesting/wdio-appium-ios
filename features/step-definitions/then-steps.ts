import { Then } from '@wdio/cucumber-framework';
import contactInfoPage from '../../pages/contact-info.page';
import contactListPage from '../../pages/contact-list.page';
import groupFilterPage from '../../pages/group-filter.page';
import commonElementsPage from '../../pages/common-elements.page';
import homePage from '../../pages/home.page';
import ContactData from '../../support/data/contact-data.json';

const fnm = ContactData.FirstName;
const lnm = ContactData.LastName;

Then('I should see a newly added contact info', async () => {
  const headerValue = await homePage.valueOfHeader();
  expect(headerValue).toBe('Contacts');
  await contactListPage.selectContactFromList(fnm, lnm);
  const photoElement = await contactInfoPage.photoLocator(fnm, lnm);
  photoElement.waitForDisplayed({ timeout: 3000 });
  expect(photoElement).toBeDisplayed();
  await commonElementsPage.goBackOnContactList();
});

Then(
  'I should see a newly added contact info for {string} {string}',
  async (firstName, lastName) => {
    const headerValue = await homePage.valueOfHeader();
    expect(headerValue).toBe('Contacts');
    await contactListPage.selectContactFromList(firstName, lastName);
    const photoElement = await contactInfoPage.photoLocator(
      firstName,
      lastName
    );
    photoElement.waitForDisplayed({ timeout: 3000 });
    expect(photoElement).toBeDisplayed();
    await commonElementsPage.goBackOnContactList();
  }
);

Then('I should see contact info for', async (dataTable) => {
  const contactInfo = dataTable.raw();
  const firstName = contactInfo[0][0];
  const lastName = contactInfo[0][1];
  const headerValue = await homePage.valueOfHeader();
  expect(headerValue).toBe('Contacts');
  await contactListPage.selectContactFromList(firstName, lastName);
  const photoElement = await contactInfoPage.photoLocator(firstName, lastName);
  photoElement.waitForDisplayed({ timeout: 3000 });
  expect(photoElement).toBeDisplayed();
});

Then('I select default filter option', async () => {
  await homePage.clickOnGroupsButton();
  await groupFilterPage.selectDefaultFilterOption();
  await commonElementsPage.clickOnDoneButton();
});
