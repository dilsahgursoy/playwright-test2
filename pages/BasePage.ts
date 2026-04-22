import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Ortak metodlar: Her sayfada lazım olabilecek şeyler
    async waitAndClick(selector: string) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible' });
        await element.click();
    }

    async getTitle() {
        return await this.page.title();
    }
}