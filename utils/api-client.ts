import { APIRequestContext } from '@playwright/test';

export class ApiClient {
    // Sitedeki tüm ürün listesini API üzerinden çeken metod
    async getProductsList(request: APIRequestContext) {
        const response = await request.get('https://automationexercise.com/api/productsList');
        const body = await response.json();
        // API bazen string dönebilir, JSON'a parse ediyoruz
        const products = typeof body === 'string' ? JSON.parse(body).products : body.products;
        return products;
    }
}