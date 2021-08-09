import axios from "axios";
//the base url to get the access token
const headers = {
    'Ocp-Apim-Subscription-Key': 'adc7a35792b98474b8a03c2733a01b21f',
    'Host': 'uksouth.api.cognitive.microsoft.com',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length:': '0'
      
}

const instance = axios.post({
    baseURL: "https://uksouth.api.cognitive.microsoft.com/sts/v1.0/issuetoken",
    headers:headers
})

export default instance;