import request from 'axios'
import { put } from 'redux-saga/effects'

//we need to proxy our request to add CORS headers to prevent browser from blocking the request to the API
export const BACKEND_URL =  "https://cors-anywhere.herokuapp.com/https://api.chucknorris.io"

export function* makeRequest(method, data, url, headers = {}, params = {}) {
  const res = yield request({
    url: `${BACKEND_URL}/${url}`,
    params,
    method,
    data,
    headers,
  });
  return res;
}


export function* getCategories() {
  const res = yield makeRequest('GET', {}, 'jokes/categories')
  return res
}

export function* getJoke(category) {
  const res = yield makeRequest('GET', {}, `jokes/random?category=${category}`)
  return res
}