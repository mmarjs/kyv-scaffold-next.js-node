import axios from 'axios'

let buildUrl = process.env.NEXT_PUBLIC_BASE_URL + "/api"

export const client = axios.create({
    baseURL: buildUrl
});
