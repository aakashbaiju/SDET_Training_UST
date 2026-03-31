import {test,expect} from "@playwright/test";
 
test("Mouse Drag Test", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByPlaceholder("First Name").fill("Naushad");
    await page.getByPlaceholder("First Name").press('Tab');

    await page.keyboard.type("Automation");
    await page.keyboard.press('ControlOrMeta+A');
    await page.keyboard.down('Control');
    await page.keyboard.type("C");

    await page.keyboard.up('Control');
    await page.keyboard.press("Tab");
    await page.keyboard.down('Control');
    await page.keyboard.type("V");
    await page.keyboard.up('Control');
    
    await page.locator("input[type='email']").pressSequentially("robot.automatic@example.com",{delay:100});
    await page.keyboard.press("Tab");
    await page.locator("input[type = 'tel']").fill("8787656789");

    const option = page.locator('input[type="radio"][value="Male"]');
    await option.check();
    await expect(option).toBeChecked();

    // await page.locator('input[type="radio"][value="Male"]').hover();
    // await page.waitForTimeout(3000);
    // await page.locator('input[type="radio"][value="Male"]').click();

   

    await page.waitForTimeout(3000);
})