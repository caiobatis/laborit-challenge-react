
const baseURL = 'https://parallelum.com.br/fipe/api/v1/carros'

export async function api (endpoint) {
  try {
    let response = await fetch(`${baseURL}${endpoint}`)  
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}