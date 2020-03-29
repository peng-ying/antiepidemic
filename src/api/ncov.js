import http from '../http/http.js'

const baseURL = '/api/';

export function getData(params) {
  return http.get(`${baseURL}bigScreen/all`, {params})
}