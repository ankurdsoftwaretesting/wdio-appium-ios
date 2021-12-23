
Feature: Add a new contact
    Scenario: As a mobile user, I should be able to add a new contact info.

        Given I am on the contacts app
        When I click on + button
        And I add a new contact as
            | ANKUR | DUBEY | ICompaz | 6590909090 |
        Then I should see a newly added contact info as
            | ANKUR | DUBEY |