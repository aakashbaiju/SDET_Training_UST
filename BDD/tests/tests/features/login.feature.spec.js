// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test.describe('Login with valid credentials', () => {

    test('Example #1', async ({ Given, When, Then, And, page }) => { 
      await Given('user is on login page', null, { page }); 
      await When('User enters "standard_user"', null, { page }); 
      await And('user enters "secret_sauce"', null, { page }); 
      await And('user clicks login button', null, { page }); 
      await Then('user is logged in successfully', null, { page }); 
      await And('user is able to navigate to product page', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, And, page }) => { 
      await Given('user is on login page', null, { page }); 
      await When('User enters "performance_glitch_user"', null, { page }); 
      await And('user enters "secret_sauce"', null, { page }); 
      await And('user clicks login button', null, { page }); 
      await Then('user is logged in successfully', null, { page }); 
      await And('user is able to navigate to product page', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, And, page }) => { 
      await Given('user is on login page', null, { page }); 
      await When('User enters "problem_user"', null, { page }); 
      await And('user enters "secret_sauce"', null, { page }); 
      await And('user clicks login button', null, { page }); 
      await Then('user is logged in successfully', null, { page }); 
      await And('user is able to navigate to product page', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, And, page }) => { 
      await Given('user is on login page', null, { page }); 
      await When('User enters "error_user"', null, { page }); 
      await And('user enters "secret_sauce"', null, { page }); 
      await And('user clicks login button', null, { page }); 
      await Then('user is logged in successfully', null, { page }); 
      await And('user is able to navigate to product page', null, { page }); 
    });

    test('Example #5', async ({ Given, When, Then, And, page }) => { 
      await Given('user is on login page', null, { page }); 
      await When('User enters "visual_user"', null, { page }); 
      await And('user enters "secret_sauce"', null, { page }); 
      await And('user clicks login button', null, { page }); 
      await Then('user is logged in successfully', null, { page }); 
      await And('user is able to navigate to product page', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User enters \"standard_user\"","stepMatchArguments":[{"group":{"start":12,"value":"\"standard_user\"","children":[{"start":13,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And user enters \"secret_sauce\"","stepMatchArguments":[{"group":{"start":12,"value":"\"secret_sauce\"","children":[{"start":13,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User enters \"performance_glitch_user\"","stepMatchArguments":[{"group":{"start":12,"value":"\"performance_glitch_user\"","children":[{"start":13,"value":"performance_glitch_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And user enters \"secret_sauce\"","stepMatchArguments":[{"group":{"start":12,"value":"\"secret_sauce\"","children":[{"start":13,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User enters \"problem_user\"","stepMatchArguments":[{"group":{"start":12,"value":"\"problem_user\"","children":[{"start":13,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And user enters \"secret_sauce\"","stepMatchArguments":[{"group":{"start":12,"value":"\"secret_sauce\"","children":[{"start":13,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User enters \"error_user\"","stepMatchArguments":[{"group":{"start":12,"value":"\"error_user\"","children":[{"start":13,"value":"error_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And user enters \"secret_sauce\"","stepMatchArguments":[{"group":{"start":12,"value":"\"secret_sauce\"","children":[{"start":13,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User enters \"visual_user\"","stepMatchArguments":[{"group":{"start":12,"value":"\"visual_user\"","children":[{"start":13,"value":"visual_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And user enters \"secret_sauce\"","stepMatchArguments":[{"group":{"start":12,"value":"\"secret_sauce\"","children":[{"start":13,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to product page","stepMatchArguments":[]}]},
]; // bdd-data-end