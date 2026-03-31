// Generated from: tests\features\formValidation.feature
import { test } from "playwright-bdd";

test.describe('Form submition validation functionality', () => {

  test('Submit form with valid credentials', { tag: ['@successfullBooking'] }, async ({ Given, Then, And, page }) => { 
    await Given('user is on surgery page', null, { page }); 
    await Then('user selects Ailment', null, { page }); 
    await And('user enters Name', null, { page }); 
    await And('user enters Contact Number', null, { page }); 
    await Then('user clicks on Book Appointment', null, { page }); 
    await And('user is able to navigate to further validation page', null, { page }); 
  });

  test('Submit form with invalid User Name', async ({ Given, Then, And, page }) => { 
    await Given('user is on surgery page', null, { page }); 
    await Then('user selects Ailment', null, { page }); 
    await And('user enters Name as ""', null, { page }); 
    await And('user enters Contact Number', null, { page }); 
    await Then('user clicks on Book Appointment', null, { page }); 
    await And('user is showed with the error message as "Invalid User Name".', null, { page }); 
  });

  test('Submit form with invalid Phone Number', async ({ Given, Then, And, page }) => { 
    await Given('user is on surgery page', null, { page }); 
    await Then('user selects Ailment', null, { page }); 
    await And('user enters Name', null, { page }); 
    await And('user enters ContactNumber as ""', null, { page }); 
    await Then('user clicks on Book Appointment', null, { page }); 
    await And('user is showed with the error message as "Invalid Phone Number".', null, { page }); 
  });

  test('Validate whether all departments are present', async ({ Given, Then, page }) => { 
    await Given('user is on surgery page', null, { page }); 
    await Then('all departments should be visible', null, { page }); 
  });

  test('Validate whether city dropdown is working', async ({ Given, When, Then, page }) => { 
    await Given('user is on surgery page', null, { page }); 
    await When('user clicks on city dropdown'); 
    await Then('city dropdown is visible'); 
    await When('user clicks a city'); 
    await Then('city name should be visible'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\formValidation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@successfullBooking"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user is on surgery page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user selects Ailment","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And user enters Name","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And user enters Contact Number","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Book Appointment","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to further validation page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user is on surgery page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user selects Ailment","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And user enters Name as \"\"","stepMatchArguments":[{"group":{"start":20,"value":"\"\"","children":[{"start":21,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And user enters Contact Number","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Book Appointment","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And user is showed with the error message as \"Invalid User Name\".","stepMatchArguments":[{"group":{"start":41,"value":"\"Invalid User Name\"","children":[{"start":42,"value":"Invalid User Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user is on surgery page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then user selects Ailment","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And user enters Name","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And user enters ContactNumber as \"\"","stepMatchArguments":[{"group":{"start":29,"value":"\"\"","children":[{"start":30,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Book Appointment","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And user is showed with the error message as \"Invalid Phone Number\".","stepMatchArguments":[{"group":{"start":41,"value":"\"Invalid Phone Number\"","children":[{"start":42,"value":"Invalid Phone Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given user is on surgery page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then all departments should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given user is on surgery page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When user clicks on city dropdown","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then city dropdown is visible","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When user clicks a city","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then city name should be visible","stepMatchArguments":[]}]},
]; // bdd-data-end