import axios from 'axios';
const serverUrl = "gigih-final-backend-production.up.railway.app:3030"

console.log(serverUrl)

export async function fetchVideoUrls() {
    try {
        const res = await axios.get(serverUrl);
        return await res.data;
    }
    catch (e) {
        console.log('Error:', e.message);
    }
}


export async function fetchDataComments(urlId) {
    try {
        const res = await axios.get(`${serverUrl}${urlId}`);
        const comments = await res.data
        return comments.comments
    }
    catch (e) {
        console.log('Error:', e.message)
    }
}

export async function fetchDataProducts(urlId) {
    try {
        const res = await axios.get(`${serverUrl}${urlId}`);
        const products = await res.data
        return products.products
    }
    catch (e) {
        console.log('Error:', e.message)
    }
}


export async function postComment(urlId, userName, comment) {
    try {
        const res = await axios.post(`${serverUrl}${urlId}/${userName}`, comment);
        return await res.data;
    }
    catch (e) {
        console.log('Error:', e.message)
    }
}