import request from '../helpers/request'

export async function login(email, password) {
     let response = await request.post('/users/login', { email, password })
     return response
}

export function register(email, password) {
    return request.post('/users/register', { email, password })
}

export function logout(token) {
    return request.get('/users/logout', token)
}




