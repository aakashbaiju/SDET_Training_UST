
Feature:Form submition validation functionality

@successfullBooking
Scenario:Submit form with valid credentials
Given user is on surgery page
Then user selects Ailment
And user enters Name
And user enters Contact Number
Then user clicks on Book Appointment
And user is able to navigate to further validation page

Scenario:Submit form with invalid User Name
Given user is on surgery page
Then user selects Ailment
And user enters Name as ""
And user enters Contact Number
Then user clicks on Book Appointment
And user is showed with the error message as "Invalid User Name".

Scenario:Submit form with invalid Phone Number
Given user is on surgery page
Then user selects Ailment
And user enters Name
And user enters ContactNumber as ""
Then user clicks on Book Appointment
And user is showed with the error message as "Invalid Phone Number".


Scenario:Validate whether all departments are present
Given user is on surgery page
Then all departments should be visible

Scenario:Validate whether city dropdown is working
Given user is on surgery page
When user clicks on city dropdown
Then city dropdown is visible
When user clicks a city
Then city name should be visible 
