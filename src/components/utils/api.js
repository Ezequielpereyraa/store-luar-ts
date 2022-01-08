
import axios from 'axios'
import Papa from 'papaparse'
import DATA from './data'

export const getProducts = async () => {
  return axios
    .get(DATA.googleSheetsProducts, {
      responseType: 'blob'
    })
    .then((response) => {
      return new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => resolve(results.data),
          error: (error) => reject(error.message)
        })
      })
    })
}

export const getCategories = async () => {
  return axios.get(DATA.googleSheetsCategories, {
    responseType: 'blob'
  })
    .then((response) => {
      return new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => resolve(results.data),
          error: (error) => reject(error.message)
        })
      })
    })
}

export default getProducts
