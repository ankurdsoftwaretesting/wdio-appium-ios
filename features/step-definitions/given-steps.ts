import { Given } from '@wdio/cucumber-framework';
import homePage from '../../pages/home.page';
import groupFilterPage from '../../pages/group-filter.page';

Given('I am on the contacts app', async () => {
  const headerValue = await homePage.valueOfHeader();
  expect(headerValue).toBe('Contacts');
});

Given(
  'I am on the groups filter page with default filter selected',
  async () => {
    await homePage.clickOnGroupsButton();
    await groupFilterPage.selectDefaultFilterOption();
  }
);
