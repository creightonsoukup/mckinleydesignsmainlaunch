import ShopifyBuy from 'shopify-buy';
import axios from 'axios';

var shopClient = ShopifyBuy.buildClient({
      accessToken: '08b1b1ba5897eb763e75565ee43650cd',
      appId: '6',
      domain: 'madison-mckinley-designs-pre-launch.myshopify.com'
    });

export const FETCH_ALL_PRODUCTS = 'fetch_all_products';
export const PERLINE_COLLECTION = 'perline_collection'
export const GOLD_COLLECTION = 'gold_collection'
export const WILD_COLLECTION = 'wild_collection'
export const STEERHEAD_RANCH_COLLECTION = 'steerhead_ranch_collection'
export const COIN_COLLECTION = 'coin_collection'
export const OCCIDENTALE_COLLECTION = 'occidentale_collection'
export const EASTWOOD_COLLECTION = 'eastwood_collection'
export const CAMEO_COLLECTION = 'cameo_collection'
export const CHAINS = 'chains'
export const PENDENTS = 'pendents'
export const CREATE_CART = 'create_cart';
export const FETCH_ALL_COLLECTIONS = 'fetch_all_collections';
export const ALL_PRODUCTS_BY_TAGS = 'all_products_by_tags'
export const ALL_PRODUCTS_ORDERED = 'all_products_ordered'
export const ALL_PRODUCTS_BY_TYPE = 'all_products_by_type'
export const COLLECTION_BY_TAGS = 'collection_by_tags'
export const ADD_SUBSCRIBER = 'add_subscriber'

const DATABASE_URL = 'http://localhost:3000'

export function addSubscriber(name, email) {
  const url = `${DATABASE_URL}/signup`
  const request = axios.post(url, {
    name: name,
    email: email
  })

  return {
    type: DATABASE_URL,
    payload: request
  }
}

export function fetchAllProducts() {

  const request = shopClient.fetchQueryProducts({limit: '300'})

  return {
    type: FETCH_ALL_PRODUCTS,
    payload: request
  }
}

export function fetchPerlineCollection() {

  const request = shopClient.fetchQueryProducts({collection_id: '419000580', sort_by: 'collection-default'})

  return {
    type: PERLINE_COLLECTION,
    payload: request
  }
}

export function getGoldCollection() {

const request = shopClient.fetchQueryProducts({collection_id: '419001220',sort_by: 'collection-default'})

  return {
    type: GOLD_COLLECTION,
    payload: request
  }
}

export function fetchWildCollection() {

const request = shopClient.fetchQueryProducts({collection_id: '419000644',sort_by: 'collection-default'})

  return {
    type: WILD_COLLECTION,
    payload: request
  }
}

export function fetchSteerheadRanchCollection() {

const request = shopClient.fetchQueryProducts({collection_id: '419001156',sort_by: 'collection-default'})

  return {
    type: STEERHEAD_RANCH_COLLECTION,
    payload: request
  }
}

export function fetchCoinCollection() {

const request = shopClient.fetchQueryProducts({collection_id: '419001348',sort_by: 'collection-default'})

  return {
    type: COIN_COLLECTION,
    payload: request
  }
}

export function fetchOccidentaleCollection() {

const request = shopClient.fetchQueryProducts({collection_id: '419000772',sort_by: 'collection-default'})

  return {
    type: OCCIDENTALE_COLLECTION,
    payload: request
  }
}

export function fetchPendents() {

const request = shopClient.fetchQueryProducts({collection_id: '421190340', sort_by: 'collection-default'})

  return {
    type: PENDENTS,
    payload: request
  }
}

export function fetchCameoCollection() {

const request = shopClient.fetchQueryProducts({collection_id: '419001028', sort_by: 'collection-default'})

  return {
    type: CAMEO_COLLECTION,
    payload: request
  }
}

export function fetchChains() {

const request = shopClient.fetchQueryProducts({collection_id: '421190596',sort_by: 'collection-default'})

  return {
    type: CHAINS,
    payload: request
  }
}

export function fetchEastwoodCollection() {

const request = shopClient.fetchQueryProducts({collection_id: '419000900', sort_by: 'collection-default'})

  return {
    type: EASTWOOD_COLLECTION,
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

export function searchAllProductsByTags(tags) {
  const request = shopClient.fetchQueryProducts({tag: [tags]})

  return {
    type: ALL_PRODUCTS_BY_TAGS,
    payload: request
  }
}

export function searchCollectionByTags(tags, collection) {
  const request = shopClient.fetchQueryProducts({tag: [tags], collection: collection})

  return {
    type: COLLECTION_BY_TAGS,
    payload: request
  }
}

export function sortAllProductsByType(type) {
  const request = shopClient.fetchQueryProducts({limit: '300', sort_by: 'collection-default'})

  return {
    type: ALL_PRODUCTS_BY_TYPE,
    payload: request
  }
}
