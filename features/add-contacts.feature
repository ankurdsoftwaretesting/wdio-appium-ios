Feature: Add contacts
    Scenario Outline: As a mobile user, I want to save multiple contacts into my contact list

        Given I am on the contacts app
        When I click on + button
        And I save contact as "<FIRST_NAME>" "<LAST_NAME>" "<COMPANY>" "<MOBILE_NO>"
        Then I should see a newly added contact info for "<FIRST_NAME>" "<LAST_NAME>"

        Examples:
            | FIRST_NAME | LAST_NAME | COMPANY          | MOBILE_NO  |
            | Sachin     | Tendulker | Mumbai Indians   | 9112345678 |
            | Zaheer     | Khan      | Mumbai Indians   | 9109876543 |
            | Ricky      | Ponting   | Delhi Daredevils | 9112398876 |


