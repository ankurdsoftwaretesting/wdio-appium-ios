@friends-contact
@categorize-contact
@regression
Feature: Add a new friend contact

    Rule: new friend should be added into contact list tagged as friend
        Background: contacts app should be opened
            Given I am on the contacts app
            * I am on the groups filter page with default filter selected

        Example: As a mobile user, I should be able to add a new friend-contact info.
            When I select "Friends" filter only
            * I do search
            * I click on + button
            * I add a new contact as
                | ANKUR22 | DUBEY22 | TestCompany | 6590909090 |
            * I come back on contact list
            Then I should see contact info for
                | ANKUR22 | DUBEY22 |
            * I come back on contact list
            * I select default filter option


