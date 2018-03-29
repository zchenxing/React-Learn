import axios from 'axios'

const apiBaseUrl = "http://musicapi.leanapp.cn"

function request(res) {
    return new Promise((resolve, reject) => {
        if(res.status === 200) {
            resolve(res.data)
        } else {
            reject(res.error)
        }
    })
}


const api = {

    get (url, data) {
        return axios.get(apiBaseUrl + url, data).then((res) => {
            return request(res)
        }).catch((err) => {
            return request(err)
        })
    }

}

export default api