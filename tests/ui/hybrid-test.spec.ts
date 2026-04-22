import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/api-client';
import { ProductPage } from '../../pages/productPage';

test('API ile ürün çek ve UI üzerinden ara', async ({ page, request }) => {
    const apiClient = new ApiClient();
    const productPage = new ProductPage(page);

    // 1. ADIM: API üzerinden ürün listesini al (Engineering bakış açısı!)
    const products = await apiClient.getProductsList(request);
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const selectedProductName = randomProduct.name;

    console.log(`Şanslı Ürünümüz: ${selectedProductName}`);

    // 2. ADIM: UI üzerinden siteye git
    await page.goto('https://automationexercise.com/products');

    // 3. ADIM: API'den aldığımız ismi UI'da arat
    await productPage.searchProduct(selectedProductName);

    // 4. ADIM: Sonucun göründüğünü doğrula
    const isVisible = await productPage.isProductVisible();
    expect(isVisible).toBeTruthy();
});
