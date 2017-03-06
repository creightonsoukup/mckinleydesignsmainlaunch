export const shopClient = ShopifyBuy.buildClient({
      apiKey: '365f1f4c8ba81b764b8345a6f46af6a2',
      appId: '6',
      domain: 'madison-mckinley-designs-pre-launch.myshopify.com'
    });

export const FETCH_ALL_PRODUCTS = 'fetch_all_products';
export const CREATE_CART = 'create_cart';
export const FETCH_PRODUCTS = 'fetch_products';
export const FETCH_ALL_COLLECTIONS = 'fetch_all_collections';

export function fetchAllProducts() {

  const request = shopClient.fetchAllProducts()

  return {
    type: FETCH_ALL_PRODUCTS,
    payload: request
  }
}

export function fetchAllCollections() {
  
  const request = shopClient.fetchAllCollections()

  return {
    type: FETCH_ALL_COLLECTIONS,
    payload: request
  }
}

export function createCart() {

  const request = shopClient.createCart()

  return {
    type: CREATE_CART,
    payload: request
  }
}
