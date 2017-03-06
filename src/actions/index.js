export const FETCH_PRODUCTS = 'fetch_products'



export const  shopClient = ShopifyBuy.buildClient({
  apiKey: 'your-api-key',
  domain: 'your-shop-subdomain.myshopify.com',
  appId: '6'
});
