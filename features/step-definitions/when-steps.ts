import { When } from '@wdio/cucumber-framework';
import contactInfoPage from '../../pages/contact-info.page';
import homePage from '../../pages/home.page';
import groupFilterPage from '../../pages/group-filter.page';
import commonElementsPage from '../../pages/common-elements.page';
import ContactData from '../../support/data/contact-data.json';

const fnm = ContactData.FirstName;
const lnm = ContactData.LastName;
const mobile = ContactData.MobileNumber;
const company = ContactData.Company;

When('I click on + button', async () => {
  await homePage.clickOnAddButton();
});

When('I add a new contact', async () => {
  await contactInfoPage.enterFirstName(fnm);
  await contactInfoPage.enterLastName(lnm);
  await contactInfoPage.enterCompanyName(company);
  await contactInfoPage.enterMobileNumber(mobile);
  await commonElementsPage.clickOnDoneButton();
});

When('I add a new contact as', async (dataTable) => {
  const contactInfo = dataTable.raw();
  const firstName = contactInfo[0][0];
  const lastName = contactInfo[0][1];
  const companyName = contactInfo[0][2];
  const mob = contactInfo[0][3];
  await contactInfoPage.enterFirstName(firstName);
  await contactInfoPage.enterLastName(lastName);
  await contactInfoPage.enterCompanyName(companyName);
  await contactInfoPage.enterMobileNumber(mob);
  await commonElementsPage.clickOnDoneButton();
});

When('I come back on contact list', async () => {
  await commonElementsPage.goBackOnContactList();
});

When(
  'I save contact as {string} {string} {string} {string}',
  async (firstName, lastName, teamName, mobileNo) => {
    await contactInfoPage.enterFirstName(firstName);
    await contactInfoPage.enterLastName(lastName);
    await contactInfoPage.enterCompanyName(teamName);
    await contactInfoPage.enterMobileNumber(mobileNo);
    await commonElementsPage.clickOnDoneButton();
  }
);

When('I click on groups button', async () => {
  await homePage.clickOnGroupsButton();
});

When('I select {string} filter only', async (filterOption) => {
  await groupFilterPage.selectOnlyOption(filterOption);
});

When('I do search', async () => {
  await commonElementsPage.clickOnDoneButton();
});
