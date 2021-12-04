import request from '../helpers/request'

export function login(email, password) {
    return request.post('/users/login', { email, password })
}

export function register(email, password) {
    return request.post('/users/register', { email, password })
}

export function logout(token) {
    return request.get('/users/logout', token)
}




