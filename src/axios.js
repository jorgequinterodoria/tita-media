import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/"
})

export default instance