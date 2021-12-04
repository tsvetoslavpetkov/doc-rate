import { MAIN_URL as rootUrl } from "../config/constants";

async function errorHandler(response) {
    let message = await response.text();
    console.log(JSON.parse(message));
    return JSON.parse(message);
}

async function get(endPoint, token) {
    let url = rootUrl + endPoint;
    let headers = {};
    if (token) {
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
    }

    if (endPoint === '/users/logout') {
        return fetch(url, options)
            .then(res => {
                return res
            })
    }
    let response = await fetch(url, options);
    if (!response.ok) {
        errorHandler(response)
    } else {
        let result = await response.json()
        return result;
    }
}
async function post(endPoint, body, token) {
    let url = rootUrl + endPoint;
    let method = 'post'
    let headers = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
        method
    }
    options.body = JSON.stringify(body);
    let response = await fetch(url, options);
    if (!response.ok) {
        errorHandler(response)
    } else {
        let result = await response.json()
        return result;
    }
}
async function put(endPoint, body, token) {
    let url = rootUrl + endPoint;
    let method = 'put'
    let headers = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
        method
    }
    options.body = JSON.stringify(body);
    let response = await fetch(url, options);
    if (!response.ok) {
        errorHandler(response)
    } else {
        let result = await response.json()
        return result;
    }
}
async function del(endPoint, token) {
    let url = rootUrl + endPoint;
    let method = 'delete'
    let headers = {};
    if (token) {
        headers['X-Authorization'] = token;
    }
    let options = {
        headers,
        method
    }
    let response = await fetch(url, options);
    if (!response.ok) {
        errorHandler(response)
    } else {
        let result = await response.json()
        return result;
    }
}

let methods = { get, post, put, del }

export default methods;