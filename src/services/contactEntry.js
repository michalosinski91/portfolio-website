import axios from 'axios'
const baseUrl = '/'

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data)
}

export default { create }