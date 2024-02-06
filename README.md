# tdd-course

Test doubles
A piece of code that replaces some real code for purpose of testing
FIST

Two main styles

London: Heavey use of test doubles
Chicago: minimize use of test doubles

Fake: An object with a simplified working implementation
 1. Only for indirect input
 2. Not used for control
 3. Not used for assertions

Only there because the sut's to have it to funciont, but no actually involved

Stub: An object provides predefined data
 1. Can be used for indirect input
 2. Can be used for control
 3. Not used for 
 
Mock: An object that records calls received, and verifies thlem against edxpected calls
 1. Can be used for indirect input
 2. Can be used for control
 3. Used for assertions
