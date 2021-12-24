@work-contact
@categorize-contact
@regression
Feature: Add a new friend contact

    Rule: new friend should be added into contact list tagged as friend
        Background: contacts app should be opened
            Given I am on the contacts app
            * I am on the groups filter page with default filter selected

        Example: As a mobile user, I should be able to add a new work-contact info.
            When I select "Work" filter only
            * I do search
            * I click on + button
            * I add a new contact as
                | ANKUR23 | DUBEY23 | TestCompany | 6590909090 |
            * I come back on contact list
            Then I should see contact info for
                | ANKUR23 | DUBEY23 |
            * I come back on contact list
            * I select default filter option

