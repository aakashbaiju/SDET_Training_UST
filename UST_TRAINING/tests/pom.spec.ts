import { test } from "@playwright/test";
import { PractoPage } from "../pages/practoPage";

test("TC01 - Fill ailment, name, number and submit", async ({ page }) => {

    const practo = new PractoPage(page);

    await practo.navigate();
    await practo.selectAilment();
    await practo.fillForm("Aakash", "8763456789");
    await practo.clickBook();
    await practo.validateSuccess();

    await page.waitForTimeout(3000);

});

test("TC02 - Validate error for invalid username", async ({ page }) => {

    const practo = new PractoPage(page);

    await practo.navigate();
    await practo.selectAilment();
    await practo.fillForm("", "876345678");
    await practo.clickBook();
    await practo.validateError();
    await page.waitForTimeout(5000);
    
});

test("TC03 - Validate all departments are present", async ({ page }) => {

    const practo = new PractoPage(page);

    const departments = [
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

    await practo.navigate();
    await practo.validateDepartments(departments);
    await page.waitForTimeout(3000);
});