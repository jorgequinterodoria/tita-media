import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
        'app-id': '63191962b021bd6318c63093'
    }
})

export default instance
