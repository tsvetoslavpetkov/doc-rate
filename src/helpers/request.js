import { url as rootUrl } from "./url.js";

async function errorHandler (response){
    let message = await response.text();        
    throw new Error(`${response.status}: ${response.statusText}\n${message}`)
}

async function get (endPoint) {    
    let url = rootUrl + endPoint;    
    let headers = {};
    if(localStorage.getItem('auth_token')){
        let token = localStorage.getItem('auth_token');
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
    }
    let response = await fetch(url, options);
    if(!response.ok) {
       errorHandler(response)
    }    
    let result = await response.json()
    return result;
}
async function post (endPoint, body) {    
    let url = rootUrl + endPoint;    
    let method = 'post'
    let headers = {
        'Content-Type': 'application/json'
    };
    if(localStorage.getItem('auth_token')){
        let token = localStorage.getItem('auth_token');
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
        method
    }   
    options.body = JSON.stringify(body);    
    let response = await fetch(url, options);
    if(!response.ok) {
        errorHandler(response)
    }    
    let result = await response.json()   
    return result;
}
async function put (endPoint, body) {    
    let url = rootUrl + endPoint;    
    let method = 'put'
    let headers = {
        'Content-Type': 'application/json'
    };
    if(localStorage.getItem('auth_token')){
        let token = localStorage.getItem('auth_token');
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
        method
    }   
    options.body = JSON.stringify(body);    
    let response = await fetch(url, options);
    if(!response.ok) {
        errorHandler(response)
    }    
    let result = await response.json()   
    return result;
}
async function del (endPoint) {    
    let url = rootUrl + endPoint;    
    let method = 'delete'
    let headers = {};
    if(localStorage.getItem('auth_token')){
        let token = localStorage.getItem('auth_token');
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
        method
    }   
    let response = await fetch(url, options);
    if(!response.ok) {
        errorHandler(response)
    }    
    let result = await response.json()   
    return result;
}

export default {
    get,
    post,
    put,
    del,
}