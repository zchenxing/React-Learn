import axios from 'axios'

const apiBaseUrl = "http://192.168.2.6:3006"
// const apiBaseUrl = "http://localhost:3006"

console.log(navigator.userAgent)

function request(res) {
    return new Promise((resolve, reject) => {
        if(Number(res.status) === 200) {
        
            if(Number(res.data.code) === 200){
                resolve(res.data)
            } else {
                reject(res)
            }
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