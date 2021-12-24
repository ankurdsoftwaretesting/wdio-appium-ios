@sanity
Feature: Save contact
    Scenario: As a mobile user, I want to save new contact into contact list

        Given I am on the contacts app
        When I click on + button
        And I add a new contact
        And I come back on contact list
        Then I should see a newly added contact info