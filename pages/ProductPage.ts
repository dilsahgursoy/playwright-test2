import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
    // Elementleri tanımlıyoruz
    private readonly searchInput = '#search_product';
    private readonly searchButton = '#submit_search';
    private readonly productItems = '.single-products';

    async searchProduct(productName: string) {
        await this.page.fill(this.searchInput, productName);
        await this.page.click(this.searchButton);
    }

    async isProductVisible() {
        return await this.page.locator(this.productItems).first().isVisible();
    }
}