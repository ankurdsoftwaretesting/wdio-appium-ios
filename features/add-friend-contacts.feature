@friends-contact
@categorize-contact
@regression
Feature: Add a new friend contact

    Rule: new friend should be added into contact list tagged as friend
        Background: contacts app should be opened
            Given I am on the contacts app
            * I am on the groups filter page with default filter selected

        Example: As a mobile user, I should be able to add a new friend-contact info.
            When I "unselect" to "All iPhone" filter
            Then I verify all the options are "unSelected"

            When I "select" to "Friends" filter
            Then I verify "Friends" option is selected and others are unSelected

            When I do search
            * I click on + button
            * I add a new contact as
                | ANKUR22 | DUBEY22 | TestCompany | 6590909090 |
            * I come back on contact list
            Then I should see contact info for
                | ANKUR22 | DUBEY22 |

            When I come back on contact list
            * I come back on groups page
            Then I verify "Friends" option is selected and others are unSelected

            When I "select" to "All iPhone" filter
            Then I verify all the options are "selected"
            * I apply filter


