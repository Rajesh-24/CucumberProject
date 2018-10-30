Feature: Admin LTE login feature

@Regression
Scenario: Validate login with valid Username and Valid Password

	Given User aready on login page
	When Title of login page is AdminLTE 2 | Log in
	Then User enter username and password
	|username | password |
	|kiran@gmail.com|123456|
	And User clicks on login button
	And User is on Dashboard page
	Then Close the browser
	
@Smoke
Scenario: Validate login with valid Username and Valid Password

	Given User aready on login page
	When Title of login page is AdminLTE 2 | Log in
	Then User enter username and password
	|username | password |
	|rajesh@gmail.com|125478|
	And User clicks on login button
	And User is on Dashboard page
	Then Close the browser