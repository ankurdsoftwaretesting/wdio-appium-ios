@single-contact
@regression
Feature: Add a new contact

    Background: contacts app should be opened
        Given I am on the contacts app

    Scenario: As a mobile user, I should be able to add a new contact info.
        When I click on + button
        And I add a new contact as
            | ANKUR21 | DUBEY21 | ICompaz | 6590909090 |
        And I come back on contact list
        Then I should see contact info for
            | ANKUR21 | DUBEY21 |
