import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();
Given('user is on surgery page', async ({page}) => {
  await page.goto("https://www.practo.com/care") ;
});

Then('user selects Ailment', async ({page}) => {
   await page.getByText("Select Ailment*").click();
   await page.locator("//div[contains(@class,'cursor-pointer') and .//b[contains(.,'Eye')]]").click();
   await page.locator("//h1[contains(@class,'list-module_sizeSmallItemContentTitle__kaSwM list-module_itemContentTitle__XreVD SpecialityWithAilmentSelectorModal-module_ailmentTitle__Lciwm') and text() = 'Glaucoma']").click();
});

Then('user enters Name', async ({page}) => {
  await page.getByPlaceholder("Name*").fill("Aakash");
});

Then('user enters Contact Number', async ({page}) => {
   await page.getByPlaceholder("Contact Number*").fill("9878987890");
});

Then('user clicks on Book Appointment', async ({page}) => {
  await page.getByRole('button',{name:/book/i}).click();
});

Then('user is able to navigate to further validation page', async ({page}) => {
   const consultationText = page.locator("p.pt-40px", { hasText: /Get FREE consultation/i });
    await expect(consultationText).toBeVisible();
});

Then('user enters Name as {string}',  async ({page}, empty: string) => {
  await page.getByPlaceholder("Name*").fill(empty);
});

Then('user is showed with the error message as {string}.', async ({page}, errorMsg: string) => {
    await expect(page.getByText(errorMsg)).toBeVisible();
    
});

Then('user enters ContactNumber as {string}', async ({page}, ContactNumber: string) => {
 await page.getByPlaceholder("Contact Number*").fill(ContactNumber);
});
Then('all departments should be visible', async ({page}) => {
await page.goto("https://www.practo.com/care");
    const departments =[
        "General Surgery",
        "Proctology",
        "Ophthamology",
        "Urology",
        "Cosmetic",
        "Orthopedics",
        "Robotic Surgeries",
        "Oncology",
        "Dentist"
    ];

    const wrapper = page.locator('#surgeries');

    for (const dep of departments) {
        await expect(
            wrapper.locator('[data-qa-id="our-deparments-speciality-name"]', { hasText: dep })
        ).toBeVisible();
        console.log(`${dep} is found`);
    }    
    await page.waitForTimeout(5000);
});