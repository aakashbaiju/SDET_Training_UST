import {Page,expect} from "@playwright/test";
export class PractoPage{
    readonly page:Page;
    readonly ailmentDropdown;
    readonly eyeCategory;
    readonly glaucomaOption;
    readonly nameInput;
    readonly phoneInput;
    readonly bookButton;
    readonly successMessage;
    readonly errorMessage;
    readonly departmentsWrapper;
    readonly selectCity;
    readonly dropMenu;
    readonly ahmedabad;
    readonly validate;
    readonly window;

    constructor(page:Page){
        this.page=page;
        this.ailmentDropdown = this.page.getByText("Select Ailment*");
        this.eyeCategory = this.page.locator("//div[contains(@class,'cursor-pointer') and .//b[contains(.,'Eye')]]");
        this.glaucomaOption = this.page.locator("//h1[contains(@class,'list-module') and text()='Glaucoma']");
        this.nameInput = this.page.getByPlaceholder("Name*");
        this.phoneInput = this.page.getByPlaceholder("Contact Number*");
        this.bookButton = this.page.getByRole('button', { name: /book/i });
        this.successMessage = this.page.locator("p.pt-40px", { hasText: /Get FREE consultation/i });
        this.errorMessage = this.page.getByText("Invalid User Name");
        this.departmentsWrapper = this.page.locator('#surgeries');
        this.selectCity = this.page.locator("//div[contains(@class,'generalLeadForm-module_selectors__oNbtj') and @data-qa-id='city-selector-container']");
        this.dropMenu = this.page.locator("//div[contains(@class,'46Djy mweb:max-h-[90%] dweb:min-w-[360px] dweb:min-h-[490px]')]");
        this.ahmedabad = this.page.locator("//h1[contains(@class,'text-gray-2 font-normal pb-0px') and text() = 'Ahmedabad']");
        this.validate = this.page.locator("//span[contains(@class,'generalLeadForm-module_text__ElFI0') and text() = 'Ahmedabad']");
        this.window = this.page.locator("/span[contains(@class,'white-space-no-wrap') and contains(text(), 'Why Practo Care Surgeries?'");

    }
    
    // 🔹 Actions

    async navigate() {
        await this.page.goto("https://www.practo.com/care");
    }

    async selectAilment() {
        await this.ailmentDropdown.click();
        await this.eyeCategory.click();
        await this.glaucomaOption.click();
    }

    async fillForm(name: string, phone: string) {
        await this.nameInput.fill(name);
        await this.phoneInput.fill(phone);
    }

    async clickBook() {
        await this.bookButton.click();
    }

    async validateSuccess() {
        await expect(this.successMessage).toBeVisible();
    }

    async validateError() {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText("Invalid User Name");
    }

    async validateDepartments(departments: string[]) {
        for (const dep of departments) {
            await expect(
                this.departmentsWrapper.locator(
                    '[data-qa-id="our-deparments-speciality-name"]',
                    { hasText: dep }
                )
            ).toBeVisible();

            console.log(`${dep} is found`);
        }
    }

    async clickCity(){
        await this.ahmedabad.click();
    }
    async clickDrop() {
        await this.selectCity.click();
    }
    async showCity() {
        await expect(this.dropMenu).toBeVisible();
    }
    async validateCity() {
        await expect(this.validate).toHaveText("Ahmedabad");
    }
    

}
